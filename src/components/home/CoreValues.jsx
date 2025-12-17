import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ssvglogo from "../../assets/svglogo.svg"

export const CoreValuesSection = () => {
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
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Comment Header */}
        <div className="text-sm text-gray-500 mb-2 md:block hidden">
          // CORE VALUES
        </div>
   
        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Left Column - Title */}
          <motion.div variants={titleVariants} className="mt-4">
            <h1 className="text-2xl md:text-left font-[300] text-center md:text-4xl lg:text-[3rem] leading-tight">
              <span className="whitespace-nowrap">
                {" "}
                The Core of {" "}
                <span className="text-red-600 font-bold whitespace-nowrap">
                  Engineering
                </span>{" "}
              </span>{" "}
              and
              <span className="text-red-600 font-bold whitespace-nowrap">
                {" "}
                 Manufacturing <br />
              </span>
              <span className="text-red-600 font-bold ">Synergy</span>.
            </h1>
          </motion.div>
  
          {/* Right Column - Values Grid */}
          <div className="grid lg:grid-cols-2 gap-2 md:gap-5">
            {/* Quality Card */}
            <motion.div
              variants={cardVariants} className="bg-[#0000000A] p-4 md:p-6 rounded-lg md:rounded-[32px]">
              <div className="w-6 h-6 md:w-8 md:h-8 mt-2 md:mt-3">
                <img src={ssvglogo} className="w-full h-full" />
              </div>
              <h3 className="text-base md:text-[18px] font-semibold mb-2 mt-2 md:mt-3">
                Integrity
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed md:leading-6">
               We act with honesty and transparency, ensuring every decision and partnership reflects our unwavering commitment to doing what’s right.
              </p>
            </motion.div>
   
            {/* Technology Card */}
            <motion.div
              variants={cardVariants} className="bg-[#0000000A] p-4 md:p-6 rounded-lg md:rounded-[32px]">
              <div className="w-6 h-6 md:w-8 md:h-8 mt-2 md:mt-3">
                <img src={ssvglogo} className="w-full h-full" />
              </div>
              <h3 className="text-base md:text-[18px] font-semibold mb-2 mt-2 md:mt-3">
                Ethical
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed md:leading-6">
               We pursue the highest standards in everything we do from innovation to execution, ensuring quality, precision, and reliability across every process.
              </p>
            </motion.div>
   
            {/* Innovation Card */}
            <motion.div
              variants={cardVariants} className="bg-[#0000000A] p-4 md:p-6 rounded-lg md:rounded-[32px]">
              <div className="w-6 h-6 md:w-8 md:h-8 mt-2 md:mt-3">
                <img src={ssvglogo} className="w-full h-full" />
              </div>
              <h3 className="text-base md:text-[18px] font-semibold mb-2 mt-2 md:mt-3">
                Care for society
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed md:leading-6">
               We believe growth is meaningful only when it uplifts others. Our initiatives focus on community welfare, safety, and environmental stewardship.
              </p>
            </motion.div>
   
            {/* Sustainability Card */}
            <motion.div
              variants={cardVariants} className="bg-[#0000000A] p-4 md:p-6 rounded-lg md:rounded-[32px]">
              <div className="w-6 h-6 md:w-8 md:h-8 mt-2 md:mt-3">
                <img src={ssvglogo} className="w-full h-full" />
              </div>
              <h3 className="text-base md:text-[18px] font-semibold mb-2 mt-2 md:mt-3">
               Customer Focus
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed md:leading-6">
               Our customers define our purpose. We listen closely, innovate continuously, and deliver solutions that exceed expectations every time.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  };
