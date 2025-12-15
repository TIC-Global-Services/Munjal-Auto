import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import secbanner from "../../assets/home/companyProfile1.jpg";


const CompanyProfile = () => {

    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true });

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
        <div>
            <motion.div
                ref={containerRef}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex !z-[1000] relative items-center md:px-10 px-4 justify-center"
            >
                <motion.div
                    variants={itemVariants}
                    className="bg-black w-full text-white flex md:flex-row flex-col items-center justify-between rounded-[20px] overflow-hidden py-10 md:py-0"
                >
                    {/* Left Section */}
                    <motion.div
                        variants={itemVariants}
                        className="flex-1 px-6 md:pl-14  space-y-2 md:space-y-6"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="uppercase tracking-wider text-[10px] md:text-sm text-gray-400"
                        >
                         // COMPANY PROFILE
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="md:text-4xl text-2xl font-[300] leading-tight"
                        >
                            Engineering the Future of <br className="md:block hidden" />
                            <span className="text-[#ED1C24] font-bold">
                                Automotive Manufacturing
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-gray-300 md:text-lg text-xs md:pt-0 pt-2 md:w-[80%] leading-[29px] tracking-[2%]"
                        >
                           Munjal Auto Industries Limited  is a diversified engineering group, delivering cutting - edge solutions. Driven by innovation, we design and manufacture lightweight, durable, and sustainable components using advanced sheet metal, composite materials, and precision molding techniques for automotive, aerospace, renewable energy, defense, and railways.
                        </motion.p>
                        <Link to="/about-us">
                            <motion.button
                                variants={itemVariants}
                                className="bg-white w-fit text-black md:mt-0 !mt-4 md:text-base text-xs px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
                            >
                                More on Munjal
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Right Section */}
                    <motion.div
                        variants={itemVariants}
                        className="w-[90%] md:py-0 py-4 md:w-[40%]"
                    >
                        <img
                            src={secbanner}
                            alt="Automotive manufacturing assembly line"
                            className="w-full h-[870px] object-cover"
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default CompanyProfile
