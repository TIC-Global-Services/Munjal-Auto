import React, { useState, useEffect } from "react";
import img from "../assets/products/quality.png";
import logo from "../assets/CompanyLogo.png";
import SteelRing1 from "../assets/products/ring1.png";
import SteelRing2 from "../assets/products/ring2.png";
import TopNav from "./TopNav";

import { Link, useLocation } from "react-router-dom";
import icon1 from "../assets/hero/icon.png";
import icon2 from "../assets/hero/icon2.png";
import youtube from "../assets/hero/youtube.png";
import insta from "../assets/hero/insta.png";



const tabs = [
  { id: "steel", label: "Steel wheel Rim" },
  { id: "auto", label: "Chase parts & Assemble" },
  { id: "exhaust", label: "Exhaust System" },
  { id: "fuel", label: "BIW Assembly" },
  { id: "biw", label: "Lightweight Composite Parts" },
];
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
          }}
        >
          {/* Logo */}
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="absolute -top-[0.9px] w-[60%] md:w-1/3 left-1/2 transform -translate-x-1/2"
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

          {/* Centered Text and Timeline Container */}
          <div className=" md:block flex items-center justify-center flex-col absolute md:text-right text-center right-0">
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
      <FooterMain />
    </div>
  );
};

export default Products;

import { motion, AnimatePresence } from "framer-motion";

import pro1 from "../assets/slider/Multi link.png";
import pro2 from "../assets/slider/CNG Cradle.png";
import pro3 from "../assets/slider/Ev Cradle.png";
import pro4 from "../assets/slider/Fuel Tank.png";

import pro5 from "../assets/slider/440 cc.png";
import pro6 from "../assets/slider/125 cc.png";
import pro7 from "../assets/slider/125 cc scooter.png";
import pro8 from "../assets/slider/100 cc.png";

import pro9 from "../assets/slider/Battery Tray.png";
import pro10 from "../assets/slider/Rear Bumper.png";
import pro11 from "../assets/slider/crossmember-at-the-firewall.png";
import pro12 from "../assets/slider/Swing Arm.png";

import pro13 from "../assets/slider/COPV Reender.png";
import pro14 from "../assets/slider/2w Fender.png";
import pro15 from "../assets/slider/Composite Swing Arm.png";
import pro16 from "../assets/slider/COPV White cylinder.png";
const ProductsSec = () => {
  const [activeTab, setActiveTab] = useState("steel");
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpanded = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  const getActiveDescription = () => {
    const descObj = description.find((item) => item.id === activeTab);
    return descObj ? descObj.wholeDescription : "";
  };


  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      
      if (hash && tabs.some(tab => tab.id === hash)) {
        // Update active tab to match hash
        setActiveTab(hash);
        
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          const element = document.querySelector(`#${hash}`);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 100);
      }
    };
  
    // Handle initial hash on component mount
    handleHashChange();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Also listen for popstate (browser back/forward)
    window.addEventListener('popstate', handleHashChange);
    
    // Cleanup
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, [tabs]);

  const description = [
    {
      id: "steel",
      wholeDescription:
        "Munjal Auto Industries manufactures steel wheel rims for two-wheelers, three-wheelers, and passenger cars. Our rims are designed to meet international quality standards with precision engineering and robust performance specifications.",
    },
    {
      id: "auto",
      wholeDescription:
        "Manufacturing chassis components and assemblies for over a decade for various PV models, including Multi-Link Subframe Assemblies for 4W, Longitudinal Arm, CNG Tank Cradles, Camberlinks, Fuel Tanks, and more.",
    },
    {
      id: "exhaust",
      wholeDescription:
        "One of the largest muffler manufacturer in world, producing around 32,000 mufflers per day, ranging from 100 cc to 800 cc for motorcycle and Scooters ",
    },
    {
      id: "fuel",
      wholeDescription:
        "Manufacturing BIW parts and assemblies for over a decade, such as Battery Tray Assemblies, Radiator Bottom Assemblies, Rear Bumper Assemblies, Firewall Cross Members, Frunk Assem-blies, and more",
    },
    {
      id: "biw",
      wholeDescription:
        "Equipped with complete know-how of composites and lightweight solutions, including the design, engineering and manufacturing of COPV Type IV CNG Cylinder, Fenders for 2W, Composite Swing Arms, and more",
    },
  ];



  const steel = [
    {
      title: "Steel Wheel Rim",
      description:
        "The products made to match international quality standards to ensure uniformity of gauge, well-defined profile, and leak-proof weld joints.",
      fullDescription: [
        "MAIL has the capability to manufacture Steel Wheel Rim for two wheelers, three wheelers and passenger cars, of the following specifications:",
        "• Nominal Diameter: 10” ~ 14”",
        "• Nominal Width: 2.0” ~ 4.5”",
        "• Rim Thickness: 2.0 mm ~ 3.0 mm (using SAPH Equivalent High Tensile Strength Steel)",
        "• Rim Profile: B, D, J and other International Standards",
        "• Disc Thickness: 2.0 mm ~ 4.0 mm",
        "",
        "The products are made to match international quality standards to ensure uniformity of gauge, well-defined profile, and leak-proof weld joints.",
      ],
      image: SteelRing1,
    },
    {
      title: "Spoke Wheel Rim",
      description:
        "The installed plant capacity is 10,000 Rims per day using imported multistage, profile forming rolling mills.",
      fullDescription: [
        "The installed plant capacity is 10,000 Rims per day using imported multistage, profile forming rolling mills from Japan and Taiwan.",
        "",
        "We have the capability to manufacture Spoke Rims of the following range using IS Grade cold rolled steel:",
        "• Nominal Rim Diameter: 16” ~ 21”",
        "• Rim Thickness: 1.4” ~ 3.0”",
        "• Spoke Hole: 36 nos. or as per Customer Specifications",
        "",
        "All Rims are Tri–Nickel chrome plated to International Standards.",
      ],
      image: SteelRing2,
    },
  ];

  const autoComponents = [
    {
      title: "Multi Link",
      description:
        "MAIL has the capability to manufacture Steel Wheel Rim for two wheelers, three wheelers and passenger cars, of the following specifications:",
      fullDescription: [
        "MAIL has the capability to manufacture Steel Wheel Rim for two wheelers, three wheelers and passenger cars, of the following specifications:",
        "• Nominal Diameter: 10” ~ 14”",
        "• Nominal Width: 2.0” ~ 4.5”",
        "• Rim Thickness: 2.0 mm ~ 3.0 mm (using SAPH Equivalent High Tensile Strength Steel)",
        "• Rim Profile: B, D, J and other International Standards",
        "• Disc Thickness: 2.0 mm ~ 4.0 mm",
        "",
        "The products are made to match international quality standards to ensure uniformity of gauge, well-defined profile, and leak-proof weld joints.",
      ],
      image: pro1,
    },
    {
      title: "CNG Cradle",
      description:
        "MAIL has the capability to manufacture Steel Wheel Rim for two wheelers, three wheelers and passenger cars, of the following specifications:",
      fullDescription: [
        "MAIL has the capability to manufacture Steel Wheel Rim for two wheelers, three wheelers and passenger cars, of the following specifications:",
        "• Nominal Diameter: 10” ~ 14”",
        "• Nominal Width: 2.0” ~ 4.5”",
        "• Rim Thickness: 2.0 mm ~ 3.0 mm (using SAPH Equivalent High Tensile Strength Steel)",
        "• Rim Profile: B, D, J and other International Standards",
        "• Disc Thickness: 2.0 mm ~ 4.0 mm",
        "",
        "The products are made to match international quality standards to ensure uniformity of gauge, well-defined profile, and leak-proof weld joints.",
      ],
      image: pro2,
    },
    {
      title: "Subframe Assembly for EV",
      description: "Precision-engineered structural components",
      fullDescription: [
        "MAIL has the capability to manufacture Steel Wheel Rim for two wheelers, three wheelers and passenger cars, of the following specifications:",
        "• Nominal Diameter: 10” ~ 14”",
        "• Nominal Width: 2.0” ~ 4.5”",
        "• Rim Thickness: 2.0 mm ~ 3.0 mm (using SAPH Equivalent High Tensile Strength Steel)",
        "• Rim Profile: B, D, J and other International Standards",
        "• Disc Thickness: 2.0 mm ~ 4.0 mm",
        "",
        "The products are made to match international quality standards to ensure uniformity of gauge, well-defined profile, and leak-proof weld joints.",
      ],
      image: pro3,
    },
    {
      title: "Fuel Tank",
      description: "Fuel tanks for various vehicles",
      fullDescription: [
        "MAIL has the capability to manufacture Steel Wheel Rim for two wheelers, three wheelers and passenger cars, of the following specifications:",
        "• Nominal Diameter: 10” ~ 14”",
        "• Nominal Width: 2.0” ~ 4.5”",
        "• Rim Thickness: 2.0 mm ~ 3.0 mm (using SAPH Equivalent High Tensile Strength Steel)",
        "• Rim Profile: B, D, J and other International Standards",
        "• Disc Thickness: 2.0 mm ~ 4.0 mm",
        "",
        "The products are made to match international quality standards to ensure uniformity of gauge, well-defined profile, and leak-proof weld joints.",
      ],
      image: pro4,
    },
  ];

  const exhaustSystems = [
    {
      title: "440 CC",
      description: "Advanced emission control systems",
      fullDescription: [
        "MAIL has the capability to manufacture Steel Wheel Rim for two wheelers, three wheelers and passenger cars, of the following specifications:",
        "• Nominal Diameter: 10” ~ 14”",
        "• Nominal Width: 2.0” ~ 4.5”",
        "• Rim Thickness: 2.0 mm ~ 3.0 mm (using SAPH Equivalent High Tensile Strength Steel)",
        "• Rim Profile: B, D, J and other International Standards",
        "• Disc Thickness: 2.0 mm ~ 4.0 mm",
        "",
        "The products are made to match international quality standards to ensure uniformity of gauge, well-defined profile, and leak-proof weld joints.",
      ],
      image: pro5,
    },
    {
      title: "125 CC",
      description: "Noise reduction and flow optimization",
      fullDescription: [
        "MAIL has the capability to manufacture Steel Wheel Rim for two wheelers, three wheelers and passenger cars, of the following specifications:",
        "• Nominal Diameter: 10” ~ 14”",
        "• Nominal Width: 2.0” ~ 4.5”",
        "• Rim Thickness: 2.0 mm ~ 3.0 mm (using SAPH Equivalent High Tensile Strength Steel)",
        "• Rim Profile: B, D, J and other International Standards",
        "• Disc Thickness: 2.0 mm ~ 4.0 mm",
        "",
        "The products are made to match international quality standards to ensure uniformity of gauge, well-defined profile, and leak-proof weld joints.",
      ],
      image: pro6,
    },
    {
      title: "125 CC (Scooter)",
      description: "Integrated exhaust solutions",
      fullDescription: [
        "MAIL has the capability to manufacture Steel Wheel Rim for two wheelers, three wheelers and passenger cars, of the following specifications:",
        "• Nominal Diameter: 10” ~ 14”",
        "• Nominal Width: 2.0” ~ 4.5”",
        "• Rim Thickness: 2.0 mm ~ 3.0 mm (using SAPH Equivalent High Tensile Strength Steel)",
        "• Rim Profile: B, D, J and other International Standards",
        "• Disc Thickness: 2.0 mm ~ 4.0 mm",
        "",
        "The products are made to match international quality standards to ensure uniformity of gauge, well-defined profile, and leak-proof weld joints.",
      ],
      image: pro7,
    },
    {
      title: "100 CC",
      description: "Advanced emission control systems",
      fullDescription: [
        "MAIL has the capability to manufacture Steel Wheel Rim for two wheelers, three wheelers and passenger cars, of the following specifications:",
        "• Nominal Diameter: 10” ~ 14”",
        "• Nominal Width: 2.0” ~ 4.5”",
        "• Rim Thickness: 2.0 mm ~ 3.0 mm (using SAPH Equivalent High Tensile Strength Steel)",
        "• Rim Profile: B, D, J and other International Standards",
        "• Disc Thickness: 2.0 mm ~ 4.0 mm",
        "",
        "The products are made to match international quality standards to ensure uniformity of gauge, well-defined profile, and leak-proof weld joints.",
      ],
      image: pro8,
    },
  ];

  const fuelTanks = [
    {
      title: "Battery Tray",
      description: "Fuel tanks for various vehicles",
      fullDescription: [
        "MAIL has the capability to manufacture Steel Wheel Rim for two wheelers, three wheelers and passenger cars, of the following specifications:",
        "• Nominal Diameter: 10” ~ 14”",
        "• Nominal Width: 2.0” ~ 4.5”",
        "• Rim Thickness: 2.0 mm ~ 3.0 mm (using SAPH Equivalent High Tensile Strength Steel)",
        "• Rim Profile: B, D, J and other International Standards",
        "• Disc Thickness: 2.0 mm ~ 4.0 mm",
        "",
        "The products are made to match international quality standards to ensure uniformity of gauge, well-defined profile, and leak-proof weld joints.",
      ],
      image: pro9,
    },
    {
      title: "Rear Bumper",
      description: "Fuel tanks for various vehicles",
      fullDescription: [
        "MAIL has the capability to manufacture Steel Wheel Rim for two wheelers, three wheelers and passenger cars, of the following specifications:",
        "• Nominal Diameter: 10” ~ 14”",
        "• Nominal Width: 2.0” ~ 4.5”",
        "• Rim Thickness: 2.0 mm ~ 3.0 mm (using SAPH Equivalent High Tensile Strength Steel)",
        "• Rim Profile: B, D, J and other International Standards",
        "• Disc Thickness: 2.0 mm ~ 4.0 mm",
        "",
        "The products are made to match international quality standards to ensure uniformity of gauge, well-defined profile, and leak-proof weld joints.",
      ],
      image: pro10,
    },
    {
      title: "Firewall Cross Member",
      description: "Fuel tanks for various vehicles",
      fullDescription: [
        "MAIL has the capability to manufacture Steel Wheel Rim for two wheelers, three wheelers and passenger cars, of the following specifications:",
        "• Nominal Diameter: 10” ~ 14”",
        "• Nominal Width: 2.0” ~ 4.5”",
        "• Rim Thickness: 2.0 mm ~ 3.0 mm (using SAPH Equivalent High Tensile Strength Steel)",
        "• Rim Profile: B, D, J and other International Standards",
        "• Disc Thickness: 2.0 mm ~ 4.0 mm",
        "",
        "The products are made to match international quality standards to ensure uniformity of gauge, well-defined profile, and leak-proof weld joints.",
      ],
      image: pro11,
    },
    {
      title: "Swing Arm for 2W",
      description: "Fuel tanks for various vehicles",
      fullDescription: [
        "MAIL has the capability to manufacture Steel Wheel Rim for two wheelers, three wheelers and passenger cars, of the following specifications:",
        "• Nominal Diameter: 10” ~ 14”",
        "• Nominal Width: 2.0” ~ 4.5”",
        "• Rim Thickness: 2.0 mm ~ 3.0 mm (using SAPH Equivalent High Tensile Strength Steel)",
        "• Rim Profile: B, D, J and other International Standards",
        "• Disc Thickness: 2.0 mm ~ 4.0 mm",
        "",
        "The products are made to match international quality standards to ensure uniformity of gauge, well-defined profile, and leak-proof weld joints.",
      ],
      image: pro12,
    },
  ];

  const biwAssemblies = [
    {
      title: "COPV Type IV CNG Cylinder ",
      description: "Precision-engineered structural components",
      fullDescription: [
        "MAIL has the capability to manufacture Steel Wheel Rim for two wheelers, three wheelers and passenger cars, of the following specifications:",
        "• Nominal Diameter: 10” ~ 14”",
        "• Nominal Width: 2.0” ~ 4.5”",
        "• Rim Thickness: 2.0 mm ~ 3.0 mm (using SAPH Equivalent High Tensile Strength Steel)",
        "• Rim Profile: B, D, J and other International Standards",
        "• Disc Thickness: 2.0 mm ~ 4.0 mm",
        "",
        "The products are made to match international quality standards to ensure uniformity of gauge, well-defined profile, and leak-proof weld joints.",
      ],
      image: pro13,
    },
    {
      title: "Fenders for 2W",
      description: "Precision-engineered structural components",
      fullDescription: [
        "MAIL has the capability to manufacture Steel Wheel Rim for two wheelers, three wheelers and passenger cars, of the following specifications:",
        "• Nominal Diameter: 10” ~ 14”",
        "• Nominal Width: 2.0” ~ 4.5”",
        "• Rim Thickness: 2.0 mm ~ 3.0 mm (using SAPH Equivalent High Tensile Strength Steel)",
        "• Rim Profile: B, D, J and other International Standards",
        "• Disc Thickness: 2.0 mm ~ 4.0 mm",
        "",
        "The products are made to match international quality standards to ensure uniformity of gauge, well-defined profile, and leak-proof weld joints.",
      ],
      image: pro14,
    },
    {
      title: "Composite Swing Arm",
      description: "Precision-engineered structural components",
      fullDescription: [
        "MAIL has the capability to manufacture Steel Wheel Rim for two wheelers, three wheelers and passenger cars, of the following specifications:",
        "• Nominal Diameter: 10” ~ 14”",
        "• Nominal Width: 2.0” ~ 4.5”",
        "• Rim Thickness: 2.0 mm ~ 3.0 mm (using SAPH Equivalent High Tensile Strength Steel)",
        "• Rim Profile: B, D, J and other International Standards",
        "• Disc Thickness: 2.0 mm ~ 4.0 mm",
        "",
        "The products are made to match international quality standards to ensure uniformity of gauge, well-defined profile, and leak-proof weld joints.",
      ],
      image: pro15,
    },
    {
      title: "COPV Type IV Plastic Liner",
      description: "Precision-engineered structural components",
      fullDescription: [
        "MAIL has the capability to manufacture Steel Wheel Rim for two wheelers, three wheelers and passenger cars, of the following specifications:",
        "• Nominal Diameter: 10” ~ 14”",
        "• Nominal Width: 2.0” ~ 4.5”",
        "• Rim Thickness: 2.0 mm ~ 3.0 mm (using SAPH Equivalent High Tensile Strength Steel)",
        "• Rim Profile: B, D, J and other International Standards",
        "• Disc Thickness: 2.0 mm ~ 4.0 mm",
        "",
        "The products are made to match international quality standards to ensure uniformity of gauge, well-defined profile, and leak-proof weld joints.",
      ],
      image: pro16,
    },
  ];

  const getActiveContent = () => {
    switch (activeTab) {
      case "steel":
        return steel;
      case "auto":
        return autoComponents;
      case "exhaust":
        return exhaustSystems;
      case "fuel":
        return fuelTanks;
      case "biw":
        return biwAssemblies;
      default:
        return steel;
    }
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen">
      {/* Products Section */}
      <div className="container mx-auto px-10 py-16">
        {/* Tabs */}
        <div className="mb-8">

        <div className="overflow-x-auto scrollbar-hide mb-4 sm:mb-6 md:mb-8 ">
          <div className="flex gap-2 sm:gap-3 md:gap-4 min-w-max px-2 sm:px-4 pb-2 justify-center items-center">
            {tabs.map((tab) => (
              <motion.button
                key={`scroll-${tab.id}`}
                id={`scroll-${tab.id}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full font-medium text-sm md:text-base px-4 md:px-6 py-2 md:py-3 transition-colors duration-300 flex-shrink-0 ${
                  activeTab === tab.id ? "text-white" : "bg-[#F4F4F4] text-black"
                }`}
                style={{
                  border: "1px solid #FFFFFF",
                  background:
                    activeTab === tab.id
                      ? "linear-gradient(102.23deg, #ED1C24 9.21%, #871015 122.12%)"
                      : undefined,
                }}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

        <div className="text-black xl:text-[28px] xl:leading-[44px] py-10 text-center">
          {getActiveDescription()}
        </div>
        {/* Content for all tabs */}

        <section id={activeTab} className="scroll-mt-20"> {/* ✅ This creates ID like "steel" */}
  {getActiveContent().map((item, index) => (
    <motion.div
      key={index}  // ✅ Remove the ID from here
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-12 overflow-hidden"
    >
          {/* Desktop Layout: Row with 3 columns */}
          <div className="hidden md:grid md:grid-cols-12 lg:grid-cols-12 gap-0 items-center min-h-[320px] w-full">
            {/* Image Section - Takes 4 columns on md, 3 on lg */}
            <div className="md:col-span-4 lg:col-span-3 bg-[#EBEBEF] flex items-center justify-center p-6 h-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                transition={{
                  delay: 0.3,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="flex items-center justify-center"
              >
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full max-w-[240px] h-auto object-contain"
                />
              </motion.div>
            </div>

            {/* Content Section - Takes 6 columns on md, 7 on lg */}
            <div className="md:col-span-6 lg:col-span-7 p-8 text-[#ED1C24]">
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-[28px] font-bold mb-4"
              >
                {item.title}
              </motion.h2>

              <div className="text-[#8C8989]">
                <motion.div className="overflow-hidden">
                  <motion.p
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    className="mb-4 text-base leading-relaxed"
                  >
                    {item.description}
                  </motion.p>

                  <AnimatePresence>
                    {expandedItems[index] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        {item.fullDescription.map((desc, descIndex) => (
                          <motion.p
                            key={descIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{
                              delay: expandedItems[index]
                                ? descIndex * 0.1
                                : (item.fullDescription.length - descIndex - 1) * 0.05,
                              duration: 0.5,
                              ease: "easeOut",
                            }}
                            className="mb-3 text-base leading-relaxed"
                          >
                            {desc}
                          </motion.p>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>

            {/* Button Section - Takes 2 columns, positioned bottom right */}
            <div className="md:col-span-2 lg:col-span-2 p-6 flex items-end justify-end h-full">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: 0.6, duration: 0.3 }}
                className="bg-black text-white px-6 py-3 rounded-xl text-base font-medium cursor-pointer transition-all duration-200 hover:bg-gray-800 shadow-md whitespace-nowrap"
                onClick={() => toggleExpanded(index)}
              >
                {expandedItems[index] ? "Show Less" : "Explore More"}
              </motion.button>
            </div>
          </div>

          {/* Mobile Layout: Keep your original mobile design */}
          <div className="md:hidden px-5">
            {/* Image Section */}
            <div className="bg-[#EBEBEF] flex items-center justify-center p-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                transition={{
                  delay: 0.3,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="flex items-center justify-center"
              >
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-auto max-w-[280px] h-auto object-contain"
                />
              </motion.div>
            </div>

            {/* Content Section */}
            <div className="p-6 text-[#ED1C24]">
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-[28px] font-bold mb-4"
              >
                {item.title}
              </motion.h2>

              <div className="text-[#8C8989] mb-6">
                <motion.div className="overflow-hidden">
                  <motion.p
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    className="mb-4 text-base leading-relaxed"
                  >
                    {item.description}
                  </motion.p>

                  <AnimatePresence>
                    {expandedItems[index] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        {item.fullDescription.map((desc, descIndex) => (
                          <motion.p
                            key={descIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{
                              delay: expandedItems[index]
                                ? descIndex * 0.1
                                : (item.fullDescription.length - descIndex - 1) * 0.05,
                              duration: 0.5,
                              ease: "easeOut",
                            }}
                            className="mb-3 text-base leading-relaxed"
                          >
                            {desc}
                          </motion.p>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>

              {/* Button for Mobile */}
              <div className="flex justify-end">
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                  className="bg-black text-white px-6 py-3 rounded-xl text-base font-medium cursor-pointer transition-all duration-200 hover:bg-gray-800 shadow-md"
                  onClick={() => toggleExpanded(index)}
                >
                  {expandedItems[index] ? "Show Less" : "Explore More"}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
      </section>
      </div>
    </div>
  );
};

import { Twitter, Facebook, Instagram, Github } from "lucide-react";
import { FooterMain } from "./FooterMain";

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
            <div className="uppercase tracking-wider font-bold">
              Munjal Auto
            </div>
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
                  <Twitter
                    size={22}
                    className="cursor-pointer hover:text-gray-300"
                  />
                  <Facebook
                    size={22}
                    className="cursor-pointer hover:text-gray-300"
                  />
                  <Instagram
                    size={22}
                    className="cursor-pointer hover:text-gray-300"
                  />
                  <Github
                    size={22}
                    className="cursor-pointer hover:text-gray-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center">
          <p>© [Year] [Company Name]. All rights reserved.</p>
          <p className="mt-4 md:mt-0">
            <a href="#" className="hover:underline">
              Privacy policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
