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
        <div className="relative w-full h-screen items-center justify-center my-20 hidden lg:block bg-white border border-gray-300 rounded-lg">
          {/* Background image */}
          <div className="absolute inset-0 w-full h-full z-0 max-h-[621px] mx-auto bg-white">
            <img
              src={BgImage}
              alt="Background"
              className="w-full h-full object-contain mix-blend-normal opacity-0"
            />
          </div>
  
          {/* Content overlay */}
          <div className="relative z-20 w-full h-full">
            <div className="absolute top-[8%] left-[5%] sm:left-[10%] md:left-[12%] lg:left-[10%] xl:left-[20%] bg-white rounded-lg p-6 ">
              <h2 className="text-[#ED1C24] text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-5xl font-[500] mb-4 lg:mt-0 xl:mt-0">
                Quality Policy
              </h2>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-sm xl:text-base max-w-[300px] mb-8 leading-relaxed">
                At MAIL, quality is our foundation. Through a strong Total Quality
                Management System, we ensure every product is "First time right,
                every time right."
              </p>
            </div>
          </div>
  
          {/* Grid cards */}
          <div className="absolute top-[40%] sm:top-[35%] md:top-[30%] lg:top-[10%] left-[50%] transform -translate-x-1/2 lg:transform-none lg:left-[50%]">
            <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
              {contents.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#F5EDED] p-3 sm:p-4 rounded shadow flex flex-col w-[120px] sm:w-[160px] md:w-[200px] lg:w-[225px] h-[120px] sm:h-[160px] md:h-[200px] lg:h-[225px] text-center items-center justify-center"
                >
                  <img
                    src={item.image}
                    alt="image"
                    className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] lg:w-[24px] lg:h-[24px] mb-2"
                  />
                  <p className="text-gray-700 text-xs sm:text-sm lg:text-base">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
  
          {/* 3D Model */}
          <div className="absolute  top-[70%] sm:top-[65%] md:top-[50%] lg:top-[15%] md:left-[2%] lg:left-[10%] z-10">
            <div className="scale-50 sm:scale-75 md:scale-90 lg:scale-100 origin-top-left">
              <ModelViewer />
            </div>
          </div>
        </div>
  
        {/* Mobile version */}
        <div className="lg:px-10 bg-white py-10"> <div className="bg-white relative px-8 py-20 mt-20 block lg:hidden mb-[380px] rounded-[6px] shadow-lg border border-gray-200">
          {/* Header section */}
          <div className="mb-8">
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
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-sm">
              {contents.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#F5EDED] p-3 sm:p-4 rounded shadow flex flex-col w-full sm:w-[160px] h-[140px] sm:h-[160px] text-center items-center justify-center"
                >
                  <img
                    src={item.image}
                    alt="image"
                    className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] mb-2 flex-shrink-0"
                  />
                  <p className="text-gray-700 text-xs sm:text-sm leading-tight">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        </div>
          {/* 3D Model section */}
       <div className="absolute -bottom-[520px] md:left-1 lg:block md:hiddenc hidden">
       <ModelViewer />

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
      className="absolute md:w-[600px] md:h-[600px] w-[400px] h-[500px] md:mt-0 mt-10"
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
          <div className="text-white font-medium">Loading 3D Model...</div>
        </div>
      )}
    </div>
  );
}
