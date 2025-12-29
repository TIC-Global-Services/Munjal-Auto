import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

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
    camera.position.set(0, 2, 5);


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
      "/Model04.glb   ",
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

        // Center and scale model - increased scale for desktop
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = isMobile ? 2.0 / maxDim : 3.5 / maxDim; // Reduced mobile scale

        // Rotate model to stand upright (rotate 90 degrees around X-axis)
        model.rotation.x = Math.PI / 2;
        // Initial rotation to face front - rotate 90 degrees clockwise around Y-axis
        model.rotation.y = Math.PI / 2;
        
        model.position.set(
          -center.x,
          -center.y + (isMobile ? 1.5 : 2),
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
        // Rotate clockwise around Y-axis to show front and back of the model
        modelRef.current.rotation.y += 0.008;
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
    <div className="relative " style={{ zIndex: 50 }}>
      <div
        ref={modelContainerRef}
        className="h-[300px] w-[300px] md:h-[320px] md:w-[600px]"
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

const MunjalAutoGroup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visible after component mount to trigger animations
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="munjal-group" className="lg:max-w-8xl px-5 lg:px-20 my-12">
      <div className="bg-[#f1eeee] rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden min-h-[500px]">
        {/* Content Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full items-center gap-4 md:gap-0">
          {/* Left Content */}
          <div
            className={` w-full md:pr-8 z-10 transition-all duration-1000 transform ${
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
              <p className="text-black md:text-sm  sm:text-sm lg:text-[1.125rem] leading-relaxed">
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

          {/* Right Side - 3D Model */}
          <div
            className={`w-full relative transition-all duration-1000 delay-300 -mt-4 md:mt-0 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="w-full flex items-center justify-center">
              <ModelViewer />
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div
          className={`absolute right-8 bottom-8 transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
        ></div>
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

export default MunjalAutoGroup;
