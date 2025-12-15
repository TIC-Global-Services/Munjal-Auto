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
        className=" md:mx-auto md:block px-6 md:px-10 md:pl-16 py-16">
        {/* Comment Header */}
        <div className="text-sm text-gray-500 mb-2 md:block hidden">
          // CORE VALUES
        </div>
  
        {/* Main Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Title */}
          <motion.div variants={titleVariants} className=" mt-4">
            <h1 className="text-2xl md:text-left font-[300] text-center md:text-5xl lg:text-[3rem] leading-tight">
              <span className=" whitespace-nowrap">
                {" "}
                The Core of {" "}
                <span className="text-red-600 font-bold   whitespace-nowrap">
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
          <div className="grid  md:scale-90 grid-cols-2 gap-2 md:gap-3">
            {/* Quality Card */}
            <motion.div
              variants={cardVariants} className="bg-gray-100 md:p-6 p-2 h-full  rounded-lg md:rounded-[32px]">
              <div className="md:w-8 md:h-8 w-4 h-4 mt-3">
                <img src={ssvglogo} />
              </div>
              <h3 className="md:text-[18px] text-base font-semibold mb-2">
                Integrity
              </h3>
              <p className="text-gray-600 md:text-base text-[10px] md:leading-6 leading-[16px]  ">
               We act with honesty and transparency, ensuring every decision and partnership reflects our unwavering commitment to doing what’s right.
              </p>
            </motion.div>
  
            {/* Technology Card */}
            <motion.div
              variants={cardVariants} className="bg-gray-100 md:p-6 p-2 h-full  rounded-lg md:rounded-[32px]">
              <div className="md:w-8 md:h-8 w-4 h-4 mt-3">
                <img src={ssvglogo} />
              </div>
              <h3 className="md:text-[18px] text-base font-semibold mb-2">
                Ethical
              </h3>
              <p className="text-gray-600 md:text-base text-[10px] md:leading-6 leading-[16px]">
               We pursue the highest standards in everything we do from innovation to execution, ensuring quality, precision, and reliability across every process.
              </p>
            </motion.div>
  
            {/* Innovation Card */}
            <motion.div
              variants={cardVariants} className="bg-gray-100 md:p-6 p-2 h-full  rounded-lg md:rounded-[32px]">
              <div className="md:w-8 md:h-8 w-4 h-4 mt-3">
                <img src={ssvglogo} />
              </div>
              <h3 className="md:text-[18px] text-base font-semibold mb-2">
                Care for society
              </h3>
              <p className="text-gray-600 md:text-base text-[10px] md:leading-6 leading-[16px]">
               We believe growth is meaningful only when it uplifts others. Our initiatives focus on community welfare, safety, and environmental stewardship.
              </p>
            </motion.div>
  
            {/* Sustainability Card */}
            <motion.div
              variants={cardVariants} className="bg-gray-100  md:p-6 p-2 h-full  rounded-lg md:rounded-[32px]">
              <div className="md:w-8 md:h-8 w-4 h-4 mt-3">
                <img src={ssvglogo} />
              </div>
              <h3 className="md:text-[18px] text-base font-semibold mb-2">
               Customer Focus
              </h3>
              <p className="text-gray-600 md:text-base text-[10px] md:leading-6 leading-[16px]">
               Our customers define our purpose. We listen closely, innovate continuously, and deliver solutions that exceed expectations every time.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  };