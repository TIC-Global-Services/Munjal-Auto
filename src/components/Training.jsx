import React, {useRef, useState, useEffect } from "react";
import img from "../assets/trainingBanner.png";
import logo from "../assets/logo.png";
import Footer from "./Footer";
import { Link, useLocation } from "react-router-dom";
import TopNav from "./TopNav";


import icon1 from "../assets/hero/icon.png";
import icon2 from "../assets/hero/icon2.png";
import youtube from "../assets/hero/youtube.png";
import insta from "../assets/hero/insta.png";

const Training = () => {
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
    <div className=" ">
      <div className="h-screen w-full   flex flex-col items-center justify-center relative">
        {/* Left Navigation */}
        {/* <div className="absolute text-sm left-20 top-20 transform -translate-y-1/2 md:flex hidden justify-between items-center z-[100] space-x-20">
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
              isActive("/products") ? "text-[#FF0000] font-bold" : "text-white"
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


<div className="z-[100] absolute w-full top-20 flex justify-between items-center ">
  <TopNav />
</div>
        {/* Background Image with Logo */}
        <div
          className="h-[90%] w-[94%] flex flex-col items-center justify-center rounded-[24px] relative"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "rgba(0, 0, 0, 0.32)",
            backgroundBlendMode: "multiply",
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

          
          {/* <div className="absolute inset-0 flex flex-col items-center justify-center"> */}
          {/* Timeline Line with Animation */}

          {/* Year Marker with Animation */}

          {/* Centered Text and Timeline Container */}
          <div className=" md:block flex items-center justify-center flex-col absolute text-left left-0">
            <h1 className="text-[#FFFCFC] rounded-[10px] px-10 py-4 text-[54px] font-[500] mb-12">
         Training
            </h1>

            {/* Timeline Line with Animation */}
          </div>
        </div>
      </div>
          <div>
            <h1 className=" text-[28px]  leading-[48px]  text-center mx-auto  mt-10 w-[60%]">At <span className="   text-[#ED1C24]">Munjal Auto </span> , training is a very important aspects of journey towards world class emphasizing the growth and development of personnels includes</h1>
          </div>
      <PinnedScrollSection/>
      {/* <MunjalAutoGroup />CardStack
      <BoardOfDirectors /> */}
      {/* <CardStack/> */}
      <div className=" -mt-80">
      <Footer />
      </div>
    </div>
  );
};
export default Training

 
// export default PinnedScrollSection;
// export default PinnedScrollSection;import React, { useRef } from 'react';
 
import { motion, useScroll, useTransform } from 'framer-motion';
 import train1 from "../assets/train1.png"
 import train2 from "../assets/train2.png"
 import train3 from "../assets/train3.png"
const PinnedScrollSection = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const cards = [
    {
      title: "Employee Development",
      description: "Creating a pool of readily available and adequate replacements for personnel who may leave or move up in the organization.",
      image: train1
    },
    {
      title: "Skill Enhancement",
      description: "Comprehensive training programs designed to enhance technical and soft skills of our workforce.",
      image:  train2
    },
    {
      title: "Leadership Development",
      description: "Nurturing future leaders through specialized training and mentorship programs.",
      image:  train3
    }
  ];

  return (
    <div className="relative -mt-20">
    <div ref={containerRef} className="h-[200vh] relative bg-transparent">
      <div className="sticky top-0 h-screen w-full bg-transparent flex items-center justify-center">
        <div className=" px-20 mx-auto w-full bg-transparent h-full flex items-center ">
          {/* Left Side - Stacked Images */}
          <div className="w-1/2 h-[70vh] relative bg-transparent flex items-center justify-center">
            <div className="relative w-full aspect-[4/3] bg-transparent h-full">
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0 w-full h-full  !bg-transparent rounded-2xl overflow-hidden  "
                  style={{
                    zIndex: useTransform(
                      scrollYProgress,
                      [index * 0.25, (index + 1) * 0.25],
                      [cards.length - index, 0]
                    ),
                    rotateZ: useTransform(
                      scrollYProgress,
                      [index * 0.25, (index + 1) * 0.25],
                      [index * 3 - 3, (index - 1) * 3 - 3]
                    ),
                    x: useTransform(
                      scrollYProgress,
                      [index * 0.25, (index + 1) * 0.25],
                      [index * 10, (index - 1) * 10]
                    ),
                    y: useTransform(
                      scrollYProgress,
                      [index * 0.25, (index + 1) * 0.25],
                      [index * 10, (index - 1) * 10]
                    ),
                    scale: useTransform(
                      scrollYProgress,
                      [(index * 0.25) - 0.05, index * 0.25, (index + 1) * 0.25],
                      [1, 1, 0.9]
                    ),
                    opacity: useTransform(
                      scrollYProgress,
                      [(index * 0.25) - 0.05, index * 0.25, (index + 1) * 0.25],
                      [1, 1, 0]
                    ),
                  }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className=" h-full w-[75%]  object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>

            {/* Right Side - Text */}
            <div className="w-full h-[70vh] relative flex items-center">
              <div className="relative  w-full">
                {cards.map((card, index) => (
                  <motion.div
                    key={index}
                    className="absolute w-full bg-white p-6 rounded-2xl shadow-lg"
                    style={{
                      y: useTransform(
                        scrollYProgress,
                        [(index * 0.25) - 0.05, index * 0.25, (index + 1) * 0.25],
                        ['30vh', '0vh', '-30vh']
                      ),
                      scale: useTransform(
                        scrollYProgress,
                        [(index * 0.25) - 0.05, index * 0.25, (index + 1) * 0.25],
                        [0.8, 1.2, 0.8]
                      ),
                      opacity: useTransform(
                        scrollYProgress,
                        [(index * 0.25) - 0.05, index * 0.25, (index + 1) * 0.25],
                        [0, 1, 0]
                      ),
                      visibility: useTransform(
                        scrollYProgress,
                        [(index * 0.25) - 0.05, index * 0.25, (index + 1) * 0.25],
                        ["hidden", "visible", "hidden"]
                      ),
                      pointerEvents: useTransform(
                        scrollYProgress,
                        [(index * 0.25) - 0.05, index * 0.25, (index + 1) * 0.25],
                        ["none", "auto", "none"]
                      )
                    }}
                  >
                    {/* <h2 className="text-2xl font-bold mb-3">{card.title}</h2> */}
                    <p className="text-gray-600 text-[20px]">{card.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 

