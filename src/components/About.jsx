import React, { useState, useRef, useEffect } from "react";
import img from "../assets/aboutusbanner.png";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import icon1 from "../assets/hero/icon.png";
import icon2 from "../assets/hero/icon2.png";
import youtube from "../assets/hero/youtube.png";
import insta from "../assets/hero/insta.png";
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
        {/* <div className="absolute text-sm left-20 top-20 transform -translate-y-1/2 md:flex hidden   z-[100] space-x-20">
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
        </div> */}
        <div className="z-[100] absolute w-full top-20 flex justify-between items-center ">
          <TopNav />
        </div>

        {/* Right Navigation */}
        {/* <div className="absolute text-sm right-20 top-20 transform -translate-y-1/2 md:flex hidden  items-center justify-between z-[100] space-x-12">
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
        </div> */}

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


          <div className="absolute bottom-5 right-5 flex flex-col items-center space-y-5 z-[999]">
              <Link to="/contact">
                <img
                  src={icon1}
                  alt="contact"
                  className="w-[30px] md:w-[40px] cursor-pointer hover:scale-125"
                />
              </Link>

              <Link to="/contact">
                <img
                  src={icon2}
                  alt="contact"
                  className="w-[55px] cursor-pointer hover:scale-125"
                />
              </Link>
            </div>

            <div className="absolute top-[38%] left-5 flex flex-col items-center space-y-4 z-[999]">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={youtube}
                  alt="YouTube"
                  className="w-[40px] cursor-pointer hover:scale-105"
                />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={insta}
                  alt="Instagram"
                  className="w-[40px] cursor-pointer hover:scale-105"
                />
              </a>
            </div>





          {/* <div className="text-center md:block flex items-center justify-center flex-col absolute bottom-20">
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

            

            
            <div className="relative md:w-[400px] w-[150px] h-1 mx-auto">
              
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
           
              <div className="absolute -left-1/4 w-[40rem] h-full bg-white rounded-full" />
              
              <div
                className={`absolute h-full -left-1/2 [50rem] bg-[#ED1C24] rounded-full transition-all duration-1000 ease-out`}
                style={{
                  width: isVisible ? "130%" : "0%",
                  transitionDelay: "300ms",
                }}
              />

             
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
          </div> */}

          <TimeLine />

          
        </div>
      </div>
      <LegacySection />
      <MunjalAutoGroup />
      <Text />
      <BoardOfDirectors />
      <FooterMain />
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
    <div className="relative min-h-screen w-full overflow-hidden bg-white px-10">
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
              Munjal Auto Industries Limited is a leader in engineering,
              delivering cutting-edge solutions across industries. Driven by
              innovation, we design and manufacture lightweight, durable, and
              sustainable components using advanced sheet metal, composite
              materials, and precision molding techniques for automotive,
              aerospace, renewable energy, defense, and railways.
            </p>

<Link to='/contact'>
<button
              className="bg-black  !mt-10  hidden text-white px-8 py-3 rounded-full 
              hover:bg-gray-800 transition-colors duration-300 md:inline-flex"
            >
              Contact Us
            </button>
</Link>
            
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

import nut from "../assets/home-slide-06 2.png";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on initial render
    const checkIfMobile = () => window.innerWidth <= 768;
    setIsMobile(checkIfMobile());

    // Set up resize listener for mobile detection
    const handleResize = () => {
      setIsMobile(checkIfMobile());
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.set(0, 1.3, 5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      physicallyCorrectLights: true,
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
      "/2.gltf",
      (gltf) => {
        const model = gltf.scene;

        // Enhance materials for all meshes
        model.traverse((child) => {
          if (child.isMesh) {
            if (child.material) {
              child.material.roughness = 0.3;
              child.material.metalness = 0.8;
              child.material.envMapIntensity = 1.5;
              child.material.needsUpdate = true;
            }
          }
        });

        // Center and scale model - adjust scale for mobile
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = isMobile ? 2 / maxDim : 3 / maxDim;

        model.position.set(
          -center.x,
          -center.y + (isMobile ? 0.8 : 1),
          -center.z
        );
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
  }, [isMobile]); // Add isMobile as dependency

  return (
    <div className="relative w-full h-full" style={{ zIndex: 50 }}>
      <div
        ref={modelContainerRef}
        className="w-full h-full"
        style={{
          background: "transparent",
          position: "relative",
          zIndex: 50,
          height: isMobile ? "450px" : "100%", // Different height for mobile
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
      <div className="bg-[#f1eeee] rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
        {/* Content Container */}
        <div className="flex   flex-col md:flex-col md:items-start justify-between">
          {/* Left Content */}
          <div
            className={`md:w-[60%] md:pr-8 z-10 transition-all duration-1000 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="lg:space-y-6">
              <p className="text-black text-lg font-normal tracking-wide mb-2">
                #GROUP COMPANY///
              </p>

              <h2 className="lg:text-4xl  md:text-4xl  text-2xl font-semibold text-black tracking-tight mb-2">
                <span className="text-[#FF0000]">Munjal Auto</span> Group
              </h2>
              <p className="text-black md:text-lg  text-xs ld:text-lg leading-relaxed">
                The Munjal Auto Group is a multi-sector engineering powerhouse
                specializing in sheet metal components and composite mold
                manufacturing. Our group companies deliver advanced solutions
                for automotive, aerospace, defense, renewable energy, space, and
                railway sectors. With state-of-the-art manufacturing facilities
                across India and a focus on quality, innovation, and
                sustainability, we are enabling the next generation of
                engineering solutions for global markets.
              </p>
            </div>
          </div>

          {/* Right Image */}
          {/* <div className="  relative !z-[1000]  !bottom-40"> */}

          <div
            className={`md:w-full relative h-[400px] transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="absolute   inset-0 -top-60 md:!right-10  scale-125">
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
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
        >
          {/* <button
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button> */}
        </div>
      </div>

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes slow-spin {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        .animate-slow-spin {
          animation: slow-spin 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

const Text = () => {
  return (
    <div className=" text-center md:my-40 my-32 lg:my-40 text-lg lg:text-[40px] md:text-3xl font-normal lg:leading-[65px] md:leading-[45px]  flex items-center justify-center text-black p-10">
      <h1 className="max-w-3xl">
        Pioneering Lightweight Solutions with Cutting-Edge Technology,
        Engineering a Smarter, More Innovative Future
      </h1>
    </div>
  );
};

// import { motion } from 'framer-motion';

// import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import aboutex1 from "../assets/about-ex1.jpeg";
import aboutex2 from "../assets/about-ex-2.jpeg";
import aboutex3 from "../assets/about-ex-3.jpeg";
import placeholderImage from "../assets/placeholderImage.png";
import { image } from "framer-motion/client";

const BoardOfDirectors = () => {
  // Sample data for directors
  const directors = [
    {
      id: 1,
      name: "Sudhir Kumar Munjal",
      position: "Chairman & Managing Director",
      description:
        "A visionary entrepreneur with over 46 years of experience in the bicycle, automobile, and engineering industries, Mr. Sudhir Kumar Munjal is known for building high-performing teams and fostering a strong team spirit. An Arts graduate, he served as Director of Munjal Auto Industries Ltd. (1991-1993) before assuming the role of Managing Director in 1993 and Chairman & Managing Director in 2015. Under his leadership, the company successfully transitioned from bicycle manufacturing to auto components, driving a major turnaround in 1999-2000.",
      image: placeholderImage, // Replace with aboutex1
    },
    {
      id: 2,
      name: "Anju Munjal",
      position: "Whole-time Director",
      description:
        "A visionary entrepreneur with over 46 years of experience in the bicycle, automobile, and engineering industries, Mr. Sudhir Kumar Munjal is known for building high-performing teams and fostering a strong team spirit. An Arts graduate, he served as Director of Munjal Auto Industries Ltd. (1991-1993) before assuming the role of Managing Director in 1993 and Chairman & Managing Director in 2015. Under his leadership, the company successfully transitioned from bicycle manufacturing to auto components, driving a major turnaround in 1999-2000.",
      image: placeholderImage, // Replace with aboutex2
    },
    {
      id: 3,
      name: "Navi Kersi Sabavala",
      position: "Director",
      description:
        "A visionary entrepreneur with over 46 years of experience in the bicycle, automobile, and engineering industries, Mr. Sudhir Kumar Munjal is known for building high-performing teams and fostering a strong team spirit. An Arts graduate, he served as Director of Munjal Auto Industries Ltd. (1991-1993) before assuming the role of Managing Director in 1993 and Chairman & Managing Director in 2015. Under his leadership, the company successfully transitioned from bicycle manufacturing to auto components, driving a major turnaround in 1999-2000.",
      image: placeholderImage, // Replace with aboutex3
    },
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
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
    active: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  // Additional info variants
  const infoVariants = {
    hidden: {
      opacity: 0,
      y: 15,
      height: 0,
      transition: {
        duration: 0.4,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
    visible: {
      opacity: 1,
      y: 15,
      height: "auto",
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
        delay: 0.1,
      },
    },
  };

  return (
    <div className="w-full  max-w-7xl mx-auto flex items-center p-8">
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
                className="relative overflow-hidden lg:rounded-[20px] rounded-lg md:rounded-[20px]  shadow-xl cursor-pointer "
                initial={false}
                animate={{
                  flex: activeCard === director.id ? 5 : 2,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.43, 0.13, 0.23, 0.96],
                }}
                onHoverStart={() => setActiveCard(director.id)}
              >
                <div className="h-[663px]  w-full relative">
                  <img
                    src={director.image}
                    alt={director.name}
                    className="h-full w-full object-cover"
                  />

                  {/* Text overlay at the bottom with shadow gradient */}
                  <div className="absolute bottom-0 left-0 right-0 px-6 py-2 text-white">
                    {/* Text container with animated variants */}
                    <motion.div
                      initial="inactive"
                      animate={
                        activeCard === director.id ? "active" : "inactive"
                      }
                      variants={textVariants}
                      className="transform-gpu"
                    >
                      <motion.h3
                        className="text-[20px] text-[#ED1C24] font-bold"
                        initial={{ opacity: 0.9 }}
                        animate={{
                          opacity: 1,
                          scale: activeCard === director.id ? 1.02 : 1,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        {director.name}
                      </motion.h3>

                      <motion.p
                        className="text-[16px] text-[#131316]"
                        initial={{ opacity: 0.7 }}
                        animate={{
                          opacity: activeCard === director.id ? 0.9 : 0.7,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        {director.position}
                      </motion.p>

                      {activeCard === director.id && (
                        <motion.p
                          className="text-[14px] text-[#75737C] leading-[18px] mt-1 hidden md:block"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.9 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {director.description}
                        </motion.p>
                      )}
                    </motion.div>

                    {/* Additional info with animated presence */}
                    <AnimatePresence>
                      {activeCard === director.id && (
                        <motion.div
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          variants={infoVariants}
                          className="mt-2 text-sm overflow-hidden"
                        >
                          {/* <p className="leading-relaxed opacity-90">
          Board member since 2022
        </p> */}
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
import { Twitter, Facebook, Instagram, Github } from "lucide-react";
import TopNav from "./TopNav";
import { FooterMain } from "./FooterMain";
import TimeLine from "./home/TimeLine";

const Footer = () => {
  return (
    // <footer className="bg-black text-white py-16 px-8">
    //   <div className="max-w-7xl mx-auto">
    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
    //       {/* Logo Section */}
    //       <div className="flex flex-col">
    //         <div className="text-5xl font-bold mb-4">
    //           <span className="font-script">m</span>
    //         </div>
    //         <div className="uppercase tracking-wider font-bold">
    //           Munjal Auto
    //         </div>
    //       </div>

    //       {/* Stay in touch Section */}
    //       <div className="flex flex-col">
    //         <h3 className="text-xl font-semibold mb-6">Stay in touch:</h3>
    //         <div className="space-y-1">
    //           <p>2nd Floor, Tower 'C',</p>
    //           <p>Unitech Business Zone,</p>
    //           <p>Nirvana Country, South City - 2,</p>
    //           <p>Sector-50, Gurugram - 122018,</p>
    //           <p>Haryana</p>
    //         </div>

    //         <div className="mt-6 space-y-2">
    //           <p>Email:</p>
    //           <p>info@[YourCompanyName].com</p>
    //           <p className="mt-4">Phone: +91 XXXXX XXXXX</p>
    //         </div>
    //       </div>

    //       {/* Contact Us Section */}
    //       <div className="flex flex-col">
    //         <h3 className="text-xl font-semibold mb-6">Contact Us:</h3>
    //         <p className="mb-4">Email: info@[YourCompanyName].com</p>
    //         <p>Phone: +91 XXXXX XXXXX</p>

    //         <div className="mt-auto">
    //           <button className="bg-white text-black rounded-full px-8 py-3 font-medium">
    //             Explore more
    //           </button>

    //           <div className="mt-8">
    //             <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
    //             <div className="flex space-x-6">
    //               <Twitter
    //                 size={22}
    //                 className="cursor-pointer hover:text-gray-300"
    //               />
    //               <Facebook
    //                 size={22}
    //                 className="cursor-pointer hover:text-gray-300"
    //               />
    //               <Instagram
    //                 size={22}
    //                 className="cursor-pointer hover:text-gray-300"
    //               />
    //               <Github
    //                 size={22}
    //                 className="cursor-pointer hover:text-gray-300"
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Footer Bottom */}
    //     <div className="mt-16 flex flex-col md:flex-row justify-between items-center">
    //       <p>© [Year] [Company Name]. All rights reserved.</p>
    //       <p className="mt-4 md:mt-0">
    //         <a href="#" className="hover:underline">
    //           Privacy policy
    //         </a>
    //       </p>
    //     </div>
    //   </div>
    // </footer>
    <></>
  );
};

// export default Footer;

const MobileFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className=" md:hidden  block pt-60 ">
        <div className="bg-black text-white px-6 py-10 text-left  ">
          <img src={munjallogo} alt="" className="  h-14" />
          <h1 className="  font-bold pb-2 pt-4">Stay in touch:</h1>
          <p className=" text-xs leading-[23px] font-[400]">
            2nd Floor, Tower "C", <br />
            Unitech Business Zone, <br />
            Nirvana Country, South City - 2, <br />
            Sector-50, Gurugram - 122018, Haryana
          </p>
          <p className=" text-xs leading-[23px] font-[400] mt-4 ">
            Email: info@[YourCompanyName].com <br />
            Phone: +91 XXXXX XXXXX
          </p>

          <h1 className=" font-bold mt-4">Contact Us:</h1>
          <p className=" text-xs leading-[23px] font-[400]  ">
            Email: info@[YourCompanyName].com <br />
            Phone: +91 XXXXX XXXXX
          </p>

          <button className=" bg-white text-black text-xs px-6 py-2 rounded-full mt-6">
            Explore more
          </button>

          <div className="flex    ">
            <div className=" flex flex-col items-start">
              <h4 className="font-semibold mb-4 mt-6">Stay Connected</h4>
              <div className="flex  items-center justify-center gap-6">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.2898 2.35384C16.6415 2.61922 15.9571 2.78508 15.2367 2.88459C15.9571 2.48653 16.5334 1.85625 16.7856 1.09329C16.1012 1.45819 15.3447 1.72356 14.5163 1.88942C13.8679 1.25915 12.9314 0.861084 11.9228 0.861084C9.97768 0.861084 8.39278 2.32066 8.39278 4.11197C8.39278 4.37735 8.4288 4.60955 8.50084 4.84176C5.58318 4.70907 2.95368 3.41535 1.18868 1.42501C0.900513 1.9226 0.72041 2.45335 0.72041 3.05046C0.72041 4.17831 1.33276 5.17348 2.30531 5.77058C1.72898 5.73741 1.18868 5.60472 0.68439 5.37252V5.40569C0.68439 6.99796 1.90909 8.32485 3.53001 8.6234C3.24185 8.68974 2.91766 8.72292 2.59348 8.72292C2.37735 8.72292 2.12521 8.68974 1.90909 8.65657C2.37735 9.95029 3.67409 10.9123 5.22297 10.9123C3.99828 11.7748 2.48541 12.3055 0.828472 12.3055C0.540308 12.3055 0.252144 12.3055 0 12.2724C1.5849 13.2012 3.42195 13.7319 5.4391 13.7319C11.9588 13.7319 15.5248 8.75609 15.5248 4.44369C15.5248 4.311 15.5248 4.14514 15.5248 4.01245C16.2092 3.58121 16.8216 3.01728 17.2898 2.35384Z"
                      fill="#FCFCFC"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.29023 17.6362V9.72246H0.398438V6.63832H3.29023V4.36386C3.29023 1.72436 5.04076 0.287109 7.59755 0.287109C8.82227 0.287109 9.87486 0.371083 10.1816 0.408616V3.16704L8.40835 3.16778C7.01782 3.16778 6.74858 3.77629 6.74858 4.66923V6.63832H10.0648L9.63306 9.72246H6.74858V17.6362H3.29023Z"
                      fill="#FCFCFC"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.7707 1.7394C13.5694 1.7394 13.9008 1.74906 15.0064 1.79548C15.6712 1.80297 16.3296 1.91538 16.9531 2.12783C17.4052 2.28841 17.8159 2.5344 18.1585 2.84997C18.5012 3.16554 18.7683 3.54369 18.9427 3.96008C19.1734 4.53427 19.2954 5.14063 19.3035 5.75281C19.3535 6.77098 19.3644 7.07621 19.3644 9.65359C19.3644 12.231 19.354 12.5362 19.3035 13.5544C19.2954 14.1666 19.1734 14.7729 18.9427 15.3471C18.7683 15.7635 18.5012 16.1416 18.1585 16.4572C17.8159 16.7728 17.4052 17.0188 16.9531 17.1794C16.3296 17.3918 15.6712 17.5042 15.0064 17.5117C13.9013 17.5577 13.5699 17.5678 10.7707 17.5678C7.97154 17.5678 7.64011 17.5581 6.53501 17.5117C5.87027 17.5042 5.21185 17.3918 4.58836 17.1794C4.13622 17.0188 3.7256 16.7728 3.38293 16.4572C3.04027 16.1416 2.77315 15.7635 2.59878 15.3471C2.3681 14.7729 2.24604 14.1666 2.2379 13.5544C2.18799 12.5362 2.17701 12.231 2.17701 9.65359C2.17701 7.07621 2.18749 6.77098 2.2379 5.75281C2.24604 5.14063 2.3681 4.53427 2.59878 3.96008C2.77315 3.54369 3.04027 3.16554 3.38293 2.84997C3.7256 2.5344 4.13622 2.28841 4.58836 2.12783C5.21185 1.91538 5.87027 1.80297 6.53501 1.79548C7.64061 1.74952 7.97204 1.7394 10.7707 1.7394ZM10.7707 0C7.92562 0 7.56724 0.0110321 6.44916 0.0579188C5.57918 0.0738547 4.71844 0.225553 3.90354 0.50656C3.20449 0.749114 2.57133 1.12922 2.04823 1.62035C1.51445 2.10226 1.10136 2.68568 0.837813 3.32987C0.532678 4.08033 0.367955 4.87302 0.350651 5.6742C0.300737 6.70295 0.288757 7.033 0.288757 9.65313C0.288757 12.2733 0.300737 12.6033 0.351649 13.633C0.368953 14.4342 0.533676 15.2269 0.838811 15.9773C1.10206 16.6214 1.51481 17.2048 2.04823 17.6868C2.57162 18.1781 3.20513 18.5582 3.90454 18.8006C4.71943 19.0816 5.58018 19.2333 6.45016 19.2493C7.56823 19.2952 7.92512 19.3072 10.7717 19.3072C13.6183 19.3072 13.9752 19.2962 15.0933 19.2493C15.9633 19.2333 16.824 19.0816 17.6389 18.8006C18.335 18.5521 18.9671 18.1726 19.4948 17.6863C20.0226 17.2 20.4343 16.6176 20.7036 15.9764C21.0088 15.2259 21.1735 14.4333 21.1908 13.6321C21.2407 12.6033 21.2527 12.2733 21.2527 9.65313C21.2527 7.033 21.2407 6.70295 21.1898 5.67329C21.1725 4.8721 21.0078 4.07941 20.7026 3.32895C20.4394 2.68485 20.0266 2.10143 19.4932 1.61943C18.9698 1.12819 18.3363 0.748076 17.6369 0.50564C16.822 0.224633 15.9613 0.0729354 15.0913 0.0569995C13.9742 0.0110322 13.6158 0 10.7707 0Z"
                      fill="#FCFCFC"
                    />
                    <path
                      d="M10.7692 4.69727C9.70455 4.69727 8.66385 4.988 7.77867 5.53269C6.89348 6.07739 6.20356 6.85158 5.79615 7.75738C5.38875 8.66317 5.28215 9.65988 5.48984 10.6215C5.69754 11.5831 6.21019 12.4663 6.96298 13.1596C7.71577 13.8529 8.67489 14.325 9.71904 14.5162C10.7632 14.7075 11.8455 14.6093 12.829 14.2342C13.8126 13.859 14.6533 13.2236 15.2447 12.4084C15.8362 11.5932 16.1519 10.6348 16.1519 9.65438C16.1519 8.33967 15.5848 7.07881 14.5753 6.14917C13.5659 5.21953 12.1967 4.69727 10.7692 4.69727ZM10.7692 12.8721C10.0781 12.8721 9.40258 12.6834 8.828 12.3298C8.25342 11.9762 7.80558 11.4737 7.54113 10.8857C7.27668 10.2978 7.20749 9.65081 7.3423 9.02664C7.47712 8.40246 7.80989 7.82912 8.29853 7.37911C8.78718 6.92911 9.40974 6.62265 10.0875 6.4985C10.7653 6.37434 11.4678 6.43806 12.1062 6.6816C12.7447 6.92514 13.2904 7.33757 13.6743 7.86672C14.0582 8.39587 14.2631 9.01798 14.2631 9.65438C14.2631 10.5078 13.895 11.3262 13.2398 11.9296C12.5845 12.5331 11.6958 12.8721 10.7692 12.8721Z"
                      fill="#FCFCFC"
                    />
                    <path
                      d="M16.365 5.65855C17.0596 5.65855 17.6228 5.13993 17.6228 4.50017C17.6228 3.86042 17.0596 3.3418 16.365 3.3418C15.6703 3.3418 15.1071 3.86042 15.1071 4.50017C15.1071 5.13993 15.6703 5.65855 16.365 5.65855Z"
                      fill="#FCFCFC"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    width="21"
                    height="19"
                    viewBox="0 0 21 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.3882 0C4.83176 0 0.361572 4.11672 0.361572 9.23377C0.361572 13.312 3.24422 16.7747 7.21307 18.0058C7.7144 18.0828 7.88151 17.8135 7.88151 17.5442C7.88151 17.3133 7.88151 16.7362 7.88151 15.9667C5.08242 16.5438 4.49754 14.7356 4.49754 14.7356C4.03799 13.6583 3.36955 13.389 3.36955 13.389C2.45044 12.8119 3.4531 12.8119 3.4531 12.8119C4.45576 12.8888 4.99887 13.7737 4.99887 13.7737C5.8762 15.1972 7.33841 14.774 7.92329 14.5432C8.00685 13.9276 8.25751 13.5429 8.54995 13.312C6.33575 13.0812 3.99621 12.2732 3.99621 8.7336C3.99621 7.73328 4.37221 6.88685 5.04065 6.27127C4.95709 6.04042 4.58109 5.11704 5.1242 3.80893C5.1242 3.80893 5.95975 3.57808 7.88151 4.77078C8.67529 4.57841 9.55261 4.46299 10.3882 4.46299C11.2237 4.46299 12.101 4.57841 12.8948 4.77078C14.8166 3.57808 15.6521 3.80893 15.6521 3.80893C16.1952 5.07857 15.861 6.00195 15.7357 6.27127C16.3623 6.92532 16.7801 7.73328 16.7801 8.7336C16.7801 12.2732 14.4406 13.0427 12.1846 13.2735C12.5606 13.5429 12.853 14.12 12.853 14.9664C12.853 16.1976 12.853 17.1979 12.853 17.5057C12.853 17.7365 13.0201 18.0443 13.5632 17.9674C17.5321 16.7747 20.4147 13.312 20.4147 9.23377C20.4147 4.11672 15.9446 0 10.3882 0Z"
                      fill="#FCFCFC"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col   mt-14 gap-4">
            <p className="    font-semibold"> Privacy Policy</p>
            <p className="text-white font-bold text-sm">
              © {currentYear} Munjal Auto. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};