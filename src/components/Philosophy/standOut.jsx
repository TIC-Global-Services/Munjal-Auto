import React from "react";

const StandOut = () => {
  const values = [
    "Be ethical",
    "Be respectful",
    "Care for the society",
    "Safety",
    "Pride in oneself",
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-12 py-10">
      <div className=" relative  mx-auto bg-[#ECECEC] rounded-3xl p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:h-[500px]">

          <div className=" xl:hidden rounded-2xl p-5 sm:p-6">
            <h2 className="text-3xl  font-medium leading-tight text-center">
              What We  Stand For
            </h2>
          </div>

          {/* TOP LEFT – VALUE */}
          <div className="bg-white rounded-2xl p-5 sm:p-6">
            <h3 className="text-lg font-semibold mb-3">
              Our <span className="text-red-600">Value</span>
            </h3>
            <ul className="space-y-1 text-sm text-gray-700">
              {values.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 leading-5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* TOP RIGHT – VISION */}
          <div className="bg-white rounded-2xl p-5 sm:p-6">
            <h3 className="text-lg font-semibold mb-3">
              Our <span className="text-red-600">Vision</span>
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Highly customer oriented & system run organization with concern for society.
            </p>
          </div>

          {/* BOTTOM LEFT – EMPTY (INTENTIONAL) */}
          <div className="hidden lg:block" />

            {/* BOTTOM LEFT – HEADING */}
          <div className="absolute hidden -left-2 -bottom-5  w-1/2 h-[48%] bg-white rounded-2xl p-6 sm:p-8 xl:flex items-center justify-center text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
              What We <br /> Stand For
            </h2>
          </div>

            <div className="absolute hidden xl:block top-[51.4%]  left-0 w-6 h-6 rounded-full shadow-[-10px_10px_0_#fff] z-0" />
          <div className="absolute bottom-0 hidden xl:block  left-[49.6%] w-6 h-6 rounded-full shadow-[-10px_10px_0_#fff] z-0" />

          

          {/* BOTTOM RIGHT – MISSION */}
          <div className="bg-white rounded-2xl p-5 sm:p-6">
            <h3 className="text-lg font-semibold mb-3">
              Our <span className="text-red-600">Mission</span>
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              To produce excellent quality products by adopting best business
              practices by dedicated proactive & accountable group of people
              having quest of excellence through latest technology & people empowerment.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StandOut;
