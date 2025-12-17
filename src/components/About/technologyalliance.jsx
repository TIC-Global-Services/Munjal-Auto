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
    <div className="grid grid-cols-1 lg:grid-cols-2 px-15 ">
      <div className="text-center max-w-[884px] m-auto">
        <h1 className="leading-[56px] text-[46px] text-left">Technology Alliances</h1>
        <p className="text-[18px] mt-5 text-left max-w-[592px]">
          Working with Japanese company since last 2 decades, we have developed
          technical expertise & best manufacturing skills by practicing
          innovative strategies to deliver best to esteemed customers.
          Continuously we explore best possible opportunities to adopt & share
          most advance & next generation technology with world renowned global
          leaders.
        </p>
      </div>
      <div>
        <img src={inductch5} width={592} height={157}/>
        <p className="text-left text-[18px] max-w-[592px]">Technical collaboration for design of exhaust systems for 2-3 wheelers</p>
      </div>
    </div>
  );
};

export default technologyalliance;
