import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/heroPhilo.png";
import logo from "../../assets/companyLogo.png";
import icon1 from "../../assets/hero/icon.png";
import icon2 from "../../assets/hero/icon2.png";
import { Instagram, Youtube } from "lucide-react";

const PhiloHero = () => {
  return (
    <div>
      <div className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
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
          <div className="absolute bottom-5 right-5 flex flex-col items-center space-y-5 z-[999]">
            {/* <Link to="/contact">
              <img
                src={icon1}
                alt="contact"
                className="w-[30px] md:w-[40px] cursor-pointer hover:scale-125"
              />
            </Link> */}

            <Link to="/contact">
              <img
                src={icon2}
                alt="contact"
                className="w-[55px] cursor-pointer hover:scale-125"
              />
            </Link>
          </div>

          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="absolute -top-[0.9px] w-[60%] md:w-1/3 left-1/2 transform -translate-x-1/2"
            />
          </Link>

          <div className="md:block flex items-center justify-center bottom-0 absolute mx-3  mt-10 md:text-left text-center left-0">
            <div className="flex">
              <div className="flex flex-col gap-3  relative top-6">
                <Youtube
                  color="#ffffff"
                  className="bg-black p-1 w-7 h-7 rounded-full"
                />
                <Instagram
                  color="#ffffff"
                  className="bg-black w-7 h-7 p-1 rounded-full"
                />
              </div>
              <div className="">
                <h1 className="text-[#FFFCFC]  rounded-[10px] lg:leading-[3.9rem] text-left leading-[2.0rem] px-10 py-4 lg:text-[54px] text-[34px] font-[500] mb-12">
                  Innovation with <br /> Integrity
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhiloHero;
