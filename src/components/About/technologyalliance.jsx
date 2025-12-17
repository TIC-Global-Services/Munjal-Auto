import React from "react";
import inductch5 from "../../assets/about/lafranconi.png";
const technologyalliance = () => {

 const techList=[
    {
        img:"",
        description:"Technical collaboration for design of exhaust systems for 2-3 wheelers"
    },
    {
        img:"",
        description:"Technical collaboration for Design, Development and Manufacturing of modern age fuel tank assemblies for 4 wheelers including passenger Car"
    },
 ]

  return (
    <div className="lg:px-20 px-3">
       <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:px-15 px-1">
      <div className="text-center">
        <h1 className="leading-[56px] lg:text-[46px] text-[34px]  text-left">Technology Alliances</h1>
        <p className="text-[13px] lg:text-[18px] mt-5 text-left max-w-[592px]">
          Working with Japanese company since last 2 decades, we have developed
          technical expertise & best manufacturing skills by practicing
          innovative strategies to deliver best to esteemed customers.
          Continuously we explore best possible opportunities to adopt & share
          most advance & next generation technology with world renowned global
          leaders.
        </p>
      </div>
      <div className="w-full">
        <img src={inductch5} width={592} height={157} className="mb-7"/>
        <p className="text-left text-[13px] lg:text-[18px] max-w-[592px]">Technical collaboration for design of exhaust systems for 2-3 wheelers</p>
      </div>
    </div>
    </div>
   
  );
};

export default technologyalliance;
