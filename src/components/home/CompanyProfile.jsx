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
        <div className='relative '>
            <motion.div
                ref={containerRef}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex !z-[1000] relative items-center md:px-10 px-4 justify-center "
            >
                <motion.div
                    variants={itemVariants}
                    className="bg-black w-full lg:mt-20 text-white flex md:flex-row flex-col items-center justify-between rounded-[12px] md:rounded-[20px] overflow-hidden py-5 md:py-0"
                >
                    {/* Left Section */}
                    <motion.div
                        variants={itemVariants}
                        className="flex-1 px-3 md:px-6 md:pl-14  space-y-1 md:space-y-2 lg:space-y-6"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="uppercase tracking-wider text-[10px] md:text-sm text-gray-400"
                        >
                         // COMPANY PROFILE
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="md:text-4xl text-[18px] sm:text-[24px] font-[300] tracking-[1%] md:tracking-[2%] leading-[25px] sm:leading-[31px]"
                        >
                            Engineering the Future of <br className="md:block hidden" />
                            <span className="text-[#ED1C24] font-bold">
                                Automotive Manufacturing
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-gray-300 md:text-lg text-[10px] sm:text-[12px] md:pt-0 pt-2 md:w-[90%] leading-[16px] sm:leading-[29px] tracking-[2%] sm:tracking-[2%]"
                        >
                           Munjal Auto Industries Limited  is a diversified engineering group, delivering cutting - edge solutions. Driven by innovation, we design and manufacture lightweight, durable, and sustainable components using advanced sheet metal, composite materials, and precision molding techniques for automotive, aerospace, renewable energy, defense, and railways.
                        </motion.p>
                        <Link to="/about-us">
                            <motion.button
                                variants={itemVariants}
                                className="bg-white w-fit text-black md:mt-0 !mt-10 md:text-base text-xs lg:text-[16px] px-5 sm:px-10 py-2 sm:py-2 rounded-full font-medium hover:bg-gray-100 transition-colors"
                            >
                                More on Munjal
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Right Section */}
                    <motion.div
                        variants={itemVariants}
                        className="w-[95%] md:py-0 mt-6 md:mt-10 lg:mt-0 md:w-[45%] lg:w-[50%] flex justify-end"
                    >
                        <img
                            src={secbanner}
                            alt="Automotive manufacturing assembly line"
                            className="w-[823px] lg:h-[758px] h-[250px] object-cover"
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default CompanyProfile
