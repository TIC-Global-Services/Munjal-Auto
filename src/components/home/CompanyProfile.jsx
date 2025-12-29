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
                className="flex !z-[1000] relative items-center mt-5 px-5 sm:px-5 md:px-5 lg:px-10 xl:px-14 justify-center "
            >
                <motion.div
                    variants={itemVariants}
                    className="bg-black w-full lg:mt-20 md:h-[55rem] lg:h-[45rem] text-white flex flex-col lg:flex-row items-stretch justify-between rounded-xl md:rounded-3xl overflow-hidden"
                >
                    {/* Left Section */}
                    <motion.div
                        variants={itemVariants}
                        className="flex-1 px-6 py-8 md:px-10 md:py-12 lg:px-14 lg:py-16 flex flex-col justify-center space-y-4 md:space-y-6"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="uppercase tracking-wider text-xs md:text-sm text-gray-400 font-medium"
                        >
                         // COMPANY PROFILE
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-wide leading-tight sm:leading-snug"
                        >
                            Engineering the Future of <br className="hidden md:block" />
                            <span className="text-[#ED1C24] font-bold">
                                Automotive Manufacturing
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl"
                        >
                           Munjal Auto Industries Limited is a diversified engineering group, delivering cutting-edge solutions. Driven by innovation, we design and manufacture lightweight, durable, and sustainable components using advanced sheet metal, composite materials, and precision molding techniques for automotive, aerospace, renewable energy, defense, and railways.
                        </motion.p>
                        
                        <div className="pt-4 md:pt-6">
                             <Link to="/about-us">
                                <motion.button
                                    variants={itemVariants}
                                    className="bg-white text-black text-sm md:text-base px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors duration-300"
                                >
                                    More on Munjal
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Section */}
                    <motion.div
                        variants={itemVariants}
                        className="w-[95%] md:w-[95%] lg:w-[50%] mx-auto md:mb-5 mb-2 lg:mb-0 h-64 sm:h-[25rem] md:h-[35rem] lg:h-[45rem] relative"
                    >
                        <img
                            src={secbanner}
                            alt="Automotive manufacturing assembly line"
                            className="w-full h-full object-cover absolute inset-0"
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default CompanyProfile
