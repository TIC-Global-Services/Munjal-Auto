import React ,{useRef ,useEffect}from "react";
import { motion, useInView,useMotionValue,animate,useTransform } from "framer-motion";
 
import machine from "../../assets/machine.png";
import contactus from "../../assets/contactus.png";
import mobilesec1 from "../../assets/mobileinovationsecimg1.png";
import mobilesec2 from "../../assets/mobileinovationsecimg2.png";
import { FooterMain } from "../FooterMain";
const ThirdSection = () => {
  return (
    <div>
      <CoreValuesSection />
      <MobileInovaFuture />
      <Bento />
      <Investors />
      <ColumnLayout />
      <Certifications />
      <MobileCapabilitiesSection/>
      <GlobalPresence />
      <FooterMain />
      <MobileFooter />
    </div>
  );
};

export default ThirdSection;

const MobileInovaFuture = () => {
  return (
    <>
      <div className=" px-4   flex-col  hidden  items-center gap-4">
        <h1 className=" text-2xl">
          Innovating for the{" "}
          <span className=" text-[#ED1C24] font-bold">Future</span>
        </h1>
        <div className=" flex gap-3">
          <div className=" bg-[#F3F4F6] px-2 py-4 space-y-2 rounded flex items-center justify-center text-center flex-col">
            <img src={mobilesec1} className="   w-1/2" alt="img1" />
            <h1 className=" whitespace-nowrap text-sm font-semibold">
              Lightweight Solutions
            </h1>
            <p className="  text-[10px]  leading-[11px]">
              Designed to enhance fuel efficiency and reduce emissions.
            </p>
          </div>
          <div className=" bg-[#F3F4F6] px-2 py-4 space-y-2 rounded flex items-center justify-center text-center flex-col">
            <img src={mobilesec2} className="   w-1/2" alt="img1" />
            <h1 className=" whitespace-nowrap text-sm font-semibold">
              Composite Material
            </h1>
            <p className="  text-[10px]  leading-[11px]">
              Integrating Advanced Materials for durable, eco-friendly products.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const CoreValuesSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div 
    ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="max-w-7xl md:mx-auto md:block mt-10 md:-mt-10 px-6 md:px-0 md:pl-16 py-16">
      {/* Comment Header */}
      <div className="text-sm text-gray-500 mb-2 md:block hidden">
        // CORE VALUES
      </div>

      {/* Main Section */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Column - Title */}
        <motion.div  variants={titleVariants}  className=" mt-4">
          <h1 className="text-2xl md:text-left font-[300] text-center md:text-5xl lg:text-[3rem] leading-tight">
            <span className=" whitespace-nowrap">
              {" "}
              The{" "}
              <span className="text-red-600 font-bold   whitespace-nowrap">
                Core of Engineering
              </span>{" "}
            </span>{" "}
            <span className=" whitespace-nowrap">
              {" "}
              and Manufacturing <br />
            </span>
            <span className="text-red-600 font-bold ">Synergy</span>.
          </h1>
        </motion.div>

        {/* Right Column - Values Grid */}
        <div className="grid  md:scale-90 grid-cols-2 gap-2 md:gap-3">
          {/* Quality Card */}
          <motion.div
            variants={cardVariants} className="bg-gray-50 md:p-6 p-2 h-full  rounded-lg md:rounded-[32px]">
             <div className="md:w-8 md:h-8 w-4 h-4 mt-3">
            <img src={ssvglogo}/>
            </div>
            <h3 className="md:text-[18px] text-base font-semibold mb-2">
              Quality
            </h3>
            <p className="text-gray-600 md:text-base text-[10px] md:leading-6 leading-[16px]  ">
              Our relentless pursuit of excellence ensures every product meets
              the highest standards of performance, reliability, and durability.
            </p>
          </motion.div>

          {/* Technology Card */}
          <motion.div
            variants={cardVariants} className="bg-gray-50 md:p-6 p-2 h-full  rounded-lg md:rounded-[32px]">
          <div className="md:w-8 md:h-8 w-4 h-4 mt-3">
            <img src={ssvglogo}/>
            </div>
            <h3 className="md:text-[18px] text-base font-semibold mb-2">
              Technology
            </h3>
            <p className="text-gray-600 md:text-base text-[10px] md:leading-6 leading-[16px]">
              Cutting-edge engineering and technological integration are at the
              heart of everything we do, enabling us to stay ahead in a
              competitive industry.
            </p>
          </motion.div>

          {/* Innovation Card */}
          <motion.div
            variants={cardVariants} className="bg-gray-50 md:p-6 p-2 h-full  rounded-lg md:rounded-[32px]">
            <div className="md:w-8 md:h-8 w-4 h-4 mt-3">
            <img src={ssvglogo}/>
            </div>
            <h3 className="md:text-[18px] text-base font-semibold mb-2">
              Innovation
            </h3>
            <p className="text-gray-600 md:text-base text-[10px] md:leading-6 leading-[16px]">
              With a deep focus on R&D, we bring forward-thinking solutions to
              industries globally, creating products that shape the future of
              mobility and sustainability.
            </p>
          </motion.div>

          {/* Sustainability Card */}
          <motion.div
            variants={cardVariants} className="bg-gray-50  md:p-6 p-2 h-full  rounded-lg md:rounded-[32px]">
            <div className="md:w-8 md:h-8 w-4 h-4 mt-3">
            <img src={ssvglogo}/>
            </div>
            <h3 className="md:text-[18px] text-base font-semibold mb-2">
              Sustainability
            </h3>
            <p className="text-gray-600 md:text-base text-[10px] md:leading-6 leading-[16px]">
              We are committed to creating environmentally responsible
              solutions, focusing on lightweight products and sustainable
              materials to minimize our ecological footprint.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
import ssvglogo from "../../assets/svglogo.svg"
const Bento = () => {
  // const containerRef = useRef(null);
  // const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const desktopRef = useRef(null);
  const mobileRef = useRef(null);
  
  const isDesktopInView = useInView(desktopRef, { once: true, margin: "-100px" });
  const isMobileInView = useInView(mobileRef, { once: true, margin: "-100px" });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      <motion.div
      ref={desktopRef}
        variants={containerVariants}
        initial="hidden"
        animate={isDesktopInView ? "visible" : "hidden"}
        className="hidden py-20 md:flex flex-col md:px-16 gap-4"
      >
        <motion.div variants={itemVariants} className="flex h-full gap-4">
          <motion.div variants={itemVariants} className="w-[50%] md:w-1/2">
            <img src={machine} alt="" />
          </motion.div>
          <motion.div variants={itemVariants} className="w-[50%]">
            <ExpertiseSection />
          </motion.div>
        </motion.div>
        <motion.div variants={itemVariants} className="flex gap-4">
          <motion.div variants={itemVariants}>
            <ManufacturingCapacity />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ProductionCapacity />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Mobile Version */}
      <motion.div
       ref={mobileRef}
        variants={containerVariants}
        initial="hidden"
        animate={isMobileInView ? "visible" : "hidden"}
        className="-mt-8 flex py-20 md:hidden flex-col md:px-16 gap-4"
      >
        <motion.div variants={itemVariants} className="px-4 flex flex-col h-full gap-4">
          <motion.div variants={itemVariants} className="w-[100%]">
            <ExpertiseSection />
          </motion.div>
        </motion.div>
        <motion.div variants={itemVariants} className="h-1/2 flex px-4 gap-2">
          <motion.div variants={itemVariants} className="h-1/4 md:w-[50%]">
            <img
              src={machine}
              className="!h-[20rem] object-cover rounded-[12px]"
              alt=""
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ManufacturingCapacity />
          </motion.div>
        </motion.div>
        <motion.div variants={itemVariants} className="px-4">
          <ProductionCapacity />
        </motion.div>
      </motion.div>
    </>
  );
};

const ProductionCapacity = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  
  const capacityData = [
    {
      quantity: 94.5,
      unit: "lakh",
      product: "Exhaust mufflers",
    },
    {
      quantity: 15,
      unit: "lakh",
      product: "Scooter Wheels",
    },
    {
      quantity: 12.5,
      unit: "lakh",
      product: "Rims",
    },
    {
      quantity: 2,
      unit: "lakh",
      product: "Fuel Tanks",
    },
  ];

  return (
    <div ref={containerRef} className="bg-[#F3F4F6] rounded-lg md:rounded-[26px] md:px-6 md:py-16 py-6 px-2">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-base md:text-4xl lg:text-4xl font-[300] md:text-left text-center mb-4 md:mb-12">
          Our <span className="text-red-600 font-medium">state-of-the-art</span> facilities
          have the annual capacity to produce
        </h2>

        <div className="grid grid-cols-4 md:grid-cols-2 gap-1 lg:grid-cols-4 md:gap-4">
          {capacityData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white hover:cursor-pointer rounded-md md:rounded-xl md:px-4 px-2 py-3 md:py-8 flex shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="space-y-2 flex flex-col items-start justify-center">
                <motion.h3 
                  className="md:text-2xl text-[12px] whitespace-nowrap font-bold"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {isInView && (
                      <Counter from={0} to={item.quantity} duration={2} />
                    )}
                  </motion.span>
                  {item.unit}
                </motion.h3>
                <p className="text-gray-600 md:text-base text-[5px] whitespace-nowrap">
                  {item.product}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Add this Counter component just before or after ProductionCapacity
const Counter = ({ from, to, duration }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest * 10) / 10);
  const [countText, setCountText] = useState(from);

  useEffect(() => {
    const controls = animate(count, to, {
      duration: duration,
      onUpdate: latest => setCountText(Math.round(latest * 10) / 10),
    });

    return controls.stop;
  }, []);

  return <>{countText}</>;
};
const ManufacturingCapacity = () => {
  const locations = ["Vadodara", "Bawal", "Haridwar", "Dharuhera"];

  return (
    <div className="bg-[#F3F4F6] rounded-lg md:rounded-[26px] h-full md:px-6 px-2  md:py-0 py-4 flex">
      <div className="max-w-7xl mx-auto flex justify-center flex-col">
        {/* Comment Header */}
        <div className="md:text-sm text-[10px] whitespace-nowrap  text-gray-500 md:mb-1 mb-2">
          //MANUFACTURING CAPACITY
        </div>

        {/* Title */}
        <h2 className="text-base whitespace-nowrap md:text-left text-center md:whitespace-normal md:text-4xl  font-[300] md:mb-5 mb-2">
          Daily <span className="text-red-600 font-medium">Outputs</span>
        </h2>

        {/* Description */}
        <div className="md:space-y-6  max-w-3xl   md:mb-8">
          <p className="text-gray-800 md:block hidden text-base">
            Munial Auto Industries is equipped to produce an impressive array of
            components to meet global demands. Our state-of-the-art facilities
            have the annual capacity to produce
          </p>

          <p className="text-gray-800 md:block hidden    text-base">
            With a robust manufacturing setup across multiple locations
            including
          </p>
          <p className=" text-[#151414] text-center  md:hidden block  text-[10px] leading-[13px]">
            Munjal Auto Industries is equipped to produce an impressive array of
            components to meet global demands. Our state-of-the-art facilities
            have the annual capacity to produce
          </p>
        </div>

        {/* Location Tags */}
        <div className="md:flex -mt-4 hidden flex-wrap gap-2">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-black text-white px-6 py-2 rounded-[12px] text-xs hover:bg-gray-800 transition-colors duration-300"
            >
              {location}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ExpertiseSection = () => {
  return (
    <div className="bg-[#F3F4F6] px-6  flex rounded-lg md:py-0 py-4 md:rounded-[26px]  h-full">
      <div className="max-w-7xl md:items-start items-center flex flex-col justify-center md:pl-6  mx-auto">
        {/* Comment Header */}
        <div className="md:text-sm text-[10px] text-gray-500 mb-2 md:mb-8">
          //OUR EXPERTISE
        </div>

        {/* Title */}
        <div className="max-w-3xl mb-2 md:mb-8">
          <h2 className="text-base md:text-4xl font-[300]">
            With <span className="text-red-600 font-medium">40+ years</span> of{" "}
            <span className="text-red-600 font-medium">
              <br className=" md:block hidden" />
              experience
            </span>
          </h2>
        </div>

        {/* Description */}
        <div className="max-w-3xl">
          <p className="text-gray-800 text-[10px] md:text-left text-center md:text-base leading-[14px] md:leading-relaxed">
            Advanced manufacturing with robotic automation and CNC systems.
            Tailored, customer-centric designs for top global OEMs.
            ISO-certified systems ensuring quality and precision.
          </p>
        </div>
      </div>
    </div>
  );
};

const Investors = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="md:flex mx-auto items-center md:mt-10 pb-10 md:py-20 justify-center"
      >
        <motion.div className="w-[100%] md:pr-20 mx-auto text-white flex md:flex-row flex-col items-center justify-between rounded-[20px] overflow-hidden">
          {/* Left Section */}
          <motion.div variants={itemVariants} className="flex-1 md:pl-20 md:px-0 px-10">
            <motion.div variants={itemVariants} className="uppercase tracking-wider text-xs md:text-sm text-black">
              // INVESTORS
            </motion.div>

            <motion.h1 variants={itemVariants} className="md:text-6xl text-2xl font-[300] leading-tight">
              <span className="text-[#ED1C24] font-medium">
                Investor Relations
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-black mt-4 text-sm md:text-lg md:w-[60%] leading-relaxed">
              Driven by innovation and precision, Munjal Auto creates long-term value for investors. Stay updated on our financial performance and growth strategy.
            </motion.p>

            <motion.button variants={itemVariants} className="bg-black md:block hidden mt-10 w-fit text-white px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Contact Us
            </motion.button>
          </motion.div>

          {/* Right Section */}
          <motion.div variants={itemVariants} className="md:px-0 px-10 md:py-0 py-10 md:w-[40%]">
            <img
              src={contactus}
              alt="Automotive manufacturing assembly line"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.button variants={itemVariants} className="bg-black flex items-start justify-start md:hidden relative -left-[30%] w-fit text-white px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Contact Us
          </motion.button>
        </motion.div>
      </motion.div>
    </>
  );
};

import { useState } from "react";
import expand1 from "../../assets/expand1.jpeg";
import expand2 from "../../assets/expand2.jpeg";
import expand3 from "../../assets/expand3.jpeg";
import expand4 from "../../assets/expand4.jpeg";
import expand5 from "../../assets/expand5.jpeg";
import expand6 from "../../assets/expand6.jpeg";

const ColumnLayout = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const columns = [
    { id: 1, image: expand1, text: "Design & Engineering" },
    { id: 2, image: expand2, text: `CNC Machining` },
    { id: 3, image: expand3, text: "Composite Tooling" },
    { id: 4, image: expand4, text: "Automation" },
    { id: 5, image: expand5, text: "Project Management" },
    { id: 6, image: expand6, text: "Inspection" },
  ];

  return (
    <div className=" hidden md:flex flex-col   py-40 items-center w-full justify-center">
      <div className=" flex pb-6  flex-col items-start w-full pl-28">
        <div className="uppercase tracking-wider text-sm text-black">
          // R&D & Capabilities
        </div>

        <h1 className="text-6xl font-[300] leading-tight">
          <span className="text-[#ED1C24] font-medium">Capabilities</span>
        </h1>
      </div>
      <div className="flex w-[90%] min-h-[80vh] gap-4 px-10   justify-center  ">
        {columns.map((col, index) => (
          <div
            key={col.id}
            className={`p-8 transition-all rounded-lg group  duration-500 ease-in-out flex flex-col justify-end items-center bg-cover bg-center relative ${
              hoveredIndex === index ? "w-2/5" : "w-1/5"
            }`}
            style={{ backgroundImage: `url(${col.image})` }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span
              className={`h-12 absolute  left-4 w-[3px] bg-[#ED1C24] transition-all duration-500 `}
            ></span>
            <div
              className={`absolute p-8 w-full text-left group-hover:justify-start transition-all flex items-center py-2 ${
                index === 3 || index === 5 ? "!bottom-2" : "!bottom-6"
              }`}
            >
              <p
                className={`text-white text-2xl text-start flex font-[500] h-[60px] transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-80"
                } ${hoveredIndex === 1 ? "w-[20px]" : "w-[10px]"}`}
              >
                {col.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

import map from "../../assets/home/india.png";
const GlobalPresence = () => {
  return (
    <div className=" flex items-center  md:py-20 justify-center">
      <div className="bg-black py-10  text-white md:px-20 w-[92%] md:w-[90%] p-4 md:p-8 rounded-[20px] flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-2xl   ">
          <div className="text-sm mb-4 text-gray-400">//GLOBAL PRESENCE</div>
          <h2 className="md:text-4xl text-2xl font-bold mb-4 md:mb-6">
            <span className="text-red-600">OEM</span> Collaborations
          </h2>
          <p className="text-gray-300 md:text-base md:leading-6  leading-6 text-xs mb-6 ">
            Serving a global network of OEMs, Munjal Auto has established
            strategic collaborations with top-tier brands worldwide. Our
            footprint spans across continents, delivering tailored engineering
            solutions to markets in Asia, Europe, North America, and beyond.
          </p>
          <button className="bg-white text-black md:text-base  text-sm px-6 py-2 rounded-full hover:bg-gray-200 transition-colors">
            More About Us
          </button>
        </div>

        <div className="  md:w-1/3 ">
          <img src={map} alt="Global Presence" className="w-full h-full mb-8" />
        </div>
      </div>
    </div>
  );
};

import munjallogo from "../../assets/MunjalAutologo-.png";
import { exp } from "three/tsl";
import Certifications from "./Certifications";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black hidden  md:block  text-white w-full mt-20  py-16">
      <div className=" w-full   px-14">
        {/* Main Footer Grid */}
        <div className="   w-full flex  gap-10 ">
          {/* Logo Column */}

          <img
            src={munjallogo}
            alt="Munjal Auto Logo"
            className="w-fit mr-4 h-20"
          />

          <div className=" whitespace-nowrap w-full  text-sm grid grid-cols-7  gap-10 ">
            {/* Navigation Columns */}
            <div className="col-span-1 md:col-span-1">
              <h3 className="font-semibold mb-4">About us</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    History
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Munjal Group
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Board Of Directors
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-1 md:col-span-1">
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Exhaust wheel
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Exhaust wheel
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Exhaust wheel
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Exhaust wheel
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    New Product
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-1 md:col-span-1">
              <h3 className="font-semibold mb-4">Philosophy</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Our Vision
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Our Mission
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-1 md:col-span-1">
              <h3 className="font-semibold mb-4">Quality</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Quality policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Testing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Our certification
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-1 md:col-span-1">
              <h3 className="font-semibold mb-4">Finance</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Annual Report
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Annual Report
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Annual Report
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-1 whitespace-normal md:col-span-1">
              <h3 className="font-semibold mb-4">Facilities</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Engineering & tool room
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Manufacturing
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-1 md:col-span-1">
              <h3 className="font-semibold mb-4">Training</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Exhaust wheel
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Exhaust wheel
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex    ">
            <div className=" flex flex-col items-start">
              <a
                href="#"
                className="bg-white whitespace-nowrap text-black px-8 py-4 rounded-full hover:bg-gray-200 transition-colors"
              >
                Contact us
              </a>
              <h4 className="font-semibold mb-4 mt-10">Stay Connected</h4>
              <div className="flex  items-center justify-center gap-6">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.2898 2.35408C16.6415 2.61946 15.9571 2.78532 15.2367 2.88484C15.9571 2.48677 16.5334 1.8565 16.7856 1.09353C16.1012 1.45843 15.3447 1.72381 14.5163 1.88967C13.8679 1.2594 12.9314 0.861328 11.9228 0.861328C9.97768 0.861328 8.39278 2.32091 8.39278 4.11221C8.39278 4.37759 8.4288 4.6098 8.50084 4.842C5.58318 4.70931 2.95368 3.41559 1.18868 1.42526C0.900513 1.92284 0.72041 2.4536 0.72041 3.0507C0.72041 4.17856 1.33276 5.17373 2.30531 5.77083C1.72898 5.73765 1.18868 5.60497 0.68439 5.37276V5.40593C0.68439 6.9982 1.90909 8.32509 3.53001 8.62364C3.24185 8.68999 2.91766 8.72316 2.59348 8.72316C2.37735 8.72316 2.12521 8.68999 1.90909 8.65682C2.37735 9.95053 3.67409 10.9125 5.22297 10.9125C3.99828 11.775 2.48541 12.3058 0.828472 12.3058C0.540308 12.3058 0.252144 12.3058 0 12.2726C1.5849 13.2014 3.42195 13.7322 5.4391 13.7322C11.9588 13.7322 15.5248 8.75633 15.5248 4.44393C15.5248 4.31125 15.5248 4.14538 15.5248 4.0127C16.2092 3.58146 16.8216 3.01753 17.2898 2.35408Z"
                      fill="#FCFCFC"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.29026 17.6362V9.72246H0.398468V6.63832H3.29026V4.36386C3.29026 1.72436 5.04079 0.287109 7.59758 0.287109C8.8223 0.287109 9.87489 0.371083 10.1816 0.408616V3.16704L8.40838 3.16778C7.01785 3.16778 6.74861 3.77629 6.74861 4.66923V6.63832H10.0649L9.63309 9.72246H6.74861V17.6362H3.29026Z"
                      fill="#FCFCFC"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.7707 1.7394C13.5694 1.7394 13.9008 1.74906 15.0064 1.79548C15.6712 1.80297 16.3296 1.91538 16.9531 2.12783C17.4052 2.28841 17.8159 2.5344 18.1585 2.84997C18.5012 3.16554 18.7683 3.54369 18.9427 3.96008C19.1734 4.53427 19.2954 5.14063 19.3035 5.75281C19.3535 6.77098 19.3644 7.07621 19.3644 9.65359C19.3644 12.231 19.354 12.5362 19.3035 13.5544C19.2954 14.1666 19.1734 14.7729 18.9427 15.3471C18.7683 15.7635 18.5012 16.1416 18.1585 16.4572C17.8159 16.7728 17.4052 17.0188 16.9531 17.1794C16.3296 17.3918 15.6712 17.5042 15.0064 17.5117C13.9013 17.5577 13.5699 17.5678 10.7707 17.5678C7.97154 17.5678 7.64011 17.5581 6.53501 17.5117C5.87027 17.5042 5.21185 17.3918 4.58836 17.1794C4.13622 17.0188 3.7256 16.7728 3.38293 16.4572C3.04027 16.1416 2.77315 15.7635 2.59878 15.3471C2.3681 14.7729 2.24604 14.1666 2.2379 13.5544C2.18799 12.5362 2.17701 12.231 2.17701 9.65359C2.17701 7.07621 2.18749 6.77098 2.2379 5.75281C2.24604 5.14063 2.3681 4.53427 2.59878 3.96008C2.77315 3.54369 3.04027 3.16554 3.38293 2.84997C3.7256 2.5344 4.13622 2.28841 4.58836 2.12783C5.21185 1.91538 5.87027 1.80297 6.53501 1.79548C7.64061 1.74952 7.97204 1.7394 10.7707 1.7394ZM10.7707 0C7.92562 0 7.56724 0.0110321 6.44916 0.0579188C5.57918 0.0738547 4.71844 0.225553 3.90354 0.50656C3.20449 0.749114 2.57133 1.12922 2.04823 1.62035C1.51445 2.10226 1.10136 2.68568 0.837813 3.32987C0.532678 4.08033 0.367955 4.87302 0.350651 5.6742C0.300737 6.70295 0.288757 7.033 0.288757 9.65313C0.288757 12.2733 0.300737 12.6033 0.351649 13.633C0.368953 14.4342 0.533676 15.2269 0.838811 15.9773C1.10206 16.6214 1.51481 17.2048 2.04823 17.6868C2.57162 18.1781 3.20513 18.5582 3.90454 18.8006C4.71943 19.0816 5.58018 19.2333 6.45016 19.2493C7.56823 19.2952 7.92512 19.3072 10.7717 19.3072C13.6183 19.3072 13.9752 19.2962 15.0933 19.2493C15.9633 19.2333 16.824 19.0816 17.6389 18.8006C18.335 18.5521 18.9671 18.1726 19.4948 17.6863C20.0226 17.2 20.4343 16.6176 20.7036 15.9764C21.0088 15.2259 21.1735 14.4333 21.1908 13.6321C21.2407 12.6033 21.2527 12.2733 21.2527 9.65313C21.2527 7.033 21.2407 6.70295 21.1898 5.67329C21.1725 4.8721 21.0078 4.07941 20.7026 3.32895C20.4394 2.68485 20.0266 2.10143 19.4932 1.61943C18.9698 1.12819 18.3363 0.748076 17.6369 0.50564C16.822 0.224633 15.9613 0.0729354 15.0913 0.0569995C13.9742 0.0110322 13.6158 0 10.7707 0Z"
                      fill="#FCFCFC"
                    />
                    <path
                      d="M10.7692 4.69727C9.70455 4.69727 8.66385 4.988 7.77867 5.53269C6.89348 6.07739 6.20356 6.85158 5.79615 7.75738C5.38875 8.66317 5.28215 9.65988 5.48984 10.6215C5.69754 11.5831 6.21019 12.4663 6.96298 13.1596C7.71577 13.8529 8.67489 14.325 9.71904 14.5162C10.7632 14.7075 11.8455 14.6093 12.829 14.2342C13.8126 13.859 14.6533 13.2236 15.2447 12.4084C15.8362 11.5932 16.1519 10.6348 16.1519 9.65438C16.1519 8.33967 15.5848 7.07881 14.5753 6.14917C13.5659 5.21953 12.1967 4.69727 10.7692 4.69727ZM10.7692 12.8721C10.0781 12.8721 9.40258 12.6834 8.828 12.3298C8.25342 11.9762 7.80558 11.4737 7.54113 10.8857C7.27668 10.2978 7.20749 9.65081 7.3423 9.02664C7.47712 8.40246 7.80989 7.82912 8.29853 7.37911C8.78718 6.92911 9.40974 6.62265 10.0875 6.4985C10.7653 6.37434 11.4678 6.43806 12.1062 6.6816C12.7447 6.92514 13.2904 7.33757 13.6743 7.86672C14.0582 8.39587 14.2631 9.01798 14.2631 9.65438C14.2631 10.5078 13.895 11.3262 13.2398 11.9296C12.5845 12.5331 11.6958 12.8721 10.7692 12.8721Z"
                      fill="#FCFCFC"
                    />
                    <path
                      d="M16.365 5.65855C17.0596 5.65855 17.6228 5.13993 17.6228 4.50017C17.6228 3.86042 17.0596 3.3418 16.365 3.3418C15.6703 3.3418 15.1071 3.86042 15.1071 4.50017C15.1071 5.13993 15.6703 5.65855 16.365 5.65855Z"
                      fill="#FCFCFC"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    width="21"
                    height="19"
                    viewBox="0 0 21 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.3882 0C4.83176 0 0.361572 4.11672 0.361572 9.23377C0.361572 13.312 3.24422 16.7747 7.21307 18.0058C7.7144 18.0828 7.88151 17.8135 7.88151 17.5442C7.88151 17.3133 7.88151 16.7362 7.88151 15.9667C5.08242 16.5438 4.49754 14.7356 4.49754 14.7356C4.03799 13.6583 3.36955 13.389 3.36955 13.389C2.45044 12.8119 3.4531 12.8119 3.4531 12.8119C4.45576 12.8888 4.99887 13.7737 4.99887 13.7737C5.8762 15.1972 7.33841 14.774 7.92329 14.5432C8.00685 13.9276 8.25751 13.5429 8.54995 13.312C6.33575 13.0812 3.99621 12.2732 3.99621 8.7336C3.99621 7.73328 4.37221 6.88685 5.04065 6.27127C4.95709 6.04042 4.58109 5.11704 5.1242 3.80893C5.1242 3.80893 5.95975 3.57808 7.88151 4.77078C8.67529 4.57841 9.55261 4.46299 10.3882 4.46299C11.2237 4.46299 12.101 4.57841 12.8948 4.77078C14.8166 3.57808 15.6521 3.80893 15.6521 3.80893C16.1952 5.07857 15.861 6.00195 15.7357 6.27127C16.3623 6.92532 16.7801 7.73328 16.7801 8.7336C16.7801 12.2732 14.4406 13.0427 12.1846 13.2735C12.5606 13.5429 12.853 14.12 12.853 14.9664C12.853 16.1976 12.853 17.1979 12.853 17.5057C12.853 17.7365 13.0201 18.0443 13.5632 17.9674C17.5321 16.7747 20.4147 13.312 20.4147 9.23377C20.4147 4.11672 15.9446 0 10.3882 0Z"
                      fill="#FCFCFC"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className=" pt-32 ">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © {currentYear} Munjal Auto. All rights reserved.
            </p>
            <p className=" font-bold"> Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const MobileFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className=" md:hidden  block pt-60 ">
        <div className="bg-black text-white px-6 py-10 text-left  ">
          <img src={munjallogo} alt="" className="  h-14" />
          <h1 className="  font-bold pb-2 pt-4">Stay in touch:</h1>
          <p className=" text-xs leading-[23px] font-[400]">
            2nd Floor, Tower "C", <br />
            Unitech Business Zone, <br />
            Nirvana Country, South City - 2, <br />
            Sector-50, Gurugram - 122018, Haryana
          </p>
          <p className=" text-xs leading-[23px] font-[400] mt-4 ">
            Email: info@[YourCompanyName].com <br />
            Phone: +91 XXXXX XXXXX
          </p>

          <h1 className=" font-bold mt-4">Contact Us:</h1>
          <p className=" text-xs leading-[23px] font-[400]  ">
            Email: info@[YourCompanyName].com <br />
            Phone: +91 XXXXX XXXXX
          </p>

          <button className=" bg-white text-black text-xs px-6 py-2 rounded-full mt-6">
            Explore more
          </button>

          <div className="flex    ">
            <div className=" flex flex-col items-start">
              <h4 className="font-semibold mb-4 mt-6">Stay Connected</h4>
              <div className="flex  items-center justify-center gap-6">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.2898 2.35384C16.6415 2.61922 15.9571 2.78508 15.2367 2.88459C15.9571 2.48653 16.5334 1.85625 16.7856 1.09329C16.1012 1.45819 15.3447 1.72356 14.5163 1.88942C13.8679 1.25915 12.9314 0.861084 11.9228 0.861084C9.97768 0.861084 8.39278 2.32066 8.39278 4.11197C8.39278 4.37735 8.4288 4.60955 8.50084 4.84176C5.58318 4.70907 2.95368 3.41535 1.18868 1.42501C0.900513 1.9226 0.72041 2.45335 0.72041 3.05046C0.72041 4.17831 1.33276 5.17348 2.30531 5.77058C1.72898 5.73741 1.18868 5.60472 0.68439 5.37252V5.40569C0.68439 6.99796 1.90909 8.32485 3.53001 8.6234C3.24185 8.68974 2.91766 8.72292 2.59348 8.72292C2.37735 8.72292 2.12521 8.68974 1.90909 8.65657C2.37735 9.95029 3.67409 10.9123 5.22297 10.9123C3.99828 11.7748 2.48541 12.3055 0.828472 12.3055C0.540308 12.3055 0.252144 12.3055 0 12.2724C1.5849 13.2012 3.42195 13.7319 5.4391 13.7319C11.9588 13.7319 15.5248 8.75609 15.5248 4.44369C15.5248 4.311 15.5248 4.14514 15.5248 4.01245C16.2092 3.58121 16.8216 3.01728 17.2898 2.35384Z"
                      fill="#FCFCFC"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    width="11"
                    height="18"
                    viewBox="0 0 11 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.29023 17.6362V9.72246H0.398438V6.63832H3.29023V4.36386C3.29023 1.72436 5.04076 0.287109 7.59755 0.287109C8.82227 0.287109 9.87486 0.371083 10.1816 0.408616V3.16704L8.40835 3.16778C7.01782 3.16778 6.74858 3.77629 6.74858 4.66923V6.63832H10.0648L9.63306 9.72246H6.74858V17.6362H3.29023Z"
                      fill="#FCFCFC"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.7707 1.7394C13.5694 1.7394 13.9008 1.74906 15.0064 1.79548C15.6712 1.80297 16.3296 1.91538 16.9531 2.12783C17.4052 2.28841 17.8159 2.5344 18.1585 2.84997C18.5012 3.16554 18.7683 3.54369 18.9427 3.96008C19.1734 4.53427 19.2954 5.14063 19.3035 5.75281C19.3535 6.77098 19.3644 7.07621 19.3644 9.65359C19.3644 12.231 19.354 12.5362 19.3035 13.5544C19.2954 14.1666 19.1734 14.7729 18.9427 15.3471C18.7683 15.7635 18.5012 16.1416 18.1585 16.4572C17.8159 16.7728 17.4052 17.0188 16.9531 17.1794C16.3296 17.3918 15.6712 17.5042 15.0064 17.5117C13.9013 17.5577 13.5699 17.5678 10.7707 17.5678C7.97154 17.5678 7.64011 17.5581 6.53501 17.5117C5.87027 17.5042 5.21185 17.3918 4.58836 17.1794C4.13622 17.0188 3.7256 16.7728 3.38293 16.4572C3.04027 16.1416 2.77315 15.7635 2.59878 15.3471C2.3681 14.7729 2.24604 14.1666 2.2379 13.5544C2.18799 12.5362 2.17701 12.231 2.17701 9.65359C2.17701 7.07621 2.18749 6.77098 2.2379 5.75281C2.24604 5.14063 2.3681 4.53427 2.59878 3.96008C2.77315 3.54369 3.04027 3.16554 3.38293 2.84997C3.7256 2.5344 4.13622 2.28841 4.58836 2.12783C5.21185 1.91538 5.87027 1.80297 6.53501 1.79548C7.64061 1.74952 7.97204 1.7394 10.7707 1.7394ZM10.7707 0C7.92562 0 7.56724 0.0110321 6.44916 0.0579188C5.57918 0.0738547 4.71844 0.225553 3.90354 0.50656C3.20449 0.749114 2.57133 1.12922 2.04823 1.62035C1.51445 2.10226 1.10136 2.68568 0.837813 3.32987C0.532678 4.08033 0.367955 4.87302 0.350651 5.6742C0.300737 6.70295 0.288757 7.033 0.288757 9.65313C0.288757 12.2733 0.300737 12.6033 0.351649 13.633C0.368953 14.4342 0.533676 15.2269 0.838811 15.9773C1.10206 16.6214 1.51481 17.2048 2.04823 17.6868C2.57162 18.1781 3.20513 18.5582 3.90454 18.8006C4.71943 19.0816 5.58018 19.2333 6.45016 19.2493C7.56823 19.2952 7.92512 19.3072 10.7717 19.3072C13.6183 19.3072 13.9752 19.2962 15.0933 19.2493C15.9633 19.2333 16.824 19.0816 17.6389 18.8006C18.335 18.5521 18.9671 18.1726 19.4948 17.6863C20.0226 17.2 20.4343 16.6176 20.7036 15.9764C21.0088 15.2259 21.1735 14.4333 21.1908 13.6321C21.2407 12.6033 21.2527 12.2733 21.2527 9.65313C21.2527 7.033 21.2407 6.70295 21.1898 5.67329C21.1725 4.8721 21.0078 4.07941 20.7026 3.32895C20.4394 2.68485 20.0266 2.10143 19.4932 1.61943C18.9698 1.12819 18.3363 0.748076 17.6369 0.50564C16.822 0.224633 15.9613 0.0729354 15.0913 0.0569995C13.9742 0.0110322 13.6158 0 10.7707 0Z"
                      fill="#FCFCFC"
                    />
                    <path
                      d="M10.7692 4.69727C9.70455 4.69727 8.66385 4.988 7.77867 5.53269C6.89348 6.07739 6.20356 6.85158 5.79615 7.75738C5.38875 8.66317 5.28215 9.65988 5.48984 10.6215C5.69754 11.5831 6.21019 12.4663 6.96298 13.1596C7.71577 13.8529 8.67489 14.325 9.71904 14.5162C10.7632 14.7075 11.8455 14.6093 12.829 14.2342C13.8126 13.859 14.6533 13.2236 15.2447 12.4084C15.8362 11.5932 16.1519 10.6348 16.1519 9.65438C16.1519 8.33967 15.5848 7.07881 14.5753 6.14917C13.5659 5.21953 12.1967 4.69727 10.7692 4.69727ZM10.7692 12.8721C10.0781 12.8721 9.40258 12.6834 8.828 12.3298C8.25342 11.9762 7.80558 11.4737 7.54113 10.8857C7.27668 10.2978 7.20749 9.65081 7.3423 9.02664C7.47712 8.40246 7.80989 7.82912 8.29853 7.37911C8.78718 6.92911 9.40974 6.62265 10.0875 6.4985C10.7653 6.37434 11.4678 6.43806 12.1062 6.6816C12.7447 6.92514 13.2904 7.33757 13.6743 7.86672C14.0582 8.39587 14.2631 9.01798 14.2631 9.65438C14.2631 10.5078 13.895 11.3262 13.2398 11.9296C12.5845 12.5331 11.6958 12.8721 10.7692 12.8721Z"
                      fill="#FCFCFC"
                    />
                    <path
                      d="M16.365 5.65855C17.0596 5.65855 17.6228 5.13993 17.6228 4.50017C17.6228 3.86042 17.0596 3.3418 16.365 3.3418C15.6703 3.3418 15.1071 3.86042 15.1071 4.50017C15.1071 5.13993 15.6703 5.65855 16.365 5.65855Z"
                      fill="#FCFCFC"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    width="21"
                    height="19"
                    viewBox="0 0 21 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.3882 0C4.83176 0 0.361572 4.11672 0.361572 9.23377C0.361572 13.312 3.24422 16.7747 7.21307 18.0058C7.7144 18.0828 7.88151 17.8135 7.88151 17.5442C7.88151 17.3133 7.88151 16.7362 7.88151 15.9667C5.08242 16.5438 4.49754 14.7356 4.49754 14.7356C4.03799 13.6583 3.36955 13.389 3.36955 13.389C2.45044 12.8119 3.4531 12.8119 3.4531 12.8119C4.45576 12.8888 4.99887 13.7737 4.99887 13.7737C5.8762 15.1972 7.33841 14.774 7.92329 14.5432C8.00685 13.9276 8.25751 13.5429 8.54995 13.312C6.33575 13.0812 3.99621 12.2732 3.99621 8.7336C3.99621 7.73328 4.37221 6.88685 5.04065 6.27127C4.95709 6.04042 4.58109 5.11704 5.1242 3.80893C5.1242 3.80893 5.95975 3.57808 7.88151 4.77078C8.67529 4.57841 9.55261 4.46299 10.3882 4.46299C11.2237 4.46299 12.101 4.57841 12.8948 4.77078C14.8166 3.57808 15.6521 3.80893 15.6521 3.80893C16.1952 5.07857 15.861 6.00195 15.7357 6.27127C16.3623 6.92532 16.7801 7.73328 16.7801 8.7336C16.7801 12.2732 14.4406 13.0427 12.1846 13.2735C12.5606 13.5429 12.853 14.12 12.853 14.9664C12.853 16.1976 12.853 17.1979 12.853 17.5057C12.853 17.7365 13.0201 18.0443 13.5632 17.9674C17.5321 16.7747 20.4147 13.312 20.4147 9.23377C20.4147 4.11672 15.9446 0 10.3882 0Z"
                      fill="#FCFCFC"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col   mt-14 gap-4">
            <p className="    font-semibold"> Privacy Policy</p>
            <p className="text-white font-bold text-sm">
              © {currentYear} Munjal Auto. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};



 
const MobileCapabilitiesSection = () => {
  const capabilities = [
    {
      title: 'Design & Engineering',
      image: expand1,
      alt: 'Design and Engineering illustration showing a worker with hard hat'
    },
    {
      title: 'CNC Machining',
      image:  expand2,
      alt: 'CNC Machining showing a worker operating equipment'
    },
    {
      title: 'Composite Tooling',
      image:  expand3,
      alt: 'Composite Tooling showing workers with welding sparks'
    },
    {
      title: 'Automation',
      image: expand4,
      alt: 'Automation showing robotic arm'
    },
    {
      title: 'Project Management',
      image: expand5,
      alt: 'Project Management showing people in a meeting room'
    },
    {
      title: 'Inspection',
      image: expand6,
      alt: 'Inspection showing person writing on document'
    }
  ];

  return (
    <div className="bg-white md:hidden block px-4 py-8 max-w-md mx-auto">
      {/* Header */}
      <div className="mb-6">
        <p className="text-gray-600 text-sm mb-1">// R&D & Capabilities</p>
        <h2 className="text-4xl font-bold text-red-500">Capabilities</h2>
      </div>

      {/* Capabilities Grid */}
      <div className="grid grid-cols-2 gap-4">
        {capabilities.map((capability, index) => (
          <div key={index} className="relative rounded-lg overflow-hidden shadow-md">
            <img 
              src={capability.image} 
              alt={capability.alt}
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-black/70 to-transparent">
              <div className="border-l-2 border-red-500 pl-2">
                <p className="text-white font-medium text-sm">{capability.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// export default MobileCapabilitiesSection;