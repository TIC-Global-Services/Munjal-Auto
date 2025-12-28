import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../assets/MunjalAutologo-.png";


const StayConnectedCTA = () => {
    return (
      <div className="relative">
        {/* Desktop and Tablet View */}
        <div className="hidden bg-[#ED1C24] md:flex bg-cover bg-center items-center justify-center relative">
          <img src={logo} className=" absolute top-8 md:top-12 w-24 md:w-32" alt="logo" />
          <div className="container mx-auto px-4 py-16 md:py-20 mt-6 md:mt-8 text-center text-white relative z-10">
            <h2 className="md:text-[55px] text-2xl  mt-6 md:mt-10 md:font-normal mb-4 md:mb-6">
              Stay Connected
            </h2>
            <p className="md:text-xl text-base  !leading-[22px] md:!leading-[25px] mx-auto mb-3 md:mb-4">
             Reach out to explore our manufacturing
              <br />
               expertise and industry-leading solutions
            </p>
            <Link to="/about-us">
              <button className="bg-white text-black text-sm md:text-base px-6 md:px-[41px] py-2 md:py-3 font-[500] rounded-full hover:bg-gray-100 transition-colors">
                More About Us
              </button>
            </Link>
          </div>
        </div>

       
  
        <div className="flex flex-col md:hidden bg-[#ED1C24]  items-center py-[30px] sm:py-[40px] mt-5 sm:mt-10 mb-5 sm:mb-20  justify-center ">
          <img src={logo} alt="Logo" className="w-16 sm:w-20"/>
          <h2 className="text-xl sm:text-2xl font-normal mt-2 sm:mt-3 text-white">Stay Connected</h2>
          <p className="text-sm sm:text-sm text-center mt-4 mb-2 sm:mb-3 text-white">
             Reach out to explore our manufacturing
              <br />
              expertise and industry-leading solutions
            </p>
            <Link to="/about-us">
              <button className="bg-white text-xs sm:text-sm text-black px-4 sm:px-6 py-2 rounded-full hover:bg-gray-100 transition-colors mb-5">
                More About Us
              </button>
            </Link>
        </div>
      </div>
    );
  };

export default StayConnectedCTA
