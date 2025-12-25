import React, { useState, useRef, useEffect } from "react";
import BgImage from "../../assets/Subtract.png";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import image1 from "../../assets/quality/1.png";
import image2 from "../../assets/quality/2.png";
import image3 from "../../assets/quality/3.png";
import image4 from "../../assets/quality/4.png";

const Policy = () => {
    const contents = [
      {
        image: image1,
        description: "Delivering precision-engineered, high-quality products.",
      },
      {
        image: image2,
        description: "Implementing Lean, TPM, Poka-Yoke, Kaizen, and 5S.",
      },
      {
        image: image3,
        description: "Reducing waste, optimizing resources, preventing defects.",
      },
      {
        image: image4,
        description: "Meeting all regulatory and environmental standards.",
      },
    ];
  
    return (
      <>
        {/* Desktop version */}
        <div className="w-full mt-20 mb-20 px-4 lg:px-8 xl:px-16 hidden lg:block relative">
          {/* 3D Model Container */}
          <div className="absolute left-64 top-[60%] transform -translate-y-1/2 z-20">
            <div className="relative bg-transparent p-4 rounded-2xl">
              <div className="scale-110 lg:scale-125 xl:scale-150">
                <ModelViewer />
              </div>
            </div>
          </div>
          
          <div className="relative w-full max-w-[90rem] mx-auto bg-[#F5F5F5] rounded-3xl p-12 lg:p-16 xl:p-20 border-2 border-[#F5EDED] shadow-lg min-h-[500px] lg:min-h-[600px]">
            {/* Content Layout */}
            <div className="grid grid-cols-8 gap-8 items-start h-full pt-8">
              {/* Left side - Text content */}
              <div className="col-span-4 pl-8 pr-16 -mt-4">
                <h2 className="text-[#ED1C24] text-3xl lg:text-4xl xl:text-5xl font-[500] mb-6">
                  Quality Policy
                </h2>
                <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                  At MAIL, quality is our foundation. Through a strong Total Quality
                  Management System, we ensure every product is "First time right,
                  every time right."
                </p>
              </div>

              {/* Right side - Grid cards */}
              <div className="col-span-4">
                <div className="grid grid-cols-2 gap-3 lg:gap-4">
                  {contents.map((item, index) => (
                    <div
                      key={index}
                      className="bg-[#f7f7f7] p-4 rounded-2xl shadow-md flex flex-col w-[225px] h-[225px] text-center items-center justify-center border border-gray-100"
                    >
                      <img
                        src={item.image}
                        alt="quality icon"
                        className="w-[24px] h-[24px] mb-3 flex-shrink-0"
                      />
                      <p className="text-gray-700 text-sm leading-tight">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Mobile version */}
        <div className="w-full mt-20 mb-20 px-4 block lg:hidden">
          <div className="bg-[#F5F5F5] rounded-3xl p-6 shadow-lg border-2 border-[#F5EDED]">
            {/* Header section */}
            <div className="mb-8 text-center">
              <h2 className="text-[#ED1C24] text-2xl sm:text-3xl font-[500] mb-4">
                Quality Policy
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                At MAIL, quality is our foundation. Through a strong Total Quality
                Management System, we ensure every product is "First time right,
                every time right."
              </p>
            </div>

            {/* Grid cards section */}
            <div className="flex justify-center mb-8">
              <div className="grid grid-cols-2 gap-4 max-w-sm">
                {contents.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-2xl shadow-md flex flex-col w-full h-[140px] sm:h-[160px] text-center items-center justify-center border border-gray-100"
                  >
                    <img
                      src={item.image}
                      alt="quality icon"
                      className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] mb-2 flex-shrink-0"
                    />
                    <p className="text-gray-700 text-xs sm:text-sm leading-tight">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3D Model section */}
            <div className="flex justify-center">
              <div className="scale-75">
                <ModelViewer />
              </div>
            </div>
          </div>
        </div>
         
       
      </>
    );
  };
  
  export default Policy;

  function ModelViewer() {
  const [loading, setLoading] = useState(true);
  const modelContainerRef = useRef(null);
  const modelRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.set(0, 1.3, 5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      physicallyCorrectLights: true, // Enable physically correct lighting
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 6.5;

    const container = modelContainerRef.current;
    if (container) {
      container.innerHTML = "";
      container.appendChild(renderer.domElement);
    }

    // Enhanced lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Main directional light
    const mainLight = new THREE.DirectionalLight(0xffffff, 2);
    mainLight.position.set(7, 7, 5);
    mainLight.castShadow = true;
    scene.add(mainLight);

    // Add rim light for better definition
    const rimLight = new THREE.DirectionalLight(0x9ca3af, 1);
    rimLight.position.set(-5, 5, -5);
    scene.add(rimLight);

    // Add point lights for dynamic lighting
    const pointLight1 = new THREE.PointLight(0xffffff, 1);
    pointLight1.position.set(2, 2, 2);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffffff, 1);
    pointLight2.position.set(-2, -2, -2);
    scene.add(pointLight2);

    const modelGroup = new THREE.Group();
    scene.add(modelGroup);

    // Load model with enhanced materials
    const loader = new GLTFLoader();
    loader.load(
      "/3m.gltf",
      (gltf) => {
        const model = gltf.scene;

        // Enhance materials for all meshes
        model.traverse((child) => {
          if (child.isMesh) {
            // Enhance existing materials
            if (child.material) {
              child.material.roughness = 0.3;
              child.material.metalness = 0.8;
              child.material.envMapIntensity = 1.5;
              child.material.needsUpdate = true;
            }
          }
        });

        // Center and scale model with responsive scaling
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        
        // Responsive scaling based on screen size
        const isMobile = window.innerWidth < 640;
        const isTablet = window.innerWidth < 1024;
        let scale;
        
        if (isMobile) {
          scale = 2 / maxDim; // Smaller scale for mobile
        } else if (isTablet) {
          scale = 2.5 / maxDim; // Medium scale for tablet
        } else {
          scale = 3 / maxDim; // Full scale for desktop
        }

        model.position.set(-center.x, -center.y + 1, -center.z);
        model.scale.setScalar(scale);

        modelGroup.add(model);
        modelRef.current = modelGroup;
        setLoading(false);
      },
      undefined,
      (error) => console.error("Model loading error:", error)
    );

    // Animate lights
    let time = 0;
    function animateLights() {
      time += 0.01;

      // Animate point lights in a circular pattern
      pointLight1.position.x = Math.sin(time) * 3;
      pointLight1.position.z = Math.cos(time) * 3;

      pointLight2.position.x = Math.sin(time + Math.PI) * 3;
      pointLight2.position.z = Math.cos(time + Math.PI) * 3;
    }

    function updateSize() {
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }

    window.addEventListener("resize", updateSize);
    updateSize();

    function animate() {
      animationFrameRef.current = requestAnimationFrame(animate);
      if (modelRef.current) {
        modelRef.current.rotation.y += 0.01;
        animateLights();
      }
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      window.removeEventListener("resize", updateSize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] mx-auto"
      style={{ zIndex: 50 }}
    >
      <div
        ref={modelContainerRef}
        className="w-full h-full"
        style={{
          background: "transparent",
          position: "relative",
          zIndex: 50,
        }}
      />
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-gray-600 font-medium text-sm">Loading 3D Model...</div>
        </div>
      )}
    </div>
  );
}
