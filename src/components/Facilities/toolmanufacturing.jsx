import { useState } from 'react'
import toolimg1 from '../../assets/Facilities/toolmanufactureimg2.jpeg'
import toolimg2 from '../../assets/Facilities/toolmanufactureimg3.jpeg'
import arrow from '../../assets/Facilities/arrow-down.png'

const Toolmanufacturing = () => {
    const [showAllExhaust, setShowAllExhaust] = useState(false);

    

    const toolManufactureList = [
      
  {
    title: "Double Column VMC",
    points: [
      "Specifications: \n3200(X) * 2500(Y) * 700(Z) * 800(W)",
      "Make: Mitsubishi (MVR 25)",
      "Quantity: 1"
    ]
  },
  {
    title: "EDM Wire Cut",
    points: [
      "Specifications:\n 600(X) * 400(Y) * 310(Z) * +-75(U&V)",
      "Make: Mitsubishi (MVR 25)",
      "Quantity: 1"
    ]
  },
  {
    title: "Die-Spotting",
    points: [
      "Specifications:\n 3000 * 2000(Table size) * 1700(Z) * 100T",
      "Make: Sanki (DPM 3020–100)",
      "Quantity: 1"
    ]
  },
  {
    title: "Cylindrical Grinder",
    points: [
      "Specifications:\n 260(Swing) * 800(Admit)",
      "Make: HMT (K130)",
      "Quantity: 1"
    ]
  },
  {
    title: "Surface Grinder",
    points: [
      "Specifications: 1650(X) * 660(Y)",
      "Make: Proth (PSGC60150 AHR)",
      "Quantity: 1"
    ]
  },
  {
    title: "Surface Grinder",
    points: [
      "Specifications: 700(X) * 340(Y)",
      "Make: Proth (PSGC60150 AHR)",
      "Quantity: 1"
    ]
  },
  {
    title: "Universal Milling",
    points: [
      "Specifications: \n 1200(X) * 400(Y) * 400(Z) * 150 * 50 * 100",
      "Make: Batliboi (BFCU 15)",
      "Quantity: 1"
    ]
  },
  {
    title: "Centre Lathe",
    points: [
      "Specifications:\n 640(Swing) * 1500(Admit bt centers)",
      "Make: HMT (NH 32)",
      "Quantity: 1"
    ]
  },
  {
    title: "Centre Lathe",
    points: [
      "Specifications:\n 575(Swing) * 3000(Admit bt centers)",
      "Make: HMT (NH 26)",
      "Quantity: 1"
    ]
  },
  {
    title: "Surface Grinder",
    points: [
      "Specifications:\n 450(X) * 150(Y)",
      "Make: Praga (451 P)",
      "Quantity: 2"
    ]
  },
  {
    title: "Knee Type Milling",
    points: [
      "Specifications:\n820(X) * 380(Y) * 360(Z) * 127 (Quill Travel) ISO40",
      "Make: Argo (5VHL)",
      "Quantity: 2"
    ]
  },
  {
    title: "Vertical Milling",
    points: [
      "Specifications: 1200(X) * 700(Y) * 600(Z)",
      "Make: Batliboi (BMV 75)",
      "Quantity: 1"
    ]
  },
  {
    title: "Bench Lathe",
    points: [
      "Specifications:\n330(Swing) * 165(Cross) * 670(Admit)",
      "Make: Geede Weiler (LZ 280)",
      "Quantity: 1"
    ]
  },
  {
    title: "Radial Drilling",
    points: [
      "Specifications:\nDia 60 * 1800(R max) * MT 5",
      "Make: Batliboi (BR 618)",
      "Quantity: 2"
    ]
  },
  {
    title: "EDM Drill",
    points: [
      "Specifications: 300(X) * 200(Y)",
      "Make: Mitsubishi (ED 200M)",
      "Quantity: 1"
    ]
  },
  {
    title: "Trial Press",
    points: [
      "Specifications:\n315T * 300(stroke) * 1800 * 1200(Bed)",
      "Make: Kaushico (KCL-2-315)",
      "Quantity: 1"
    ]
  },
  {
    title: "Band Saw",
    points: [
      "Specifications: 260 * 260(Square)",
      "Make: ITL (260DCTV)",
      "Quantity: 1"
    ]
  },
  {
    title: "Welding M/c",
    points: [
      "Specifications: 150 Amps",
      "Make: I&T (TP 1500)",
      "Quantity: 1"
    ]
  },
  {
    title: "Portable CMM",
    points: [
      "Specifications:\n10 Feet * 7 Axis * Blue Tooth",
      "Make: Faro Arm (Platinum)",
      "Quantity: 1"
    ]
  },

  // ------------------- SECOND IMAGE MACHINES -------------------

];

  return (
    <div className='mt-20 lg:mt-20 '>
        <div>
            <h1 className='lg:text-[36px] text-[24px] lg:text-start text-center'>Tool Manufacturing</h1>
        </div>
        <div className='flex flex-col lg:flex-row gap-10 items-center mt-5'>
            <div className='object-fit lg:min-w-[500px] overflow-hidden'>
                <img src={toolimg1} width={488} height={325} alt='Tool Manufacturing' className='w-full h-full rounded-[20px] lg:h-[300px]'/>
            </div>
            <div className='max-w-[696px]'>
                    <p className='leading-[24px] lg:leading-[34px] text-[#222222] lg:text-[16px] text-[14px]'>
                    In 2010-11, Munjal Auto established a state-of-the-art high-tech Tool Manufacturing Facility at Bawal, Haryana, spanning 1,600 sq.m. The center is equipped with advanced CAD/CAM/CAE systems, large CNC machining centers, portable coordinate measuring machines, and die-spotting presses to manufacture and maintain mid-to-large sized tooling, jigs, fixtures, gauges, and panel checkers.
                </p>
                <p className='leading-[24px] lg:leading-[34px] text-[#222222] lg:text-[16px] text-[14px]'> The facility is capable of producing tooling for fuel tanks, exhaust systems, roll components, wheel rims, BIW, and structural parts of automobiles.</p>
            </div>
        </div>

        {showAllExhaust ? (
            <div className='grid grid-cols-3  whitespace-wrap gap-5 mt-20'>
            {toolManufactureList.map((item,index) => (
                <div key={index} className='bg-[#F5F5F5] p-3 rounded-[12px]'>
                            <h1 className='bg-[#E3E3E3] text-[#ED1C24] py-2 mt-2 font-semibold text-center rounded-[8px] text-[20px] lg:text-[26px]'>{item.title}</h1>
                        <ul className="list-disc ml-6 py-5 space-y-3 ">
                                {item.points.map((point, i) => (
                                  <li key={i} className='font-light text-[13px] lg:text-[16px] whitespace-break-spaces  '>{point}</li>
                                ))}
                         </ul>
                </div>
            ))}
            </div>
        ) : (
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-20'>
            {toolManufactureList.slice(0, 6).map((item,index) => (
                <div key={index} className='bg-[#F5F5F5] p-3 rounded-[12px]'>
                            <h1 className='bg-[#E3E3E3] text-[#ED1C24] py-2 font-semibold text-center rounded-[8px] text-[20px] lg:text-[26px]'>{item.title}</h1>
                        <ul className="list-disc ml-6 py-5 space-y-3">
                                {item.points.map((point, i) => (
                                  <li key={i} className='font-light text-[13px] lg:text-[16px] whitespace-break-spaces'>{point}</li>
                                ))}
                         </ul>
                </div>
            ))}
            </div>
        )}

        <div className='flex justify-center mt-8'>
            <button
              onClick={() => setShowAllExhaust(!showAllExhaust)}
              className='border border-gray-300 rounded-md px-4 py-2 flex items-center gap-2 hover:bg-gray-50 transition-colors'
            >
              {showAllExhaust ? 'View Less' : 'View More'}
              <span className={`transform ${showAllExhaust ? 'rotate-180' : ''} transition-transform`}>
                <img src={arrow} width={8} height={12} alt="toggle arrow"/>
              </span>
            </button>
        </div>
        <div className='grid  grid-cols-1 lg:grid-cols-2 lg:gap-[70px] gap-5 lg:mt-20 mt-10 items-start'>
          <h1 className='lg:text-[24px] lg:text-start text-center block lg:hidden'>Central Room & Technical Room</h1>
          <div className='object-fit overflow-hidden w-fit'>
            <img src={toolimg2} width={593} height={550} alt='Central Room & Technical Room' className='w-full h-[444.75px] rounded-[10px]'/>
          </div>
          <div>
            <h1 className='lg:text-[24px] lg:text-start text-center hidden lg:block'>Central Room & Technical Room</h1>
            <ul className="list-disc ml-6 py-6  text-[#82848A] lg:w-[485px] lg:h-[374px]">
              <li className='leading-[24px] lg:leading-[34px] text-[14px] lg:text-[16px]'>
                Spread in 1600 square meters area and operational since April 2011. A world-class facility for design & manufacturing of small to large sized tools, fixtures & gauges required in our various manufacturing locations to manufacture large parts & assemblies of automobiles
              </li>
              <li className='leading-[24px] lg:leading-[34px] text-[14px] lg:text-[16px]'>
                Latest CAD / CAM & CAE software’s – Unigraphics, Catia V-5, FTI, and Hyperform are installed in the tool design section. Total number of design stations – 40. Advanced CNC machines from Mitsubishi Japan for tool machining, die-Spotting, and tryout presses are used for manufacturing of press tools
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Toolmanufacturing