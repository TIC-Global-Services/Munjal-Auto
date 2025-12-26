import React, {useState} from 'react';
import mapIndia from '../../assets/home/map.png';
import animationGif from '../../assets/home/hover.gif';
import animationGif1 from '../../assets/home/Vector (2).png';
import animationGif2 from '../../assets/home/Vector (3).png';
import { motion } from 'framer-motion';

const Map = () => {
  
  const [hoveredDhar, setHoveredDhar] = useState(false);
  const [hoveredVad, setHoveredVad] = useState(false);
  const [hoveredHar, setHoveredHar] = useState(false);
  const [hoveredBa, setHoveredBa] = useState(false);
  const [hoveredVadodaraSmall1, setHoveredVadodaraSmall1] = useState(false);
  const [hoveredVadodaraSmall2, setHoveredVadodaraSmall2] = useState(false);
  const [hoveredChharodi, setHoveredChharodi] = useState(false);
  const [hoveredMeppedu, setHoveredMeppedu] = useState(false);
  const [hoveredNellor, setHoveredNellor] = useState(false);


  
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
      className="absolute top-[10%] left-[12%] lg:top-[22%]  lg:left-[24%] xl:top-[23.8%] xl:left-[26%] w-fit flex items-center"
      onMouseEnter={() => setHoveredBa(true)}
      onMouseLeave={() => setHoveredBa(false)}
    >
      <div className="relative">
        <img
          src={animationGif}
          alt="animationGif"
          className="w-[80px] h-[80px] transition-transform duration-300 hover:scale-125 cursor-pointer"
        />

        <p
          className={`absolute top-[36%] -ml-5 -translate-y-1/2 bg-[#FF0003] text-white text-[12px] font-medium rounded-lg px-2 py-1 whitespace-nowrap transition-opacity duration-300 ${hoveredBa ? 'opacity-100' : 'opacity-0'}`}
        >
          Bawal
        </p>
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
      className="absolute top-[8%] left-[21%] lg:top-[14.5%] lg:left-[28%] xl:top-[16.9%] xl:left-[29.5%] w-fit flex items-center"
      onMouseEnter={() => setHoveredHar(true)}
      onMouseLeave={() => setHoveredHar(false)}
    >
      <div className="relative">
        <img
          src={animationGif}
          alt="animationGif"
          className="w-[80px] h-[80px] transition-transform duration-300 hover:scale-125 cursor-pointer"
        />

        <p
          className={`absolute top-[36%] left-auto ml-12 -translate-y-1/2 bg-[#FF0003] text-white text-[12px] font-medium rounded-lg px-2 py-1 whitespace-nowrap transition-opacity duration-300 ${hoveredHar ? 'opacity-100' : 'opacity-0'}`}
        >
          Haridwar
        </p>
      </div>
    </div>

<div
      className="absolute top-[14%] left-[17%] lg:top-[17%] lg:left-[20%] 2xl:top-[18%] 2xl:left-[21%] w-fit flex items-center"
      onMouseEnter={() => setHoveredVad(true)}
      onMouseLeave={() => setHoveredVad(false)}
    >
      <div className="relative">
        <img
          src={animationGif}
          alt="animationGif"
          className="w-[80px] h-[80px] transition-transform duration-300 hover:scale-125 cursor-pointer"
        />

        <p
          className={`absolute top-[26%] left-auto ml-12 -translate-y-1/2 bg-[#FF0003] text-white text-[12px] font-medium rounded-lg px-2 py-1 whitespace-nowrap transition-opacity duration-300 ${hoveredVad ? 'opacity-100' : 'opacity-0'}`}
        >
          Dharuheru
        </p>
      </div>
    </div>

      {/* Dot 4 */}
      <div
      className="absolute top-[28%] left-[0.5%] 2xl:top-[40%] 2xl:left-[12%] w-fit flex items-center"
      onMouseEnter={() => setHoveredDhar(true)}
      onMouseLeave={() => setHoveredDhar(false)}
    >
      <div className="relative">
        <img
          src={animationGif}
          alt="animationGif"
          className="w-[80px] h-[80px] transition-transform duration-300 hover:scale-125 cursor-pointer"
        />

        <p
          className={`absolute top-[29%] -left-24 ml-12 -translate-y-1/2 bg-[#FF0003] text-white text-[12px] font-medium rounded-lg px-2 py-1 whitespace-nowrap transition-opacity duration-300 ${hoveredDhar ? 'opacity-100' : 'opacity-0'}`}
        >
          Vadodara
        </p>
      </div>
    </div>
      <div
      className="absolute top-[47%] left-[22%] w-fit flex items-center"
      onMouseEnter={() => setHoveredVadodaraSmall1(true)}
      onMouseLeave={() => setHoveredVadodaraSmall1(false)}
    >
       <div className="relative w-[10px] h-[10px]">
        <motion.img
          src={animationGif1}
          alt="animationGif"
          className="absolute top-0 left-0 w-[10px] h-[10px] cursor-pointer z-2 opacity-50 rounded-full"
          animate={{ scale: [0.5, 1.7, 1.4] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        <img
          src={animationGif2}
          alt="animationGif"
          className="absolute top-0 left-0 w-[10px] h-[10px] cursor-pointer z-10 rounded-full"
        />

        <p
          className={`absolute top-[14%] left-auto ml-3 -translate-y-1/2 bg-[#139DBC] text-white text-[12px] font-medium rounded-lg px-2 py-1 whitespace-nowrap transition-opacity duration-300 ${hoveredVadodaraSmall1 ? 'opacity-100' : 'opacity-0'}`}
        >
          Vadodara
        </p>
      </div>

    </div>
      <div
      className="absolute top-[45%] left-[21%] w-fit flex items-center"
      onMouseEnter={() => setHoveredVadodaraSmall2(true)}
      onMouseLeave={() => setHoveredVadodaraSmall2(false)}
    >
       <div className="relative w-[10px] h-[10px]">
        <motion.img
          src={animationGif1}
          alt="animationGif"
          className="absolute top-0 left-0 w-[10px] h-[10px] cursor-pointer z-2 opacity-50 rounded-full"
          animate={{ scale: [0.5, 1.7, 1.4] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        <img
          src={animationGif2}
          alt="animationGif"
          className="absolute top-0 left-0 w-[10px] h-[10px] cursor-pointer z-10 rounded-full"
        />

        <p
          className={`absolute -top-6 left-auto ml-3 -translate-y-1/2 bg-[#139DBC] text-white text-[12px] font-medium rounded-lg px-2 py-1 whitespace-nowrap transition-opacity duration-300 ${hoveredVadodaraSmall2 ? 'opacity-100' : 'opacity-0'}`}
        >
          Vadodara
        </p>
      </div>

    </div>
      {/* Dot 5 */}
         <div
      className="absolute top-[41.5%] left-[15%] w-fit flex items-center"
      onMouseEnter={() => setHoveredMeppedu(true)}
      onMouseLeave={() => setHoveredMeppedu(false)}
    >
       <div className="relative w-[10px] h-[10px]">
        <motion.img
          src={animationGif1}
          alt="animationGif"
          className="absolute top-0 left-0 w-[10px] h-[10px] cursor-pointer z-2 opacity-50 rounded-full"
          animate={{ scale: [0.5, 1.7, 1.4] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        <img
          src={animationGif2}
          alt="animationGif"
          className="absolute top-0 left-0 w-[10px] h-[10px] cursor-pointer z-10 rounded-full"
        />

        <p
          className={`absolute top-[41.5%] left-auto ml-3 -translate-y-1/2 bg-[#139DBC] text-white text-[12px] font-medium rounded-lg px-2 py-1 whitespace-nowrap transition-opacity duration-300 ${hoveredMeppedu ? 'opacity-100' : 'opacity-0'}`}
        >
          Chharodi
        </p>
      </div>

    </div>
        <div
      className="absolute top-[77.5%] left-[40%] w-fit flex items-center"
      onMouseEnter={() => setHoveredMeppedu(true)}
      onMouseLeave={() => setHoveredMeppedu(false)}
    >
       <div className="relative w-[10px] h-[10px]">
        <motion.img
          src={animationGif1}
          alt="animationGif"
          className="absolute top-0 left-0 w-[10px] h-[10px] cursor-pointer z-2 opacity-50 rounded-full"
          animate={{ scale: [0.5, 1.7, 1.4] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        <img
          src={animationGif2}
          alt="animationGif"
          className="absolute top-0 left-0 w-[10px] h-[10px] cursor-pointer z-10 rounded-full"
        />

        <p
          className={`absolute top-[14%] left-auto ml-3 -translate-y-1/2 bg-[#139DBC] text-white text-[12px] font-medium rounded-lg px-2 py-1 whitespace-nowrap transition-opacity duration-300 ${hoveredMeppedu ? 'opacity-100' : 'opacity-0'}`}
        >
          Meppedu
        </p>
      </div>

    </div>
        <div
      className="absolute top-[73%] left-[39%]  2xl:top-[73%] 2xl:left-[39%] w-fit flex items-center"
      onMouseEnter={() => setHoveredNellor(true)}
      onMouseLeave={() => setHoveredNellor(false)}
    >
       <div className="relative w-[10px] h-[10px]">
        <motion.img
          src={animationGif1}
          alt="animationGif"
          className="absolute top-0 left-0 w-[10px] h-[10px] cursor-pointer z-2 opacity-50 rounded-full"
          animate={{ scale: [0.5, 1.7, 1.4] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        <img
          src={animationGif2}
          alt="animationGif"
          className="absolute top-0 left-0 w-[10px] h-[10px] cursor-pointer z-10 rounded-full"
        />

        <p
          className={`absolute -top-[10%] -left-14 -translate-y-1/2 bg-[#139DBC] text-white text-[12px] font-medium rounded-lg px-2 py-1 whitespace-nowrap transition-opacity duration-300 ${hoveredNellor ? 'opacity-100' : 'opacity-0'}`}
        >
          Nellor
        </p>
      </div>

    </div>

    </div>
  );
};

export default Map;
