import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../assets/MunjalAutologo-.png";


const StayConnectedCTA = () => {
    return (
      <div className=" ">
        {/* Desktop and Tablet View */}
        <div className="hidden bg-[#ED1C24] md:flex bg-cover bg-center items-center justify-center relative">
          <img src={logo} className=" absolute top-12 w-32" alt="logo" />
          <div className="container mx-auto px-4 py-20 mt-8 text-center text-white relative z-10">
            <h2 className="md:text-[55px] text-xl mt-10 md:font-normal mb-6">
              Stay Connected
            </h2>
            <p className="md:text-xl text-xs !leading-[25px] mx-auto mb-4">
              Reach out to explore more about
              <br />
              our manufacturing expertise.
            </p>
            <Link to="/about-us">
              <button className="bg-white text-black  px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
                More About Us
              </button>
            </Link>
          </div>
        </div>
  
       
  
        <div className="flex flex-col md:hidden bg-[#ED1C24]  items-center py-[40px] mt-32 mb-20  justify-center ">
          <img src={logo} alt="Logo" className="w-20"/>
          <h2 className="text-2xl font-normal mt-3 text-white">Stay Connected</h2>
          <p className="text-xs  text-center mb-2 text-white">
              Reach out to explore more about
              <br />
              our manufacturing expertise.
            </p>
            <Link to="/about-us">
              <button className="bg-white text-xs text-black px-6 py-2 rounded-full hover:bg-gray-100 transition-colors">
                More About Us
              </button>
            </Link>
        </div>
      </div>
    );
  };

export default StayConnectedCTA
