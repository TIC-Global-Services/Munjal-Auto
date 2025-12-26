import React from 'react'
import img from '../../assets/Electronics/Electronics-banner.jpg'
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom'
import icon1 from '../../assets/hero/icon.png'
import icon2 from '../../assets/hero/icon2.png'

const ElectronicsHero = () => {
  return (
    <div>
      <div className="h-screen w-full flex flex-col items-center justify-center relative">
        {/* Background Image with Logo */}
        <div
          className="h-[90%] w-[94%] flex flex-col items-center justify-center rounded-[24px] relative"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
        {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/40 rounded-[24px] z-0" />
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

          {/* Bottom Left Text */}
          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 lg:bottom-10 lg:left-10 text-left">
            <h1 className="text-[#FFFCFC] text-[32px] sm:text-[42px] md:text-[48px] lg:text-[54px] font-[500] leading-tight sm:leading-[3.2rem] lg:leading-[3.9rem]">
              Electronics
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ElectronicsHero
