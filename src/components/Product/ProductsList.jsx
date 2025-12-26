import { motion, AnimatePresence } from "framer-motion";

import pro1 from "../../assets/slider/Multi link.png";
import pro2 from "../../assets/slider/CNG Cradle.png";
import pro3 from "../../assets/slider/Ev Cradle.png";
import pro4 from "../../assets/slider/Fuel Tank.png";

import pro5 from "../../assets/slider/880cc.png";
import pro6 from "../../assets/slider/440 cc 1.png";
import pro7 from "../../assets/slider/125 cc scooter.png";
import pro8 from "../../assets/slider/100 cc.png";

import pro9 from "../../assets/slider/Battery Tray.png";
import pro10 from "../../assets/slider/Rear Bumper.png";
import pro11 from "../../assets/slider/crossmember-at-the-firewall.png";
import pro12 from "../../assets/slider/Swing Arm.png";

import pro13 from "../../assets/slider/COPV Reender.png";
import pro14 from "../../assets/slider/2w Fender.png";
import pro15 from "../../assets/slider/Composite Swing Arm.png";
import pro16 from "../../assets/slider/COPV White cylinder.png";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import SteelRing1 from "../../assets/products/ring1.png";
import SteelRing2 from "../../assets/products/ring2.png";

const tabs = [
  { id: "exhaust", label: "Exhaust System" },
  { id: "steel", label: "Wheel Rim & Spoke Plate " },
  { id: "auto", label: "Chassis parts and assemblies" },
  { id: "fuel", label: "BIW Assembly" },
  { id: "biw", label: "Lightweight Composite Parts" },
];

const ProductsList = () => {
  const [activeTab, setActiveTab] = useState("exhaust");
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpanded = (index) => {
    const uniqueKey = `${activeTab}-${index}`;
    setExpandedItems((prev) => ({
      ...prev,
      [uniqueKey]: !prev[uniqueKey],
    }));
  };
  const getActiveDescription = () => {
    const descObj = description.find((item) => item.id === activeTab);
    return descObj ? descObj.wholeDescription : "";
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");

      if (hash && tabs.some((tab) => tab.id === hash)) {
        // Update active tab to match hash
        setActiveTab(hash);

        // Small delay to ensure DOM is ready
        setTimeout(() => {
          const element = document.querySelector(`#${hash}`);
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }, 100);
      }
    };

    // Handle initial hash on component mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Also listen for popstate (browser back/forward)
    window.addEventListener("popstate", handleHashChange);

    // Cleanup
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("popstate", handleHashChange);
    };
  }, [tabs]);

  const description = [
    {
      id: "steel",
      wholeDescription:
        "A steel wheel rim is a circular component that forms an airtight unit with the tire to bear weight, transmit power, enhance structural integrity and stability",
    },
    {
      id: "auto",
      wholeDescription:
        "Manufacturing chassis components and assemblies for over a decade for various PV models, including Multi-Link Subframe Assemblies for 4W, Longitudinal Arm, CNG Tank Cradles, Camberlinks, Fuel Tanks, and more.",
    },
    {
      id: "exhaust",
      wholeDescription:
        "One of the largest muffler manufacturer in world, producing around 32,000 mufflers per day, ranging from 100 cc to 810 cc for motorcycle and Scooters ",
    },
    {
      id: "fuel",
      wholeDescription:
        "Manufacturing BIW parts and assemblies for over a decade, such as Battery Tray Assemblies, Radiator Bottom Assemblies, Rear Bumper Assemblies, Firewall Cross Members, Frunk Assem-blies, and more",
    },
    {
      id: "biw",
      wholeDescription:
        "Equipped with complete know-how of composites and lightweight solutions, including the design, engineering and manufacturing of COPV Type IV CNG Cylinder, Fenders for 2W, Composite Swing Arms, and more",
    },
  ];

  const steel = [
    {
      title: "Steel Wheel Rim",
      description:
        "The products made to match international quality standards to ensure uniformity of gauge, well-defined profile, and leak-proof weld joints",
      fullDescription: [
        // "MAIL has the capability to manufacture Steel Wheel Rim for two wheelers, three wheelers and passenger cars, of the following specifications:",
        "OBD II Sensors Integration",
        "Pipe in Pipe design",
        "Various SS grades to increase in life expectancy",
        "Heat resistant internal painting (up to 350 degree Celsius) – for better performance",
        "Heat resistant external painting (up to 600 degree Celsius) – for enhanced performance",
        "Tri nickel chrome electroplating for aesthetic looks",
        "",
        // "The products are made to match international quality standards to ensure uniformity of gauge, well-defined profile, and leak-proof weld joints.",
      ],
      image: SteelRing1,
    },
    {
      title: "Spoke Wheel Rim",
      description:
        "The installed plant capacity is 10,000 Rims per day using imported multistage, profile forming rolling mills.",
      fullDescription: [
        // "The installed plant capacity is 10,000 Rims per day using imported multistage, profile forming rolling mills from Japan and Taiwan.",
        "",
        "We have the capability to manufacture Spoke Rims of the following range using IS Grade cold rolled steel:",
        "Nominal Rim Diameter: 16” ~ 21”",
        "Rim Thickness: 1.4” ~ 3.0”",
        "Spoke Hole: 36 nos. or as per Customer Specifications",
        "",
        "All Rims are Tri–Nickel chrome plated to International Standards.",
      ],
      image: SteelRing2,
    },
  ];

  const autoComponents = [
    {
      title: "Multi Link",
      description:
        "A subframe arm is a structural component within a vehicle's chassis, designed to carry specific components like the EV motor, suspension, and axles, while isolating vibrations and distributing loads across the vehicle body.",
      fullDescription: [
        // "MAIL has the capability to manufacture Steel Wheel Rim for two wheelers, three wheelers and passenger cars, of the following specifications:",
        "Press Toolings in house",
        "Specialised material grade E34",
        "Welding Distortion Tolerance Precision",
        "Automatic Robotic welding line",
        "Load recording system with PLC of bush pressing",
        "Production Traceability",
        "Projection welding of flanged nuts",
        "",
        // "The products are made to match international quality standards to ensure uniformity of gauge, well-defined profile, and leak-proof weld joints.",
      ],
      image: pro1,
    },
    {
      title: "CNG Cradle",
      description:
        "A CNG cylinder mounting cradle is a structural arrangement designed to securely hold and support compressed natural gas cylinders on vehicles, ensuring safety and stability under various loading conditions",
      fullDescription: [
        // "MAIL has the capability to manufacture Steel Wheel Rim for two wheelers, three wheelers and passenger cars, of the following specifications:",
        "Type 1 Steel cylinder integration",
        "Type IV Composite overwrap pressure vessel integration",
        "Robotic welding and auto nut runner",
        "Design and development",
        // "• Disc Thickness: 2.0 mm ~ 4.0 mm",
        "",
        // "The products are made to match international quality standards to ensure uniformity of gauge, well-defined profile, and leak-proof weld joints.",
      ],
      image: pro2,
    },
    {
      title: "Subframe Assembly for EV",
      description:
        "A subframe is a structural component within a vehicle's chassis, designed to carry specific components like the engine, suspension, and axles, while isolating vibrations and distributing loads across the vehicle body.",
      fullDescription: [
        // "MAIL has the capability to manufacture Steel Wheel Rim for two wheelers, three wheelers and passenger cars, of the following specifications:",
        "Press Tooling in house",
        "Deep Drawing and intricate shapes of High tensile material grade like E46/BSK 46",
        "Specialised material grade E34",
        "Welding Distortion Tolerance Precision",
        "Automatic Robotic welding line",
        "Load recording system with PLC of bush pressing",
        "Production Traceability",
        "Projection welding of flanged nuts",
        "",
        // "The products are made to match international quality standards to ensure uniformity of gauge, well-defined profile, and leak-proof weld joints.",
      ],
      image: pro3,
    },
    {
      title: "Fuel Tank",
      description:
        "A fuel tank is a safe container designed to store flammable fluids like gasoline or diesel, providing features such as secure filling, fuel level gauging, venting, and feeding the engine through a pump.",
      fullDescription: [
        // "MAIL has the capability to manufacture Steel Wheel Rim for two wheelers, three wheelers and passenger cars, of the following specifications:",
        "Al Si coated material grades",
        "Seam welding, spot welding , mig welding, projection welding",
        "Leak proof testing",
        "Fuel pump and gauge integration",
        "All test facility available in house like Mill Pore testing, Vibration testing etc.",
        "",
        // "The products are made to match international quality standards to ensure uniformity of gauge, well-defined profile, and leak-proof weld joints.",
      ],
      image: pro4,
    },
  ];
  const exhaustSystems = [
    {
      title: "883CC",
      description:
        "High-performance exhaust with emission control, OBD II sensors, noise reduction, and durable heat-resistant internal and external coatings.",
      fullDescription: [
        // "MAIL has the capability to manufacture Steel Wheel Rim for two wheelers, three wheelers and passenger cars, of the following specifications:",
        "OBD II Sensors Integration”",
        "Usage of suitable catalytic converter for exhaust emission control",
        "Perforated tube for noise reduction",
        "Various SS grades to increase in life expectancy",
        "Heat resistant internal painting (up to 350 degree Celsius) – for better performance",
        "Heat resistant external painting (up to 600 degree Celsius) – for enhanced performance",
        "Tri nickel chrome electroplating for aesthetic looks",
        // "The products are made to match international quality standards to ensure uniformity of gauge, well-defined profile, and leak-proof weld joints.",
      ],
      image: pro5,
    },
    {
      title: "440 CC",
      description:
        "Advanced exhaust system with OBD II integration, catalytic converter, noise reduction, and heat-resistant finishes for enhanced performance and longevity.",
      fullDescription: [
        // "MAIL has the capability to manufacture Steel Wheel Rim for two wheelers, three wheelers and passenger cars, of the following specifications:",
        "OBD II Sensors Integration",
        "Usage of suitable catalytic converter for exhaust emission control",
        "Perforated tube for noise reduction",
        "Various SS grades to increase in life expectancy",
        "Heat resistant internal painting (up to 350 degree Celsius) – for better performance",
        "Heat resistant external painting (up to 600 degree Celsius) – for enhanced performance",
        "Tri nickel chrome electroplating for aesthetic looks",
        "",
        // "The products are made to match international quality standards to ensure uniformity of gauge, well-defined profile, and leak-proof weld joints.",
      ],
      image: pro6,
    },
    {
      title: "125 CC (Scooter)",
      description:
        "Integrated exhaust solution for optimized flow and noise reduction, featuring catalytic converters, OBD II integration, and long-lasting heat-resistant finishes.",
      fullDescription: [
        // "MAIL has the capability to manufacture Steel Wheel Rim for two wheelers, three wheelers and passenger cars, of the following specifications:",
        "OBD II Sensors Integration",
        "Usage of suitable catalytic converter for exhaust emission control",
        "Various SS grades to increase in life expectanc",
        "Heat resistant internal painting (up to 350 degree Celsius) – for better performance",
        "Heat resistant external painting (up to 600 degree Celsius) – for enhanced performance",
        "",
        // "The products are made to match international quality standards to ensure uniformity of gauge, well-defined profile, and leak-proof weld joints.",
      ],
      image: pro7,
    },
    {
      title: "100 CC",
      description:
        "Efficient exhaust system with Pipe-in-Pipe design, OBD II sensors, emission control, and durable heat-resistant coatings for superior performance and aesthetics.",
      fullDescription: [
        // "MAIL has the capability to manufacture Steel Wheel Rim for two wheelers, three wheelers and passenger cars, of the following specifications:",
        "OBD II Sensors Integration",
        "Usage of suitable catalytic converter for exhaust emission control",
        "Pipe in Pipe design",
        "Various SS grades to increase in life expectancy",
        "Heat resistant internal painting (up to 350 degree Celsius) – for better performance",
        "Heat resistant external painting (up to 600 degree Celsius) – for enhanced performance",
        "Tri nickel chrome electroplating for aesthetic looks",
        "",
        // "The products are made to match international quality standards to ensure uniformity of gauge, well-defined profile, and leak-proof weld joints.",
      ],
      image: pro8,
    },
  ];
  const fuelTanks = [
    {
      title: "Battery Tray",
      description:
        "A battery tray is a durable, protective container designed to hold and secure batteries, providing structural support and containment for potential spills, while ensuring electrical isolation and stability",
      fullDescription: [
        // "MAIL has the capability to manufacture Steel Wheel Rim for two wheelers, three wheelers and passenger cars, of the following specifications:",
        "CED coating",
        "Forming and bending",
        "Spot Welding, mig welding, Projection welding",
        // "• Rim Profile: B, D, J and other International Standards",
        // "• Disc Thickness: 2.0 mm ~ 4.0 mm",
        "",
        // "The products are made to match international quality standards to ensure uniformity of gauge, well-defined profile, and leak-proof weld joints.",
      ],
      image: pro9,
    },
    {
      title: "Rear Bumper",
      description:
        "The front and rear bumpers are protective components at the vehicle's ends, designed to absorb impact, protect vital parts, and enhance aesthetics, featuring a cover, energy absorber, and reinforcement bar.",
      fullDescription: [
        // "MAIL has the capability to manufacture Steel Wheel Rim for two wheelers, three wheelers and passenger cars, of the following specifications:",
        "Robotic spot welding and mig welding",
        "High tensile material grade 780 and 590",
        "Drawing",
        // "• Rim Profile: B, D, J and other International Standards",
        // "• Disc Thickness: 2.0 mm ~ 4.0 mm",
        "",
        // "The products are made to match international quality standards to ensure uniformity of gauge, well-defined profile, and leak-proof weld joints.",
      ],
      image: pro10,
    },
    {
      title: "Firewall Cross Member",
      description:
        "A Firewall Cross Member is structural component that connects and supports the firewall, often integrating with other parts like the instrument panel and A-pillars, to enhance vehicle stability and safety",
      fullDescription: [
        // "MAIL has the capability to manufacture Steel Wheel Rim for two wheelers, three wheelers and passenger cars, of the following specifications:",
        "Drawing",
        "Stud projection Welding",
        // "• Rim Thickness: 2.0 mm ~ 3.0 mm (using SAPH Equivalent High Tensile Strength Steel)",
        // "• Rim Profile: B, D, J and other International Standards",
        // "• Disc Thickness: 2.0 mm ~ 4.0 mm",
        "",
        // "The products are made to match international quality standards to ensure uniformity of gauge, well-defined profile, and leak-proof weld joints.",
      ],
      image: pro11,
    },
    {
      title: "Swing Arm for 2W",
      description:
        "A Swing Arm is a movable arm that connects the bike's frame to the rear wheel, allowing it to pivot vertically and absorb bumps for a smoother ride.",
      fullDescription: [
        // "MAIL has the capability to manufacture Steel Wheel Rim for two wheelers, three wheelers and passenger cars, of the following specifications:",
        "Tube bending",
        "Mig Welding",
        // "• Rim Thickness: 2.0 mm ~ 3.0 mm (using SAPH Equivalent High Tensile Strength Steel)",
        // "• Rim Profile: B, D, J and other International Standards",
        // "• Disc Thickness: 2.0 mm ~ 4.0 mm",
        "",
        // "The products are made to match international quality standards to ensure uniformity of gauge, well-defined profile, and leak-proof weld joints.",
      ],
      image: pro12,
    },
  ];
  const biwAssemblies = [
    {
      title: "COPV Type IV CNG Cylinder ",
      description:
        "A Composite Overwrapped Pressure Vessel (COPV) is a lightweight, high-pressure storage vessel consisting of a non-structural liner wrapped in a structural fiber composite, ideal for aerospace and energy applications due to its strength and low weight.",
      fullDescription: [
        // "MAIL has the capability to manufacture Steel Wheel Rim for two wheelers, three wheelers and passenger cars, of the following specifications:",
        "High Strength to weight ratio",
        "Carbon fibre and hybrid Composite solutions",
        "Durable / Long life",
        "Corrosion resistant",
        // "• Disc Thickness: 2.0 mm ~ 4.0 mm",
        "",
        // "The products are made to match international quality standards to ensure uniformity of gauge, well-defined profile, and leak-proof weld joints.",
      ],
      image: pro13,
    },
    {
      title: "Fenders for 2W",
      description:
        "Are protective covers that enclose tires to prevent water, mud, and debris from splashing onto the rider and bike, ensuring a cleaner and drier ride.",
      fullDescription: [
        // "MAIL has the capability to manufacture Steel Wheel Rim for two wheelers, three wheelers and passenger cars, of the following specifications:",
        "High Strength to weight ratio",
        "Carbon fibre and hybrid Composite solutions",
        "Durable / Long life",
        "Corrosion resistant",
        // "• Disc Thickness: 2.0 mm ~ 4.0 mm",
        "",
        // "The products are made to match international quality standards to ensure uniformity of gauge, well-defined profile, and leak-proof weld joints.",
      ],
      image: pro14,
    },
    {
      title: "Composite Swing Arm",
      description:
        "High-strength, lightweight composite swing arms made from carbon fibre and hybrid materials, offering exceptional durability, long life, and corrosion resistance.",
      fullDescription: [
        // "MAIL has the capability to manufacture Steel Wheel Rim for two wheelers, three wheelers and passenger cars, of the following specifications:",
        "High Strength to weight ratio",
        "Carbon fibre and hybrid Composite solutions",
        "Durable / Long life",
        "Corrosion resistant",
        // "• Disc Thickness: 2.0 mm ~ 4.0 mm",
        "",
        // "The products are made to match international quality standards to ensure uniformity of gauge, well-defined profile, and leak-proof weld joints.",
      ],
      image: pro15,
    },
    {
      title: "COPV Type IV Plastic Liner",
      description:
        "A COPV plastic liner is a thin, non-structural barrier made from materials like nylon or polyethylene, acting primarily as a gas boundary to prevent leaks and chemical degradation in composite overwrapped pressure vessels.",
      fullDescription: [
        // "MAIL has the capability to manufacture Steel Wheel Rim for two wheelers, three wheelers and passenger cars, of the following specifications:",
        "Low permeability",
        "Blow molded",
        "Radial thickness precision",
        "Lower material consumption",
        // "• Disc Thickness: 2.0 mm ~ 4.0 mm",
        "",
        // "The products are made to match international quality standards to ensure uniformity of gauge, well-defined profile, and leak-proof weld joints.",
      ],
      image: pro16,
    },
  ];

  const getActiveContent = () => {
    switch (activeTab) {
      case "steel":
        return steel;
      case "auto":
        return autoComponents;
      case "exhaust":
        return exhaustSystems;
      case "fuel":
        return fuelTanks;
      case "biw":
        return biwAssemblies;
      default:
        return steel;
    }
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div id={activeTab} className="min-h-screen bg-[#fafafa]">
      {/* Products Section */}
      <div className="mb-4 sm:mb-6 md:mb-8 lg:py-10">
        {/* Tabs */}
        <div className="mb-8 lg:max-w-[1211px] lg:mx-auto mt-10">
          <div className="overflow-x-auto  lg:overflow-x-hidden scrollbar-hide mb-4 sm:mb-6 md:mb-8 ">
            <div className="flex lg:gap-4 gap-3 md:gap-4 lg:px-2 px-4 pb-2
                justify-start lg:justify-center
                items-center
                lg:flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={`scroll-${tab.id}`}
                  id={`scroll-${tab.id}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full font-medium text-sm md:text-base lg:py-5 lg:px-5 px-4 py-2  transition-colors duration-300 flex-shrink ${
                    activeTab === tab.id
                      ? "text-white"
                      : "bg-[#F4F4F4] text-black"
                  }`}
                  style={{
                    border: "1px solid #FFFFFF",
                    background:
                      activeTab === tab.id
                        ? "linear-gradient(102.23deg, #ED1C24 9.21%, #871015 122.12%)"
                        : undefined,
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={`text-black lg:text-[28px] lg:leading-[55px] py-10 lg:mt-10 lg:mb-20 text-center mx-auto ${activeTab === "steel" ? "max-w-[866px] px-3" : activeTab==="auto" ?"lg:max-w-[1138px] px-3":activeTab==="biw"?"max-w-[1060px] px-3":activeTab==="fuel"?"max-w-[1060px] px-3":"max-w-[820px] px-3"}`}>
          {getActiveDescription()}
        </div>
        {/* Content for all tabs */}

        <section id={activeTab} className="scroll-mt-20">
          {" "}
          {/* ✅ This creates ID like "steel" */}
          {getActiveContent().map((item, index) => (
            <motion.div
              key={index} // ✅ Remove the ID from here
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-12 overflow-hidden bg-white p-4 rounded-xl"
            >
              {/* Desktop Layout: Row with 3 columns */}
              <motion.div
            layout
  transition={{ duration: 1, ease: "easeInOut" }}
              className={`hidden md:grid md:grid-cols-12 lg:grid-cols-12  min-h-[368px]  w-full max-w-7xl mx-auto   ${expandedItems[`${activeTab}-${index}`] ? "items-start" : "items-end"} overflow-hidden`}>
                {/* Image Section - Takes 4 columns on md, 3 on lg */}
                <div className="md:col-span-4 lg:col-span-3 bg-[#EBEBEF] rounded-md w-[385px] flex items-center justify-center p-6 h-full flex-shrink-0">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                    }}
                    transition={{
                      delay: 0.4,
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                    className="flex items-center justify-center rounded-lg"
                  >
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full max-w-[240px] h-auto object-contain rounded-lg"
                    />
                  </motion.div>
                </div>

                {/* Content Section - Takes 6 columns on md, 7 on lg */}
                <div className="md:col-span-6 lg:col-span-7 text-[#ED1C24] relative flex-shrink-0 translate-x-20">
                  <motion.div layout transition={{ duration: 0.6, ease: "easeInOut" }} className="md:col-span-6 lg:col-span-7 p-6 text-[#ED1C24] relative flex-shrink-0 ">
                  {!expandedItems[`${activeTab}-${index}`] && (
                    <h1 className="text-[130px] font-bold text-gray-300/20 mb-2 absolute -top-24">
                      0{index + 1}
                    </h1>
                  )}
                  <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-[28px] font-bold mb-4"
                  >
                    {item.title}
                  </motion.h2>

                  <div className="text-[#8C8989]">
                    <motion.div className="overflow-hidden">
                      <motion.p
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        className="mb-4 text-base leading-[24px] md:max-w-xl"
                      >
                        {item.description}
                      </motion.p>

                      <AnimatePresence>
                        {expandedItems[`${activeTab}-${index}`] && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            {item.fullDescription.map((desc, descIndex) => (
                              <motion.p
                                key={descIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{
                                  delay: expandedItems[`${activeTab}-${index}`]
                                    ? descIndex * 0.1
                                    : (item.fullDescription.length -
                                        descIndex -
                                        1) *
                                      0.05,
                                  duration: 0.5,
                                  ease: "easeOut",
                                }}
                                className="text-base leading-[24px] text-start"
                              >
                                {desc}
                              </motion.p>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                </motion.div>
                </div>

                {/* Button Section - Takes 2 columns, positioned bottom right */}
                <div className="md:col-span-2 lg:col-span-2 p-6 flex items-end justify-end h-full flex-shrink-0">
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                    className="bg-black text-white px-6 py-3 rounded-xl text-base font-medium cursor-pointer transition-all duration-200 hover:bg-gray-800 shadow-md whitespace-nowrap"
                    onClick={() => toggleExpanded(index)}
                  >
                    {expandedItems[`${activeTab}-${index}`] ? "Show Less" : "Learn More"}
                  </motion.button>
                </div>
              </motion.div>

              {/* Mobile Layout: Keep your original mobile design */}
              <div className="md:hidden lg:px-5">
                {/* Image Section */}
                <div className="bg-[#EBEBEF] flex items-center justify-center  w-full h-[298px] m-auto rounded-md">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                    }}
                    transition={{
                      delay: 0.3,
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                    className="flex items-center  justify-center"
                  >
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-auto lg:max-w-[280px] h-auto object-contain"
                    />
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="lg:p-6 text-[#ED1C24] mt-4 lg:mt-0">
                  <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="lg:text-[28px] text-[20px] font-bold mb-4"
                  >
                    {item.title}
                  </motion.h2>

                  <div className="text-[#8C8989] mb-6 ">
                    <motion.div className="overflow-hidden">
                      <motion.p
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        className="mb-4 text-[16px] leading-relaxed"
                      >
                        {item.description}
                      </motion.p>

                      <AnimatePresence>
                        {expandedItems[`${activeTab}-${index}`] && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            {item.fullDescription.map((desc, descIndex) => (
                              <motion.p
                                key={descIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{
                                  delay: expandedItems[`${activeTab}-${index}`]
                                    ? descIndex * 0.1
                                    : (item.fullDescription.length -
                                        descIndex -
                                        1) *
                                      0.05,
                                  duration: 0.5,
                                  ease: "easeOut",
                                }}
                                className="mb-0 text-base leading-relaxed"
                              >
                                {desc}
                              </motion.p>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>

                  {/* Button for Mobile */}
                  <div className="flex justify-end">
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ delay: 0.6, duration: 0.3 }}
                      className="bg-black text-white px-6 py-3 rounded-xl text-base font-medium cursor-pointer transition-all duration-200 hover:bg-gray-800 shadow-md"
                      onClick={() => toggleExpanded(index)}
                    >
                      {expandedItems[`${activeTab}-${index}`] ? "Show Less" : "Learn More"}
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ProductsList;
