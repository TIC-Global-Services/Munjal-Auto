import React from 'react'
// import img from "../../assets/faci-min.jpeg";
import legacy from "../../assets/legacy2.jpg";
import logo from "../../assets/companyLogo.png";
import icon1 from "../../assets/hero/icon.png";
import icon2 from "../../assets/hero/icon2.png";
import { Link } from 'react-router-dom';

const FacilitiesHero = () => {
  return (
    <div>
            <div className="h-screen w-full  flex flex-col items-center justify-center relative">
        {/* Background Image with Logo */}
        <div
          className="h-[90%] w-[94%] flex flex-col items-center justify-center rounded-[24px] relative"
          style={{
            backgroundImage: `url(${legacy})`,
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

          {/* Centered Text and Timeline Container */}
          <div className=" md:block flex items-center justify-center flex-col absolute  mt-10 md:text-left text-center left-0">
            <h1 className="text-[#FFFCFC] rounded-[10px] px-10 py-4 text-[54px] font-[500] mb-12">
              Our Facilities
            </h1>

            {/* Timeline Line with Animation */}
          </div>
        </div>
      </div>

    </div>
  )
}

export default FacilitiesHero
