import React from 'react';
import mapIndia from '../../assets/home/img1.png';
import animationGif from '../../assets/animation2.gif';

const Map = () => {
  return (
    <div className="relative inline-block w-full">
      <img src={mapIndia} alt="India" className="w-full h-auto" />

      {/* Dot 1 */}
      <div className="absolute top-[10%] left-[12%] flex flex-col items-center w-fit pb-8 ">
    <p className="text-sm font-medium mb-1">Bawal</p>
    <div className="w-px h-9 bg-gray-500"></div>
    <img
      src={animationGif}
      alt="animationGif"
      className="w-[170px]  h-[100px] -mt-6  transition-transform duration-300 hover:scale-125 cursor-pointer transform-gpu z-10"
    />
  </div>


      {/* Dot 2 */}
      <div className="absolute top-[30%] left-[40%] flex flex-col items-center w-fit">
        <p className="text-sm font-medium mb-1">Haridwar</p>
        <div className="w-px h-6 bg-gray-500"></div>
        <img
          src={animationGif}
          alt="animationGif"
          className="w-[170px]  h-[100px] -mt-6 transition-transform duration-300 hover:scale-125 cursor-pointer"
        />
      </div>

      {/* Dot 3 (Vadodara) */}
      <div className="absolute top-[32%] left-[-7%] flex flex-col items-center w-fit">
        <p className="text-sm font-medium mb-1">Vadodara</p>
        <div className="w-px h-6 bg-gray-500"></div>
        <img
          src={animationGif}
          alt="animationGif"
          className="w-[170px]  h-[100px] -mt-6 transition-transform duration-300  hover:scale-125 cursor-pointer"
        />
      </div>

      {/* Dot 4 */}
      <div className="absolute top-[50%] left-[22%] flex flex-col items-center w-fit">
        <p className="text-sm font-medium mb-1">Dharuhera</p>
        <div className="w-px h-6 bg-gray-500"></div>
        <img
          src={animationGif}
          alt="animationGif"
          className="w-[170px]  h-[100px] -mt-6 transition-transform duration-300 hover:scale-125 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Map;
