import React, { useState, useEffect, useRef } from "react";
import img from "../../assets/homebanner.png";
import logo from "../../assets/logo.png";
import Secondsection from "../home/Secondsection";
import ThirdSection from "../home/ThirdSection";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import videoSrc from "../../assets/heroVideo.mp4";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);
  const location = useLocation();

  // Function to check if the link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

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
      videoRef.current.play().catch(e => {
        console.log("Autoplay prevented:", e);
      });
    }
  };

  return (
    <>
      <div className="mx-auto max-w-[2500px]">
        <div className="h-screen w-full flex flex-col items-center justify-center relative">
          {/* Left Navigation */}
          <div className="absolute text-sm left-20 top-20 transform -translate-y-1/2 md:flex hidden justify-between items-center z-[100] space-x-20">
            <Link
              to="/"
              className={`hover:text-gray-300 transition-colors duration-300 ${
                isActive("/") ? "text-[#FF0000] font-bold" : "text-white"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className={`hover:text-gray-300 transition-colors duration-300 ${
                isActive("/about-us")
                  ? "text-[#FF0000] font-bold"
                  : "text-white"
              }`}
            >
              About Us
            </Link>
            <Link
              to="/products"
              className={`hover:text-gray-300 transition-colors duration-300 ${
                isActive("/products")
                  ? "text-[#FF0000] font-bold"
                  : "text-white"
              }`}
            >
              Products
            </Link>
            <Link
              to="/philosophy"
              className={`hover:text-gray-300 transition-colors duration-300 ${
                isActive("/philosophy")
                  ? "text-[#FF0000] font-bold"
                  : "text-white"
              }`}
            >
              Philosophy
            </Link>
          </div>

          {/* Right Navigation */}
          <div className="absolute text-sm right-20 top-20 transform -translate-y-1/2 md:flex hidden items-center justify-between z-[100] space-x-12">
            <Link
              to="/quality"
              className={`hover:text-gray-300 transition-colors duration-300 ${
                isActive("/quality") ? "text-[#FF0000] font-bold" : "text-white"
              }`}
            >
              Quality
            </Link>
            <Link
              to="/finance"
              className={`hover:text-gray-300 transition-colors duration-300 ${
                isActive("/finance") ? "text-[#FF0000] font-bold" : "text-white"
              }`}
            >
              Finance
            </Link>
            <Link
              to="/training"
              className={`hover:text-gray-300 transition-colors duration-300 ${
                isActive("/training")
                  ? "text-[#FF0000] font-bold"
                  : "text-white"
              }`}
            >
              Training
            </Link>
            <Link
              to="/facilities"
              className={`hover:text-gray-300 transition-colors duration-300 ${
                isActive("/facilities") ? "text-[#FF0000] font-bold" : "text-white"
              }`}
            >
              Facilities
            </Link>
            <Link
              to="/contact"
              className={`hover:text-gray-300 transition-colors duration-300 ${
                isActive("/contact") ? "text-[#FF0000] font-bold" : "text-white"
              }`}
            >
              Contact
            </Link>
          </div>

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
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                videoLoaded && !videoError ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <source src={videoSrc} type="video/mp4" />
              <source src="../../assets/heroVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

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
              className="absolute top-4 md:top-0 w-[60%] md:w-1/3 max-w-md left-1/2 transform -translate-x-1/2 z-20"
            />

            {/* Centered Content */}
            <div className="text-center relative z-20 px-4 max-w-4xl mx-auto">
              <h1 className={`text-white text-xl md:text-5xl font-bold drop-shadow-2xl mb-4 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                Pioneering Lightweight{" "}
                <br className="md:hidden block" />
                Solutions{" "}
                <br className="md:block hidden" />
                with Cutting-
                <br className="md:hidden block" />
                Edge Technology
              </h1>
              
              <p className={`md:hidden block text-white text-sm mt-4 mb-6 max-w-xs mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                From automotive breakthroughs to renewable energy solutions,
                Munjal Auto Industries delivers quality and cutting-edge
                technology that drives progress.
              </p>
              
              <button className={`mt-6 px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 hover:scale-105 transition-all duration-300 shadow-lg ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                Explore Our Innovations
              </button>
            </div>

            {/* Loading indicator for video */}
            {!videoLoaded && !videoError && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
              </div>
            )}
          </div>
        </div>

        {/* Second Section */}
        <div className={`py-10 md:py-40 md:leading-[80px] text-[18px] flex items-center justify-center text-center md:text-[60px] transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="w-[80%] font-bold text-gray-800">
            Designing the Future with Lightweight Solutions and Advanced
            Technology
          </h1>
        </div>

        <Secondsection />
        <ThirdSection />
      </div>
    </>
  );
};

export default Home;
