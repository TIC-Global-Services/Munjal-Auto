import  { useEffect, useState } from 'react';
import legacy from "../../assets/legacy2.jpg";
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
        <div className="relative lg:min-h-screen w-full overflow-hidden bg-white px-4 md:px-8 lg:px-20">

            <div className=" mx-auto  lg:px-2">
                <div className="grid grid-cols-1 lg:grid-cols-12 md:gap-8 gap-3 items-center lg:min-h-screen">
                    {/* Left Content - Take 5 columns */}
                    <div className="lg:col-span-5 -py-10 lg:py-24 space-y-2 md:space-y-5 opacity-0 animate-fade-in">
                        <div className="lg:space-y-4 text-center md:text-left lg:text-left">
                            <p className="text-[#8A8989]  md:text-lg text-xs md:font-normal tracking-wide">
                                #LEGACY///
                            </p>
                            <h2 className="text-[16px] md:text-[20px] lg:text-[40px] font-[400] font-normal leading-[41px] whitespace-nowrap lg:whitespace-normal">
                                With over <span className="text-red-500">40+ Years</span> of experience
                            </h2>
                        </div>

                        <p className="text-[#8C8989] font-medium text-[12px] md:text-base  md:text-left text-center leading-[19px] md:leading-[25px] lg:max-w-xl">
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
                   <div className='w-full h-auto md:hidden block mb-6'>
                    <img
                       src={legacy}
                       alt="Modern building architecture"
                       className="w-full h-auto overflow-hidden rounded-xl object-cover object-center max-h-64"
                   />
                  </div>
                   <div className="md:hidden flex justify-center mb-8">
                       <Link to="/contact">
                           <button
                               className="bg-black text-white px-6 py-2 rounded-full
                               hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center"
                           >
                               Contact Us
                           </button>
                       </Link>
                   </div>

                    {/* Right Image with Parallax - Take 8 columns and extend beyond container */}
                    <div className="lg:col-span-7 hidden md:block relative lg:h-[627px] w-full rounded-3xl">
                        <div
                            className="absolute inset-0 rounded-3xl overflow-hidden transform"
                            style={{
                                width: "calc(100% + 28vw)",
                                height:"calc(40% + 28vw)",
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

            <style >{`
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