import fab1 from "../../assets/Facilities/1.png";
import fab2 from "../../assets/Facilities/2.png";
import fab3 from "../../assets/Facilities/3.png";
import fab4 from "../../assets/Facilities/4.png";
import fab5 from "../../assets/Facilities/5.png";
import fab6 from "../../assets/Facilities/6.png";

import { motion } from "framer-motion";

const SustainableContent = ({ content }) => {
    return (
      <div className="max-w-7xl mx-auto px-4 mb-20">
        {/* Header Section */}
        <div className="text-center my-20 mb-16">
          <p className="lg:text-2xl md:text-xl  text-sm leading-[27px]  max-w-4xl mx-auto">
            Efficiency meets responsibility—our facilities integrate
            energy-efficient systems, waste reduction initiatives, and
            eco-friendly practices to drive sustainable innovation in engineering.
          </p>
        </div>
  
        {/* First Row - 2 cards per row on mobile, 3 on larger screens */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-6">
          {[
            {
              img: fab1,
              title: "Stamping Facility",
              description: "High-precision metal forming for complex parts using a range of stamping presses and tooling techniques.",
            },
            { img: fab2, title: "Roll Forming",
              description: "Multi-stage rim profile forming with high-end rolling mills from the UK, Japan, and Taiwan.",
  
             },
            { img: fab3, title: "CNC Tube Bending", description:'Accurate and repeatable pipe bending for consistent, high-quality tubular components.' },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
            >
              <motion.img
                src={card.img}
                alt={card.title}
                className="w-full h-40 sm:h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full transform transition-transform duration-300 group-hover:translate-y-[8px]">
                <h3 className="text-[#ffffff] text-lg md:text-2xl font-medium ">
                  {card.title}
                </h3>
                <p className="text-white text-sm md:text-base hidden group-hover:block transition-all duration-300">
                 {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
  
        {/* Second Row - 2 cards per row on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-6">
          {[
            { img: fab4, title: "Welding Facility", description:'Comprehensive welding solutions for high-strength, precision assemblies.', span: "md:col-span-3" },
            { img: fab5, title: "Surface Treatment", description:'Robust surface preparation and finishing processes for durability and corrosion resistance.', span: "md:col-span-6" },
            { img: fab6, title: "R&D Centre", description:'Advanced design and simulation tools ensure innovation from concept to production.', span: "md:col-span-3" },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className={`col-span-1 ${card.span} relative rounded-2xl overflow-hidden group cursor-pointer`}
            >
              <motion.img
                src={card.img}
                alt={card.title}
                className="w-full h-40 sm:h-48 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                <h3 className="text-[#ffffff] text-lg md:text-2xl font-medium mb-2">
                  {card.title}
                </h3>
                <p className="text-white text-sm md:text-base hidden group-hover:block transition-all duration-300">
    {card.description}
  </p>
  
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

export default SustainableContent
  