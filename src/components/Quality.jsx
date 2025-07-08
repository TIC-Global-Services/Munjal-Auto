import React, { useState, useRef, useEffect } from "react";

import img from "../assets/quaHero.png";
import logo from "../assets/companyLogo.png";
import Footer from "./Footer";
import { Link, useLocation } from "react-router-dom";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import TopNav from "./TopNav";

import icon1 from "../assets/hero/icon.png";
import icon2 from "../assets/hero/icon2.png";
import youtube from "../assets/hero/youtube.png";
import insta from "../assets/hero/insta.png";

import Testing from "./Testing";

import Policy from "./Quality/Policy";

const Quality = () => {
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
    <div className=" overflow-hidden ">
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

            {/* <div className="absolute  left-5 flex flex-col items-center space-y-4 z-[999]">
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
            </div> */}

          {/* <div className="absolute inset-0 flex flex-col items-center justify-center"> */}
          {/* Timeline Line with Animation */}

          {/* Year Marker with Animation */}

          {/* Centered Text and Timeline Container */}
          <div className=" md:block flex items-center justify-center flex-col absolute   mt-10 text-left left-0">
            <h1 className="text-[#FFFCFC] rounded-[10px] leading-[3.9rem]  px-10 py-4 text-[54px] font-[500] ">
              We Stand For​ <br />
              Quality & Technology
            </h1>

            {/* Timeline Line with Animation */}
          </div>
        </div>
      </div>
      <Policy />
      <Testing />
      <Certification />
      {/* <Testi/> */}
      {/* <MunjalAutoGroup />
      <BoardOfDirectors /> */}
      <FooterMain />
    </div>
  );
};

export default Quality;

import { motion } from "framer-motion";
import qualityImage from "../assets/qualityProd.png"; // Replace with your actual image path
import subTR from "../assets/Subtract.png";
import vector from "../assets/Vector.png";

const QualityPolicy = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className=" relative  overflow-visible">
         <div
     
      className=" relative  bg-black md:bg-transparent text-white p-8 !z-[600] !rounded-2xl md:rounded-[24px] overflow-visible max-w-7xl mx-auto my-16"
      style={{
          backgroundImage: `url(${subTR})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "24px",
          ...(window.innerWidth >= 1440 && {
            paddingBottom: "6rem",
            paddingTop: "6rem",
            paddingLeft: "6rem",
            paddingRight: "6rem",
          }),
          ...(window.innerWidth >= 1024 && window.innerWidth < 1440 && {
            paddingBottom: "2rem",
            paddingTop: "2rem",
            paddingLeft: "2rem",
            paddingRight: "2rem",
            width: "90%",
          }),
          ...(window.innerWidth >= 768 && window.innerWidth < 1024 && {
            paddingBottom: "3rem",
            paddingTop: "3rem",
            paddingLeft: "2rem",
            paddingRight: "2rem",
            width: "95%",
          }),
          ...(window.innerWidth < 768 && {
            backgroundImage: "none",
            // backgroundColor: "#000000",
            width: "90%",
            
            padding: "2rem 1rem",
          }),
          overflow: "visible",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        <motion.div
          className="flex flex-col md:flex-row  justify-between"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex-1  xl:max-w-[21.5rem] ">
            <div className="  ">
              <h2 className=" lg:text-3xl xl:mt-0 text-xl md:text-base lg:mt-10 xl:text-5xl font-[500] mb-4">Quality Policy</h2>
              <p className=" lg:text-sm text-xs md:text-xs xl:text-base md:max-w-xs mb-8">
                At MAIL, quality is our foundation. Through a strong Total
                Quality Management System, we ensure every product is "First
                time right, every time right."
              </p>
            </div>
            
            <div className="md:-mt-[200px] md:-ml-[360px] -mt-[20px] -ml-[200px] md:block hidden">
            <ModelViewer />


            </div> 
            {/* <img
              src={qualityImage}
              alt="Quality Product"
              className="w-full md:block hidden h-auto lg:scale-150 md:scale-[1.2] xl:scale-[2] relative  lg:top-10 xl:top-20 left-20 rounded-[24px]"
            /> */}
          </div>
          <div className="      grid grid-cols-2 text-sm md:grid-cols-2 gap-4 p-4">
            <motion.div
              className="bg-[#141313] lg:py-0 md:py-0 py-10  xl:py-20  lg:max-w-[200px] md:max-w-[180px] xl:max-w-[255px] flex-col  xl:p-4 rounded-[12px] flex items-center justify-center"
              variants={fadeInUp}
            >
              <div className="  scale-[0.7] xl:scale-100 md:scale-50 lg:scale-75">

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                  d="M13.8867 13.8164C13.1992 13.2305 12.4375 12.7812 11.6016 12.4688C10.7656 12.1562 9.89844 12 9 12C8.3125 12 7.64844 12.0898 7.00781 12.2695C6.36719 12.4492 5.76953 12.6992 5.21484 13.0195C4.66016 13.3398 4.15625 13.7305 3.70312 14.1914C3.25 14.6523 2.85938 15.1602 2.53125 15.7148C2.20312 16.2695 1.94922 16.8672 1.76953 17.5078C1.58984 18.1484 1.5 18.8125 1.5 19.5H0C0 18.5625 0.136719 17.6602 0.410156 16.793C0.683594 15.9258 1.07812 15.125 1.59375 14.3906C2.10938 13.6562 2.71875 13.0039 3.42188 12.4336C4.125 11.8633 4.92188 11.4141 5.8125 11.0859C4.92969 10.5078 4.24219 9.78125 3.75 8.90625C3.25781 8.03125 3.00781 7.0625 3 6C3 5.17188 3.15625 4.39453 3.46875 3.66797C3.78125 2.94141 4.20703 2.30469 4.74609 1.75781C5.28516 1.21094 5.92188 0.78125 6.65625 0.46875C7.39062 0.15625 8.17188 0 9 0C9.82812 0 10.6055 0.15625 11.332 0.46875C12.0586 0.78125 12.6953 1.20703 13.2422 1.74609C13.7891 2.28516 14.2188 2.92188 14.5312 3.65625C14.8438 4.39062 15 5.17188 15 6C15 6.51562 14.9375 7.01953 14.8125 7.51172C14.6875 8.00391 14.5 8.46875 14.25 8.90625C14 9.34375 13.707 9.74609 13.3711 10.1133C13.0352 10.4805 12.6406 10.8047 12.1875 11.0859C12.6953 11.2812 13.1797 11.5195 13.6406 11.8008C14.1016 12.082 14.5352 12.3984 14.9414 12.75L13.8867 13.8164ZM4.5 6C4.5 6.625 4.61719 7.20703 4.85156 7.74609C5.08594 8.28516 5.40625 8.76172 5.8125 9.17578C6.21875 9.58984 6.69531 9.91406 7.24219 10.1484C7.78906 10.3828 8.375 10.5 9 10.5C9.61719 10.5 10.1992 10.3828 10.7461 10.1484C11.293 9.91406 11.7695 9.59375 12.1758 9.1875C12.582 8.78125 12.9062 8.30469 13.1484 7.75781C13.3906 7.21094 13.5078 6.625 13.5 6C13.5 5.38281 13.3828 4.80078 13.1484 4.25391C12.9141 3.70703 12.5938 3.23047 12.1875 2.82422C11.7812 2.41797 11.3008 2.09375 10.7461 1.85156C10.1914 1.60938 9.60938 1.49219 9 1.5C8.375 1.5 7.79297 1.61719 7.25391 1.85156C6.71484 2.08594 6.23828 2.40625 5.82422 2.8125C5.41016 3.21875 5.08594 3.69922 4.85156 4.25391C4.61719 4.80859 4.5 5.39062 4.5 6ZM20.25 9C20.7656 9 21.25 9.09766 21.7031 9.29297C22.1562 9.48828 22.5508 9.75781 22.8867 10.1016C23.2227 10.4453 23.4922 10.8438 23.6953 11.2969C23.8984 11.75 24 12.2344 24 12.75C24 13.2656 23.9023 13.75 23.707 14.2031C23.5117 14.6562 23.2422 15.0547 22.8984 15.3984C22.5547 15.7422 22.1562 16.0117 21.7031 16.207C21.25 16.4023 20.7656 16.5 20.25 16.5C20.0703 16.5 19.8945 16.4883 19.7227 16.4648L12.8438 23.3438C12.6328 23.5547 12.3906 23.7148 12.1172 23.8242C11.8438 23.9336 11.5547 23.9922 11.25 24C10.9375 24 10.6445 23.9414 10.3711 23.8242C10.0977 23.707 9.85938 23.5469 9.65625 23.3438C9.45312 23.1406 9.29297 22.9023 9.17578 22.6289C9.05859 22.3555 9 22.0625 9 21.75C9 21.4531 9.05469 21.168 9.16406 20.8945C9.27344 20.6211 9.4375 20.375 9.65625 20.1562L16.5352 13.2773C16.5117 13.1055 16.5 12.9297 16.5 12.75C16.5 12.2344 16.5977 11.75 16.793 11.2969C16.9883 10.8438 17.2539 10.4492 17.5898 10.1133C17.9258 9.77734 18.3242 9.50781 18.7852 9.30469C19.2461 9.10156 19.7344 9 20.25 9ZM20.25 15C20.5625 15 20.8555 14.9414 21.1289 14.8242C21.4023 14.707 21.6406 14.5469 21.8438 14.3438C22.0469 14.1406 22.207 13.9023 22.3242 13.6289C22.4414 13.3555 22.5 13.0625 22.5 12.75C22.5 12.4297 22.4258 12.1094 22.2773 11.7891L20.5664 13.5H19.5V12.4336L21.2109 10.7227C20.8906 10.5742 20.5703 10.5 20.25 10.5C19.9375 10.5 19.6445 10.5586 19.3711 10.6758C19.0977 10.793 18.8594 10.9531 18.6562 11.1562C18.4531 11.3594 18.293 11.5977 18.1758 11.8711C18.0586 12.1445 18 12.4375 18 12.75C18 13.0703 18.0742 13.3906 18.2227 13.7109L10.7227 21.2227C10.5742 21.3711 10.5 21.5469 10.5 21.75C10.5 21.9531 10.5742 22.1289 10.7227 22.2773C10.8711 22.4258 11.0469 22.5 11.25 22.5C11.4531 22.5 11.6289 22.4258 11.7773 22.2773L19.2891 14.7773C19.6094 14.9258 19.9297 15 20.25 15Z"
                  fill="#FF0000"
                  />
              </svg>
                  </div>

              <p className="text-center  w-[90%] leading-4 text-[10px] xl:text-base md:text-xs lg:text-sm">
                Delivering precision-engineered, high-quality products.
              </p>
            </motion.div>
            <motion.div
              className="bg-[#141313] lg:py-0 md:py-0 py-10  xl:py-20  lg:max-w-[200px] md:max-w-[180px] xl:max-w-[255px] flex-col  xl:p-4 rounded-[12px] flex items-center justify-center"
              variants={fadeInUp}
            >
              <div className="  scale-[0.7] xl:scale-100 md:scale-50 lg:scale-75">


              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                  d="M8 7.5C8.422 7.5 8.77733 7.35533 9.066 7.066C9.35533 6.77733 9.5 6.422 9.5 6C9.5 5.578 9.35533 5.22267 9.066 4.934C8.77733 4.64467 8.422 4.5 8 4.5C7.578 4.5 7.22267 4.64467 6.934 4.934C6.64533 5.22333 6.50067 5.57867 6.5 6C6.49933 6.42133 6.644 6.77667 6.934 7.066C7.22267 7.35533 7.578 7.5 8 7.5ZM8.02 11.5C8.57733 11.5 9.11467 11.396 9.632 11.188C10.1493 10.98 10.6177 10.6807 11.037 10.29C10.517 10.0227 10.0037 9.824 9.497 9.694C8.99033 9.564 8.49767 9.49933 8.019 9.5C7.42567 9.5 6.85933 9.568 6.32 9.704C5.78067 9.84 5.335 10.0353 4.983 10.29C5.38967 10.6813 5.85467 10.981 6.378 11.189C6.902 11.3963 7.449 11.5 8.019 11.5M18.177 18.904L12.919 13.646C12.1843 14.2433 11.427 14.7017 10.647 15.021C9.867 15.3403 8.98467 15.5 8 15.5C5.90733 15.5 4.134 14.7733 2.68 13.32C1.226 11.8667 0.499334 10.0933 0.5 8C0.500667 5.90667 1.22733 4.13333 2.68 2.68C4.13267 1.22667 5.906 0.5 8 0.5C10.094 0.5 11.8673 1.22667 13.32 2.68C14.7727 4.13333 15.4993 5.90667 15.5 8C15.5 8.98467 15.3403 9.87033 15.021 10.657C14.7017 11.4437 14.2433 12.2043 13.646 12.939L18.884 18.177L18.177 18.904ZM8 14.5C9.79467 14.5 11.3267 13.8653 12.596 12.596C13.8653 11.3267 14.5 9.79467 14.5 8C14.5 6.20533 13.8653 4.67333 12.596 3.404C11.3267 2.13467 9.79467 1.5 8 1.5C6.20533 1.5 4.67333 2.13467 3.404 3.404C2.13467 4.67333 1.5 6.20533 1.5 8C1.5 9.79467 2.13467 11.3267 3.404 12.596C4.67333 13.8653 6.20533 14.5 8 14.5Z"
                  fill="#FF0000"
                  />
              </svg>
                  </div>

             
                  <p className="text-center  w-[90%] leading-4 text-[10px] xl:text-base md:text-xs lg:text-sm">
                  Implementing Lean, TPM, Poka-Yoke, Kaizen, and 5S.
              </p>
            </motion.div>
            <motion.div
              className="bg-[#141313] lg:py-0 md:py-0 py-10  xl:py-20  lg:max-w-[200px] md:max-w-[180px] xl:max-w-[255px] flex-col  xl:p-4 rounded-[12px] flex items-center justify-center"
              variants={fadeInUp}
            >
              <div className="  scale-[0.7] xl:scale-100 md:scale-50 lg:scale-75">


              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                  d="M24 15.4336V18H22.5V16.0664L21.2227 14.7773L21.2578 14.7422C20.9453 14.9141 20.5977 15 20.2148 15C19.8711 15 19.5547 14.9297 19.2656 14.7891L18 16.0664V18H16.5V15.4336L18.1992 13.7461L18.1641 13.6641L15.2227 7.07812L10.4414 12.0117C10.457 12.1367 10.4688 12.2578 10.4766 12.375C10.4844 12.4922 10.4922 12.6172 10.5 12.75V22.5H12V24H0V22.5H1.5V12.75C1.5 12.1562 1.60938 11.5977 1.82812 11.0742C2.04688 10.5508 2.34375 10.0859 2.71875 9.67969C3.09375 9.27344 3.53906 8.94531 4.05469 8.69531C4.57031 8.44531 5.125 8.30078 5.71875 8.26172L12.8438 0.914062C13.125 0.617188 13.4531 0.390625 13.8281 0.234375C14.2031 0.078125 14.5938 0 15 0C15.2734 0 15.5469 0.0390625 15.8203 0.117188C16.0938 0.195312 16.3555 0.3125 16.6055 0.46875C16.8555 0.625 17.0781 0.804688 17.2734 1.00781C17.4688 1.21094 17.625 1.44531 17.7422 1.71094L22.2422 11.7656C22.3125 11.9219 22.3633 12.082 22.3945 12.2461C22.4258 12.4102 22.4414 12.5742 22.4414 12.7383C22.4414 12.9258 22.4219 13.1094 22.3828 13.2891C22.3438 13.4688 22.2773 13.6445 22.1836 13.8164L22.2773 13.7227L24 15.4336ZM9 22.5V12.75C9 12.3359 8.92188 11.9492 8.76562 11.5898C8.60938 11.2305 8.39453 10.9102 8.12109 10.6289C7.84766 10.3477 7.53125 10.1328 7.17188 9.98438C6.8125 9.83594 6.42188 9.75781 6 9.75C5.58594 9.75 5.19922 9.82812 4.83984 9.98438C4.48047 10.1406 4.16016 10.3555 3.87891 10.6289C3.59766 10.9023 3.38281 11.2188 3.23438 11.5781C3.08594 11.9375 3.00781 12.3281 3 12.75V22.5H9ZM7.54688 8.51953C8.03125 8.69922 8.47266 8.95312 8.87109 9.28125C9.26953 9.60938 9.60156 9.99609 9.86719 10.4414L16.0781 4.04297C16.3594 3.74609 16.5 3.39844 16.5 3C16.5 2.78906 16.4609 2.59375 16.3828 2.41406C16.3047 2.23438 16.1992 2.07812 16.0664 1.94531C15.9336 1.8125 15.7734 1.70312 15.5859 1.61719C15.3984 1.53125 15.2031 1.49219 15 1.5C14.5703 1.5 14.2109 1.65234 13.9219 1.95703L7.54688 8.51953ZM17.4492 4.72266C17.3086 4.94922 17.1367 5.15625 16.9336 5.34375C16.7305 5.53125 16.5352 5.72266 16.3477 5.91797L18.6562 11.0859L20.0273 10.5L17.4492 4.72266ZM20.2148 13.5C20.4414 13.5 20.6211 13.4258 20.7539 13.2773C20.8867 13.1289 20.9531 12.9492 20.9531 12.7383C20.9531 12.582 20.918 12.4336 20.8477 12.293C20.7773 12.1523 20.707 12.0117 20.6367 11.8711L19.2656 12.457C19.3125 12.5742 19.3594 12.6953 19.4062 12.8203C19.4531 12.9453 19.5117 13.0586 19.582 13.1602C19.6523 13.2617 19.7344 13.3438 19.8281 13.4062C19.9219 13.4688 20.0508 13.5 20.2148 13.5ZM6 12C6.21094 12 6.40625 12.0391 6.58594 12.1172C6.76562 12.1953 6.92188 12.3008 7.05469 12.4336C7.1875 12.5664 7.29688 12.7266 7.38281 12.9141C7.46875 13.1016 7.50781 13.2969 7.5 13.5C7.5 13.7109 7.46094 13.9062 7.38281 14.0859C7.30469 14.2656 7.19922 14.4219 7.06641 14.5547C6.93359 14.6875 6.77344 14.7969 6.58594 14.8828C6.39844 14.9688 6.20312 15.0078 6 15C5.78906 15 5.59375 14.9609 5.41406 14.8828C5.23438 14.8047 5.07812 14.6992 4.94531 14.5664C4.8125 14.4336 4.70312 14.2734 4.61719 14.0859C4.53125 13.8984 4.49219 13.7031 4.5 13.5C4.5 13.2891 4.53906 13.0938 4.61719 12.9141C4.69531 12.7344 4.80078 12.5781 4.93359 12.4453C5.06641 12.3125 5.22656 12.2031 5.41406 12.1172C5.60156 12.0312 5.79688 11.9922 6 12Z"
                  fill="#FF0000"
                  />
              </svg>
                  </div>

            
                  <p className="text-center  w-[90%] leading-4 text-[10px] xl:text-base md:text-xs lg:text-sm">
                  Reducing waste, optimizing resources, preventing defects.
              </p>
            </motion.div>
            <motion.div
              className="bg-[#141313] lg:py-0 md:py-0 py-10  xl:py-20  lg:max-w-[200px] md:max-w-[180px] xl:max-w-[255px] flex-col  xl:p-4 rounded-[12px] flex items-center justify-center"
              variants={fadeInUp}
            >
              <div className="  scale-[0.7] xl:scale-100 md:scale-50 lg:scale-75">


              <svg
                width="19"
                height="22"
                viewBox="0 0 19 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                  d="M10.5075 0.25H8.205C7.75304 0.249849 7.30946 0.371976 6.92127 0.603437C6.53308 0.834898 6.21475 1.16707 6 1.56475V9.3325H12.762V1.6765C12.5595 1.24992 12.2402 0.889478 11.8412 0.636993C11.4421 0.384508 10.9797 0.250323 10.5075 0.25ZM11.01 6.9025H10.2825V7.63C10.2825 7.87466 10.1853 8.1093 10.0123 8.28231C9.8393 8.45531 9.60466 8.5525 9.36 8.5525C9.11534 8.5525 8.8807 8.45531 8.70769 8.28231C8.53469 8.1093 8.4375 7.87466 8.4375 7.63V6.9025H7.71C7.215 6.9025 6.8115 6.514 6.789 6.02425C6.79768 5.78504 6.89825 5.55839 7.0698 5.39146C7.24134 5.22452 7.47065 5.13016 7.71 5.128H8.4375V4.3855C8.4375 3.86425 8.85 3.4435 9.36 3.4435C9.87 3.4435 10.2825 3.86425 10.2825 4.3855V5.128H11.01C11.505 5.128 11.9085 5.5315 11.9317 6.02425C11.9204 6.26103 11.8183 6.48435 11.6467 6.64788C11.475 6.8114 11.2471 6.90258 11.01 6.9025ZM17.0925 9.3325H13.512V1.84825C15.57 2.422 17.0865 4.34575 17.0925 6.62725V9.3325ZM5.25 9.3325V1.8325C3.159 2.386 1.62 4.32475 1.62 6.62725V9.331L5.25 9.3325ZM1.5675 10.045H17.13C18 10.045 18.6975 10.7425 18.6975 11.6125C18.6975 12.475 17.9925 13.18 17.13 13.18H15.639V14.5225C15.639 15.9385 15.171 17.245 14.3805 18.2965C14.4772 18.6318 14.394 19.0083 14.1307 19.273C13.5056 19.9042 12.7615 20.405 11.9414 20.7464C11.1213 21.0878 10.2416 21.2631 9.35325 21.262C8.46569 21.2612 7.587 21.0854 6.76747 20.7446C5.94794 20.4038 5.20367 19.9048 4.57725 19.276C4.45162 19.1501 4.36194 18.9929 4.3175 18.8207C4.27306 18.6484 4.27548 18.4675 4.3245 18.2965C3.50595 17.2087 3.06415 15.8839 3.066 14.5225V13.18H1.5675C0.705 13.18 0 12.475 0 11.6125C0 10.75 0.705 10.045 1.5675 10.045ZM14.556 14.5225V13.18H4.149V14.5225C4.149 15.6685 4.5195 16.7275 5.14725 17.587C5.44425 17.5473 5.75475 17.6418 5.98275 17.8698C6.42431 18.3141 6.94932 18.6668 7.52761 18.9076C8.1059 19.1484 8.72607 19.2726 9.3525 19.273C10.668 19.273 11.8567 18.7405 12.72 17.872C12.9472 17.6425 13.26 17.5473 13.5577 17.587C14.208 16.6977 14.5574 15.6241 14.5552 14.5225"
                  fill="#FF0000"
                  />
              </svg>
                  </div>

            
                  <p className="text-center  w-[90%] leading-4 text-[10px] xl:text-base md:text-xs lg:text-sm">
                  Meeting all regulatory and environmental standards.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
  
      {/* <img
              src={qualityImage}
              alt="Quality Product"
              className=" md:hidden block !z-[1000] -mt-20"
                    /> */}
      <img
        src={vector}
        alt="Vector"
        className="absolute   top-40 left-0 w-full h-full"
      />
    </div>
  );
};

import standroom from "../assets/standroom.png";
// const Testing = () => {
//   return (
//     <div className=" my-28 md:px-0 px-4 rounded-xl flex max-w-7xl mx-auto flex-col items-center justify-center md:mt-0 mt-[300px] ">
//       <div className="  text-center flex flex-col items-center justify-center max-w-2xl">
//         <h1 className=" text-2xl md:text-[40px]  font-medium text-[#ED1C24]">Testing & Facilities Lab</h1>
//         <p className=" md:text-base   leading-[20px] text-xs md:w-full w-[80%] text-[#82848A] mt-4">
//           MAIL’s advanced Standard Room houses cutting-edge testing and
//           measuring instruments. Our metallurgical and chemical labs ensure
//           precise, routine, and periodic testing, guaranteeing unmatched quality
//           and reliability.
//         </p>
//       </div>
//       <div className="my-16 w-full px-4 md:rounded-xl rounded-md md:px-10 md:py-10 bg-[#ECECF0]">
//         <h1 className="md:block hidden text-2xl font-medium text-[#ED1C24]">Standard Room</h1>
//         <div className=" relative flex md:flex-row flex-col mt-6">
//           <img src={standroom}  className="  rounded-md md:mr-10 w-full md:w-[60%]"/>
//         <h1 className="block md:hidden text-lg my-7 font-medium text-[#ED1C24]">Standard Room</h1>
//           <div className=" md:ml-0 ml-6 text-[#151414]">
//             <ul className=" flex flex-col  list-disc  max-w-xs leading-[34px]">
//               <li> CMM -4 NO (at all plants)</li>
//               <li> Profile Projector</li>
//               <li>Micro Scope</li>
//               <li>Height Masters</li>
//               <li>
//                 Others including Surface Table ,Height gauge ,Bevel Protector
//                 ,Micrometer ( Inside/ outside), Verniers etc
//               </li>
//             </ul>
//           </div>
//           <div className="  scale-75 md:my-0 my-4 md:scale-100 w-fit px-4 py-4 rounded-full  md:ml-0 ml-4 md:absolute  md:bottom-0  right-0  h-fit  bg-[#FF0000]">
//       <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M19.3332 25.3492C19.3364 25.0866 19.4363 24.8251 19.6461 24.6203L27.3957 17.0552L19.8306 9.30555C19.4346 8.89988 19.4426 8.23643 19.8482 7.84042C20.2539 7.44441 20.9174 7.4524 21.3134 7.85806L29.6023 16.3491C29.9983 16.7547 29.9903 17.4182 29.5846 17.8142L21.0936 26.1031C20.688 26.4991 20.0245 26.4911 19.6285 26.0854C19.4235 25.8894 19.3301 25.6118 19.3332 25.3492Z" fill="white"/>
// <path d="M4.32686 16.7774C4.33368 16.2107 4.80929 15.7464 5.37599 15.7532L28.6384 16.0334C29.2051 16.0402 29.6694 16.5158 29.6626 17.0825C29.6557 17.6492 29.1801 18.1135 28.6134 18.1067L5.35102 17.8265C4.78432 17.8197 4.32003 17.3441 4.32686 16.7774Z" fill="white"/>
// </svg>

//       </div>
//         </div>
       
//       </div>
    
//     </div>
//   );
// };

import cer1 from "../assets/cer1.jpeg"
import cer2 from "../assets/cer2.jpeg"
import cer3 from "../assets/cer3.jpeg"
import { FooterMain } from "./FooterMain";

const Certification = ()=>{
  return(
    <div className=" max-w-6xl mx-auto my-20 pb-20">
      <h1 className=" text-2xl md:text-4xl font-medium text-[#ED1C24] text-center mb-10">Our Certification</h1>
      <div className="md:block hidden">
      <div className="flex flex-col md:flex-row items-start justify-center w-full mx-auto gap-8 md:gap-4">
  <div className="flex flex-col items-start w-full md:w-auto">
    <img src={cer1} className="rounded-lg w-[80%] md:w-full max-w-[300px]" alt="" />
    <div className="text-start mt-2">
      <h1 className="text-[#ED1C24] text-2xl">2012</h1>
      <h2 className="mt-1">Certification of OHSAS 18001-2007</h2>
    </div>
  </div>
  
  <div className="flex flex-col items-start w-full md:w-auto">
    <img src={cer2} className="rounded-lg w-[80%] md:w-full max-w-[300px]" alt="" />
    <div className="text-start mt-2">
      <h1 className="text-[#ED1C24] text-2xl">2012</h1>
      <h2 className="mt-1">Certification of OHSAS 18001-2007</h2>
    </div>
  </div>
  
  <div className="flex flex-col items-start w-full md:w-auto">
    <img src={cer3} className="rounded-lg w-[80%] md:w-full max-w-[300px] md:ml-0" alt="" />
    <div className="text-start mt-2">
      <h1 className="text-[#ED1C24] text-2xl">2012</h1>
      <h2 className="mt-1">Certification of OHSAS 18001-2007</h2>
    </div>
  </div>
</div>
      </div>
     

      <div className="  ml-7 md:hidden flex flex-col w-full mx-auto ">
        
        <div>
          <img src={cer2} className=" rounded-lg  w-[70%]" alt="" />
          <div>
            <h1 className=" text-[#ED1C24] mt-2 text-2xl">2012</h1>
            <h2 className=" mt-1">Certification of OHSAS 18001-2007</h2>
          </div>
        </div>
        <div className="   mx-auto items-center justify-center w-full flex">

        <div>
          <img src={cer3} className=" rounded-lg  w-[70%] " alt="" />
          <div>
            <h1 className=" text-[#ED1C24] mt-2 text-2xl">2012</h1>
            <h2 className=" mt-1">Certification of OHSAS 18001-2007</h2>
          </div>
        </div>
        <div>
          <img src={cer1} className=" rounded-lg w-[70%] " alt="" />
          <div> 
            <h1 className=" text-[#ED1C24] mt-2 text-2xl">2012</h1>
            <h2 className=" mt-1">Certification of OHSAS 18001-2007</h2>
          </div>
        </div>
        </div>

        

      </div>
    </div>
  )
}



function ModelViewer() {
  const [loading, setLoading] = useState(true);
  const modelContainerRef = useRef(null);
  const modelRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.set(0, 1.3, 5);

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      physicallyCorrectLights: true, // Enable physically correct lighting
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 6.5;

    const container = modelContainerRef.current;
    if (container) {
      container.innerHTML = '';
      container.appendChild(renderer.domElement);
    }

    // Enhanced lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Main directional light
    const mainLight = new THREE.DirectionalLight(0xffffff, 2);
    mainLight.position.set(7, 7, 5);
    mainLight.castShadow = true;
    scene.add(mainLight);

    // Add rim light for better definition
    const rimLight = new THREE.DirectionalLight(0x9ca3af, 1);
    rimLight.position.set(-5, 5, -5);
    scene.add(rimLight);

    // Add point lights for dynamic lighting
    const pointLight1 = new THREE.PointLight(0xffffff, 1);
    pointLight1.position.set(2, 2, 2);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffffff, 1);
    pointLight2.position.set(-2, -2, -2);
    scene.add(pointLight2);

    const modelGroup = new THREE.Group();
    scene.add(modelGroup);

    // Load model with enhanced materials
    const loader = new GLTFLoader();
    loader.load(
      '/40.gltf',
      (gltf) => {
        const model = gltf.scene;
        
        // Enhance materials for all meshes
        model.traverse((child) => {
          if (child.isMesh) {
            // Enhance existing materials
            if (child.material) {
              child.material.roughness = 0.3;
              child.material.metalness = 0.8;
              child.material.envMapIntensity = 1.5;
              child.material.needsUpdate = true;
            }
          }
        });

        // Center and scale model
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 3 / maxDim;
        
        model.position.set(-center.x, -center.y + 1, -center.z);
        model.scale.setScalar(scale);
        
        modelGroup.add(model);
        modelRef.current = modelGroup;
        setLoading(false);
      },
      undefined,
      (error) => console.error('Model loading error:', error)
    );

    // Animate lights
    let time = 0;
    function animateLights() {
      time += 0.01;
      
      // Animate point lights in a circular pattern
      pointLight1.position.x = Math.sin(time) * 3;
      pointLight1.position.z = Math.cos(time) * 3;
      
      pointLight2.position.x = Math.sin(time + Math.PI) * 3;
      pointLight2.position.z = Math.cos(time + Math.PI) * 3;
    }

    function updateSize() {
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }
    
    window.addEventListener('resize', updateSize);
    updateSize();

    function animate() {
      animationFrameRef.current = requestAnimationFrame(animate);
      if (modelRef.current) {
        modelRef.current.rotation.y += 0.01;
        animateLights();
      }
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      window.removeEventListener('resize', updateSize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="absolute md:w-[900px] md:h-[800px] w-[500px] h-[600px]" style={{ zIndex: 50 }}>
      <div
        ref={modelContainerRef}
        className="w-full h-full"
        style={{
          background: 'transparent',
          position: 'relative',
          zIndex: 50,
        }}
      />
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white font-medium">Loading 3D Model...</div>
        </div>
      )}
    </div>
  );
}