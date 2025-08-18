import React, { useEffect, useRef, useState } from 'react'
import img from "../../assets/homebanner.png";
import logo from "../../assets/logo.png";
import videoSrc from "../../assets/heroVideo.mp4";
import icon1 from "../../assets/hero/icon.png";
import icon2 from "../../assets/hero/icon2.png";
import { Link } from "react-router-dom";

const HomeHero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [videoError, setVideoError] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        // Trigger animation after component mount
        setIsVisible(true);
    }, []);

    // Handle video load success
    const handleVideoLoad = () => {
        console.log("Video loaded successfully");
        setVideoLoaded(true);
        setVideoError(false);
    };

    // Handle video errors
    const handleVideoError = (e) => {
        console.error("Video error:", e);
        setVideoError(true);
        setVideoLoaded(false);
    };

    // Attempt to play video when loaded
    const handleCanPlay = () => {
        if (videoRef.current) {
            videoRef.current.play().catch((e) => {
                console.log("Autoplay prevented:", e);
            });
        }
    };

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center relative">


            {/* Background Video Container */}
            <div className="h-[90%] w-[94%] flex flex-col items-center justify-center rounded-[24px] relative overflow-hidden bg-gray-900">
                {/* Video Background */}
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    poster={img}
                    onLoadedData={handleVideoLoad}
                    onError={handleVideoError}
                    onCanPlay={handleCanPlay}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${videoLoaded && !videoError ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <source src={videoSrc} type="video/mp4" />
                    <source src="../../assets/heroVideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

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


                {/* Fallback Background Image */}
                {(videoError || !videoLoaded) && (
                    <img
                        src={img}
                        alt="Hero Background"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                )}

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                {/* Logo */}
                <img
                    src={logo}
                    alt="Company Logo"
                    className="absolute -top-[0.9px] w-[60%] md:w-1/3 max-w-md left-1/2 transform -translate-x-1/2 z-20"
                />

                {/* Centered Content */}
                <div className="text-center relative z-20 px-4 max-w-4xl mx-auto">
                    <h1
                        className={`text-white text-xl md:text-5xl font-bold drop-shadow-2xl mb-4 transition-all duration-1000 
    leading-relaxed md:leading-[3.9rem] 
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                    >
                        Pioneering Lightweight <br className="md:hidden block" />
                        Solutions <br className="md:block hidden" />
                        with Cutting-
                        <br className="md:hidden block" />
                        Edge Technology
                    </h1>

                    <p
                        className={` block text-white md:text-md text-sm mt-4 mb-6 md:max-w-xl max-w-xs mx-auto leading-relaxed transition-all duration-1000 delay-300 ${isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                            }`}
                    >
                        From automotive breakthroughs to renewable energy solutions,
                        Munjal Auto Industries delivers quality and cutting-edge
                        technology that drives progress.
                    </p>
                    <Link to="/products">
                        <button
                            className={`mt-6 px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 hover:scale-105 transition-all duration-300 shadow-lg ${isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                                }`}
                        >
                            Explore Our Innovations
                        </button>
                    </Link>
                </div>


            </div>
        </div>
    )
}

export default HomeHero
