import React, { useState, useEffect } from "react";
import img from "../assets/productbanner.png";
import logo from "../assets/logo.png";

import { Link, useLocation } from "react-router-dom";

const Products = () => {
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
    <div className=" bg-gray-50">
      <div className="h-screen w-full   flex flex-col items-center justify-center relative">
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
          <div className=" md:block flex items-center justify-center flex-col absolute text-right right-0">
            <h1 className="text-[#FFFCFC] rounded-[10px] px-10 py-4 text-[54px] font-[500] mb-12">
              We Stand For​ <br />
              Quality & Technology
            </h1>

            {/* Timeline Line with Animation */}
          </div>
        </div>
      </div>
      <ProductsSec />
      
      {/* <MunjalAutoGroup />
      <Text/>
      <BoardOfDirectors /> */}
      <Footer/>  
    </div>
  );
};

export default Products;

import { motion } from "framer-motion";

import pro1 from "../assets/slider/Multi link.png";
import pro2 from "../assets/slider/CNG Cradle.png";
import pro3 from "../assets/slider/Ev Cradle.png";
import pro4 from "../assets/slider/Fuel Tank.png";

import pro5 from "../assets/slider/440 cc.png";
import pro6 from "../assets/slider/125 cc.png"
import pro7 from "../assets/slider/125 cc scooter.png"
import pro8 from "../assets/slider/100 cc.png"

import pro9 from "../assets/slider/Battery Tray.png"
import pro10 from "../assets/slider/Rear Bumper.png"
import pro11 from "../assets/slider/crossmember-at-the-firewall.png"
import pro12 from "../assets/slider/Swing Arm.png"

import pro13 from "../assets/slider/COPV Reender.png"
import pro14 from "../assets/slider/2w Fender.png"
import pro15 from "../assets/slider/Composite Swing Arm.png"
import pro16 from "../assets/slider/COPV White cylinder.png"
const ProductsSec = () => {
  const [activeTab, setActiveTab] = useState("auto");
  const location = useLocation();

  const tabs = [
    { id: "auto", label: "Chase parts & Assemble" },
    { id: "exhaust", label: "Exhaust System" },
    { id: "fuel", label: "BIW Assembly" },
    { id: "biw", label: "Lightweight Composite Parts" },
    
  ];

  const autoComponents = [
    {
      title: "Multi Link",
      description: "MAIL has the capability to manufacture Steel Wheel Rim for two wheelers, three wheelers and passenger cars, of the following specifications:",
      image: pro1,
    },
    {
      title: "CNG Cradle",
      description: "MAIL has the capability to manufacture Steel Wheel Rim for two wheelers, three wheelers and passenger cars, of the following specifications:",
      image: pro2,
    },
    {
      title: "Subframe Assembly for EV",
      description: "Precision-engineered structural components",
      image: pro3,
    },
    {
      title: "Fuel Tank",
      description: "Fuel tanks for various vehicles",
      image: pro4,
    }
  ];

  const exhaustSystems = [
    {
      title: "440 CC",
      description: "Advanced emission control systems",
      image: pro5,
    },
    {
      title: "125 CC",
      description: "Noise reduction and flow optimization",
      image: pro6,
    },
    {
      title: "125 CC (Scooter)",
      description: "Integrated exhaust solutions",
      image: pro7,
    },
    {
      title: "100 CC",
      description: "Advanced emission control systems",
      image: pro8,
    },
  ];

  const fuelTanks = [
    {
      title: "Battery Tray",
      description: "Fuel tanks for various vehicles",
      image: pro9,
    },
    {
      title: "Rear Bumper",
      description: "Fuel tanks for various vehicles",
      image: pro10,
    },
    {
      title: "Firewall Cross Member",
      description: "Fuel tanks for various vehicles",
      image: pro11,
    },
    {
      title: "Swing Arm for 2W",
      description: "Fuel tanks for various vehicles",
      image: pro12,
    },
  ];

  const biwAssemblies = [
     
    {
      title: "COPV Type IV CNG Cylinder ",
      description: "Precision-engineered structural components",
      image: pro13,
    },
    {
      title: "Fenders for 2W",
      description: "Precision-engineered structural components",
      image: pro14,
    },
    {
      title: "Composite Swing Arm",
      description: "Precision-engineered structural components",
      image: pro15,
    },
    {
      title: "COPV Type IV Plastic Liner",
      description: "Precision-engineered structural components",
      image: pro16,
    },
  ];

  const getActiveContent = () => {
    switch(activeTab) {
      case 'auto':
        return autoComponents;
      case 'exhaust':
        return exhaustSystems;
      case 'fuel':
        return fuelTanks;
      case 'biw':
        return biwAssemblies;
      default:
        return autoComponents;
    }
  };
 


  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen">
      {/* Products Section */}
      <div className="container mx-auto px-4 py-16">
        {/* Tabs */}
        <div className="flex justify-between overflow-x-scroll whitespace-nowrap space-x-8 mb-12">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-5 rounded-full lg:text-[18px] md:text-sm text-xs xl:text-[20px] font-normal ${
                activeTab === tab.id
                  ? " text-white " 
                  : "bg-[#F4F4F4] text-black"
              }`}
              style={{
                border: '1px solid #FFFFFF',
                background: activeTab === tab.id ? 'linear-gradient(102.23deg, #ED1C24 9.21%, #871015 122.12%)' : undefined
              }}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>
          <div className="xl:text-[44px] lg:text-4xl text-base md:text-2xl my-24 xl:leading-[55px] max-w-7xl mx-auto text-center font-[400]">
          Manufacturing chassis components and assemblies for over a decade for various PV models, including Multi-Link Subframe Assemblies for 4W, Longitudinal Arm, CNG Tank Cradles, Camberlinks, Fuel Tanks, and more
          </div>
        {/* Content for all tabs */}
        {getActiveContent().map((item, index) => (
  <motion.div
     
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="grid place-content-end bg-white md:grid-cols-2  lg:grid-cols-3 gap-8 rounded-xl items-center justify-center lg:items-end px-[20px] py-7 mb-12"
  >
    <div className="bg-[#EBEBEF]  rounded w-80 h-72 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
      >
        <img
         src={item.image}
         alt={item.title}
          className="h-52 w-auto"
        />
      </motion.div>
    </div>
    
    <div className="text-[#ED1C24] lg:ml-0  xl:-ml-16 transition-all duration-500">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-[28px] font-bold mb-4"
      >
        {item.title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-[#8C8989]"
      >
       MAIL has the capability to manufacture Steel Wheel Rim for two wheelers, three wheelers and passenger cars, of the following specifications:
      </motion.p>
      <div className="text-white xl:hidden lg:hidden  md:flex text-left relative top-4 hidden items-start justify-start">
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ delay: 0.6, duration: 0.3 }}
        className="text-base text-right bg-black px-4 py-2 rounded-xl mb-4 cursor-pointer"
      >
        Explore More
      </motion.h2>
    </div>
    </div>
    <div className="text-white xl:flex lg:flex md:hidden text-left relative top-4 flex lg:items-end  items-start justify-start lg:justify-end">
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ delay: 0.6, duration: 0.3 }}
        className="text-base text-right bg-black px-4 py-2 rounded-xl mb-4 cursor-pointer"
      >
        Explore More
      </motion.h2>
    </div>
     

  </motion.div>
))}


      </div>
    </div>
  );
};


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



