import React from "react";

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
    <div>
      <div className="text-center max-w-[884px] m-auto">
        <h1 className="leading-[56px] text-[46px]">Technology Alliances</h1>
        <p className="text-[18px] mt-5">
          Working with Japanese company since last 2 decades, we have developed
          technical expertise & best manufacturing skills by practicing
          innovative strategies to deliver best to esteemed customers.
          Continuously we explore best possible opportunities to adopt & share
          most advance & next generation technology with world renowned global
          leaders.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-10">
        {techList.map((item,index)=>(
            <div key={index}>
                <div className={`h-32 w-32 ${item.img ? "" : "bg-gray-200"}`}>
                    {item.img && <img src={item.img} className="h-full w-full object-cover"/>}
                </div>
                <p>{item.description}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default technologyalliance;
