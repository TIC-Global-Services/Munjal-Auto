import { useState } from "react";
import expand1 from "../../assets/capabilities/image1.png";
import expand2 from "../../assets/capabilities/image2.png";
import expand3 from "../../assets/capabilities/image3.png";
import expand4 from "../../assets/capabilities/image4.png";
import expand5 from "../../assets/capabilities/image5.png";
import expand6 from "../../assets/capabilities/image6.png";

const RandDCapabilities = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const columns = [
    { id: 1, image: expand1, text: "Design & Engineering" },
    { id: 2, image: expand2, text: `CNC Machining` },
    { id: 3, image: expand3, text: "Composite Tooling" },
    { id: 4, image: expand4, text: "Automation" },
    { id: 5, image: expand5, text: "Project Management" },
    { id: 6, image: expand6, text: "Inspection" },
  ];

  return (
    <>
      {/* ✅ Desktop */}
      <div className="hidden md:flex flex-col py-32 items-center w-full justify-center px-16">
        <div className="flex pb-6 flex-col items-start w-full ">
          <div className="uppercase tracking-wider text-sm text-black">
            // R&D & Capabilities
          </div>

          <h1 className="text-6xl font-[300] leading-tight">
            <span className="text-[#ED1C24] font-medium">Capabilities</span>
          </h1>
        </div>

        <div className="flex w-full min-h-[80vh] gap-4 justify-center">
          {columns.map((col, index) => (
            <div
              key={col.id}
              className={`p-8 transition-all rounded-lg group duration-500 ease-in-out flex flex-col justify-end items-center bg-cover bg-center relative ${
                hoveredIndex === index ? "w-2/5" : "w-1/5"
              }`}
              style={{ backgroundImage: `url(${col.image})` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <span className="h-12 absolute left-4 w-[3px] bg-[#ED1C24] transition-all duration-500"></span>
              <div
                className={`absolute p-8 w-full text-left transition-all flex items-center py-2 ${
                  index === 3 || index === 5 ? "!bottom-2" : "!bottom-6"
                }`}
              >
                <p
                  className={`text-white text-2xl font-[500] h-[60px] transition-opacity duration-500 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-80"
                  }`}
                >
                  {col.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Mobile */}
      <MobileCapabilitiesSection />
    </>
  );
};

const MobileCapabilitiesSection = () => {
  const capabilities = [
    { title: "Design & Engineering", image: expand1, alt: "Design & Engineering" },
    { title: "CNC Machining", image: expand2, alt: "CNC Machining" },
    { title: "Composite Tooling", image: expand3, alt: "Composite Tooling" },
    { title: "Automation", image: expand4, alt: "Automation" },
    { title: "Project Management", image: expand5, alt: "Project Management" },
    { title: "Inspection", image: expand6, alt: "Inspection" },
  ];

  return (
    <div className="bg-white md:hidden block px-4 py-12 ">
      {/* Header */}
      <div className="mb-6">
        <p className="text-gray-600 text-sm mb-1">// R&D & Capabilities</p>
        <h2 className="text-4xl font-bold text-red-500">Capabilities</h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-4 lg:grid-cols-2 gap-1">
        {capabilities.map((capability, index) => (
          <div
            key={index}
            className={`relative rounded-lg w-full overflow-hidden shadow-md ${index ==4|| index==5 ?"col-span-2":"col-span-1" }`}
          >
            <img
              src={capability.image}
              alt={capability.alt}
              className={`w-full h-40 object-cover ${index==4?"object-cover object-top" :""}`}
            />
            <div className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-black/70 to-transparent">
                <div className="border-l-2 border-red-500 px-0.5 lg:pl-2">
                <p className="text-white font-medium text-[8px] lg:text-sm">
                  {capability.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandDCapabilities;
