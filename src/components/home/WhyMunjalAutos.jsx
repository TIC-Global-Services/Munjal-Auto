import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import gradient from "../../assets/gradient.png";
import { Link } from 'react-router-dom';
import FeatureList from './featureList';

// Feature Item Component to handle animations properly
const FeatureItem = ({ feature, index, scrollYProgress }) => {
  const startPoint = Math.min(0.1 + index * 0.15, 0.7);
  const endPoint = Math.min(0.2 + index * 0.15, 0.8);
  
  const featureInView = useTransform(
    scrollYProgress,
    [startPoint, endPoint],
    [0, 1]
  );
  
  const transform = useTransform(
    featureInView,
    [0, 1],
    ["translateY(20px)", "translateY(0px)"]
  );
  
  return (
    <motion.div
      className="border-b border-gray-200 pb-4 last:border-b-0"
      style={{
        opacity: featureInView,
        transform: transform,
      }}
    >
      <h3 className="text-lg md:text-xl lg:text-2xl text-[#151414] font-medium mb-2">
        {feature.title}
      </h3>
      <p className="text-[#8C8989] text-sm md:text-base leading-relaxed whitespace-pre-line">
        {feature.description}
      </p>
    </motion.div>
  );
};

FeatureItem.propTypes = {
  feature: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  scrollYProgress: PropTypes.object.isRequired,
};

function ModelViewer({ scrollProgress }) {
    const [loading, setLoading] = useState(true);
    const modelContainerRef = useRef(null);
    const modelRef = useRef(null);
    const lightsRef = useRef([]);
    
    useEffect(() => {
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0xffffff);
   
      // Camera positioned closer for bigger apparent size
      const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 1000);
      camera.position.set(5, 2.5, 5);
   
      // Enhanced renderer settings
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        physicallyCorrectLights: true,
        powerPreference: "high-performance",
      });
      renderer.setClearColor(0xffffff, 0);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.outputEncoding = THREE.sRGBEncoding;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.0; // Reduced from 1.2
  
      // Enable shadows for better quality
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  
      // Add renderer to DOM
      const container = modelContainerRef.current;
      if (container) {
        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }
        container.appendChild(renderer.domElement);
        updateSize();
      }
  
      // Improved lighting setup
      const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
      scene.add(ambientLight);
  
      const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1.8);
      directionalLight1.position.set(22, 85, 25);
      directionalLight1.castShadow = true;
      directionalLight1.shadow.mapSize.width = 1024;
      directionalLight1.shadow.mapSize.height = 1024;
      scene.add(directionalLight1);
  
      const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.4);
      directionalLight2.position.set(5, 3, -5);
      scene.add(directionalLight2);
  
      // Add controls but disable them
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.autoRotate = false;
      controls.enableZoom = false;
      controls.enablePan = false;
      controls.enabled = false;
  
      // Create a group to hold the model
      const modelGroup = new THREE.Group();
      scene.add(modelGroup);
  
      // Improved spotlight setup
      const createSpotlight = (color, intensity) => {
        const light = new THREE.SpotLight(
          color,
          intensity,
          15,
          Math.PI / 6,
          0.3,
          1
        );
        light.castShadow = true;
        light.shadow.bias = -0.0001;
        light.shadow.mapSize.width = 1024;
        light.shadow.mapSize.height = 1024;
        return light;
      };
  
      const spotlights = [
        createSpotlight(0xffffff, 2.0),
        createSpotlight(0xffffff, 1.8),
        createSpotlight(0xffffff, 2.6),
      ];
  
      spotlights.forEach((light, i) => {
        const angle = (i / spotlights.length) * Math.PI * 2;
        light.position.set(Math.cos(angle) * 4, 3, Math.sin(angle) * 4);
        light.target = modelGroup;
        scene.add(light);
      });
  
      lightsRef.current = spotlights;
  
      const rimLight = new THREE.DirectionalLight(0xffffff, 1.3);
      rimLight.position.set(-3, 3, -3);
      scene.add(rimLight);
  
      // Load GLTF model
      const loader = new GLTFLoader();
      loader.load(
        "/1.glb",
        (gltf) => {
          const model = gltf.scene;
  
          // Improved material settings
          model.traverse((child) => {
            if (child.isMesh) {
              // More conservative material settings
              child.material.envMapIntensity = 0.8;
              child.material.roughness = 0.2;
              child.material.metalness = 0.3;
              child.castShadow = true;
              child.receiveShadow = true;
  
              // Ensure proper material properties
              if (child.material.map) {
                child.material.map.encoding = THREE.sRGBEncoding;
              }
            }
          });
  
          // Center and scale model more carefully
          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());
  
          // Position model within group
          model.position.set(-center.x, -center.y, -center.z);
  
          // Bigger scaling for larger model
          const maxDim = Math.max(size.x, size.y, size.z);
          const scale = 3.0 / maxDim; // Increased for bigger size
          model.scale.set(scale, scale, scale);
  
          modelGroup.add(model);
          modelRef.current = modelGroup;
          setLoading(false);
        },
        (xhr) => {
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        (error) => {
          console.error("An error happened loading the model:", error);
        }
      );
  
      // Handle window resize
      function updateSize() {
        if (container) {
          const width = container.clientWidth;
          const height = container.clientHeight;
  
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          renderer.setSize(width, height);
        }
      }
  
      window.addEventListener("resize", updateSize);
  
      // Three movements for three scroll sections
      const movements = [
        {
          rotation: { x: 14.8, y: -1.6, z: 0 },
          cameraPosition: { x: 3, y: 1.5, z: 3 },
        },
        {
          rotation: { x: 14, y: -2, z: 0 },
          cameraPosition: { x: 3, y: 1.5, z: 3 },
        },
        {
          rotation: { x: 12.5, y: Math.PI / -3, z: 0 },
          cameraPosition: { x: 3, y: 1.5, z: 2 },
        },
      ];
  
      // Animation loop
      let time = 0;
      const animate = () => {
        requestAnimationFrame(animate);
        time += 0.01;
  
        // Gentler light animation
        spotlights.forEach((light, i) => {
          const angle = time * 0.5 + (i / spotlights.length) * Math.PI * 2;
          const radius = 4 + Math.sin(time * 0.3) * 0.5;
  
          light.position.x = Math.cos(angle) * radius;
          light.position.z = Math.sin(angle) * radius;
          light.intensity = 0.8 + Math.sin(time + i) * 0.2;
        });
  
        if (modelRef.current && scrollProgress) {
          const scrollValue = scrollProgress.get();
          let currentMovement;
  
          // Divide scroll into 3 equal sections
          if (scrollValue < 0.33) {
            currentMovement = movements[0];
          } else if (scrollValue < 0.57) {
            currentMovement = movements[1];
          } else {
            currentMovement = movements[2];
          }
  
          // Smoother interpolation
          const lerpFactor = 0.02;
  
          modelRef.current.rotation.x = THREE.MathUtils.lerp(
            modelRef.current.rotation.x,
            currentMovement.rotation.x,
            lerpFactor
          );
          modelRef.current.rotation.y = THREE.MathUtils.lerp(
            modelRef.current.rotation.y,
            currentMovement.rotation.y,
            lerpFactor
          );
          modelRef.current.rotation.z = THREE.MathUtils.lerp(
            modelRef.current.rotation.z,
            currentMovement.rotation.z,
            lerpFactor
          );
  
          // Smooth camera movement
          camera.position.x = THREE.MathUtils.lerp(
            camera.position.x,
            currentMovement.cameraPosition.x,
            lerpFactor
          );
          camera.position.y = THREE.MathUtils.lerp(
            camera.position.y,
            currentMovement.cameraPosition.y,
            lerpFactor
          );
          camera.position.z = THREE.MathUtils.lerp(
            camera.position.z,
            currentMovement.cameraPosition.z,
            lerpFactor
          );
  
          camera.lookAt(modelRef.current.position);
        }
  
        controls.update();
        renderer.render(scene, camera);
      };
  
      animate();
  
      // Cleanup
      return () => {
        window.removeEventListener("resize", updateSize);
        if (container) {
          while (container.firstChild) {
            container.removeChild(container.firstChild);
          }
        }
        renderer.dispose();
        scene.clear();
      };
    }, []);
    
    return (
      <div className="relative w-full h-full">
        <div
          ref={modelContainerRef}
          className="w-full h-full"
          style={{
            background: "transparent",
            borderRadius: "8px",
            overflow: "visible",
          }}
        />
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70">
            <div className="text-gray-800 font-medium">Loading 3D Model...</div>
          </div>
        )}
      </div>
    );
  }

ModelViewer.propTypes = {
  scrollProgress: PropTypes.object.isRequired,
};

const WhyMunjalAutos = () => {
    const features = [
      {
        title: "Lightweight Solutions",
        description: "Integrating composite and steel technology to reducing CO2 Footprint",
      },
      {
        title: "R&D & Engineering\n Focus",
        description: "Partnering with customer with end to end engineering solutions",
      },
      {
        title: "Trusted by Industry",
        description: "Recognized by our esteemed customers\n 1. TATA Motors : Quality Excellence Award.\n 2. Hero MotoCorp Ltd: Sliver Award for fabrication category.",
      },
    ];
    
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end end"],
    });
    
    return (
      <div className="relative mt-5 px-2 sm:px-4 md:px-8 lg:px-20 lg:mx-8 py-6 md:py-16 lg:py-14 min-h-screen md:min-h-[600vh]" ref={containerRef}>
          {/* Background gradient with responsive positioning and lower z-index */}
          <div className="sticky top-0 left-0 z-[10] pointer-events-none w-full h-0 overflow-hidden">
            <img
              src={gradient}
              alt="Gradient"
              className="absolute top-0 left-0 z-[10] w-full md:w-1/2 lg:w-2/5 h-screen object-cover object-left"
            />
          </div>
  
        {/* Main content container with responsive height and proper z-index */}
        <div className="md:min-h-[600vh] px-0">
          <motion.div
            className="container mx-auto flex flex-col md:flex-row gap-4 md:gap-8 relative md:sticky z-20 md:top-[clamp(5vh,10vh,15vh)] md:h-[clamp(70vh,80vh,90vh)] md:max-h-[90vh]"
            style={{}}
          >
            {/* Left content section - responsive layout with proper z-index */}
            <div className="flex flex-col justify-center items-center text-center space-y-2 md:space-y-4 z-[700] w-full md:w-[50%] md:items-start md:text-left relative">
              <div className="text-gray-600 text-xs sm:text-sm tracking-wider">
                {"// ABOUT US"}
              </div>
 
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight">
                Why <span className="text-red-500">Munjal</span>
                <br />
                Auto ?
              </h2>
 
              <p className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl">
               Munjal Auto is a trusted name in the automotive industry, delivering critical components like exhaust systems, fuel tanks, rims, and BIW parts—engineered for superior performance and safety. Beyond automotive, our renewable energy solutions, including windmill blades and specialized components, drive advancements in clean energy. With a blend of engineering excellence and forward-thinking design, we create solutions that power industries into the future.
              </p>
 
              <Link to="/about-us">
                <button className="bg-black w-fit text-white md:mt-0 !mt-10 md:text-base text-xs lg:text-[16px] px-5 sm:px-10 py-2 sm:py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
                  More About Us
                </button>
              </Link>
            </div>
  
            {/* Right content section - responsive layout with proper z-index */}
            <div className="flex flex-col md:flex-row items-center w-full md:w-[85%] space-y-4 md:space-y-0 relative z-[700]">
              {/* 3D Model Viewer - responsive sizing with proper z-index */}
              <div className="w-full max-w-md md:max-w-none h-[180px] sm:h-[200px] md:h-[300px] lg:h-[350px] relative z-[705]">
                <ModelViewer scrollProgress={scrollYProgress} />
              </div>
  
              {/* Features list - responsive layout with proper z-index */}
              <div className="space-y-5 w-full md:w-full md:ml-4 lg:ml-8  md:mt-0 lg:-mt-32 relative z-[705]">
                {features.map((feature, index) => {
                  // Improved scroll trigger points
                  const startPoint = Math.min(0.1 + index * 0.15, 0.7);
                  const endPoint = Math.min(0.2 + index * 0.15, 0.8);
  
                  const featureInView = useTransform(
                    scrollYProgress,
                    [startPoint, endPoint],
                    [0, 1]
                  );
  
                  return (
                    <motion.div
                      key={index}
                      className="border-b border-gray-200 pb-4 last:border-b-0"
                      style={{
                        opacity: featureInView,
                        transform: useTransform(
                          featureInView,
                          [0, 1],
                          ["translateY(20px)", "translateY(0px)"]
                        ),
                      }}
                    >
                      <h3 className="text-lg md:text-xl lg:text-[30px] leading-[50px] text-[#151414] font-medium mb-2 whitespace-pre-line">
                        {feature.title}
                      </h3>
                      <p className="text-[#8C8989] leading-[30px] text-sm whitespace-pre-line md:text-base">
                        {feature.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  };


export default WhyMunjalAutos

