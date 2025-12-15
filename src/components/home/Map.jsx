import React, {useState} from 'react';
import mapIndia from '../../assets/home/map.png';
import animationGif from '../../assets/home/hover.gif';
import { motion, AnimatePresence } from 'framer-motion';

const Map = () => {
  
  const [hoveredDhar, setHoveredDhar] = useState(false);
  const [hoveredVad, setHoveredVad] = useState(false);
  const [hoveredHar, setHoveredHar] = useState(false);
  const [hoveredBa, setHoveredBa] = useState(false);


  
  return (
    <div className="relative inline-block w-full">
      <img src={mapIndia} alt="India" className="w-full h-auto" />

      {/* Dot 1 */}
      {/* <div className="absolute top-[22%] left-[21%] flex flex-col items-center w-fit pb-8 ">
    {/* <p className="text-sm font-medium mb-1">  </p> 
    {/* <div className="w-px h-9 bg-gray-500"></div> 
    <img
      src={animationGif}
      alt="animationGif"
      className="w-[80px]  h-[80px] -mt-6  transition-transform duration-300 hover:scale-125 cursor-pointer transform-gpu z-10"
    />
  </div> */}

<div
      className="absolute top-[12%] left-[18%] w-fit flex items-center"
      onMouseEnter={() => setHoveredBa(true)}
      onMouseLeave={() => setHoveredBa(false)}
    >
      <div className="relative">
        <img
          src={animationGif}
          alt="animationGif"
          className="w-[80px] h-[80px] transition-transform duration-300 hover:scale-125 cursor-pointer"
        />

        <AnimatePresence>
          {hoveredBa && (
            <motion.p
              initial={{ opacity: 0, x:10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3 }}
              className="absolute top-[36%]  -ml-5   -translate-y-1/2 bg-[#FF0003] text-white text-[12px] font-medium rounded-lg px-2 py-1 whitespace-nowrap"
            >
Bawal
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>


      {/* Dot 2 */}
      {/* <div className="absolute top-[36%] left-[5%] flex flex-col items-center w-fit">
        {/* <p className="text-sm font-medium mb-1">Haridwar</p>
        <div className="w-px h-6 bg-gray-500"></div>
        <img
          src={animationGif}
          alt="animationGif"
          className="w-[80px]  h-[80px] -mt-6 transition-transform duration-300 hover:scale-125 cursor-pointer"
        />
      </div> */}

      {/* Dot 3 (Vadodara) */}
      {/* <div className="absolute top-[26%] left-[24%] flex flex-col items-center w-fit">
        {/* <p className="text-sm font-medium mb-1">Vadodara</p>
        <div className="w-px h-6 bg-gray-500"></div> 
        <img
          src={animationGif}
          alt="animationGif"
          className="w-[80px]  h-[80px] -mt-6 transition-transform duration-300  hover:scale-125 cursor-pointer"
        />
      </div> */}


<div
      className="absolute top-[16%] left-[32%] w-fit flex items-center"
      onMouseEnter={() => setHoveredHar(true)}
      onMouseLeave={() => setHoveredHar(false)}
    >
      <div className="relative">
        <img
          src={animationGif}
          alt="animationGif"
          className="w-[80px] h-[80px] transition-transform duration-300 hover:scale-125 cursor-pointer"
        />

        <AnimatePresence>
          {hoveredHar && (
            <motion.p
              initial={{ opacity: 0, x:-10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute top-[36%] left-auto ml-12   -translate-y-1/2 bg-[#FF0003] text-white text-[12px] font-medium rounded-lg px-2 py-1 whitespace-nowrap"
            >
              Haridwar
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>

<div
      className="absolute top-[23%] left-[23%] w-fit flex items-center"
      onMouseEnter={() => setHoveredVad(true)}
      onMouseLeave={() => setHoveredVad(false)}
    >
      <div className="relative">
        <img
          src={animationGif}
          alt="animationGif"
          className="w-[80px] h-[80px] transition-transform duration-300 hover:scale-125 cursor-pointer"
        />

        <AnimatePresence>
          {hoveredVad && (
            <motion.p
              initial={{ opacity: 0, x:- 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute top-[36%] left-auto ml-12   -translate-y-1/2 bg-[#FF0003] text-white text-[12px] font-medium rounded-lg px-2 py-1 whitespace-nowrap"
            >
              Dharuheru
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>

      {/* Dot 4 */}
      <div
      className="absolute top-[41%] left-[12%] w-fit flex items-center"
      onMouseEnter={() => setHoveredDhar(true)}
      onMouseLeave={() => setHoveredDhar(false)}
    >
      <div className="relative">
        <img
          src={animationGif}
          alt="animationGif"
          className="w-[80px] h-[80px] transition-transform duration-300 hover:scale-125 cursor-pointer"
        />

        <AnimatePresence>
          {hoveredDhar && (
            <motion.p
              initial={{ opacity: 0, x:- 9 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute top-[36%] left-auto ml-12   -translate-y-1/2 bg-[#FF0003] text-white text-[12px] font-medium rounded-lg px-2 py-1 whitespace-nowrap"
            >
               Vadodara
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
     

    </div>
  );
};

export default Map;
