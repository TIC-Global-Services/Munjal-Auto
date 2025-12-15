import rdImage from "../../assets/rdImage.png";
import faControl from "../../assets/faControl.png";
import { Link } from "react-router-dom";
import stampfacilityimg from '../../assets/Facilities/stampingfacility.png'
import stampfacilityimg2 from '../../assets/Facilities/stampingfacility2.png'
import stampfacilityimg3 from '../../assets/Facilities/stampingfacility3.jpg'
import stampfacilityimg4 from '../../assets/Facilities/stampingfacility4.png'

const PrecisionEngineeringContent = ({ content }) => {
  return (
    <div className="md:max-w-7xl mx-auto px-4 mb-20">
      {/* Split Grid Layout */}
      <div>
        <h1
          className="  text-[#151414] text-[28px] leading-[57px] text-center max-w-4xl mx-auto mt-20 mb-25 py-3"
          style={{
            letterSpacing: "2%",
            textAlign: "center",
          }}
        >
         Our facilities integrate energy-efficient systems, waste reduction initiatives, and eco-friendly practices to drive sustainable innovation in engineering.
        </h1>
      </div>
      <div className="bg-[#F5F5F5] p-[30px] mt-20 rounded-[14px]">
        <div>
          <h1 className="text-[36px] mb-4">Stamping Facility</h1>
        </div>
        <div className="object-fit">
          <img src={stampfacilityimg} width={1154} height={404} className="w-full h-[404px] object-cover rounded-[8px]"/>
        </div>
        <div className="mt-5">
          <h1 className="text-[#82848A] text-[16px]">High-precision metal forming for complex parts using a range of stamping presses and tooling techniques</h1>
          <ul className="list-disc px-10 text-[#82848A] leading-[34px] mt-2">
            <li>Equipped with ~60 presses ranging from 10 – 1000 TON, sourced from world-renowned manufacturers.</li>
            <li>Hydraulic presses: 25 – 160 TON | Mechanical presses: 40 – 1000 TON.</li>
            <li>Best-in-class manufacturing and maintenance practices ensure consistency and repeatability in press components.</li>
          </ul>
        </div>
      </div>
      <div className="bg-[#F5F5F5] mt-20 p-[30px] rounded-[14px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div>
              <img src={stampfacilityimg2} width={592} height={395} className="rounded-[8px]"/>
            </div>
            <div>
              <h1 className="text-[36px]">Roll Forming</h1>
              <p className="text-[#82848A] leading-[34px]">Multi-stage rim profile forming with high-end rolling mills from the UK, Japan, and Taiwan</p>
              <ul className="list-disc px-10 text-[#82848A] leading-[34px] mt-2">
                <li>
                  High-tech roll forming facility with a range of SPMs
                </li>
                <li>Imported automated rolling mills for spoke rims.</li>
                <li>Multi-Stage Rim Roll Forming SPMs for steel wheel rims (2-wheeler & 4-wheeler)</li>
                <li>Precision roll-forming tools guarantee dimensional accuracy and quality consistency.</li>
              </ul>
            </div>
          </div>
      </div>
      <div className="bg-[#F5F5F5] mt-20 p-[30px] rounded-[14px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div>
              <h1 className="text-[36px]">CNC Tube Bending</h1>
              <p className="text-[#82848A] leading-[34px]">Accurate and repeatable pipe bending for consistent, high-quality tubular components.</p>
              <ul className="list-disc px-10 leading-[32px] text-[#82848A]">
                <li>
              Advanced bending facility with Single Axis, 3-Axis & 4-Axis CNC machines from global leaders like YLM (Korea).
                </li>
                <li>Specialized semi-automatic & fully automatic machines for complex exhaust system parts.</li>
              </ul>
              <p className="text-[#82848A] mt-2">Capability to produce a wide range of tubular parts and assemblies:</p>
                <ul className="list-disc px-10 text-[#82848A] space-y-4 mt-2">
                <li>
             Complete seat structures for passenger cars
                </li>
                <li>Fuel tank breather tubes</li>
              </ul>
            </div>
            <div>
              <img src={stampfacilityimg2} width={592} height={395} className="rounded-[8px] h-full"/>
            </div>
          </div>
      </div>
       <div className="bg-[#F5F5F5] mt-20 p-[30px] rounded-[14px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div>
              <img src={stampfacilityimg3} width={592} height={360} className="rounded-[8px]"/>
            </div>
            <div>
              <h1 className="text-[36px]">Welding Facility</h1>
              <p className="text-[#82848A]">Comprehensive welding solutions for high-strength, precision assemblies</p>
              <ul className="list-disc px-10 leading-[24px] text-[#82848A] space-y-4 mt-2">
                <li>
                  Plants equipped with highly automated welding systems.
                </li>
                <li>Capabilities include Spot, Butt, Projection, Seam, MIG, TIG, and SUS welding</li>
                <li>PLC-controlled welding lines ensure efficiency, consistency, and accuracy.</li>
                <li>Critical profiles welded using robotic automation, ensuring high standards of precision and reliability..</li>
              </ul>
            </div>
          </div>
      </div>
          
            <div className="bg-[#F5F5F5] p-[30px] mt-20 rounded-[14px]">
        <div>
          <h1 className="text-[36px] mb-4">Surface Treatment</h1>
        </div>
        <div className="object-fit">
          <img src={stampfacilityimg4} width={1154} height={404} className="w-full h-[404px] object-cover rounded-[8px]"/>
        </div>
        <div className="mt-5">
          <h1 className="text-[#82848A] leading-[34px] text-[16px]">We ensure durability and corrosion resistance with advanced surface preparation and finishing processes. Our facilities include shot blasting across all plants, six automated heat-resistant painting shops, and eco-friendly lines focused on sustainability. At the Waghodia Plant, we operate:</h1>
          <ul className="list-disc leading-[34px] px-10 text-[#82848A] space-y-3 mt-2">
            <li>2 x 32-Stage Tri-Nickel Chrome Coating Plants</li>
            <li>1 x Wet-on-Wet Painting Line.</li>
            <li>An Automatic Powder Coating Plant with 9-tank pre-treatment</li>
            <li>An upcoming advanced ED coating facility</li>
          </ul>
          <p className="text-[#82848A] ">Using electrostatic spray guns, we achieve efficient paint transfer with minimal wastage.</p>
        </div>
      </div>
    </div>
  );
};

export default PrecisionEngineeringContent;