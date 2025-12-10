// Component for the "Cutting-Edge Testing" tab
import innovationimg1 from '../../assets/slider/innovationimg.jpg'
import innovationimg5 from '../../assets/slider/manufacturingimg2.png'
import innovationimg3 from '../../assets/slider/manufacturingimg3.png'
import innovationimg2 from '../../assets/slider/manufacturingimg4.png'
import innovationimg4 from '../../assets/slider/manufacturingimg5.jpg'
const TestingContent = ({ content }) => {

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
    return (
        <div className="max-w-7xl mx-auto px-4 mb-20">

            <h1 className="text-[#151414] text-[28px] leading-[57px] text-center max-w-4xl mx-auto mt-20">
                Our facilities go beyond manufacturing, every component undergoes rigorous testing and validation to meet the highest quality standards of global OEMs
            </h1>
            <div className="mt-20 py-10">
                <div>
                    <h1 className="text-[36px]">Fuel Tank Manufacturing</h1>
                    <p className="text-[20px] text-[#82848A]">
                        At Munjal Auto Industries Limited (MAIL), we produce 500 passenger car fuel tanks per day, with a total installed capacity of 1,500 assemblies daily. Leveraging advanced technology, modern equipment, and precision tooling, we maintain uncompromising standards of quality through robust processes, multi-stage inspections, and stringent testing protocols.
                    </p>
                </div>
            </div>
            <div>
                {manufacturingList.map((item,index)=>{
                   <div key={index}>
                     <div>
                        <img src={item.img}/>
                    </div>
                    <div>
                        <h1>{item.title}</h1>
                        {item.points.map((point,index)=>{
                            <ul key={index}>
                                <li>{point}</li>
                            </ul>
                        })}
                    </div>
                   </div>
                })}
            </div>
            {/* <div className="flex flex-row justify-between items-start max-w-8xl mt-[120px]">
                <h1 className="text-[36px] font-medium">Fuel Tank <br /> Manufactuirng</h1>

                <div className="flex flex-col justify-center items-start space-y-5">
                    <div>
                        <h1 className="text-[#ED1C24] text-[26px] font-semibold mb-2">
                            Stamping
                        </h1>
                        <div className="w-full text-left">
                            <ul className="list-disc pl-5 space-y-4 columns-1 gap-x-8  text-[#626367]">
                                <li>
                                    Presses ranging from 200 – 1000 TON With Large bed sizes
                                </li>
                                <li>
                                    Bed Size from 850 mm X 1450 mm to 2350 mmX 3250 mm Shut Height
                                    550 mm to 1050 mm
                                </li>
                                <li>Supported By Following Hardware (Work Stations)</li>
                                <li>HP Z-600</li>
                                <li>HP Z-400 </li>
                                <li>Plotter HP-500</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-[#ED1C24] text-[26px] font-semibold mb-2">
                            Tool Design Center ( Waghodia)
                        </h1>
                        <div className="w-80 text-left">
                            <ul className="list-disc pl-5 space-y-4 columns-1 gap-x-8  text-[#626367]">
                                <li>
                                    CATIA V-5 –R-60
                                </li>
                                <li>
                                    Pro-E Wildfire
                                </li>
                                <li>Hyper Form ( Blank & Nest)</li>
                                <li>AutoCAD</li>
                                <li>Supported by Following Hardware (Work Stations)</li>
                                <li>HP XW-4600</li>
                                <li>IBM-Intelli-Star Z-Pro</li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default TestingContent
