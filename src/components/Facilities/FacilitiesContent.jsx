import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useEffect, useRef, useState } from "react";
import faBento2 from "../../assets/Facilities/Rectangle 34625219.png";
import faBento4 from "../../assets/Facilities/tools.jpeg";
import faBento3 from "../../assets/faBento3.png";
import tooldesign from "../../assets/Facilities/tooldesign.png";


function ModelViewer() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
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
        let scene, camera, renderer, container;

        try {
            scene = new THREE.Scene();
            scene.background = null;

            // Create isometric camera (orthographic) - perfect isometric view
            const frustumSize = isMobile ? 4 : 3.5;
            camera = new THREE.OrthographicCamera(
                -frustumSize / 2,
                frustumSize / 2,
                frustumSize / 2,
                -frustumSize / 2,
                0.1,
                1000
            );

            // Perfect isometric positioning: 35.264° elevation, 45° azimuth
            // This creates the classic isometric view showing three faces equally
            const distance = 10;
            camera.position.set(
                distance * Math.cos(Math.PI / 4) * Math.cos(Math.atan(Math.sqrt(2))),
                distance * Math.sin(Math.atan(Math.sqrt(2))),
                distance * Math.sin(Math.PI / 4) * Math.cos(Math.atan(Math.sqrt(2)))
            );
            camera.lookAt(0, 0, 0);

            renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true,
                physicallyCorrectLights: true,
            });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.outputEncoding = THREE.sRGBEncoding;
            renderer.toneMapping = THREE.ACESFilmicToneMapping;
            renderer.toneMappingExposure = 6.5;

            container = modelContainerRef.current;
            if (container) {
                container.innerHTML = "";
                container.appendChild(renderer.domElement);
            }

            // Enhanced lighting setup optimized for isometric view
            const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
            scene.add(ambientLight);

            // Main directional light from isometric angle
            const mainLight = new THREE.DirectionalLight(0xffffff, 2.5);
            mainLight.position.set(5, 8, 5);
            mainLight.castShadow = true;
            scene.add(mainLight);

            // Fill light to reduce harsh shadows
            const fillLight = new THREE.DirectionalLight(0x9ca3af, 1.2);
            fillLight.position.set(-3, 3, -3);
            scene.add(fillLight);

            // Rim light for better edge definition
            const rimLight = new THREE.DirectionalLight(0xb0b0b0, 0.8);
            rimLight.position.set(-5, 5, -5);
            scene.add(rimLight);

            // Point lights for dynamic lighting
            const pointLight1 = new THREE.PointLight(0xffffff, 1.5);
            pointLight1.position.set(2, 2, 2);
            scene.add(pointLight1);

            const pointLight2 = new THREE.PointLight(0xffffff, 1.5);
            pointLight2.position.set(-2, -2, -2);
            scene.add(pointLight2);

            const modelGroup = new THREE.Group();
            scene.add(modelGroup);

            // Load model with enhanced materials
            // Check if GLTFLoader is available
            let loader;
            if (typeof GLTFLoader !== 'undefined') {
                loader = new GLTFLoader();
            } else if (THREE.GLTFLoader) {
                loader = new THREE.GLTFLoader();
            } else {
                console.error('GLTFLoader not found. Make sure to import it properly.');
                setError('GLTFLoader not available');
                setLoading(false);
                return;
            }

            console.log('Starting to load model: /4mdln.glb');

            loader.load(
                "/Model02.glb",
                (gltf) => {
                    console.log('Model loaded successfully:', gltf);
                    const model = gltf.scene;

                    // Enhance materials for all meshes
                    model.traverse((child) => {
                        if (child.isMesh) {
                            console.log('Processing mesh:', child.name, 'Material:', child.material);
                            if (child.material) {
                                // Make sure the material is visible
                                child.material.transparent = false;
                                child.material.opacity = 1;
                                child.material.visible = true;
                                child.material.roughness = 0.3;
                                child.material.metalness = 0.8;
                                child.material.envMapIntensity = 1.5;
                                child.material.needsUpdate = true;

                                // Force basic material properties for visibility
                                if (!child.material.color) {
                                    child.material.color = new THREE.Color(0xffffff);
                                }
                            } else {
                                // If no material, create a basic one
                                child.material = new THREE.MeshStandardMaterial({
                                    color: 0xffffff,
                                    roughness: 0.1,
                                    metalness: 0.4
                                });
                            }

                            // Make sure geometry is valid
                            if (child.geometry) {
                                child.geometry.computeBoundingBox();
                                child.geometry.computeVertexNormals();
                            }
                        }
                    });

                    // Center and scale model for isometric view
                    const box = new THREE.Box3().setFromObject(model);
                    const center = box.getCenter(new THREE.Vector3());
                    const size = box.getSize(new THREE.Vector3());
                    const maxDim = Math.max(size.x, size.y, size.z);

                    // Adjusted scaling for isometric view
                    const scale = maxDim > 0 ? (isMobile ? 1.8 / maxDim : 3.5 / maxDim) : 1;

                    // Reset position and scale
                    model.position.set(0, 0, 0);
                    model.scale.setScalar(scale);

                    // Center the model in isometric view
                    model.position.set(
                        -center.x * scale,
                        -center.y * scale + (isMobile ? 0.3 : 0.5),
                        -center.z * scale
                    );

                    modelGroup.add(model);
                    modelRef.current = modelGroup;
                    setLoading(false);
                    console.log('Model added to scene');
                },
                (progress) => {
                    console.log('Loading progress:', (progress.loaded / progress.total * 100) + '%');
                },
                (error) => {
                    console.error("Model loading error:", error);
                    setError(`Failed to load model: ${error.message}`);
                    setLoading(false);
                }
            );

            // Animate lights in isometric-friendly pattern
            let time = 0;
            function animateLights() {
                time += 0.008; // Slower animation for isometric feel
                pointLight1.position.x = Math.sin(time) * 2.5;
                pointLight1.position.z = Math.cos(time) * 2.5;
                pointLight2.position.x = Math.sin(time + Math.PI) * 2.5;
                pointLight2.position.z = Math.cos(time + Math.PI) * 2.5;
            }

            function updateSize() {
                const width = container.clientWidth;
                const height = container.clientHeight;
                const aspect = width / height;

                // Update orthographic camera for isometric view
                const currentFrustumSize = isMobile ? 4 : 4.4;
                camera.left = -currentFrustumSize * aspect / 2;
                camera.right = currentFrustumSize * aspect / 2;
                camera.top = currentFrustumSize / 2;
                camera.bottom = -currentFrustumSize / 2;
                camera.updateProjectionMatrix();

                renderer.setSize(width, height);
            }

            window.addEventListener("resize", updateSize);
            updateSize();

            function animate() {
                animationFrameRef.current = requestAnimationFrame(animate);
                if (modelRef.current) {
                    // Slow rotation to maintain isometric aesthetic
                    modelRef.current.rotation.y += 0.006;
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
                if (renderer) {
                    renderer.dispose();
                }
            };
        } catch (err) {
            console.error('Error setting up 3D scene:', err);
            setError(`3D setup error: ${err.message}`);
            setLoading(false);
        }
    }, [isMobile]);

    return (
        <div className="relative w-full h-full" style={{ zIndex: 50 }}>
            <div
                ref={modelContainerRef}
                className="w-full h-full"
                style={{
                    background: "transparent",
                    position: "relative",
                    zIndex: 50,
                    height: isMobile ? "450px" : "100%",
                }}
            />
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white font-medium">Loading 3D Model...</div>
                </div>
            )}
            {error && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-red-400 font-medium text-center p-4">
                        Error: {error}
                        <br />
                        <small>Check browser console for details</small>
                    </div>
                </div>
            )}
        </div>
    );
}


const FacilitiesContent = ({ content }) => {
    return (
        <div className="max-w-7xl mx-auto px-4 mb-20">
            {/* Hero Section */}
            <div className="flex flex-col lg:flex-row items-stretch bg-black text-white rounded-[20px] overflow-hidden mb-8">
                {/* Left Side - Content */}
                <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                    <h2 className="text-[#FF252E] text-[20px] font-medium mb-4">
                        {content.title}
                    </h2>

                    <p className="text-white text-2xl mb-6">
                        {content.description}
                    </p>

                    <button className="bg-white text-black px-6 py-3 rounded-[12px] font-medium hover:bg-gray-100 transition-colors w-fit">
                        Explore More
                    </button>
                </div>

                {/* Right Side - 3D Model */}
                <div className="flex-1 h-64 md:top-10 lg:h-[500px] relative">
                    <ModelViewer />
                </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-4 lg:gap-5">
                <div className="lg:col-span-3 rounded-[20px] bg-[#EAEAEA] p-6 md:p-8 lg:p-6 xl:p-10">
                    <h1 className="text-[#FF0000] text-xl lg:text-xl xl:text-2xl">
                        <span className="text-black"> World-</span>
                        Class Manufacturing
                    </h1>
                    <p className="text-base lg:text-sm xl:text-base mt-4 text-black">
                        From sheet metal components to complete assemblies, our
                        manufacturing plants leverage cutting-edge technology to produce
                        high-performance auto components. With a focus on sustainability and
                        innovation, we ensure reliability at every stage of production.
                    </p>
                </div>

                <div className="lg:col-span-2 rounded-[20px] h-[300px] lg:h-auto">
                    <img
                        src={faBento4}
                        alt=""
                        className="w-full rounded-[20px] h-full object-cover"
                    />
                </div>

                <div className="lg:col-span-5 bg-[#9B9C9F33] overflow-hidden rounded-[20px] grid grid-cols-1 lg:grid-cols-2 md:px-10">
                    <img
                        src={faBento3}
                        alt=""
                        className="h-[300px] lg:h-[95%] w-full object-contain md:-ml-20 -ml-[50px] lg:mt-5"
                    />
                    <div className="flex flex-col  text-right items-center justify-center p-6 lg:p-0 gap-4 lg:gap-10">
                        <h1 className="text-xl lg:text-xl xl:text-2xl w-full lg:w-[90%] font-medium text-black">
                            Cutting- <span className="text-[#FF0000]">Edge Facilities</span>
                        </h1>
                        <p className="text-black text-base lg:text-sm xl:text-base">
                            Equipped with advanced manufacturing technology and in-house R&D,
                            our facilities are designed for efficiency, precision, and
                            scalability. We integrate the latest automation and quality
                            control systems to meet global industry standards.{" "}
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-20">
                <h1 className="text-[36px]">Tool Design</h1>
                <div className="mt-10 grid grid-cols-2 p-10">
                    <div>
                        <img src={tooldesign} width={488} height={313} className="rounded-[20px]"/>
                    </div>
                    <div>
                        <p>
                            Our Tool Design centers at Bawal and Waghodia are equipped with the latest CAD/CAM software and highly qualified engineering designers. They specialize in designing press tools, jigs, fixtures, gauges, reverse engineering, and manufacturing processes, supported by advanced workstations and plotters for precise, efficient tool development.
                        </p>
                        <div className="grid grid-cols-2 mt-10">
                            <div>
                                <h1 className="text-[#ED1C24] font-semibold text-[26px]">Bawal Haryana</h1>
                            <ul>
                                <li>Unigraphics NX</li>
                                <li>Pampstamp</li>
                                <li>FTI -Fast blank</li>
                                <li>FTI- Blank Nest</li>
                                <li>Hyper form</li>
                                <li>Auto Cad</li>
                            </ul>
                            </div>
                            <div className="">
                                <h1 className="text-[#ED1C24] font-semibold text-[26px]">Supported By Following Hardware (Work Stations)</h1>
                            <ul>
                                <li>Unigraphics NX</li>
                                <li>Pampstamp</li>
                                <li>FTI -Fast blank</li>
                                <li>FTI- Blank Nest</li>
                                <li>Hyper form</li>
                                <li>Auto Cad</li>
                                <li>HP XW-4600</li>
                                <li>IBM-Intelli-Star Z-Pro</li>
                            </ul>
                            </div>
                            <div>
                                <h1 className="text-[#ED1C24] font-semibold text-[26px]">Waghodia</h1>
                            <ul>
                                <li>CATIA V-5 –R-60</li>
                                <li>Pro-E Wildfire</li>
                                <li>Hyper Form ( Blank & Nest)</li>
                                <li>AutoCADt</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FacilitiesContent;