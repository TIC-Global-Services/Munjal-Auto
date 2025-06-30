import React from 'react';
import mapIndia from '../../assets/home/img1.png';
import dots from '../../assets/home/dots.png';

const Map = () => {
  return (
    <div className="relative inline-block">
      <img src={mapIndia} alt="India" className="w-full h-auto" />

      {/* Dot 1 */}
      <img
        src={dots}
        alt="dots"
        className="absolute w-5 h-5 top-[20%] left-[30%] transition-transform duration-300 hover:scale-125 cursor-pointer "
      />

      {/* Dot 2 */}
      <img
        src={dots}
        alt="dots"
        className="absolute w-5 h-5 top-[35%] left-[49%]  transition-transform duration-300 hover:scale-125 cursor-pointer "
      />

      {/* Dot 3 */}
      <img
        src={dots}
        alt="dots"
        className="absolute w-5 h-5 top-[49%] left-[10%]  transition-transform duration-300 hover:scale-125 cursor-pointer"
      />

      {/* Dot 4 */}
      <img
        src={dots}
        alt="dots"
        className="absolute w-5 h-5  top-[56%] left-[38%]  transition-transform duration-300 hover:scale-125 cursor-pointer"
      />

    </div>
  );
};

export default Map;
