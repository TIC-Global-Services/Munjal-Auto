import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import pilo2 from "../../assets/pilo2.jpeg";


const fadeInUp2 = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

const contents = [
    {
        name: "Mission",
        description:
            "To innovate, manufacture, and deliver high-performance components with precision, integrity, and sustainability at the forefront.",
    },
    {
        name: "Values",
        description: [
            "Be ethical",
            "Be respectful",
            "Care for the society",
            "Safety",
            "Pride in oneself",
        ],
    },
];


const OurVision = () => {

    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();
    const [index, setIndex] = useState(0);

    // Auto-scroll logic
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % contents.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const current = contents[index];

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
        <div>
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
                        className="absolute md:bottom-16  bottom-8 left-10 md:left-20 lg:left-20 xl:left-10 text-left md:w-[467px]  text-white p-4 md:p-8 rounded-md md:rounded-[20px]"
                        style={{
                            border: "1px solid #FFFFFF1A",
                            backdropFilter: "blur(22.2px)",
                            background: "#FFFFFF",
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp2}
                    >
                        {/* Title - stays static */}
                        <h3 className="text-black text-base md:text-4xl">
                            Our <span className="text-[#FF0000]">{current.name}</span>
                        </h3>

                        {/* Content wrapper with animation */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current.name}
                                initial={{ opacity: 0, x: 0 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="transition-all duration-500 ease-in-out mt-2"
                            >
                                {Array.isArray(current.description) ? (
                                    <ul className="list-disc text-[10px] md:text-base font-normal max-w-sm tracking-wider pl-4 space-y-1 text-black">
                                        {current.description.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-[8px] md:text-base font-normal  tracking-wider text-black">
                                        {current.description}
                                    </p>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>

                    {/* <motion.button
            className="absolute text-sm md:text-base bottom-4 lg:bottom-10  md:bottom-10  right-[65%]  md:right-24 lg:right-24 bg-red-600 text-white px-4 py-2 rounded-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Our Values
          </motion.button> */}
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
        </div>
    )
}

export default OurVision
