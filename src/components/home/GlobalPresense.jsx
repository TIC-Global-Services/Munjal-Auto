import { Link } from "react-router-dom";
import Map from "./Map";


const GlobalPresence = () => {
  return (
    <div className=" flex items-center px-4 md:px-10 md:py-20 justify-center">
      <div className="bg-black py-10  text-white md:px-20 w-full p-4 md:p-8 rounded-[20px] flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-2xl   ">
          <div className="text-sm mb-4 text-gray-400">//GLOBAL PRESENCE</div>
          <h2 className="md:text-4xl text-2xl font-bold mb-4 md:mb-6">
            <span className="text-red-600">OEM</span> Collaborations
          </h2>
          <p className="text-gray-300 md:text-base md:leading-6  leading-6 text-xs mb-6 ">
            Serving a global network of OEMs, Munjal Auto has established
            strategic collaborations with top-tier brands worldwide. Our
            footprint spans across continents, delivering tailored engineering
            solutions to markets in Asia, Europe, North America, and beyond.
          </p>
          <Link to="/about-us">
            <button className="bg-white text-black md:text-base text-sm px-6 py-2 rounded-full hover:bg-gray-200 transition-colors">
              More About Us
            </button>
          </Link>
        </div>

        <div className="  md:w-1/3 ">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default GlobalPresence