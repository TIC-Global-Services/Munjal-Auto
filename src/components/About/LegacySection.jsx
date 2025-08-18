import React, { useEffect, useState } from 'react';
import legacy from "../../assets/legacy.jpeg";
import { Link } from 'react-router-dom';

const LegacySection = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-white px-10">

            <div className="container mx-auto px-6 lg:px-2">
                <div className="grid grid-cols-1 lg:grid-cols-12 md:gap-8 items-center min-h-screen">
                    {/* Left Content - Take 5 columns */}
                    <div className="lg:col-span-5  -py-10 lg:py-24 space-y-2 md:space-y-5 opacity-0 animate-fade-in">
                        <div className="space-y-4 text-center md:text-left lg:text-left">
                            <p className="text-[#8A8989]  md:text-lg text-xs md:font-medium tracking-wide">
                                #LEGACY///
                            </p>
                            <h2 className="text-[20px] lg:text-[40px]  font-normal md:leading-[41px] md:tracking-tight">
                                With over <span className="text-red-500">40+ Years</span> of
                                experience
                            </h2>
                        </div>

                        <p className="text-[#8C8989] font-medium text-xs md:text-base  md:text-left text-center leading-[19px] md:leading-[25px] max-w-xl">
                            Munjal Auto Industries Limited is a leader in engineering,
                            delivering cutting-edge solutions across industries. Driven by
                            innovation, we design and manufacture lightweight, durable, and
                            sustainable components using advanced sheet metal, composite
                            materials, and precision molding techniques for automotive,
                            aerospace, renewable energy, defense, and railways.
                        </p>

                        <Link to="/contact">
                            <button
                                className="bg-black  !mt-10  hidden text-white px-8 py-3 rounded-full 
              hover:bg-gray-800 transition-colors duration-300 md:inline-flex"
                            >
                                Contact Us
                            </button>
                        </Link>
                    </div>
                    <img
                        src={legacy}
                        alt="Modern building architecture"
                        className="w-full h-full overflow-hidden  !rounded-xl     object-cover md:hidden block object-center "
                    />
                    <button
                        className="bg-black    md:hidden text-white px-8 py-3 rounded-full 
              hover:bg-gray-800 transition-colors duration-300 items-center justify-center  w-fit mx-auto flex"
                    >
                        Contact Us
                    </button>

                    {/* Right Image with Parallax - Take 8 columns and extend beyond container */}
                    <div className="lg:col-span-7 hidden md:block relative h-full w-full rounded-3xl">
                        <div
                            className="absolute inset-0 rounded-3xl overflow-hidden transform"
                            style={{
                                transform: `translateY(${scrollY * 0.2}px)`,
                                transition: "transform 0.1s ease-out",
                                width: "calc(100% + 28vw)",
                                right: "-8vw",
                            }}
                        >
                            <img
                                src={legacy}
                                alt="Modern building architecture"
                                className="w-full h-full object-cover object-center transform scale-90 transition-transform duration-1000 rounded-3xl"
                            />
                        </div>
                    </div>

                </div>
            </div>

            <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
        </div>
    );
};

export default LegacySection;