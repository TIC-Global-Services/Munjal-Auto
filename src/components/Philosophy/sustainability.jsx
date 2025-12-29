import React from "react";
import sustainabilityImage from "../../assets/slider/sustainality.jpg";
const sustainability = () => {
  const bulletPoints = [
    "Over two decades of environmental management including waste management, energy conservation, and pollution control",
    "All plants have Effluent Treatment Plants (ETP) and water harvesting systems.",
    "Waghodia unit: A five-acre green zone with a pond and landscaped greenery, reflecting our commitment to nature.",
    "Preserving resources and nurturing future generations is integral to our operations.",
  ];
  return (
    // <div className="py-10 mt-20 max-w-7xl m-auto">
    //   <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
    //     {/* Image */}
    //     <div className="rounded-2xl overflow-hidden">
    //       <img
    //         src={sustainabilityImage}
    //         alt="Sustainability and Environment"
    //         className="w-full h-[547px]"
    //       />
    //     </div>

    //     {/* Content */}
    //     <div className="flex flex-col gap-3 justify-center max-w-[485px]">
    //       <h3 className="text-[24px] font-normal text-foreground mb-4">
    //         Sustainability & Environment
    //       </h3>
    //       <p className="text-[16px] text-[#82848A] mb-4">
    //         We take our responsibility to the planet seriously:
    //       </p>
    //       <ul className="space-y-3 leading-[34px] text-[#82848A] text-[16px]">
    //         {bulletPoints.map((point, index) => (
    //           <li
    //             key={index}
    //             className="flex items-start gap-2 text-sm text-muted-foreground"
    //           >
    //             <span className="text-muted-foreground mt-0.5">•</span>
    //             <span className="text-[16px]">{point}</span>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>
    // </div>
    <div className="px-4 sm:px-6 lg:px-12">
     <div className="text-center mt-10">
        <h3 className="text-[18px] block px-1 lg:hidden font-medium  text-foreground">
              Sustainability & Environment
            </h3>
     </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-[75px]  gap-[25px]  justify-center items-center lg:px-20 lg:mx-10 lg:mt-20 mt-5 lg:mb-20 px-1 mx-1">
          <img
            src={sustainabilityImage}
            width={593}
            height={547}
            alt="Sustainability and Environment"
            className="rounded-2xl lg:h-[547px] lg:w-[593px] 2xl:h-[547px] 2xl:w-[793px]  h-[400px] w-full"
          />
        <div className="">
          <div className="flex flex-col justify-start items-start lg:max-h-[429px]">
            <h3 className="text-[24px] font-medium hidden lg:block text-foreground mb-4">
              Sustainability & Environment
            </h3>
            <p className="lg:text-[16px] text-[14px] text-[#82848A] mb-4 mx-2 lg:mx-0">
              We take our responsibility to the planet seriously:
            </p>
            <ul className=" text-[#82848A] lg:text-[16px]lg:max-w-[487px] mx-2 lg:mx-0">
              {bulletPoints.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start lg:leading-[34px] leading-[17px] gap-3 py-1 text-sm text-muted-foreground"
                >
                  <span className="text-muted-foreground mt-0.5">•</span>
                  <span className="lg:text-[16px] text-[14px]">{point}</span>
                </li> 
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sustainability;
