import React, { useState, useRef, useEffect } from "react";
import img from "../assets/aboutusbanner.png";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
const About = () => {
  const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();
    
    // Function to check if the link is active
    const isActive = (path) => {
      return location.pathname === path;
    };

    useEffect(() => {
      // Trigger animation after component mount
      setIsVisible(true);
    }, []);
  return (
    <div>
      <div className="h-screen w-full overflow-hidden   flex flex-col items-center justify-center relative">
        {/* Left Navigation */}
        <div className="absolute text-sm left-20 top-20 transform -translate-y-1/2 md:flex hidden justify-between items-center z-[100] space-x-20">
          <Link
            to="/"
            className={`hover:text-gray-300 ${
              isActive("/") ? "text-[#FF0000] font-bold" : "text-white"
            }`}
          >
           Home
          </Link>
          <Link
            to="/about-us"
            className={`hover:text-gray-300 ${
              isActive("/about-us") ? "text-[#FF0000] font-bold" : "text-white"
            }`}
          >
            about-us
          </Link>
          <Link
            to="/products"
            className={`hover:text-gray-300 ${
              isActive("/products")
                ? "text-[#FF0000] font-bold"
                : "text-white"
            }`}
          >
            products
          </Link>
          <Link
            to="/philosophy"
            className={`hover:text-gray-300 ${
              isActive("/philosophy")
                ? "text-[#FF0000] font-bold"
                : "text-white"
            }`}
          >
            philosophy
          </Link>
        </div>

        {/* Right Navigation */}
        <div className="absolute text-sm right-20 top-20 transform -translate-y-1/2 md:flex hidden  items-center justify-between z-[100] space-x-12">
          <Link
            to="/quality"
            className={`hover:text-gray-300 ${
              isActive("/quality") ? "text-[#FF0000] font-bold" : "text-white"
            }`}
          >
            Quality
          </Link>
          <Link
            to="/finance"
            className={`hover:text-gray-300 ${
              isActive("/finance") ? "text-[#FF0000] font-bold" : "text-white"
            }`}
          >
            Finance
          </Link>
          <Link
            to="/training"
            className={`hover:text-gray-300 ${
              isActive("/training") ? "text-[#FF0000] font-bold" : "text-white"
            }`}
          >
            Training
          </Link>
          <Link
            to="/facilities"
            className={`hover:text-gray-300 ${
              isActive("/contact") ? "text-[#FF0000] font-bold" : "text-white"
            }`}
          >
            Facilities
          </Link>
          <Link
            to="/contact"
            className={`hover:text-gray-300 ${
              isActive("/contact") ? "text-[#FF0000] font-bold" : "text-white"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Background Image with Logo */}
        <div
          className="h-[90%] w-[94%] flex flex-col items-center justify-center rounded-[24px] relative"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Logo */}
          <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="absolute top-0 w-[60%] md:w-1/3 left-1/2 transform -translate-x-1/2"
          />
          </Link>
          {/* <div className="absolute inset-0 flex flex-col items-center justify-center"> */}
          {/* Timeline Line with Animation */}

          {/* Year Marker with Animation */}

          {/* Centered Text and Timeline Container */}
          <div className="text-center md:block flex items-center justify-center flex-col absolute bottom-20">
            <h1
              className="text-[#FFFCFC] rounded-[10px] px-10 py-4 md:text-xl text-xs lg:text-xl font-normal mb-12"
              style={{
                backdropFilter: "blur(15.5733642578125px)",
                background: "rgba(0, 0, 0, 0.2)",
                border: "1.5px solid #C0B1B180",
              }}
            >
              Humble beginning with <br /> Gujrat Cycle in Vadodara for <br />{" "}
              Export
            </h1>

            {/* Timeline Line with Animation */}
            <div className="relative md:w-[400px] w-[150px] h-1 mx-auto">
              {/* Inverted Triangle */}
              <div
                className={`absolute -top-4 left-1/2 transform -translate-x-1/2 transition-all duration-700 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: "16px solid transparent",
                  borderRight: "16px solid transparent",
                  borderBottom: "16px solid #ED1C24",
                  transform: "rotate(180deg) translateX(50%)",
                }}
              />
              {/* Timeline Base */}
              <div className="absolute -left-1/4 w-[40rem] h-full bg-white rounded-full" />
              {/* Animated Timeline */}
              <div
                className={`absolute h-full -left-1/2 [50rem] bg-[#ED1C24] rounded-full transition-all duration-1000 ease-out`}
                style={{
                  width: isVisible ? "130%" : "0%",
                  transitionDelay: "300ms",
                }}
              />

              {/* Year Text */}
              <div
                className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <div className="text-white font-bold mt-2 text-xl">1987</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LegacySection />
      <MunjalAutoGroup />
      <Text/>
      <BoardOfDirectors />
      <Footer/>
    </div>
  );
};

export default About;

// import React, { useEffect, useState } from 'react';
import legacy from "../assets/legacy.jpeg";

const LegacySection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      <div className="container mx-auto px-6 lg:px-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 md:gap-8 items-center min-h-screen">
          {/* Left Content - Take 5 columns */}
          <div className="lg:col-span-5  -py-10 lg:py-24 space-y-2 md:space-y-5 opacity-0 animate-fade-in">
            <div className="space-y-4 text-center md:text-left lg:text-left">
              <p className="text-[#8A8989]  md:text-lg text-xs md:font-medium tracking-wide">
                #LEGACY///
              </p>
              <h2 className="text-[20px] lg:text-[40px]  font-normal md:leading-[41px] md:tracking-tight">
                With over <span className="text-red-500">40+ Years</span> of
                experience
              </h2>
            </div>

            <p className="text-[#8C8989] font-medium text-xs md:text-base  md:text-left text-center leading-[19px] md:leading-[25px] max-w-xl">
            Munjal Auto Industries Limited is a leader in engineering, delivering cutting-edge solutions across industries. Driven by innovation, we design and manufacture lightweight, durable, and sustainable components using advanced sheet metal, composite materials, and precision molding techniques for automotive, aerospace, renewable energy, defense, and railways.
            </p>

            <button
              className="bg-black  !mt-10  hidden text-white px-8 py-3 rounded-full 
              hover:bg-gray-800 transition-colors duration-300 md:inline-flex"
            >
              Contact Us
            </button>
          </div>
          <img
                src={legacy}
                alt="Modern building architecture"
                className="w-full h-full overflow-hidden  !rounded-xl     object-cover md:hidden block object-center "
              />
                 <button
              className="bg-black    md:hidden text-white px-8 py-3 rounded-full 
              hover:bg-gray-800 transition-colors duration-300 items-center justify-center  w-fit mx-auto flex"
            >
              Contact Us
            </button>
          {/* Right Image with Parallax - Take 8 columns and extend beyond container */}
          <div className="lg:col-span-7 hidden md:block !rounded-[31px]  relative h-full w-full min-h-[500px] lg:min-h-[800px]">
            <div
              className="absolute inset-0 !rounded-[31px] overflow-hidden transform"
              style={{
                transform: `translateY(${scrollY * 0.2}px)`,
                transition: "transform 0.1s ease-out",
                width: "calc(100% + 28vw)",
                right: "-8vw",
              }}
            >
              <img
                src={legacy}
                alt="Modern building architecture"
                className="w-full h-full object-cover object-center 
                  transform scale-90 !rounded-[31px] transition-transform duration-1000"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
  
import nut from "../assets/home-slide-06 2.png"
// function ModelViewer() {
//   const [loading, setLoading] = useState(true);
//   const modelContainerRef = useRef(null);
//   const modelRef = useRef(null);
//   const animationFrameRef = useRef(null);

 
//     useEffect(() => {
//       const scene = new THREE.Scene();
//       scene.background = null;
  
//       const camera = new THREE.PerspectiveCamera(
//         45,
//         1,
//         0.1,
//         1000
//       );
//       camera.position.set(0, 1.3, 5);

//     const renderer = new THREE.WebGLRenderer({ 
//       antialias: true, 
//       alpha: true,
//     });
//     renderer.setPixelRatio(window.devicePixelRatio);
//     renderer.outputEncoding = THREE.sRGBEncoding;

//     const container = modelContainerRef.current;
//     if (container) {
//       container.innerHTML = '';
//       container.appendChild(renderer.domElement);
//     }

//     // Add lights
//     const ambientLight = new THREE.AmbientLight(0xffffff, 1);
//     scene.add(ambientLight);

//     const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
//     directionalLight.position.set(5, 5, 5);
//     scene.add(directionalLight);

//     const modelGroup = new THREE.Group();
//     scene.add(modelGroup);

//     // Load model
//     const loader = new GLTFLoader();
//     loader.load(
//       '/car2.gltf',
//       (gltf) => {
//         const model = gltf.scene;
        
//         // Center and scale model
//         const box = new THREE.Box3().setFromObject(model);
//         const center = box.getCenter(new THREE.Vector3());
//         const size = box.getSize(new THREE.Vector3());
//         const maxDim = Math.max(size.x, size.y, size.z);
//         const scale = 3 / maxDim; // Increased scale
        
//         model.position.set(-center.x, -center.y + 1, -center.z); // Adjusted Y position
//         model.scale.setScalar(scale);
        
//         modelGroup.add(model);
//         modelRef.current = modelGroup;
//         setLoading(false);
//       },
//       undefined,
//       (error) => console.error('Model loading error:', error)
//     );

//     // Handle resize
//     function updateSize() {
//       const width = container.clientWidth;
//       const height = container.clientHeight;
//       camera.aspect = width / height;
//       camera.updateProjectionMatrix();
//       renderer.setSize(width, height);
//     }
    
//     window.addEventListener('resize', updateSize);
//     updateSize();

//     // Animation loop
//     function animate() {
//       animationFrameRef.current = requestAnimationFrame(animate);
//       if (modelRef.current) {
//         modelRef.current.rotation.y += 0.01; // Rotate model
//       }
//       renderer.render(scene, camera);
//     }
//     animate();

//     // Cleanup
//     return () => {
//       window.removeEventListener('resize', updateSize);
//       if (animationFrameRef.current) {
//         cancelAnimationFrame(animationFrameRef.current);
//       }
//       renderer.dispose();
//     };
//   }, []);

//   return (
//     <div className="relative w-full h-full" style={{ zIndex: 50 }}>
//       <div
//         ref={modelContainerRef}
//         className="w-full h-full"
//         style={{
//           background: 'transparent',
//           position: 'relative',
//           zIndex: 50,
//         }}
//       />
//       {loading && (
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="text-white font-medium">Loading 3D Model...</div>
//         </div>
//       )}
//     </div>
//   );
// }

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
    renderer.toneMappingExposure = 1.5;

    const container = modelContainerRef.current;
    if (container) {
      container.innerHTML = '';
      container.appendChild(renderer.domElement);
    }

    // Enhanced lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Main directional light
    const mainLight = new THREE.DirectionalLight(0xffffff, 2);
    mainLight.position.set(5, 5, 5);
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
      '/car2.gltf',
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

        // Center and scale model
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 3 / maxDim;
        
        model.position.set(-center.x, -center.y + 1, -center.z);
        model.scale.setScalar(scale);
        
        modelGroup.add(model);
        modelRef.current = modelGroup;
        setLoading(false);
      },
      undefined,
      (error) => console.error('Model loading error:', error)
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
    
    window.addEventListener('resize', updateSize);
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
      window.removeEventListener('resize', updateSize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full" style={{ zIndex: 50 }}>
      <div
        ref={modelContainerRef}
        className="w-full h-full"
        style={{
          background: 'transparent',
          position: 'relative',
          zIndex: 50,
        }}
      />
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white font-medium">Loading 3D Model...</div>
        </div>
      )}
    </div>
  );
}


const MunjalAutoGroup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Set visible after component mount to trigger animations
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4 my-12">
      <div className="bg-[#121111] rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
        {/* Content Container */}
        <div className="flex   flex-col md:flex-col md:items-start justify-between">
          {/* Left Content */}
          <div 
            className={`md:w-[60%] md:pr-8 z-10 transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="lg:space-y-6">
              <p className="text-[#F2EEEE] text-lg font-normal tracking-wide mb-2">#GROUP COMPANY///</p>
              
              <h2 className="lg:text-4xl  md:text-4xl  text-2xl font-semibold text-white tracking-tight mb-2">
                <span className="text-[#FF0000]">Munjal Auto</span> Group
              </h2>
              <p className="text-[#F4F1F1] md:text-lg  text-xs ld:text-lg leading-relaxed">
              The Munjal Auto Group is a multi-sector engineering powerhouse specializing in sheet metal components and composite mold manufacturing. Our group companies deliver advanced solutions for automotive, aerospace, defense, renewable energy, space, and railway sectors. With state-of-the-art manufacturing facilities across India and a focus on quality, innovation, and sustainability, we are enabling the next generation of engineering solutions for global markets.
              </p>
            </div>
          </div>
          
          {/* Right Image */}
            {/* <div className="  relative !z-[1000]  !bottom-40"> */}

            <div className={`md:w-full relative h-[400px] transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="absolute   inset-0 -top-60 md:!right-10 scale-125">
              <ModelViewer />
            </div>
          </div>

            {/* </div> */}
              
              {/* Circular rotating glow effect */}
              {/* <div 
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-gradient-to-tr from-transparent via-blue-500/10 to-transparent transform rotate-0 ${
                  isHovered ? 'animate-slow-spin' : ''
                }`}
              ></div> */}
            
          
        </div>
        
        {/* Action Button */}
        <div 
          className={`absolute right-8 bottom-8 transition-all duration-700 delay-600 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`}
        >
          <button 
            className="bg-[#FF0000] hover:bg-red-600 transition-colors duration-300 w-10 h-10 md:w-16 md:h-16 rounded-full flex items-center justify-center group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-white transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Custom Animation */}
      <style jsx>{`
        @keyframes slow-spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .animate-slow-spin {
          animation: slow-spin 10s linear infinite;
        }
      `}</style>
    </div>
  );
};


const Text=()=>{
  return(
    <div className=" text-center md:my-40 my-32 lg:my-40 text-lg lg:text-[40px] md:text-3xl font-normal lg:leading-[65px] md:leading-[45px]  flex items-center justify-center text-black p-10">
        <h1 className="max-w-3xl">Pioneering Lightweight Solutions with Cutting-Edge Technology, Engineering a Smarter, More Innovative Future</h1>
    </div>
  )
}

 
// import { motion } from 'framer-motion';

// import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import aboutex1 from "../assets/about-ex1.jpeg";
import aboutex2 from "../assets/about-ex-2.jpeg";
import aboutex3 from "../assets/about-ex-3.jpeg";
import { image } from "framer-motion/client";

 
 

const BoardOfDirectors = () => {
  // Sample data for directors
  const directors = [
    {
      id: 1,
      name: "Name of the director",
      position: "Position",
      image: aboutex1 // Replace with aboutex1
    },
    {
      id: 2,
      name: "Name of the director",
      position: "Position",
      image: aboutex2 // Replace with aboutex2
    },
    {
      id: 3,
      name: "Name of the director",
      position: "Position",
      image: aboutex3 // Replace with aboutex3
    }
  ];

  // State to track active card
  const [activeCard, setActiveCard] = useState(1);

  // Text animation variants
  const textVariants = {
    inactive: {
      opacity: 0.8,
      y: 5,
      transition: {
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    },
    active: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  // Additional info variants
  const infoVariants = {
    hidden: {
      opacity: 0,
      y: 15,
      height: 0,
      transition: {
        duration: 0.4,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    },
    visible: {
      opacity: 1,
      y: 15,
      height: "auto",
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
        delay: 0.1
      }
    }
  };

  return (
    <div className="w-full min-h-screen max-w-7xl mx-auto flex items-center p-8">
      <div className="w-full flex flex-col  lg:flex-row md:flex-col gap-8 items-start">
        {/* Left side - Title (30%) */}
        <div className="w-full md:w-3/12 md:flex hidden lg:flex flex-col md:whitespace-nowrap justify-center">
          <h1 className="text-5xl font-normal mb-2">Board of</h1>
          <h1 className="text-5xl font-normal text-red-500">Directors</h1>
        </div>
        <div className="w-full  text-2xl md:hidden flex lg:hidden flex-row md:whitespace-nowrap justify-center">
          <h1 className=" font-normal mb-2">Board of</h1>
          <h1 className=" font-normal  ml-2 text-red-500">Directors</h1>
        </div>
        {/* Right side - Cards (70%) */}
        <div className="w-full md:w-9/12 flex justify-center">
          <div className="flex w-full max-w-5xl gap-6">
            {directors.map((director) => (
              <motion.div
                key={director.id}
                className="relative overflow-hidden lg:rounded-[20px] rounded-lg md:rounded-[20px]  shadow-xl cursor-pointer"
                initial={false}
                animate={{
                  flex: activeCard === director.id ? 5 : 2,
                }}
                transition={{ 
                  duration: 0.7,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
                onHoverStart={() => setActiveCard(director.id)}
              >
                <div className="h-[600px] w-full relative">
                  <img 
                    src={director.image} 
                    alt={director.name} 
                    className="h-full w-full object-cover"
                  />
                  
                  {/* Text overlay at the bottom with shadow gradient */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/100 via-black/70 to-transparent p-6 text-white">
                    {/* Text container with animated variants */}
                    <motion.div
                      initial="inactive"
                      animate={activeCard === director.id ? "active" : "inactive"}
                      variants={textVariants}
                      className="transform-gpu" // Hardware acceleration for smoother animations
                    >
                      <motion.h3 
                        className="text-2xl font-semibold"
                        initial={{ opacity: 0.9 }}
                        animate={{ 
                          opacity: 1,
                          scale: activeCard === director.id ? 1.02 : 1
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        {director.name}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-sm"
                        initial={{ opacity: 0.7 }}
                        animate={{ 
                          opacity: activeCard === director.id ? 0.9 : 0.7 
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        {director.position}
                      </motion.p>
                    </motion.div>
                    
                    {/* Additional info with animated presence */}
                    <AnimatePresence>
                      {activeCard === director.id && (
                        <motion.div
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          variants={infoVariants}
                          className="mt-4 text-sm overflow-hidden"
                        >
                          <p className="leading-relaxed opacity-90">
                            Board member since 2022
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// export default BoardOfDirectors;

// export default BoardOfDirectors;

// export default BoardOfDirectors;
// export default MunjalAutoGroup;
// export default LegacySection;

// import React from 'react';
import { Twitter, Facebook, Instagram, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo Section */}
          <div className="flex flex-col">
            <div className="text-5xl font-bold mb-4">
              <span className="font-script">m</span>
            </div>
            <div className="uppercase tracking-wider font-bold">Munjal Auto</div>
          </div>

          {/* Stay in touch Section */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-6">Stay in touch:</h3>
            <div className="space-y-1">
              <p>2nd Floor, Tower 'C',</p>
              <p>Unitech Business Zone,</p>
              <p>Nirvana Country, South City - 2,</p>
              <p>Sector-50, Gurugram - 122018,</p>
              <p>Haryana</p>
            </div>
            
            <div className="mt-6 space-y-2">
              <p>Email:</p>
              <p>info@[YourCompanyName].com</p>
              <p className="mt-4">Phone: +91 XXXXX XXXXX</p>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-6">Contact Us:</h3>
            <p className="mb-4">Email: info@[YourCompanyName].com</p>
            <p>Phone: +91 XXXXX XXXXX</p>
            
            <div className="mt-auto">
              <button className="bg-white text-black rounded-full px-8 py-3 font-medium">
                Explore more
              </button>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
                <div className="flex space-x-6">
                  <Twitter size={22} className="cursor-pointer hover:text-gray-300" />
                  <Facebook size={22} className="cursor-pointer hover:text-gray-300" />
                  <Instagram size={22} className="cursor-pointer hover:text-gray-300" />
                  <Github size={22} className="cursor-pointer hover:text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center">
          <p>© [Year] [Company Name]. All rights reserved.</p>
          <p className="mt-4 md:mt-0">
            <a href="#" className="hover:underline">Privacy policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

// export default Footer;