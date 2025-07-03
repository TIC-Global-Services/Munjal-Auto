import React from 'react';
import mapIndia from '../../assets/home/img1.png';
import animationGif from '../../assets/animation.gif';

const Map = () => {
  return (
    <div className="relative inline-block w-full">
      <img src={mapIndia} alt="India" className="w-full h-auto" />

      {/* Dot 1 */}
      <div className="absolute top-[20%] left-[30%] flex flex-col items-center w-fit">
        <p className="text-sm font-medium mb-1">Bawal</p>
        <div className="w-px h-6 bg-gray-500"></div>
        <img
          src={animationGif}
          alt="animationGif"
          className="w-7 h-7 mt-1 transition-transform duration-300 hover:scale-125 cursor-pointer"
        />
      </div>

      {/* Dot 2 */}
      <div className="absolute top-[35%] left-[49%] flex flex-col items-center w-fit">
        <p className="text-sm font-medium mb-1">Haridwar</p>
        <div className="w-px h-6 bg-gray-500"></div>
        <img
          src={animationGif}
          alt="animationGif"
          className="w-7 h-7 mt-1 transition-transform duration-300 hover:scale-125 cursor-pointer"
        />
      </div>

      {/* Dot 3 (Vadodara) */}
      <div className="absolute top-[38%] left-[2%] flex flex-col items-center w-fit">
        <p className="text-sm font-medium mb-1">Vadodara</p>
        <div className="w-px h-6 bg-gray-500"></div>
        <img
          src={animationGif}
          alt="animationGif"
          className="w-7 h-7 mt-1 transition-transform duration-300 hover:scale-125 cursor-pointer"
        />
      </div>

      {/* Dot 4 */}
      <div className="absolute top-[56%] left-[38%] flex flex-col items-center w-fit">
        <p className="text-sm font-medium mb-1">Dharuhera</p>
        <div className="w-px h-6 bg-gray-500"></div>
        <img
          src={animationGif}
          alt="animationGif"
          className="w-7 h-7 mt-1 transition-transform duration-300 hover:scale-125 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Map;
