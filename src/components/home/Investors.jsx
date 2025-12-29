import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import contactus from "../../assets/contactus.png";

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
          className="md:flex mx-auto items-center  py-10 justify-center"
        >
          <motion.div className="w-[100%] lg:pr-20 mx-auto text-white flex md:flex-col lg:flex-row flex-col items-start justify-between rounded-[20px] overflow-hidden">
            {/* Left Section */}
            <motion.div variants={itemVariants} className="flex-1 md:pl-20 md:px-0 px-4">
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
              <Link to='/contact'>
                <motion.button variants={itemVariants} className="bg-black md:block hidden mt-10 w-fit text-white px-6 py-3 rounded-full font-medium hover:bg-gray-900 transition-colors">
                  Contact Us
                </motion.button>
              </Link>
             
            </motion.div>
  
            {/* Right Section */}
            <motion.div variants={itemVariants} className="md:px-0 px-4 md:py-10 lg:py-0 py-10 md:w-full lg:w-[40%] xl:w-[40%]">
              <img
                src={contactus}
                alt="Automotive manufacturing assembly line"
                className="w-full h-full object-cover"
              />
               <Link to='/contact'>
              <motion.button variants={itemVariants} className="bg-black flex items-start justify-start md:hidden relative mt-5  w-fit text-white px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Contact Us
              </motion.button>
            </Link>
            </motion.div>
            
  
          </motion.div>
        </motion.div>
      </>
    );
  };
  
  export default Investors