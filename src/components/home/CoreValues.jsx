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
        className="mx-auto  px-4 sm:px-6 md:px-10 lg:px-10 xl:px-14 py-12 md:py-16">
        {/* Comment Header */}
        <div className="text-sm text-gray-500 mb-2 md:block hidden">
          // CORE VALUES
        </div>
   
        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-6 md:justify-between md:gap-10 lg:gap-40">
          {/* Left Column - Title */}
          <motion.div variants={titleVariants} className="mt-4">
            <h1 className=" md:text-left font-[300] lg:leading-[63px] text-center text-[1.5rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[3rem] ">
              <span className="whitespace-nowrap">
                {" "}
                The Core of {" "}
                <span className="text-red-600 lg:leading-[36px] font-bold whitespace-nowrap">
                  Engineering
                </span>{" "}
              </span>{" "}
              and
              <span className="text-red-600 lg:leading-[63px] font-bold whitespace-nowrap">
                {" "}
                 Manufacturing <br />
              </span>
              <span className="text-red-600 font-bold ">Synergy</span>.
            </h1>
          </motion.div>
  
          {/* Right Column - Values Grid */}
          <div className="grid grid-cols-2 gap-2 md:gap-5 lg:gap-10 xl:gap-5">
            {/* Quality Card */}
            <motion.div
              variants={cardVariants} className="bg-[#F3F4F6] p-3 md:px-6 rounded-lg md:rounded-[32px] lg:w-full lg:h-[270px] md:h-[15rem]" >
              <div className="lg:w-[20px] lg:h-[20px] h-[16px] w-[16px] mt-2 md:mt-3">
                <img src={ssvglogo} className="w-full h-full" />
              </div>
              <h3 className="text-[16px] md:text-[18.44px] font-semibold mb-2 mt-2 md:mt-3">
                Integrity
              </h3>
              <p className="text-gray-600 text-[10px] md:text-[16px] lg:leading-[24px] tracking-[2%] md:leading-6 lg:max-w-[224px]">
               We act with honesty and transparency, ensuring every decision and partnership reflects our unwavering commitment to doing what’s right.
              </p>
            </motion.div>
   
            {/* Technology Card */}
            <motion.div
              variants={cardVariants} className="bg-[#F3F4F6] p-3 md:px-6 rounded-lg md:rounded-[32px] lg:w-full lg:h-[270px] md:h-[15rem]">
              <div className="lg:w-[20px] lg:h-[20px] h-[16px] w-[16px] mt-2 md:mt-3">
                <img src={ssvglogo} className="w-full h-full" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-semibold mb-2 mt-2 md:mt-3">
                Ethical
              </h3>
              <p className="text-gray-600 text-[10px] md:text-[16px] lg:leading-[24px] tracking-[2%] md:leading-6 lg:max-w-[224px]">
               We pursue the highest standards in everything we do from innovation to execution, ensuring quality, precision, and reliability across every process.
              </p>
            </motion.div>
   
            {/* Innovation Card */}
            <motion.div
              variants={cardVariants} className="bg-[#F3F4F6] p-3 md:px-6 rounded-lg md:rounded-[32px] lg:w-full lg:h-[270px] md:h-[15rem]">
              <div className="lg:w-[20px] lg:h-[20px] h-[16px] w-[16px] mt-2 md:mt-3">
                <img src={ssvglogo} className="w-full h-full" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-semibold mb-2 mt-2 md:mt-3">
                Care for society
              </h3>
              <p className="text-gray-600 text-[10px] md:text-[16px] lg:leading-[24px] tracking-[2%] md:leading-6 lg:w-[224px]">
               We believe growth is meaningful only when it uplifts others. Our initiatives focus on community welfare, safety, and environmental stewardship.
              </p>
            </motion.div>
   
            {/* Sustainability Card */}
            <motion.div
              variants={cardVariants} className="bg-[#F3F4F6] p-3 md:px-6 rounded-lg md:rounded-[32px] lg:w-full lg:h-[270px] md:h-[15rem]">
              <div className="lg:w-[20px] lg:h-[20px] h-[16px] w-[16px] mt-2 md:mt-3">
                <img src={ssvglogo} className="w-full h-full" />
              </div>
              <h3 className="text-[16px] md:text-[18px] font-semibold mb-2 mt-2 md:mt-3">
               Customer Focus
              </h3>
              <p className="text-gray-600 text-[10px] md:text-[16px] lg:leading-[24px] tracking-[2%] md:leading-6 lg:max-w-[224px]">
               Our customers define our purpose. We listen closely, innovate continuously, and deliver solutions that exceed expectations every time.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  };
