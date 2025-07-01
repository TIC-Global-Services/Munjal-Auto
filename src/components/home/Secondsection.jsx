import React, { useRef, useEffect } from "react";
import secbanner from "../../assets/home/companyProfile.png";
import ring from "../../assets/ring.png";
import gradient from "../../assets/gradient.png";
import thridbanner from "../../assets/banner3.png";
import mobileBanner from "../../assets/mobiletoolsbanner.png";
import ImageSlider from "../../utils/Slider";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import logo from "../../assets/MunjalAutologo-.png";
import { Link } from "react-router-dom";

const Secondsection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex !z-[1000] relative items-center md:mt-0 mt-6 md:px-0 px-4 justify-center"
      >
        <motion.div variants={itemVariants} className="bg-black w-[100%] md:w-[90%] text-white flex md:flex-row flex-col items-center justify-between rounded-[20px] overflow-hidden">
          {/* Left Section */}
          <motion.div variants={itemVariants} className="flex-1 px-6 md:pl-20 md:mt-0 mt-6 space-y-2 md:space-y-6">
            <motion.div variants={itemVariants} className="uppercase tracking-wider text-[10px] md:text-sm text-gray-400">
              // COMPANY PROFILE
            </motion.div>

            <motion.h1 variants={itemVariants} className="md:text-4xl text-2xl font-[300] leading-tight">
              Engineering the Future of <br className="md:block hidden" />
              <span className="text-[#ED1C24] font-bold">
                Automotive Manufacturing
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-gray-300 md:text-lg text-xs md:pt-0 pt-2 md:w-[80%] leading-relaxed">
              Munjal Auto Industries Limited is a trailblazer in the world of
              engineering, offering cutting-edge solutions across diverse
              industries. With over decades of expertise, we specialize in the
              design and manufacturing of high-performance components and
              assemblies using advanced sheet metal, composite materials, and
              precision molding techniques.
            </motion.p>
<Link to='/about-us'>
<motion.button variants={itemVariants} className="bg-white w-fit text-black md:mt-0 !mt-4 md:text-base text-xs px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
              More on Munjal
            </motion.button>
</Link>
            
          </motion.div>

          {/* Right Section */}
          <motion.div 
            variants={itemVariants}
            className="w-[90%] md:py-0 py-4 md:w-[40%]"
          >
            <img
              src={secbanner}
              alt="Automotive manufacturing assembly line"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </motion.div>
      <WhyMunjal />
      <Stayconnected />
      <ImageSlider />
      {/* <InnovationSlider /> */}
      <YouTubeVideo />
    </>
  );
};

export default Secondsection;

const WhyMunjal = () => {
  const features = [
    {
      title: "Light Weight Solutions",
      description: "OEM partnerships, including Hero MotoCorp.",
    },
    {
      title: "R&D & Engineering  Focus",
      description: "Over three decades of innovation and excellence.",
    },
    {
      title: "Trusted by Industry",
      description: "Eco-friendly processes and materials.",
    },
  
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div className="md:pt-40 relative pt-10" ref={containerRef}>
      <div className="sticky top-0 left-0 z-[70] bg-black pointer-events-none">
        <img
          src={gradient}
          alt="Gradient"
          className="absolute  z-[70]  md:w-1/2 object-cover"
        />
      </div>
      <div className="min-h-[600vh] md:px-20 p-4">
        <motion.div
          className="container md:flex-row flex-col flex"
          style={{
            position: "sticky",
            top: window.innerWidth < 768 ? "10vh" : "20vh",
            height: window.innerWidth < 768 ? "90vh" : "80vh",
          }}
        >
          <div className="md:space-y-6 z-[700] space-y-2 md:w-[70%] md:block flex items-center justify-center flex-col">
            <div className="text-gray-600 md:text-left text-center text-sm tracking-wider">
              // ABOUT US
            </div>
            <h2 className="md:text-6xl text-2xl md:text-left text-center md:font-normal">
              Why <span className="text-red-500">Munjal</span>
              <br />
              Auto ?
            </h2>
            <p className="text-gray-700 md:text-left text-center md:text-base text-[10px] leading-[16px] md:leading-relaxed">
              In the automotive industry, we are trusted for producing critical
              components such as exhaust systems, fuel tanks, rims, and BIW
              parts, engineered to withstand the most demanding performance and
              safety standards. Beyond automotive, our renewable energy
              solutions, including windmill blades and other specialized
              parts,play a vital role in advancing clean energy technologies. At
              Munjal Auto, we merge engineering excellence with forward-thinking
              design to deliver products that lead industries into the future.
            </p>
            <Link to='/about-us'>
            <button className="bg-black text-white px-8 py-3 md:text-base text-xs rounded-full hover:bg-gray-800 transition-colors mt-5">
              More About Us
            </button>
            </Link>
          
          </div>

          <motion.div className="md:flex-row flex-col items-center w-full flex">
            {/* Replace image with 3D model viewer */}
            <div className="md:w-full w-[90%] md:block hidden   h-[300px] md:h-[400px] ">
              <ModelViewer scrollProgress={scrollYProgress} />
            </div>

            <div className="space-y-6 mt-20 md:!-mt-40 whitespace-nowrap">
              {features.map((feature, index) => {
                // Modified transition points to require more scrolling
                const featureInView = useTransform(
                  scrollYProgress,
                  [0.1 + index * 0.2, 0.15 + index * 0.2], // Further reduced spacing to ensure all features are visible
                  [0, 1] // From invisible to visible
                );

                return (
                  <motion.div
                    key={index}
                    className="border-b border-gray-200 pb-4"
                    style={{
                      opacity: featureInView,
                      transform: useTransform(
                        featureInView,
                        [0, 1],
                        ["translateY(30px)", "translateY(0px)"] // Increased initial offset
                      ),
                    }}
                  >
                    <h3 className="md:text-2xl text-[#151414] text-base font-medium md:font-medium mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-[#8C8989] md:text-base text-sm">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

// Updated ModelViewer component with four predefined movements
// Updated ModelViewer component with three predefined movements
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
      powerPreference: "high-performance"
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
    directionalLight1.position.set(22, 85,25);
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
      const light = new THREE.SpotLight(color, intensity, 15, Math.PI / 6, 0.3, 1);
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
      light.position.set(
        Math.cos(angle) * 4,
        3,
        Math.sin(angle) * 4
      );
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
        cameraPosition: { x: 3, y: 1.5, z: 3 }
      },
      {

        rotation: { x: 14, y: -2, z: 0 },
        cameraPosition: { x: 3, y: 1.5, z: 3 }
      },
      {
      
        rotation: { x: 12.5, y: Math.PI / -3, z: 0 },
        cameraPosition: { x: 3, y: 1.5, z: 2 }
      }
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

const Stayconnected = () => {
  return (
    <div className=" md:-mt-14 mb-20">
      {/* Desktop and Tablet View */}
      <div className="hidden bg-[#ED1C24] md:flex bg-cover bg-center items-center justify-center relative">
        <img src={logo} className=" absolute top-12 w-32" alt="logo" />
        <div className="container mx-auto px-4 py-20 mt-8 text-center text-white relative z-10">
          <h2 className="md:text-[55px] text-xl mt-10 md:font-normal mb-6">
            Stay Connected
          </h2>
          <p className="md:text-xl text-xs !leading-[25px] mx-auto mb-4">
            Reach out to explore more about
            <br />
            our manufacturing expertise.
          </p>
          <Link to='/about-us'>
          <button className="bg-white text-black  px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
            More About Us
          </button>
          </Link>
        
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex md:hidden bg-[#ED1C24]  items-center py-32 justify-center relative">
      <img src={logo} className=" absolute top-10 w-20" alt="logo" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h2 className="text-2xl font-normal mt-8 ">Stay Connected</h2>
          <p className="text-xs  text-center mb-2">
            Reach out to explore more about
            <br />
            our manufacturing expertise.
          </p>
          <Link to='/about-us'>
          <button className="bg-white text-xs text-black px-6 py-2 rounded-full hover:bg-gray-100 transition-colors">
            More About Us
          </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const InnovationSlider = () => {
  const slides = [
    {
      title: "BIW (Body-in-White)",
      description:
        "Unmatched strength and precision to ensure automotive safety.",
      image: ring,
    },
    {
      title: "BIW (Body-in-White)",
      description:
        "Unmatched strength and precision to ensure automotive safety.",
      image: ring,
    },
    {
      title: "BIW (Body-in-White)",
      description:
        "Unmatched strength and precision to ensure automotive safety.",
      image: ring,
    },
    {
      title: "BIW (Body-in-White)",
      description:
        "Unmatched strength and precision to ensure automotive safety.",
      image: ring,
    },
    // Add more slides as needed
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-5xl font-bold text-center mb-16">
          Where <span className="text-red-600">Innovation Meets</span>
          <br />
          Engineering Excellence
        </h2>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
          className="h-[600px]"
          loop
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="relative transition-opacity duration-500 ease-in-out"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
                <div className="order-2 lg:order-1">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="order-1 lg:order-2 space-y-4">
                  <h3 className="text-3xl font-bold">{slide.title}</h3>
                  <p className="text-gray-600 text-lg">{slide.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

import { useState } from "react";
import ytbanner from "../../assets/ytbanner.png";

const YouTubeVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative w-full   max-w-4xl md:px-0 px-4  md:my-52 my-10   mx-auto rounded-3xl overflow-hidden bg-gray-100">
      {!isPlaying ? (
        <div className="relative cursor-pointer group" onClick={handlePlay}>
          {/* Placeholder Image */}
          <img
            src={ytbanner}
            alt="Video thumbnail"
            className="w-full md:rounded-none rounded-lg aspect-video object-cover"
          />

          {/* Play Button Overlay */}
          <div className="absolute inset-0  hidden md:flex items-center justify-center bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all">
            <svg
              width="68"
              height="48"
              viewBox="0 0 68 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transform scale-100 group-hover:scale-110 transition-transform duration-200"
            >
              <path
                d="M66.52 7.74C65.74 4.81 64.03 2.33 61.1 1.55C55.79 0.13 34 0 34 0C34 0 12.21 0.13 6.9 1.55C3.97 2.33 2.27 4.81 1.48 7.74C0.0600001 13.05 0 24 0 24C0 24 0.0600001 34.95 1.48 40.26C2.26 43.19 3.97 45.67 6.9 46.45C12.21 47.87 34 48 34 48C34 48 55.79 47.87 61.1 46.45C64.03 45.67 65.74 43.19 66.52 40.26C67.94 34.95 68 24 68 24C68 24 67.94 13.05 66.52 7.74Z"
                fill="#FF0000"
              />
              <path d="M45 24L27 14V34" fill="white" />
            </svg>
          </div>

          <div className="absolute  inset-0  md:hidden  flex items-center justify-center bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all">
            <svg
              width="28"
              height="48"
              viewBox="0 0 68 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transform scale-100 group-hover:scale-110 transition-transform duration-200"
            >
              <path
                d="M66.52 7.74C65.74 4.81 64.03 2.33 61.1 1.55C55.79 0.13 34 0 34 0C34 0 12.21 0.13 6.9 1.55C3.97 2.33 2.27 4.81 1.48 7.74C0.0600001 13.05 0 24 0 24C0 24 0.0600001 34.95 1.48 40.26C2.26 43.19 3.97 45.67 6.9 46.45C12.21 47.87 34 48 34 48C34 48 55.79 47.87 61.1 46.45C64.03 45.67 65.74 43.19 66.52 40.26C67.94 34.95 68 24 68 24C68 24 67.94 13.05 66.52 7.74Z"
                fill="#FF0000"
              />
              <path d="M45 24L27 14V34" fill="white" />
            </svg>
          </div>
        </div>
      ) : (
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="aspect-video rounded-3xl"
        />
      )}
    </div>
  );
};
