import React from 'react'
import img from "../../assets/trHero.png";
import logo from "../../assets/companyLogo.png";
import icon1 from "../../assets/hero/icon.png";
import icon2 from "../../assets/hero/icon2.png";
import { Link } from 'react-router-dom';

const TrainingHero = () => {
    return (
        <div>
            <div className="h-screen w-full   flex flex-col items-center justify-center relative">

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
                         alt="Company Logo"
                         className="absolute -top-[0.9px] w-[80%] md:w-[60%] lg:w-1/3 max-w-md left-1/2 transform -translate-x-1/2 z-20"
                         />
                    </Link>

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



                    {/* Centered Text and Timeline Container */}
                    <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 lg:bottom-10 lg:left-10 text-left">
            <h1 className="text-[#FFFCFC] text-[32px] sm:text-[42px] md:text-[48px] lg:text-[54px] font-[500] leading-tight sm:leading-[3.2rem] lg:leading-[3.9rem]">
              Training
            </h1>
          </div>
                </div>
            </div>
            <div className="px-4 sm:px-6 lg:px-8">
                <h1 className="text-[20px] sm:text-[24px] md:text-[26px] lg:text-[28px] leading-[1.4] sm:leading-[1.5] lg:leading-[48px] text-center mx-auto mt-8 sm:mt-10 lg:w-[60%] md:w-[70%] sm:w-[85%] w-[95%]">
                  At <span className="text-[#ED1C24]">Munjal Auto</span>, training is a very important aspect of journey towards world class emphasizing the growth and development of personnel includes
                </h1>
            </div>
        </div>
    )
}

export default TrainingHero
