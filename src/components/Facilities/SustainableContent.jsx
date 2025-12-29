// import fab1 from "../../assets/Facilities/1.png";
// import fab2 from "../../assets/Facilities/2.png";
// import fab3 from "../../assets/Facilities/3.png";
// import fab4 from "../../assets/Facilities/4.png";
// import fab5 from "../../assets/Facilities/5.png";
// import fab6 from "../../assets/Facilities/6.png";
import img1 from '../../assets/Facilities/research1.jpeg'
import img2 from '../../assets/Facilities/reasearch3.png'

import { motion } from "framer-motion";

const SustainableContent = ({ content }) => {
    return (
      <div className="px-4 mb-20">
        {/* Header Section */}
        <div className="text-center lg:my-20 lg:mb-20 mb-10">
          <p className="text-[#151414] lg:text-[28px] text-[14px] leading-[24px] lg:leading-[57px] text-center max-w-4xl mx-auto mt-18 lg:mt-20 py-5">
            Our state-of-the-art manufacturing facilities are equipped with advanced machinery and automated processes, ensuring high-precision components that meet global standards.
          </p>
        </div>
  
        {/* First Row - 2 cards per row on mobile, 3 on larger screens */}
        {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-6">
          [
            {
              img: fab1,
              title: "Stamping Facility",
              description: "High-precision metal forming for complex parts using a range of stamping presses and tooling techniques.",
            },
            {
              img: fab2,
              title: "Roll Forming",
              description: "Multi-stage rim profile forming with high-end rolling mills from the UK, Japan, and Taiwan.",
            },
            {
              img: fab3,
              title: "CNC Tube Bending",
              description: 'Accurate and repeatable pipe bending for consistent, high-quality tubular components.'
            },
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
                <h3 className="text-[#ffffff] text-lg md:text-2xl font-medium">
                  {card.title}
                </h3>
                <p className="text-white text-sm md:text-base hidden group-hover:block transition-all duration-300">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div> */}
  
        {/* Second Row - 2 cards per row on mobile */}
        {/* <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-6">
          [
            {
              img: fab4,
              title: "Welding Facility",
              description: 'Comprehensive welding solutions for high-strength, precision assemblies.',
              span: "md:col-span-3"
            },
            {
              img: fab5,
              title: "Surface Treatment",
              description: 'Robust surface preparation and finishing processes for durability and corrosion resistance.',
              span: "md:col-span-6"
            },
            {
              img: fab6,
              title: "R&D Centre",
              description: 'Advanced design and simulation tools ensure innovation from concept to production.',
              span: "md:col-span-3"
            },
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
        </div> */}
        
         <div className='grid grid-cols-1 lg:grid-cols-2 max-w-[1213px] mx-auto lg:py-10 items-center'>
          <div>
            <h1 className='text-[24px] lg:text-left text-center lg:mb-0 mb-5'>R&D Centre</h1>
            <ul className="list-disc ml-4 py-5 xl:max-w-[485px] lg:block hidden space-y-4 text-[#82848A]">
              <li className='leading-[34px] text-[16px]'>
                The excellence of our products stems from our deep expertise in blueprint design. Every precise and systematic design lays a strong foundation for superior manufacturing. Munjal Auto Industries has achieved high operational maturity through rigorous adherence to advanced processes, benchmarked against world-class standards.
              </li>
              <li className='leading-[34px] text-[16px]'>
                Quality begins at the design stage, where our multi-disciplinary approach optimizes process design. High-end software such as Mechanical Desktop, AutoCAD, and Pro-E Wildfire 2.0 form the core of our tool, die, fixture, and gauge development.
              </li>
            </ul>
          </div>
          <img src={img1} width={593} height={547} className='rounded-lg md:w-[793px] lg:w-[593px] lg:h-[547px] object-cover' />
          <ul className="list-disc ml-4 py-5 lg:max-w-[485px] lg:hidden block space-y-4 ">
              <li className='leading-[24px] text-base lg:text-base'>
                The excellence of our products stems from our deep expertise in blueprint design. Every precise and systematic design lays a strong foundation for superior manufacturing. Munjal Auto Industries has achieved high operational maturity through rigorous adherence to advanced processes, benchmarked against world-class standards.
              </li>
              <li className='leading-[24px] text-base lg:text-base'>
                Quality begins at the design stage, where our multi-disciplinary approach optimizes process design. High-end software such as Mechanical Desktop, AutoCAD, and Pro-E Wildfire 2.0 form the core of our tool, die, fixture, and gauge development.
              </li>
            </ul>
        </div>
      
        <div className='grid grid-cols-1 lg:grid-cols-2 max-w-[1213px] mx-auto items-center lg:mt-10 lg:py-10 mt-10'>
          <h1 className='lg:text-[36px] text-[24px] lg:text-left text-center mb-4 lg:hidden block lg:mt-0'>R&D and Prototyping</h1>
            <img src={img2} width={488} height={547} className='object-cover rounded-[20px] md:w-[793px] lg:w-[593px] lg:h-[547px]'/>
            <div className='max-w-[696px]  lg:translate-x-6'>
            <h1 className='lg:text-[36px] text-[24px] lg:text-left text-center mt-4 lg:block hidden lg:mt-0'>R&D and Prototyping</h1>
            <p className='mt-5 lg:leading-[34px] leading-[24px] text-[14px] lg:text-[18px] lg:text-left text-center'>
              Munjal Auto has complete in-house prototyping capabilities, enabling cost-effective design and development of components. This facility ensures rapid iteration from concept to functional prototype, supporting precision, quality, and timely validation for all automotive parts.
            </p>
          </div>
        </div>

      </div>
    );
  };

export default SustainableContent
  
