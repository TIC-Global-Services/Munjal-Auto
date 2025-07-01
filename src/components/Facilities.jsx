import React, { useState, useEffect } from "react";
import img from "../assets/faci-min.jpeg";
import logo from "../assets/logo.png";
import Footer from "./Footer";
import { Link, useLocation } from "react-router-dom";
import TopNav from "./TopNav";

import icon1 from "../assets/hero/icon.png";
import icon2 from "../assets/hero/icon2.png";
import youtube from "../assets/hero/youtube.png";
import insta from "../assets/hero/insta.png";

const Facilities = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("Facilities");
  // Function to check if the link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  useEffect(() => {
    // Trigger animation after component mount
    setIsVisible(true);
  }, []);
  const tabs = [
    "Facilities",
    "Precision Engineering",
    "Cutting-Edge Testing",
    "Sustainable Manufacturing",
  ];

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
              isActive("/facilities")
                ? "text-[#FF0000] font-bold"
                : "text-white"
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

          <div className="absolute  left-5 flex flex-col items-center space-y-4 z-[999]">
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
          <div className=" md:block flex items-center justify-center flex-col absolute left-9 mt-10 md:text-left text-center left-0">
            <h1 className="text-[#FFFCFC] rounded-[10px] px-10 py-4 text-[54px] font-[500] mb-12">
              Our Facilities
            </h1>

            {/* Timeline Line with Animation */}
          </div>
        </div>
      </div>

      {/* <AnnualReport/> */}
      {/* <MunjalAutoGroup />
      <BoardOfDirectors /> */}
      <BentoGrid
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={tabs}
      />
      <FooterMain />
    </div>
  );
};
export default Facilities;

import faBento1 from "../assets/Facilities/img.png";
import faBento2 from "../assets/Facilities/Rectangle 34625219.png";
import faBento3 from "../assets/faBento3.png";

const BentoGrid = ({ activeTab, setActiveTab, tabs }) => {
  // Content for each tab
  const tabContent = {
    Facilities: {
      title: "Driving Excellence Forward",
      description:
        "With decades of expertise, we push the boundaries of precision engineering to deliver superior automotive solutions. Our commitment to quality and innovation fuels our journey toward excellence.",
      mainImage: faBento1,
      cards: [
        {
          title: "World-Class Manufacturing",
          description:
            "From sheet metal components to complete assemblies, our manufacturing plants leverage cutting-edge technology to produce high-performance auto components. With a focus on sustainability and innovation, we ensure reliability at every stage of production.",
          image: faBento2,
        },
        {
          title: "Innovative Facilities for Superior Performance",
          description:
            "Lorem ipsum dolor sit amet consectetur. Felis nisl lectus at ornare morbi egestas scelerisque lectus. Id non est magna risus libero tellus mi.",
          image: faBento3,
        },
      ],
    },
    "Precision Engineering": {
      title: "Precision at Every Step",
      description:
        "Our engineering facilities utilize cutting-edge technology to ensure precision in every component we manufacture.",
      mainImage: faBento2,
      layout: "split-grid",
    },
    "Cutting-Edge Testing": {
      title: "Rigorous Testing Standards",
      description:
        "Our testing facilities ensure every product meets the highest quality and performance standards.",
      mainImage: faBento3,
      layout: "showcase",
    },
    "Sustainable Manufacturing": {
      title: "Eco-Friendly Production",
      description:
        "Our sustainable manufacturing facilities minimize environmental impact while maximizing efficiency.",
      mainImage: faBento1,
      layout: "timeline",
    },
  };

  // Render the appropriate component based on the active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "Facilities":
        return <FacilitiesContent content={tabContent[activeTab]} />;
      case "Precision Engineering":
        return <PrecisionEngineeringContent content={tabContent[activeTab]} />;
      case "Cutting-Edge Testing":
        return <TestingContent content={tabContent[activeTab]} />;
      case "Sustainable Manufacturing":
        return <SustainableContent content={tabContent[activeTab]} />;
      default:
        return <FacilitiesContent content={tabContent["Facilities"]} />;
    }
  };

  return (
    <>
      {/* Tab Navigation */}
      <div className="flex justify-center mt-12 mb-8 px-4">
        <div className="flex space-x-4 md:space-x-8 scrollbar-hide pb-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full text-xs whitespace-nowrap md:text-sm lg:text-base transition-all ${
                activeTab === tab
                  ? "bg-[#E31E24] text-white font-medium"
                  : "bg-white text-black border border-gray-200 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Render the appropriate content based on active tab */}
      {renderTabContent()}
    </>
  );
};

// Component for the "Facilities" tab
const FacilitiesContent = ({ content }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 mb-20">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-col lg:flex-row items-center justify-between bg-black text-white rounded-[20px] overflow-hidden mb-8">
        <div className="p-8 lg:p-12 w-full lg:w-1/2">
          <h2 className="text-[#FF252E] text-[20px] font-medium mb-4">
            {content.title}
          </h2>

          <p className="text-gray-300 text-2xl w-full lg:w-[90%] mb-6">
            {content.description}
          </p>
          {/* <button className="bg-white text-black px-6 py-3 rounded-[12px] font-medium hover:bg-gray-100 transition-colors">
            Explore more
          </button> */}
        </div>
        <div className="w-full lg:w-[45%] h-64 lg:h-auto lg:mr-10">
          <img
            src={content.mainImage}
            alt="Manufacturing facility"
            className="lg:w-full lg:h-full md:w-[50%]  mx-auto w-[60%] lg:mt-0 md:-mt-24  lg:!-ml-10 md:!ml-44 object-cover"
          />
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-4 lg:gap-8">
        <div className="lg:col-span-3 rounded-[20px] bg-[#EAEAEA] p-6 md:p-8 lg:p-6 xl:p-10">
          <h1 className="text-[#FF0000] text-xl lg:text-xl xl:text-2xl">
            <span className="text-black"> World-</span>
            Class Manufacturing
          </h1>
          <p className="text-base lg:text-sm xl:text-base mt-4">
            From sheet metal components to complete assemblies, our
            manufacturing plants leverage cutting-edge technology to produce
            high-performance auto components. With a focus on sustainability and
            innovation, we ensure reliability at every stage of production.
          </p>
        </div>

        <div className="lg:col-span-2 rounded-[20px] h-[300px] lg:h-auto">
          <img
            src={faBento2}
            alt=""
            className="w-full rounded-[20px] h-full object-cover"
          />
        </div>

        <div className="lg:col-span-5 bg-[#EAEAEA] overflow-hidden rounded-[20px] grid grid-cols-1 lg:grid-cols-2 md:px-10">
          <img
            src={faBento3}
            alt=""
            className="h-[300px] lg:h-[95%] w-full object-contain md:-ml-20 -ml-[50px] lg:mt-5"
          />
          <div className="flex flex-col text-center text-right items-center justify-center p-6 lg:p-0 gap-4 lg:gap-10">
            <h1 className="text-xl lg:text-xl xl:text-2xl w-full lg:w-[90%] font-medium">
              Cutting- <span className="text-[#FF0000]"> Facilities</span>
            </h1>
            <p className="text-[#706C67] text-base lg:text-sm xl:text-base">
              Equipped with advanced manufacturing technology and in-house R&D,
              our facilities are designed for efficiency, precision, and
              scalability. We integrate the latest automation and quality
              control systems to meet global industry standards.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
import rdImage from "../assets/rdImage.png"; // Add this with your other imports
import faControl from "../assets/faControl.png";
// Component for the "Precision Engineering" tab
const PrecisionEngineeringContent = ({ content }) => {
  return (
    <div className="md:max-w-7xl mx-auto px-4 mb-20">
      {/* Split Grid Layout */}
      <div>
        <h1
          className="  my-20  font-normal md:text-xl text-lg  lg:text-[40px] lg:leading-[57px] text-center"
          style={{
            letterSpacing: "2%",
            textAlign: "center",
          }}
        >
          Our state-of-the-art manufacturing facilities are equipped with
          advanced machinery and automated processes, ensuring high-precision
          components that meet global standards.
        </h1>
      </div>
      <div className=" flex  md:flex-row flex-col my-28 gap-10">
        <img
          src={faControl}
          className=" rounded-xl object-cover md:w-[45%]"
          alt=""
        />
        <div className=" rounded-xl bg-gray-50 flex flex-col items-start justify-around  md:w-1/2  px-10 py-6 ">
          <div className=" flex  flex-col  ">
            <h1 className="  mb-4 -mt-4 ml-4 text-2xl">
              Central Room & Technical Room
            </h1>
            <ul className="text-[#82848A] leading-8 list-disc pl-5">
              <li>
                Spread in 1600 square meters area and operational since April
                2011. A world class facility for design & manufacturing of small
                to large sized tools, fixtures & gauges required in our various
                manufacturing locations to manufacture large parts & assemblies
                of automobiles
              </li>
              <li>
                Latest CAD / CAM & CAE software's –Unigraphics, Catia V-5, FTI,
                and hyperform are installed in tool design section. Total number
                of design station -40.
              </li>
            </ul>
          </div>
          <Link to='/contact' className=" ml-4 border rounded-xl  border-black  px-6 py-2">
            Contact Us
          </Link>
        </div>
      </div>

      <div className="flex flex-row justify-between items-start max-w-3xl">
        <h1 className="text-[36px] font-medium">Tool Desgin</h1>

        <div className="flex flex-col justify-center items-start space-y-5">
          <h1 className="text-[#ED1C24] text-[26px] font-semibold">
            Bawal Haryana
          </h1>
          <div className="w-80 text-left">
            <ul className="list-disc pl-5 space-y-4 columns-2 gap-x-8  text-[#626367]">
              <li>Unigraphics NX</li>
              <li>Pampstamp</li>
              <li>FTI - Fast blank</li>
              <li>FTI - Blank Nest</li>
              <li>Hyper form</li>
              <li>Auto Cad</li>
            </ul>
          </div>
        </div>
      </div>

      {/* R&D Centre Section */}
      <div className="flex gap-10 my-28">
        <div className="w-full rounded-3xl relative overflow-hidden">
          <img
            src={rdImage}
            alt="R&D Centre"
            className="lg:w-full h-[30rem] lg:h-full lg:object-cover object-fill  "
          />
          <div
            className="absolute left-6 right-6 lg:left-6 rounded-[28px]  lg:px-10  lg:w-1/3  py-6 px-6 lg:py-10 bottom-6 flex flex-col justify-center text-white"
            style={{
              border: "1px solid rgba(15, 15, 15, 0.1)",
              backdropFilter: "blur(14.4px)",
              background: "rgba(15, 15, 15, 0.22)",
            }}
          >
            <h2 className="  text-base lg:text-3xl font-bold mb-4">
              R&D Centre
            </h2>
            <p className="  text-xs lg:text-lg font-normal leading-relaxed">
              The excellence reflected in the output of the product is the
              result of our inherent expertise in making the blueprint. The
              systematic and precise stroke in designing lays a strong
              foundation in manufacturing a product.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component for the "Cutting-Edge Testing" tab
const TestingContent = ({ content }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 mb-20">
      {/* Showcase Layout */}
      {/* <div className="bg-gray-900 text-white rounded-[20px] overflow-hidden mb-8">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="p-10 flex flex-col justify-center">
            <h2 className="text-[#FF252E] text-[20px] font-medium mb-4">
              {content.title}
            </h2>
            <h3 className="text-3xl font-light mb-4">
              Advanced Testing Capabilities
            </h3>
            <p className="text-gray-300 mb-6">{content.description}</p>
            <button className="bg-white text-black w-fit px-6 py-3 rounded-[12px] font-medium hover:bg-gray-100 transition-colors">
              View testing facilities
            </button>
          </div>
          <div className="h-[400px]">
            <img
              src={content.mainImage}
              alt="Testing Facility"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div> */}

      <h1 className="text-[#151414] text-[28px] leading-[57px] text-center max-w-4xl mx-auto mt-20">
        Our state-of-the-art manufacturing facilities are equipped with advanced
        machinery and automated processes, ensuring high-precision components
        that meet global standards.
      </h1>

      <div className="flex flex-row justify-between items-start max-w-8xl mt-[120px]">
        <h1 className="text-[36px] font-medium">Fuel Tank <br /> Manufactuirng</h1>

        <div className="flex flex-col justify-center items-start space-y-5">
          <div>
            <h1 className="text-[#ED1C24] text-[26px] font-semibold mb-2">
              Stamping
            </h1>
            <div className="w-full text-left">
              <ul className="list-disc pl-5 space-y-4 columns-1 gap-x-8  text-[#626367]">
                <li>
                  Presses ranging from 200 – 1000 TON With Large bed sizes
                </li>
                <li>
                  Bed Size from 850 mm X 1450 mm to 2350 mmX 3250 mm Shut Height
                  550 mm to 1050 mm
                </li>
                <li>Supported By Following Hardware (Work Stations)</li>
                <li>HP Z-600</li>
                <li>HP Z-400 </li>
                <li>Plotter HP-500</li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className="text-[#ED1C24] text-[26px] font-semibold mb-2">
              Tool Design Center ( Waghodia)
            </h1>
            <div className="w-80 text-left">
              <ul className="list-disc pl-5 space-y-4 columns-1 gap-x-8  text-[#626367]">
                <li>
                CATIA V-5 –R-60
                </li>
                <li>
                Pro-E Wildfire
                </li>
                <li>Hyper Form ( Blank & Nest)</li>
                <li>AutoCAD</li>
                <li>Supported by Following Hardware (Work Stations)</li>
                <li>HP XW-4600</li>
                <li>IBM-Intelli-Star Z-Pro</li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component for the "Sustainable Manufacturing" tab
// Component for the "Sustainable Manufacturing" tab
import fab1 from "../assets/Facilities/1.png";
import fab2 from "../assets/Facilities/2.png";
import fab3 from "../assets/Facilities/3.png";
import fab4 from "../assets/Facilities/4.png";
import fab5 from "../assets/Facilities/5.png";
import { motion } from "framer-motion";

import fab6 from "../assets/Facilities/6.png";
import { FooterMain } from "./FooterMain";
const SustainableContent = ({ content }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 mb-20">
      {/* Header Section */}
      <div className="text-center my-20 mb-16">
        <p className="lg:text-2xl md:text-xl  text-sm leading-[27px]  max-w-4xl mx-auto">
          Efficiency meets responsibility—our facilities integrate
          energy-efficient systems, waste reduction initiatives, and
          eco-friendly practices to drive sustainable innovation in engineering.
        </p>
      </div>

      {/* First Row - 2 cards per row on mobile, 3 on larger screens */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-6">
        {[
          { img: fab1, title: "Stamping Facility" },
          { img: fab2, title: "Roll Forming" },
          { img: fab3, title: "CNC Tube Bending" },
        ].map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="relative rounded-2xl overflow-hidden group cursor-pointer"
          >
            <motion.img
              src={card.img}
              alt={card.title}
              className="w-full h-40 sm:h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full transform transition-transform duration-300 group-hover:translate-y-[8px]">
              <h3 className="text-[#FF0000] text-lg md:text-2xl font-medium ">
                {card.title}
              </h3>
              {/* <p className="text-white text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Lorem ipsum dolor sit .
              </p> */}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Second Row - 2 cards per row on mobile */}
      <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-6">
        {[
          { img: fab4, title: "Welding Facility", span: "md:col-span-3" },
          { img: fab5, title: "Surface Treatment", span: "md:col-span-6" },
          { img: fab6, title: "R&D Centre", span: "md:col-span-3" },
        ].map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
            className={`col-span-1 ${card.span} relative rounded-2xl overflow-hidden group cursor-pointer`}
          >
            <motion.img
              src={card.img}
              alt={card.title}
              className="w-full h-40 sm:h-48 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent opacity-90"></div>
            <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full transform transition-transform duration-300 group-hover:translate-y-[-8px]">
              <h3 className="text-[#FF0000] text-lg md:text-2xl font-medium mb-2">
                {card.title}
              </h3>
              {/* <p className="text-white text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Lorem ipsum dolor sit amet conse...
              </p> */}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
