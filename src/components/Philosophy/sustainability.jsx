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
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-20 mx-10 mt-20 mb-20">
          <img
            src={sustainabilityImage}
            alt="Sustainability and Environment"
            className="rounded-2xl h-[500px]"
          />
        <div>
          <div className="flex flex-col gap-3 justify-center">
            <h3 className="text-[24px] font-normal text-foreground mb-4">
              Sustainability & Environment
            </h3>
            <p className="text-[16px] text-[#82848A] mb-4">
              We take our responsibility to the planet seriously:
            </p>
            <ul className="space-y-4 leading-[34px] text-[#82848A] text-[16px] max-w-[487px]">
              {bulletPoints.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 py-1 text-sm text-muted-foreground"
                >
                  <span className="text-muted-foreground mt-0.5">•</span>
                  <span className="text-[16px]">{point}</span>
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
