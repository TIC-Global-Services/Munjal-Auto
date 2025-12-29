import { motion, useInView, useMotionValue, animate, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import machine from "../../assets/machine.png";


const ExpertiseSection = () => {
    return (
        <div className="bg-[#F3F4F6] px-6  flex rounded-lg md:py-0 py-4 md:rounded-[26px]  h-full">
            <div className="max-w-7xl md:items-start items-start flex flex-col justify-center md:pl-4  mx-auto">
                {/* Comment Header */}
                <div className="md:text-sm text-[10px] text-gray-500 mb-2 md:mb-5 md:mt-5 lg:mb-12 xl:mb-12">
            //OUR EXPERTISE
                </div>

                {/* Title */}
                <div className="max-w-3xl mb-2 md:mb-8 text-start lg:text-start">
                    <h2 className="text-base md:text-2xl lg:text-4xl xl:text-4xl font-[300]">
                        With <span className="text-red-600 font-bold">40+ years</span> of{" "}
                        <span className="text-red-600 font-bold">
                            <br className=" md:block hidden" />
                            experience
                        </span>
                    </h2>
                </div>

                {/* Description */}
                <div className="max-w-3xl mb-2 sm:mb-2 md:mb-8 lg:mb-12 xl:mb-12">
                    <p className="text-gray-800 text-sm text-left md:text-base lg:text-base xl:text-base leading-[23px] md:leading-relaxed">
                       We specialize in precision engineering and advanced manufacturing, delivering high-performance components that drive industries forward.
                    </p>
                </div>
            </div>
        </div>
    );
};



const Counter = ({ from, to, duration }) => {
    return <>{to}</>;
};

const ManufacturingCapacity = () => {
    const locations = [{name:"Vadodara"}, {name:"Bawal"}, {name:"Haridwar"}, {name:"Dharuhera"},{name:"Sanand"}];

    return (
        <div className="bg-[#F3F4F6] h-full justify-center items-center rounded-lg md:rounded-[26px] md:px-12 px-2  md:py-10 py-4 flex">
            <div className="max-w-7xl  mx-auto flex justify-start  flex-col">
                {/* Comment Header */}
                <div className="md:text-[18px] text-[10px] whitespace-nowrap mt-5 text-gray-500 md:mb-1 mb-2">
            //MANUFACTURING CAPACITY
                </div>

                {/* Title */}
                <h2 className="text-base whitespace-nowrap md:text-left text-left md:whitespace-normal md:text-[40px] md:leading-[48px]  font-[500] md:mb-10 mb-2">
                    Daily <span className="text-red-600 font-medium">Outputs</span>
                </h2>

                {/* Description */}
                <div className="md:space-y-6  lg:max-w-[469px]  md:mb-8 mt-10">
                    <p className="text-gray-800 md:block hidden text-base">
                        Munjal Auto Industries is equipped to produce an impressive array of components to meet global demands.
                    </p>

                    <p className="text-gray-800 md:block hidden    text-base">
                       With a robust manufacturing setup across multiple locations—including
                    </p>
                    <p className=" text-[#151414] md:hidden block  text-[10px] leading-[13px]  text-left lg:text-center">
                         Munjal Auto Industries is equipped to produce an impressive array of components to meet global demands.
                    </p>
                </div>

                {/* Location Tags */}
                <div className="md:flex -mt-1 mb-3 hidden flex-wrap gap-2 lg:max-w-[500px]">
                    {locations.map((location, index) => (
                        <div
                            key={index}
                            className="bg-black text-white px-6 py-2 rounded-[12px] text-xs whitespace-nowrap hover:bg-gray-800 transition-colors duration-300"
                        >
                            {location.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const ProductionCapacity = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true });

    const capacityData = [
        {
            quantity: 94.5,
            unit: "lakh",
            product: "Exhaust mufflers",
        },
        {
            quantity: 15,
            unit: "lakh",
            product: "Scooter Wheels",
        },
        {
            quantity: 12.5,
            unit: "lakh",
            product: "Rims",
        },
        {
            quantity: 2,
            unit: "lakh",
            product: "Fuel Tanks",
        },
    ];


    const capacityData2 = [
        {
            quantity: 2000,
            unit: " CR",
            product: "Annual turnover FY23",
            prefix: "> ",
        },
        {
            quantity: 12,
            unit: " Nos.",
            product: "State of the art 10 Manufacturing plants and 2 R&D",
        },
        {
            quantity: 5,
            unit: "%",
            product: "Spend on R&D",
            prefix: "~ ",
        },
        {
            quantity: 4000,
            unit: "+ Nos",
            product: "Employee strength",
        },
    ];

    return (
        <div ref={containerRef} className="bg-[#F3F4F6] lg:h-full rounded-lg md:rounded-[26px] md:px-12 md:py-10 py-6 px-3">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-sm sm:text-base md:text-[2rem] lg:text-4xl font-[300] text-left mb-4 md:mb-4">
                    A <span className="text-red-600 font-medium">Strong foundation</span> for the future

                </h2>

                <div className="grid grid-cols-2 md:grid-cols-2 gap-4 lg:grid-cols-2 xl:grid-cols-4 items-start md:gap-4">
                    {capacityData2.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            // transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-[#F3F4F6] hover:cursor-pointer lg:py-3 md:py-8 flex"
                        >
                            <div className=" flex flex-col flex-wrap items-start justify-center ">
                                <motion.h3
                                    className="lg:text-[2rem] md:text-[2rem] sm:text-[1rem] text-[1rem]  whitespace-nowrap font-bold"
                                    initial={{ opacity: 0 }}
                                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {item.prefix && <span>{item.prefix}</span>}
                                        {isInView && (
                                            <Counter from={0} to={item.quantity} duration={2} />
                                        )}
                                    </motion.span>
                                    {item.unit}
                                </motion.h3>
                                <p className="text-gray-600 text-xs md:text-base sm:text-xs lg:text-base xl:text-base lg:leading-[27px] md:whitespace-normal">
                                    {item.product}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            
            <div className="max-w-7xl mx-auto lg:mt-16 mt-4">
                <h2 className="text-sm sm:text-base md:text-[2rem] lg:leading-[48px] md:leading-[34px] lg:text-4xl font-[500] text-left mb-4 md:mb-7 max-w-[965px]">
                    Our <span className="text-red-600 font-medium">state of the art</span> facilities
                    have the annual capacity to produce
                </h2>

                <div className="grid grid-cols-4 md:grid-cols-2 gap-1 lg:grid-cols-2 xl:grid-cols-4 md:gap-4">
                    {capacityData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className=" hover:cursor-pointer rounded-md md:rounded-xl md:px-4 px-2 md:py-8 flex "
                        >
                            <div className="flex flex-col items-start justify-start">
                                <motion.h3
                                    className="lg:text-[2rem] md:text-[2rem] sm:text-[1rem] text-[1rem] uppercase whitespace-nowrap font-bold "
                                    initial={{ opacity: 0 }}
                                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="lg:text-[2rem] md:text-[2rem] sm:text-[1rem] text-[1rem]"
                                    >
                                        {isInView && (
                                            <Counter from={0} to={item.quantity} duration={2}/>
                                        )}
                                    </motion.span>
                                    {item.unit}
                                </motion.h3>
                                <p className="text-gray-600 md:text-base text-[10px] md:text-base sm:text-[10px] lg:text-base xl:text-base whitespace-nowrap">
                                    {item.product}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export const HomeBento = () => {
    // const containerRef = useRef(null);
    // const isInView = useInView(containerRef, { once: true, margin: "-100px" });
    const desktopRef = useRef(null);
    const mobileRef = useRef(null);

    const isDesktopInView = useInView(desktopRef, { once: true, margin: "-100px" });
    const isMobileInView = useInView(mobileRef, { once: true, margin: "-100px" });

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
        <>
            <motion.div
                ref={desktopRef}
                variants={containerVariants}
                initial="hidden"
                animate={isDesktopInView ? "visible" : "hidden"}
                className="hidden py-20 lg:flex flex-col px-5 sm:px-5 md:px-5 lg:px-10 xl:px-14 gap-4"
            >
                <motion.div variants={itemVariants} className="flex h-full gap-4">
                    <motion.div variants={itemVariants} className="w-[60%]  md:w-1/2">
                        <img src={machine} alt="" className="w-full h-full md:w-full md:h-full lg:w-full lg:h-full object-cover rounded-lg"/>
                    </motion.div>
                    <motion.div variants={itemVariants} className="w-[50%]">
                        <ExpertiseSection />
                    </motion.div>
                </motion.div>
                <motion.div variants={itemVariants} className="flex gap-4">
                    <motion.div variants={itemVariants}>
                        <ManufacturingCapacity />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <ProductionCapacity />
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Mobile Version */}
            <motion.div
                ref={mobileRef}
                variants={containerVariants}
                initial="hidden"
                animate={isMobileInView ? "visible" : "hidden"}
                className="-mt-8 flex py-20 lg:hidden flex-col  gap-4"
            >
                <motion.div variants={itemVariants} className="px-4 flex flex-col h-full gap-4">
                    <motion.div variants={itemVariants} className="w-[100%]">
                        <ExpertiseSection />
                    </motion.div>
                </motion.div>
                <motion.div variants={itemVariants} className="h-1/2 flex px-4 gap-2">
                    <motion.div variants={itemVariants} className="h-90% w-50%">
                        <img
                            src={machine}
                            className="w-full h-full object-cover rounded-[26px]"
                            alt=""
                        />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <ManufacturingCapacity />
                    </motion.div>
                </motion.div>
                <motion.div variants={itemVariants} className="px-4">
                    <ProductionCapacity />
                </motion.div>
            </motion.div>
        </>
    );
};