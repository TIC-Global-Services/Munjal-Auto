import React, { useState, useEffect } from "react";
import img from "../assets/contactBanner.png";
import logo from "../assets/logo.png";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import TopNav from "./TopNav";
import icon1 from "../assets/hero/icon.png";
import icon2 from "../assets/hero/icon2.png";
import youtube from "../assets/hero/youtube.png";
import insta from "../assets/hero/insta.png";

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();
  
    // Function to check if the link is active
    const isActive = (path) => {
      return location.pathname === path;
    };
  
    useEffect(() => {
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
                isActive("/facilities") ? "text-[#FF0000] font-bold" : "text-white"
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

            <div className="absolute top-[30%] left-5 flex flex-col items-center space-y-4 z-[999]">
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
            <div className=" md:block flex items-center justify-center flex-col absolute md:text-left text-center left-0">
              <h1 className="text-[#FFFCFC] rounded-[10px] px-10 py-4 text-[54px] font-[500] mb-12">
              Contact Us
              </h1>
  
              {/* Timeline Line with Animation */}
            </div>
          </div>
        </div>
        <TabNavigation/>
     
        {/* <AnnualReport/> */}
        {/* <MunjalAutoGroup />
        <BoardOfDirectors /> */}
        <FooterMain />
      </div>
    );
  };

export default Contact


import carPic from "../assets/CarPic.png"
import carPic2 from "../assets/Carpic2.png"
import { FooterMain } from "./FooterMain";

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState('office');
  
  const tabs = [
    { id: 'office', label: 'Office & Works' },
    { id: 'career', label: 'Career' },
    { id: 'inquiry', label: 'Business Inquiry' }
  ];
  
  return (
    <div className="w-full max-w-6xl mx-auto bg-#2E2E2E">

      {/* Navigation Tabs */}
      <div className="flex border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-4 px-6 font-medium text-sm transition-colors duration-300 ${
              activeTab === tab.id ? 'text-red-500' : 'text-gray-400 hover:text-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      {/* Tab Content */}
      <div className="md:py-8 md:px-5 px-4 md:mt-10 mt-5">
        {/* Office & Works Tab */}
        {activeTab === 'office' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Corporate Office */}
            <div className="flex flex-col md:flex-row md:h-[380px] py-2 h-full bg-[#2E2E2E] rounded-lg overflow-hidden shadow-sm items-center justify-center">
              <div className="w-full md:w-1/3  p-8 flex items-center ">
                <h3 className="text-[32px] text-white font-bold">Corporate office</h3>
              </div>
              <div className="w-full md:w-2/3 px-6">
                <h4 className="text-[#ED1C24] font-medium mb-3 text-[25px]">Contact now</h4>
                <p className="mb-1 text-white md:text-[20px] md:leading-[31px]">2nd Floor, Tower "C", Unitech Business Zone,</p>
                <p className="mb-1 text-white md:text-[20px] md:leading-[31px]">Nirvana Country, South City – 2, Sector-50,</p>
                <p className="mb-1 text-white md:text-[20px] md:leading-[31px]">Gurugram – 122018, Haryana</p>
                <p className="mb-1 text-white md:text-[20px] md:leading-[31px]">Phone: +91 124 4057891/92</p>
                <p className="mb-1 text-white md:text-[20px] md:leading-[31px]">Fax: +91 124 4057892</p>
                <p className="mb-1 text-white md:text-[20px] md:leading-[31px]">E-mail: <a href="mailto:mail@munjalauto.com" className="text-[#ED1C24]">mail@munjalauto.com</a></p>
              </div>
            </div>
            
            {/* Waghodia Plant */}
            <div className="flex flex-col md:flex-row md:h-[380px] bg-[#2E2E2E] rounded-lg overflow-hidden shadow-sm items-center justify-center">
              <div className="w-full md:w-1/3   md:p-8 p-8 flex items-center">
                <h3 className="text-[32px] text-white font-bold">Waghodia plant</h3>
              </div>
              <div className="w-full md:w-2/3 p-6">
                <h4 className="text-red-500 font-medium mb-3 text-[25px]">Contact now</h4>
                <p className="mb-1 text-white md:text-[20px] md:leading-[31px]">187, GIDC Industrial Estate,</p>
                <p className="mb-1 text-white md:text-[20px] md:leading-[31px]">Waghodia -391 760, Vadodara (Gujarat)</p>
                <p className="mb-1 text-white md:text-[20px] md:leading-[31px]">Phone: +91 (2668) 262421</p>
                <p className="mb-1 text-white md:text-[20px] md:leading-[31px]">Phone: +91 (2668) 262422</p>
                <p className="mb-1 text-white md:text-[20px] md:leading-[31px]">Fax: +91 (2668) 262427</p>
                <p className="mb-1 text-white md:text-[20px] md:leading-[31px]">Mobile: +91 9099978936</p>
                <p className="mb-1 text-white md:text-[20px] md:leading-[31px]">Mobile: +91 9099978937</p>
                <p className="mb-1 text-white md:text-[20px] md:leading-[31px]">E-mail: <a href="mailto:mail@munjalauto.com" className="text-red-500">mail@munjalauto.com</a></p>
              </div>
            </div>
            
            {/* Haridwar Plant */}
            <div className="flex flex-col md:flex-row md:h-[380px] bg-[#2E2E2E] rounded-lg overflow-hidden shadow-sm items-center justify-center">
              <div className="w-full md:w-1/3   p-8 flex items-center">
                <h3 className="text-[32px] text-white font-bold">Haridwar Plant</h3>
              </div>
              <div className="w-full md:w-2/3 p-6">
                <h4 className="text-red-500 font-medium mb-3 text-[25px]">Contact now</h4>
                <p className="mb-1 text-white md:text-[20px] md:leading-[31px]">Plot no – 11 Industrial Park II,</p>
                <p className="mb-1 text-white md:text-[20px] md:leading-[31px]">Village Salempur Mehdood, Haridwar</p>
                <p className="mb-1 text-white md:text-[20px] md:leading-[31px]">(Uttrakhand)</p>
                <p className="mb-1 text-white md:text-[20px] md:leading-[31px]">Tel: +91 (1334) 235530/32</p>
                <p className="mb-1 text-white md:text-[20px] md:leading-[31px]">Fax: +91 (1334) 235533</p>
                <p className="mb-1 text-white md:text-[20px] md:leading-[31px]">E-mail: <a href="mailto:mail@munjalauto.com" className="text-red-500">mail@munjalauto.com</a></p>
              </div>
            </div>
            
            {/* Bawal Plant */}
            <div className="flex flex-col md:flex-row md:h-[380px] bg-[#2E2E2E] rounded-lg overflow-hidden shadow-sm items-center justify-center">
              <div className="w-full md:w-1/3   p-8 flex items-center">
                <h3 className="text-[32px] text-white font-bold">Bawal Plant</h3>
              </div>
              <div className="w-full md:w-2/3 p-6">
                <h4 className="text-red-500 font-medium mb-3 text-[25px]">Contact now</h4>
                <p className="mb-1 text-white md:text-[20px] md:leading-[31px]">Plot No. – 37, Sector 5 Phase II,</p>
                <p className="mb-1 text-white md:text-[20px] md:leading-[31px]">G.C Bawal- 123 501, Rewari (Haryana)</p>
                <p className="mb-1 text-white md:text-[20px] md:leading-[31px]">Tel: +91 (1284) 264435-36</p>
                <p className="mb-1 text-white md:text-[20px] md:leading-[31px]">Fax: +91 (1284) 264434</p>
                <p className="mb-1 text-white md:text-[20px] md:leading-[31px]">E-mail: <a href="mailto:mail@munjalauto.com" className="text-red-500">mail@munjalauto.com</a></p>
              </div>
            </div>
            
            {/* Dharuhera Plant */}
            <div className="flex flex-col md:h-[380px] md:flex-row bg-[#2E2E2E] rounded-lg overflow-hidden shadow-sm items-center justify-center">
              <div className="w-full md:w-1/3   p-8 flex items-center">
                <h3 className="text-[32px] text-white font-bold">Dharuhera Plant</h3>
              </div>
              <div className="w-full md:w-2/3 p-6">
                <h4 className="text-red-500 font-medium mb-3 text-[25px]">Contact now</h4>
                <p className="mb-1 text-white md:text-[20px] md:leading-[31px]">Plot no. 32-A, Industrial Area,</p>
                <p className="mb-1 text-white md:text-[20px] md:leading-[31px]">Dharuhera-122106, Rewari, Haryana</p>
                <p className="mb-1 text-white md:text-[20px] md:leading-[31px]">Tel: +91 (1274) 243010-11</p>
                <p className="mb-1 text-white md:text-[20px] md:leading-[31px]">E-mail: <a href="mailto:mail@munjalauto.com" className="text-red-500">mail@munjalauto.com</a></p>
              </div>
            </div>
          </motion.div>
        )}
        
        {/* Career Tab */}
        {activeTab === 'career' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col md:flex-row gap-8"
          >
            <div className="w-full md:w-1/3">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={carPic}
                  alt="Career at Munjal Auto" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              <form className="space-y-10 h-full  flex flex-col   justify-center my-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Name" 
                      className="w-full px-4 py-3 border border-gray-200  rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-300"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="w-full px-4 py-3 border border-gray-200  rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-300"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Mobile Number" 
                      className="w-full px-4 py-3 border border-gray-200  rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-300"
                    />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      placeholder="Total Experience" 
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl  focus:outline-none focus:ring-1 focus:ring-gray-300"
                    />
                  </div>
                </div>
                
                <div>
                  <input 
                    type="text" 
                    placeholder="Mobile Number" 
                    className="w-full px-4 py-3 border border-gray-200   rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-300"
                  />
                </div>
                
                <div>
                  <p className="mb-2">Upload your resume *</p>
                  <div className="flex items-center">
                    <label className="cursor-pointer bg-gray-100 px-4 py-2 border border-gray-200 rounded">
                      Choose file
                      <input type="file" className="hidden" />
                    </label>
                    <span className="ml-3 text-sm text-gray-500">No file Chosen</span>
                  </div>
                </div>
                
                <div>
                  <button className="bg-black text-white px-10 py-2 rounded">Apply</button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
        
        {/* Business Inquiry Tab */}
        {activeTab === 'inquiry' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col md:flex-row gap-8"
          >
            <div className="w-full md:w-1/3">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={carPic2}
                  alt="Business Meeting" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              <p className="text-gray-600 mb-6">
                To place an order or to avail more information regarding our products, do write in. Our customer care
                executives will get back to you as soon as possible. We invite trade queries from India and abroad.
              </p>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Name" 
                      className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-gray-300"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-gray-300"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Mobile Number" 
                      className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-gray-300"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Mobile Number" 
                      className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-gray-300"
                    />
                  </div>
                </div>
                
                <div>
                  <textarea 
                    placeholder="Write a Message" 
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-gray-300"
                  ></textarea>
                </div>
                
                <div>
                  <button className="bg-black text-white px-8 py-2 rounded">Submit</button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </div>
      
      </div>
  )}

  