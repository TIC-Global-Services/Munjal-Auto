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
    <div className="px-3 md:px-10 lg:px-20">
      <div className="relative bg-[#EBEBEB] rounded-[20px] md:mx-6 lg:mx-10 p-3 py-10  md:p-4 lg:p-6">
        <h1 className="text-2xl md:text-3xl text-center lg:hidden lg:text-4xl xl:text-[48px] font-normal z-10 mb-8">
                What We <br className="hidden md:block"/> Stand For
              </h1>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 md:gap-6">
          {/* Top Left */}
          <div className="bg-white rounded-[12px] px-4 py-5  md:p-6 lg:p-10">
            <h1 className="text-[24px] font-semibold">
              Our <span className="text-[#FF0000]">Value</span>
            </h1>
            <ul className="mt-3 space-y-1">
              {bulletPoints.map((point, index) => (
                <li key={index} className="text-[#8C8989]">
                  <span className="text-muted-foreground mt-0.5">•</span>
                  <span className="px-0.5">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Right */}
          <div className="bg-white rounded-[12px] p-4 md:p-6 lg:p-10 flex flex-col justify-center">
            <h1 className="text-lg md:text-xl lg:text-[24px] font-semibold">
              Our <span className="text-[#FF0000]">Vision</span>
            </h1>
            <p className="mt-3 text-sm md:text-base">
             Highly customer oriented & system run organization with concern for society.
            </p>
          </div>

          {/* Bottom Left */}
          <div className="hidden lg:block">
            <div className="relative flex justify-center ">
              <h1 className="text-2xl md:text-3xl mt-10 lg:text-4xl xl:text-[48px] font-semibold z-10">
                What We <br className="hidden md:block"/> Stand For
              </h1>
              <div className="absolute bg-white w-[750px] lg:w-[850px] top-0 right-0  -z-1 h-[250px] rounded-[12px]"></div>
            </div>
          </div>

          {/* Bottom Right */}
          <div className="bg-white rounded-[12px] p-4 md:p-6 lg:p-10 flex flex-col justify-center">
            <h1 className="text-lg md:text-xl lg:text-[24px] font-semibold">
              Our <span className="text-[#FF0000]">Mission</span>
            </h1>
            <p className="mt-3 text-sm md:text-base">
             To produce excellent quality products by adopting best business practices by dedicated proactive & accountable group of people having quest of excellence through latest technology & people empowerment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default standOut;
