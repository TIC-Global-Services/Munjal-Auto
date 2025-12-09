import React from "react";

const standOut = () => {
  return (
        <div className="relative bg-[#EBEBEB] rounded-[20px] mx-10 p-6">
      <div className="grid grid-cols-2 gap-4">

        {/* Top Left */}
        <div className="bg-white rounded-[12px] p-10">
          <h1 className="text-[24px] font-semibold">
            Our <span className="text-[#FF0000]">Value</span>
          </h1>
          <ul className="mt-3 space-y-1">
            <li>Be ethical</li>
            <li>Be respectful</li>
            <li>Care for the society</li>
            <li>Safety</li>
            <li>Pride in oneself</li>
          </ul>
        </div>

        {/* Top Right */}
        <div className="bg-white rounded-[12px] p-10">
          <h1 className="text-[24px] font-semibold">
            Our <span className="text-[#FF0000]">Vision</span>
          </h1>
          <p className="mt-3">
            To be a customer-focused, technology-driven organization that delivers
            excellence while caring for society and the environment.
          </p>
        </div>

        {/* Bottom Left */}
        <div className="flex items-center justify-center bg-white rounded-[12px]">
            <h1 className="text-[48px] font-semibold leading-tight text-center">
            What We <br /> Stand For
          </h1>
        </div>
        {/* <div className="absolute flex items-center justify-cente w-[550px] h-[250px] bg-white rounded-[12px] ">
          
        </div> */}

        {/* Bottom Right */}
        <div className="bg-white rounded-[12px] p-10">
          <h1 className="text-[24px] font-semibold">
            Our <span className="text-[#FF0000]">Mission</span>
          </h1>
          <p className="mt-3">
            Innovate, manufacture, and deliver high-performance components with
            Precision, Integrity, and Sustainability at the forefront.
          </p>
        </div>

      </div>
    </div>
        
  );
};

export default standOut;
