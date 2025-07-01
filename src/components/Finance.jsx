import React, { useState, useEffect } from "react";
import img from "../assets/fiHero.png";
import logo from "../assets/companyLogo.png";
import Footer from "./Footer";
import { Link, useLocation } from "react-router-dom";
import TopNav from "./TopNav";

import icon1 from "../assets/hero/icon.png";
import icon2 from "../assets/hero/icon2.png";
import youtube from "../assets/hero/youtube.png";
import insta from "../assets/hero/insta.png";

const Finance = () => {
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
    <div className="  overflow-hidden">
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

            <div className="absolute  left-5 flex flex-col items-center space-y-4 z-[999]">
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
          <div className=" md:block flex items-center justify-center flex-col absolute left-9 mt-10 md:text-left text-center left-0">
            <h1 className="text-[#FFFCFC] rounded-[10px] px-10 py-4 text-[54px] font-[500] mb-12 ">
            Our Finance
            </h1>

            {/* Timeline Line with Animation */}
          </div>
        </div>
      </div>
   
      <AnnualReport/>
      {/* <MunjalAutoGroup />
      <BoardOfDirectors /> */}
      <Footer />
    </div>
  );
};
export default Finance




// import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Search, Share } from 'lucide-react';

const AnnualReportCard = ({ year }) => {
  return (
    <motion.div 
      className="bg-[#171515] rounded-[24px] p-4 w-full max-w-sm"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-col items-center justify-center bg-[#171515] py-14 rounded-[15px] p-8 mb-4" style={{border: '1px solid #D6D6D6'}}>
        <p className="text-gray-300 text-center text-xs mb-2">Download the <br />report here</p>
        
        <motion.button 
          className="w-full bg-transparent text-red-500 border border-red-500 rounded-full py-2 px-4 mb-4"
          whileHover={{ backgroundColor: 'rgba(239, 68, 68, 0.1)' }}
          whileTap={{ scale: 0.95 }}
        >
          Download
        </motion.button>
        
        <motion.button 
          className="w-full bg-white text-black rounded-full py-2 px-4 flex items-center justify-center"
          whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
          whileTap={{ scale: 0.95 }}
        >
          <Share size={16} className="mr-2" /> Share
        </motion.button>
      </div>
      <div className="text-white py-2">
        <p className="text-[#C3C1C1] text-xs">Annual Report</p>
        <p className="text-xl text-[#F7F7F7] font-medium">{year}</p>
      </div>
    </motion.div>
  );
};

const AnnualReport = () => {
  const [showMore, setShowMore] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);
  const reportYears = ["2012 to 2024", "2012 to 2024", "2012 to 2024", "2012 to 2024"];
  const moreReportYears = ["2008 to 2012", "2004 to 2008", "2000 to 2004", "1996 to 2000"];
  
  return (
    <div>

    <div className="max-w-7xl py-10 mx-auto p-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <h1 className="text-4xl font-medium mb-4 md:mb-0">Annual Report</h1>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search document" 
            className="pl-10 pr-4 py-2 rounded-full border border-gray-300 w-full md:w-80"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reportYears.map((year, index) => (
          <AnnualReportCard key={index} year={year} />
        ))}
      </div>
      
      {showMore && (
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {moreReportYears.map((year, index) => (
            <AnnualReportCard key={index} year={year} />
          ))}
        </motion.div>
      )}
      
      <div className="flex justify-center mt-12">
        <motion.button 
          className="flex items-center justify-center bg-gray-100 text-gray-800 rounded-full px-6 py-2"
          whileHover={{ backgroundColor: '#e5e7eb' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowMore(!showMore)}
        >
          View {showMore ? 'less' : 'more'} 
          <motion.div
            animate={{ rotate: showMore ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="ml-2" size={20} />
          </motion.div>
        </motion.button>
      </div>
    </div>
    <div className="max-w-7xl py-10 mx-auto p-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <h1 className="text-4xl font-medium mb-4 md:mb-0">Extract Of Annual Return</h1>
       
         
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reportYears.map((year, index) => (
          <AnnualReportCard key={index} year={year} />
        ))}
      </div>
      
      {showMore2 && (
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {moreReportYears.map((year, index) => (
            <AnnualReportCard key={index} year={year} />
          ))}
        </motion.div>
      )}
      
      <div className="flex justify-center mt-12">
        <motion.button 
          className="flex items-center justify-center bg-gray-100 text-gray-800 rounded-full px-6 py-2"
          whileHover={{ backgroundColor: '#e5e7eb' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowMore2(!showMore2)}
        >
          View {showMore2 ? 'less' : 'more'} 
          <motion.div
            animate={{ rotate: showMore2 ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="ml-2" size={20} />
          </motion.div>
        </motion.button>
      </div>
    </div>

    <div className="max-w-7xl mx-auto py-20 p-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <h1 className="text-4xl font-medium mb-4 md:mb-0">Business Responsibility Report</h1>
       
         
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reportYears.map((year, index) => (
          <AnnualReportCard key={index} year={year} />
        ))}
      </div>
      
      {showMore3 && (
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {moreReportYears.map((year, index) => (
            <AnnualReportCard key={index} year={year} />
          ))}
        </motion.div>
      )}
      
      <div className="flex justify-center mt-12">
        <motion.button 
          className="flex items-center justify-center bg-gray-100 text-gray-800 rounded-full px-6 py-2"
          whileHover={{ backgroundColor: '#e5e7eb' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowMore3(!showMore3)}
        >
          View {showMore3 ? 'less' : 'more'} 
          <motion.div
            animate={{ rotate: showMore3 ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="ml-2" size={20} />
          </motion.div>
        </motion.button>
      </div>
    </div>
    </div>

  );
};

// export default AnnualReport;