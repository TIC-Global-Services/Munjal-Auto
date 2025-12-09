import React from "react";

const standOut = () => {
  const bulletPoints = [
    "Be ethical",
    "Be respectful",
    "Care for the society",
    "Safety",
    "Pride in oneself",
  ];
  return (
    <div className="lg:px-20">
      <div className="relative bg-[#EBEBEB] rounded-[20px] mx-10 lg:p-6 p-4">
        <div className="grid lg:grid-cols-2  grid-cols-1 gap-6">
          {/* Top Left */}
          <div className="bg-white rounded-[12px] p-10">
            <h1 className="text-[24px] font-semibold">
              Our <span className="text-[#FF0000]">Value</span>
            </h1>
            <ul className="">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <ul className="mt-3 space-y-1">
              {bulletPoints.map((point, index) => (
                <li key={index} className="">
                  <span className="text-muted-foreground mt-0.5">•</span>
                  <span className="px-0.5">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Right */}
          <div className="bg-white rounded-[12px] p-10 flex flex-col justify-center">
            <h1 className="text-[24px] font-semibold">
              Our <span className="text-[#FF0000]">Vision</span>
            </h1>
            <p className="mt-3">
              To be a customer-focused, technology-driven organization that
              delivers excellence while caring for society and the environment.
            </p>
          </div>

          {/* Bottom Left */}
          <div className="relative flex justify-center items-center">
            <h1 className="text-[48px] font-semibold text-center leading-tight z-10">
              What We <br /> Stand For
            </h1>
            <div className=" absolute bg-white w-[750px] top-0 right-0  -z-1 h-[250px] rounded-[12px]"></div>
          </div>
          {/* <div className="absolute flex items-center justify-cente w-[550px] h-[250px] bg-white rounded-[12px] ">
          
        </div> */}

          {/* Bottom Right */}
          <div className="bg-white rounded-[12px] p-10 flex flex-col justify-center">
            <h1 className="text-[24px] font-semibold">
              Our <span className="text-[#FF0000]">Mission</span>
            </h1>
            <p className="mt-3">
              Innovate, manufacture, and deliver high-performance components
              with Precision, Integrity, and Sustainability at the forefront.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default standOut;
