import { motion, useInView, useMotionValue, animate, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import machine from "../../assets/machine.png";


const ExpertiseSection = () => {
    return (
        <div className="bg-[#F3F4F6] px-6  flex rounded-lg md:py-0 py-4 md:rounded-[26px]  h-full">
            <div className="max-w-7xl md:items-start items-center flex flex-col justify-center md:pl-4  mx-auto">
                {/* Comment Header */}
                <div className="md:text-sm text-[10px] text-gray-500 mb-2 md:mb-8">
            //OUR EXPERTISE
                </div>

                {/* Title */}
                <div className="max-w-3xl mb-2 md:mb-8">
                    <h2 className="text-base md:text-4xl font-[300]">
                        With <span className="text-red-600 font-bold">40+ years</span> of{" "}
                        <span className="text-red-600 font-bold">
                            <br className=" md:block hidden" />
                            experience
                        </span>
                    </h2>
                </div>

                {/* Description */}
                <div className="max-w-3xl">
                    <p className="text-gray-800 text-[10px] md:text-left text-center md:text-base leading-[14px] md:leading-relaxed">
                       we specialize in precision engineering and advanced manufacturing, delivering high-performance components that drive industries forward.
                    </p>
                </div>
            </div>
        </div>
    );
};



const Counter = ({ from, to, duration }) => {
    const count = useMotionValue(from);
    const rounded = useTransform(count, (latest) => Math.round(latest * 10) / 10);
    const [countText, setCountText] = useState(from);

    useEffect(() => {
        const controls = animate(count, to, {
            duration: duration,
            onUpdate: latest => setCountText(Math.round(latest * 10) / 10),
        });

        return controls.stop;
    }, []);

    return <>{countText}</>;
};

const ManufacturingCapacity = () => {
    const locations = [{name:"Vadodara"}, {name:"Bawal"}, {name:"Haridwar"}, {name:"Dharuhera"},{name:"Sanand"}];

    return (
        <div className="bg-[#F3F4F6] rounded-lg md:rounded-[26px] h-full md:px-12 px-2  md:py-0 py-4 flex">
            <div className="max-w-7xl mx-auto flex justify-center flex-col">
                {/* Comment Header */}
                <div className="md:text-sm text-[10px] whitespace-nowrap  text-gray-500 md:mb-1 mb-2">
            //MANUFACTURING CAPACITY
                </div>

                {/* Title */}
                <h2 className="text-base whitespace-nowrap md:text-left text-center md:whitespace-normal md:text-4xl  font-[300] md:mb-5 mb-2">
                    Daily <span className="text-red-600 font-medium">Outputs</span>
                </h2>

                {/* Description */}
                <div className="md:space-y-6  max-w-3xl   md:mb-8">
                    <p className="text-gray-800 md:block hidden text-base">
                        Munjal Auto Industries is equipped to produce an impressive array of components to meet global demands.
                    </p>

                    <p className="text-gray-800 md:block hidden    text-base">
                       With a robust manufacturing setup across multiple locations—including
                    </p>
                    <p className=" text-[#151414] text-center  md:hidden block  text-[10px] leading-[13px]">
                         Munjal Auto Industries is equipped to produce an impressive array of components to meet global demands.
                    </p>
                </div>

                {/* Location Tags */}
                <div className="md:flex -mt-4 hidden flex-wrap gap-2 lg:max-w-[500px]">
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
            quantity: 2,
            unit: " Nos.",
            product: "State of the art R&D center in India",
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
        <div ref={containerRef} className="bg-[#F3F4F6] rounded-lg md:rounded-[26px] md:px-12 md:py-16 py-6 px-2">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-base md:text-4xl lg:text-4xl font-[300] md:text-left text-center mb-4 md:mb-7">
                    A <span className="text-red-600 font-medium">Strong foundation</span> for the future

                </h2>

                <div className="grid grid-cols-4 md:grid-cols-2 gap-1 lg:grid-cols-2 xl:grid-cols-4 md:gap-4">
                    {capacityData2.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-[#F3F4F6] hover:cursor-pointer   md:px-4 px-2 py-3 md:py-8 flex"
                        >
                            <div className="space-y-2 flex flex-col items-start justify-center">
                                <motion.h3
                                    className="md:text-[32px] text-[12px]  whitespace-nowrap font-bold"
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
                                <p className="text-gray-600 md:text-[16px] text-[5px] ">
                                    {item.product}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-16">
                <h2 className="text-base md:text-4xl lg:text-4xl font-[500] md:text-left text-center mb-4 md:mb-7">
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
                            className=" hover:cursor-pointer rounded-md md:rounded-xl md:px-4 px-2 py-3 md:py-8 flex "
                        >
                            <div className="space-y-2 flex flex-col items-start justify-center">
                                <motion.h3
                                    className="md:text-[32px] text-xl uppercase whitespace-nowrap font-bold "
                                    initial={{ opacity: 0 }}
                                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="text-[32px]"
                                    >
                                        {isInView && (
                                            <Counter from={0} to={item.quantity} duration={2}/>
                                        )}
                                    </motion.span>
                                    {item.unit}
                                </motion.h3>
                                <p className="text-gray-600 md:text-[16px] text-[5px] whitespace-nowrap">
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
                className="hidden py-20 md:flex flex-col md:px-16 gap-4"
            >
                <motion.div variants={itemVariants} className="flex h-full gap-4">
                    <motion.div variants={itemVariants} className="w-[50%] md:w-1/2">
                        <img src={machine} alt="" />
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
                className="-mt-8 flex py-20 md:hidden flex-col md:px-16 gap-4"
            >
                <motion.div variants={itemVariants} className="px-4 flex flex-col h-full gap-4">
                    <motion.div variants={itemVariants} className="w-[100%]">
                        <ExpertiseSection />
                    </motion.div>
                </motion.div>
                <motion.div variants={itemVariants} className="h-1/2 flex px-4 gap-2">
                    <motion.div variants={itemVariants} className="h-1/4 md:w-[50%]">
                        <img
                            src={machine}
                            className="!h-[20rem] object-cover rounded-[12px]"
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