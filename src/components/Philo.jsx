import React, { useState, useEffect } from "react";
import img from "../assets/PILO.jpeg";
import logo from "../assets/logo.png";
import pilo2 from "../assets/pilo2.jpeg";
import Footer from "./Footer";
import { motion, useInView } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Philo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const fadeInUp = {
    hidden: { opacity: 0.5, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const fadeIn = {
    hidden: { opacity: 0.5 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-gray-50 overflow-hidden">
      <div className="h-screen w-full flex flex-col items-center justify-center relative">
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
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="absolute top-0 w-[60%] md:w-1/3 left-1/2 transform -translate-x-1/2"
            />
          </Link>
          <div className="md:block flex items-center justify-center flex-col absolute text-left left-0">
            <h1 className="text-[#FFFCFC] rounded-[10px] px-10 py-4 text-[54px] font-[500] mb-12">
              Innovation with <br /> Integrity
            </h1>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="max-w-7xl mx-auto text-center py-16">
        <motion.h2
          className="text-[#ED1C24] text-sm md:text-2xl md:mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Our Vision
        </motion.h2>
        <motion.p
          className="lg:text-[40px] md:text-2xl text-lg md:px-0 px-6 lg:leading-[57px] font-[400] max-w-4xl mx-auto mb-20 md:mb-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          To lead in engineering excellence, setting new standards in quality,
          technology, and sustainability across industries.
        </motion.p>
        <div className="relative">
          <motion.img
            src={pilo2}
            alt="Our Mission"
            className=" rounded-2xl md:rounded-[41px] object-cover h-[35rem]  md:h-[45rem]   mx-auto md:w-[90%] w-[90%]  lg:w-[90%] xl:w-[100%] shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          />
          <motion.div
            className="absolute bottom-16 left-8 md:left-20 lg:left-20 xl:left-10 text-left max-w-[260px] md:max-w-3xl text-white p-4 md:p-8 rounded-md md:rounded-[20px]"
            style={{
              border: "1px solid #FFFFFF1A",
              backdropFilter: "blur(22.200000762939453px)",
              background: "#FFFFFF26",
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-white text-base md:text-4xl">
              Our <span className="text-[#FF0000]"> Mission</span>
            </h3>
            <p className=" text-[10px] md:text-base font-normal max-w-sm tracking-wider">
              To innovate, manufacture, and deliver high-performance components
              with precision, integrity, and sustainability at the forefront.
            </p>
          </motion.div>
          <motion.button
            className="absolute text-sm md:text-base bottom-4 lg:bottom-10  md:bottom-10  right-[65%]  md:right-24 lg:right-24 bg-red-600 text-white px-4 py-2 rounded-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Our Values
          </motion.button>
        </div>
        <motion.h2
          className="text-[#ED1C24] text-2xl mt-20 md:mt-40 mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Environmental Policy
        </motion.h2>
        <motion.p
          className="lg:text-[40px] md:text-2xl text-lg md:px-0 px-6 lg:leading-[57px] font-[400] max-w-4xl mx-auto mb-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          We prioritize eco-friendly materials, energy efficiency, and
          responsible manufacturing to drive a sustainable future.
        </motion.p>
      </div>

      <Footer />
    </div>
  );
};

export default Philo;
