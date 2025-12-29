// Component for the "Cutting-Edge Testing" tab
import React from 'react';
import innovationimg1 from '../../assets/slider/innovationimg.jpg'
import innovationimg5 from '../../assets/slider/manufacturingimg2.png'
import innovationimg3 from '../../assets/slider/manufacturingimg3.png'
import innovationimg2 from '../../assets/slider/manufacturingimg4.png'
import innovationimg4 from '../../assets/slider/manufacturingimg5.jpg'
import exhust1 from '../../assets/Facilities/exhustsystem1.jpg'
import exhust2 from '../../assets/Facilities/exhustsystem2.jpg'
import exhaust3 from '../../assets/Facilities/exhustsystem3.jpg'
import exhaust4 from '../../assets/Facilities/exhustsystem4.jpg'
import exhaust5 from '../../assets/Facilities/exhustsystem5.png'
import exhaust6 from '../../assets/Facilities/exhustsystem6.png'
import exhaust7 from '../../assets/Facilities/exhustsystem7.png'
import exhaust8 from '../../assets/Facilities/exhustsystem8.jpg'
import exhaust9 from '../../assets/Facilities/exhustsystem9.jpg'
import {ArrowLeft, ArrowRight} from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import './TestingContent.css'
import Rimmanufacturing from './rimmanufacturing'

const TestingContent = () => {
    const [showAllExhaust, setShowAllExhaust] = React.useState(false);

   
    const manufacturingList=[
        {
            title:"Stamping",
            points:["Presses ranging from 200 – 1000 TON with large bed sizes",
                "Bed size: 850 mm × 1450 mm to 2350 mm × 3250 mm",
                "Shut height: 550 mm to 1050 mm"
            ],
            img:innovationimg1
        },
        {
    title: "Welding",
    points: [
      "Spot welding",
      "Projection bonding",
      "Seam welding",
      "MIG welding",
      "TIG welding"
    ],
    img: innovationimg2
  },
  {
    title: "Online Testing",
    points: [
      "High-pressure flushing with water (before welding & assembly)",
      "Air cleaning (before welding & assembly)",
      "Leakage test (after welding & assembly)"
    ],
    img: innovationimg3
  },
  {
    title: "Surface Treatment",
    points: [
      "Pre-treatment with 9-tank system",
      "Powder coating with automatic conveyorised plant",
      "IR paint on exhaust systems",
      "Wet-on-wet paint on wheel rims",
      "Nickel-chrome plating on rims"
    ],
    img: innovationimg4
  },
  {
    title: "Offline Testing (Periodic)",
    points: [
      "Pressure & vacuum cycle test",
      "Vacuum holding test",
      "Hydro pressure test",
      "Impulse cycle test",
      "Venting tip angle test",
      "Slosh test (half-full & full)",
      "Vibration test",
      "Overturn test",
      "Salt spray test (Chamber size 1400 × 800 × 1000)",
      "Volume test",
      "Millipore contamination test"
    ],
    img: innovationimg5
  }

    ]
  const exhaustSystemList=[
     {
    sectionTitle: "Pressing & Forming",
    points: [
      "Mechanical presses ranging from 5–180 TON",
      "Hydraulic presses ranging from 20–160 TON",
      "Blanking, piercing, forming, trimming, and seam locking with specialized SPMs",
      "CNC bending machines for pipe-in-pipe exhaust systems"
    ],
    image: exhust2
  },
  {
    sectionTitle: "Surface Preparation & Coating",
    points: [
      "Shot/grit blasting machines",
      "Nine-stage pretreatment phosphating line",
      "Heat-resistant painting (internal & external)",
      "Fully automatic 34-stage tri-nickel chrome plating plant"
    ],
    image: exhust1
  },
  {
    sectionTitle: "CNC Bending",
    points: [
      "Four-axis CNC machine (YLM) with bending capacity up to 30 mm diameter, 2 mm thickness",
      "Max bending angle: 190°, CLR: 180 mm, mandrel working distance: 2000 mm",
      "Current pipe sizes: up to OD 25.40 mm, thickness 1.5 mm"
    ],
    image: exhaust5
  },
  {
    sectionTitle: "Welding",
    points: [
      "TIG, MIG, seam, spot, projection & butt welding",
      "Linear and circular SPMs with Argon inert gas welding"
    ],
    image: exhaust6
  },
  {
    sectionTitle: "Stamping & Mitering",
    points: [
      "Presses from 18–250 TON",
      "End flattening, tube diameter expansion, and precision mitering"
    ],
    image: exhaust7
  },
  {
    sectionTitle: "Machining & Sub-Assembly",
    points: [
      "Drilling and grinding operations",
      "MIG welding with advanced machines",
      "Gauging & welding inspection during assembly",
      "Fitting of rubber BOPs and seat recliners"
    ],
    image: exhaust8
  },
  {
    sectionTitle: "Surface Treatment & Coating",
    points: [
      "Pretreatment with 8-tank system",
      "Powder coating for enhanced durability"
    ],
    image: exhaust9
  }
    ]
     // Show limited items when "Show Less" is active
    const visibleExhaustItems = showAllExhaust ? exhaustSystemList : exhaustSystemList.slice(0, 3);
    return (
        <div className="max-w-7xl mx-auto  mb-20 ">

            <div className='px-6 lg:px-0 xl:px-0 sm:px-0'>
              <h1 className="text-[#151414] lg:text-[28px]  text-base leading-[24px] lg:leading-[57px] text-center  lg:max-w-4xl mx-auto mt-18 lg:mt-20 py-5">
                Our facilities go beyond manufacturing, every component undergoes rigorous testing and validation to meet the highest quality standards of global OEMs
            </h1>
            </div>
            <div className="lg:mt-20 mt-10 lg:py-10 lg:px-6 sm:px-3 px-3">
                <div>
                    <h1 className="lg:text-[36px] text-[24px] lg:text-start sm:text-center text-start">Fuel Tank Manufacturing</h1>
                    <p className="lg:text-[20px] text-[14px] mt-3 lg:max-w-[1116px] lg:text-start sm:text-center text-start leading-[28px] text-[#82848A]">
                        At Munjal Auto Industries Limited (MAIL), we produce 500 passenger car fuel tanks per day, with a total installed capacity of 1,500 assemblies daily. Leveraging advanced technology, modern equipment, and precision tooling, we maintain uncompromising standards of quality through robust processes, multi-stage inspections, and stringent testing protocols.
                    </p>
                </div>
            </div>
           <div className="relative md:px-6 sm:px-3 px-3">
             <Swiper
               modules={[Navigation]}
               spaceBetween={30}
               slidesPerView={1}
               navigation={{
                 nextEl: '.custom-next',
                 prevEl: '.custom-prev'
               }}
               autoHeight={true}
               className="manufacturing-carousel"
             >
               {manufacturingList.map((item, index) => (
                 <SwiperSlide key={index}>
                   <div className="flex xl:flex-row md:flex-col lg:flex-col gap-10 my-6">
                     <img
                       src={item.img}
                       width={755}
                       height={505}
                       alt="manufacturing image"
                       className={`flex-shrink-0 lg:min-w-[755px] rounded-[12px] lg:min-h-[505px] min-h-[400px] object-cover `}
                     />

                     <div className="lg:flex-1">
                       <div>
                         <h1 className="text-2xl font-bold mb-2 text-[#ED1C24]">{item.title}</h1>
                         <ul className="list-disc ml-6 lg:max-w-[380px]">
                           {item.points.map((point, i) => (
                             <li key={i} className='lg:text-[16px] text-[14px] font-[400] text-[#82848A] leading-[20px] lg:leading-[34px]'>{point}</li>
                           ))}
                         </ul>
                       </div>
                     </div>
                   </div>
                 </SwiperSlide>
               ))}
             </Swiper>

             {/* Custom navigation buttons */}
             <div className="flex justify-end gap-2 absolute lg:bottom-4 right-4 z-10">
               <ArrowLeft color="#ffffff" strokeWidth={1.5} absoluteStrokeWidth className='custom-prev bg-[#ED1C24] rounded-full p-2 w-10 h-10 cursor-pointer'/>
               <ArrowRight color="#ffffff" strokeWidth={1.5} absoluteStrokeWidth className='custom-next bg-[#ED1C24] rounded-full p-2 w-10 h-10 cursor-pointer'/>
             </div>
           </div>

              <div className="mt-20 py-10 lg:px-6 sm:px-6 px-3">
                <div>
                    <h1 className="lg:text-[36px]  text-[24px] text-start  w-full">Exhaust Systems Manufacturing</h1>
                    <p className="lg:text-[1.25rem] md:text-base sm:text-sm leading-[20px] lg:leading-[28px]  text-start lg:max-w-[1116px] mt-5 text-[#82848A]">
                       We manufacture nearly 32,000 complete two-wheeler exhaust systems every day at MAIL. Our state-of-the-art facilities, equipped with precision-driven technology and automated systems, ensure seamless production. Every unit undergoes strict in-process gauging, inspection, and advanced testing to guarantee superior performance and reliability.
                    </p>
                </div>
                <div className="relative mt-10">
                 
                    {visibleExhaustItems.map((item, index) => (
                        <div key={index} className=''>
                        <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 my-10 py-3">
                          <img
                            src={item.image}
                            width={595}
                            height={250}
                            alt="exhaust system image"
                            className={`flex-shrink-0 xl:max-w-[595px] md:w-full lg:w-full object-cover rounded-md md:h-[300px] lg:h-[300px] xl:h-[250px] ${index%2 !=0 ?"xl:order-last":""}`}/>
                          <div className="max-w-[595px]">
                            <div className='xl:-translate-y-2 lg:mt-5 xl:mt-0'>
                              <h1 className="lg:text-[26px]  text-[20px] font-bold mt-5 lg:mt-0 mb-2 text-[#ED1C24]">{item.sectionTitle}</h1>
                              <ul className="list-disc px-4 lg:px-7">
                                {item.points.map((point, i) => (
                                  <li key={i} className='text-[#82848A] lg:leading-[34px] font-[400] leading-[20px] text-[14px] lg:text-[16px]'>{point}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className='flex justify-center mt-6'>
                        <button
                          onClick={() => setShowAllExhaust(!showAllExhaust)}
                          className='show-more-btn text-black lg:text-[24px] text-[18px]  font-medium'
                        >
                          {showAllExhaust ? 'View Less' : 'View More'}
                        </button>
                    </div>
                </div>
            </div>
            <Rimmanufacturing/>
        </div>
    );
};

export default TestingContent

