import indutch1 from "../../assets/about/indutch_composite.png";
import indutch2 from "../../assets/about/inductch_composite_2.svg";
import indutch3 from "../../assets/about/induch_composite_3.png";
import inductch4 from "../../assets/about/indutch_composite_4.png";

import inductch from "../../assets/about/indutch5.jpg";
const CompositeTechnology = () => {
  return (
    <div className="lg:px-10 px-3 lg:mx-10 mt-[30px]  py-12">
      <div className="bg-[#F5F5F5] rounded-[12px] p-6 md:p-8 lg:p-12">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-[24px] md:text-4xl lg:text-5xl font-semibold lg:text-left  text-center text-gray-900 mb-6">
            Indutch Composites <span className="text-red-600">Technology</span>
          </h1>
          <p className="text-[14px] lg:text-[18px] text-gray-700 leading-relaxed max-w-4xl">
            Founded in 2010, Indutch Composites Technology Limited is a leader
            in advanced composite molds and components, with a strong focus on
            renewable energy and wind power. Over the years, it has expanded its
            expertise to serve diverse sectors as a trusted partner for
            engineering innovation.
          </p>
        </div>
    
        {/* First Content Section */}
        <div className="lg:mb-20 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="order-2 lg:order-1 w-full">
              <img
                src={indutch1}
                alt="Indutch Composite Technology"
                className="object-cover  lg:h-[340px] h-[200px] w-full rounded-xl  shadow-lg"
              />
            </div>
            <div className="order-2 lg:order-2">
              <p className="text-[14px] lg:text-[18px] text-[#020202] leading-relaxed mb-6">
                Since inception, Indutch Composites Technology Limited has been
                a trusted partner to the composites industry, specializing in
                the design and manufacturing of composite moulds and components
                through advanced processes such as:
              </p>
              <div className="grid grid-cols-2">
                <div>
                  {[
                    "Wet lay-up", 
                    "Dry lay-up"
                  ].map((process, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-1 h-1 bg-[#020202] rounded-full mr-3"></div>
                      <span className="text-[#020202] font-[400] text-[13px] lg:text-[18px]">{process}</span>
                    </div>
                  ))}
                </div>
                <div>
                  {[
                    "Vacuum bagging",
                    "VARTM",
                    "LRTM",
                  ].map((process, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-1 h-1 bg-[#020202] rounded-full mr-3"></div>
                      <span className="text-[#020202] font-[400] text-[13px] lg:text-[18px]">{process}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Content Section */}
       <div className="lg:py-10">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-12 items-start">
          <div className="order-last  lg:order-first">
            <p className="text-[14px] lg:text-[18px] text-[#020202] leading-relaxed ">
              The company employs over 700 skilled technicians and 70 engineers,
              with in-house capabilities for mould design, jigs, and fixtures.
            </p>
            <h3 className="text-[14px] lg:text-[18px] font-normal text-[#020202] mb-5">
              Upcoming Facility (2019 launch):
            </h3>
            <ul className="leading-[28px]">
              {[
                "160 × 30 × 12 m shed with 20-ton EOT crane, temperature & dust control",
                "80 × 20 × 10 m shed dedicated to Defence & Aerospace, with cleanroom and dust extraction",
                "5-Axis milling machine (52m × 10m × 4.5m) from CMS Italy",
                "Testing labs for raw material and finished products",
                "NDT C-scan equipment, laser tracking systems",
                "Autoclave (2m dia × 3m length), industrial oven, freezer for pre-pregs",
                "Paint booth and Class 8 cleanroom (12m × 10m × 3m)",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-1 h-1 bg-black rounded-full mr-2 mt-2 lg:mt-3 flex-shrink-0"></div>
                  <span className="text-[#020202] leading-relaxed text-[13px] lg:text-[18px]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex w-full justify-center lg:justify-end">
            <img
              src={indutch2}
              alt="Indutch Composite Technology Facility"
              className="w-full lg:max-w-none h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
       </div>

        <div className="lg:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          <div className="relative h-full w-full">
            <img
              src={indutch3}
              alt="inductch"
              className="w-full  lg:h-[500px] h-[366px] object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent rounded-2xl flex items-start p-6">
              <div className="text-white">
                <h3 className="text-[16px] lg:text-[26px] font-semibold mb-4 text-[#FF0000] leading-[24px]">
                  Targeted Certifications (2019):
                </h3>
                <div className="">
                  <div className="flex items-center">
                    <div className="w-1 h-1 bg-white rounded-full mr-2 flex-shrink-0"></div>
                    <span className="text-[13px] lg:text-[18px] font-[300]">ISO 9001:2015</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-1 h-1 bg-white rounded-full mr-2 flex-shrink-0"></div>
                    <span className="text-[13px] lg:text-[18px] font-[300]">ISO 14001 & OSHA</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-1 h-1 bg-white rounded-full mr-2 flex-shrink-0"></div>
                    <span className="text-[13px] lg:text-[18px] font-[300]">AS 9100</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-full">
            <img
              src={inductch4} 
              alt="inductch"
              className="w-full  lg:h-[500px] h-[366px] object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent rounded-2xl flex items-start p-6">
              <div className="text-white">
                <h3 className="text-[16px] lg:text-[26px] font-semibold mb-4 text-[#FF0000]">
                  Product Capabilities:
                </h3>
                <div className="">
                  <div className="flex items-center">
                    <div className="w-1 h-1 bg-white rounded-full mr-2 flex-shrink-0"></div>
                    <span className="text-[13px] lg:text-[18px] font-[300]">Wind blade moulds</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-1 h-1 bg-white rounded-full mr-2 flex-shrink-0"></div>
                    <span className="text-[13px] lg:text-[18px] leading-[20px] font-[300]">Boat hulls</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-1 h-1 bg-white rounded-full mr-2 flex-shrink-0"></div>
                    <span className="text-[13px] lg:text-[18px] font-[300]">Aircraft fuselage and wings</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-1 h-1 bg-white rounded-full mr-2 flex-shrink-0"></div>
                    <span className="text-[13px] lg:text-[18px] font-[300]">Helicopter rotor blades</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-1 h-1 bg-white rounded-full mr-2 flex-shrink-0"></div>
                    <span className="text-[13px] lg:text-[18px] font-[300]">Ship propellers</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-1 h-1 bg-white rounded-full mr-2 flex-shrink-0"></div>
                    <span className="text-[13px] lg:text-[18px] font-[300]">Armoured vehicles and shelters</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-1 h-1 bg-white rounded-full mr-2 flex-shrink-0"></div>
                    <span className="text-[13px] lg:text-[18px] font-[300]">Antennas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
       
        <div className="">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10 items-center">
          <div className="w-full h-full">
            <img
              src={inductch}
              alt="windturbine"
              className="object-cover lg:h-[340px] h-[200px] w-full rounded-[12px]"
            />
          </div>
          <div>
            <div>
              <p className="text-[14px] lg:text-[18px] text-[#020202] leading-[20px] lg:leading-[28px]">
                Indutch has the capabilities to design and manufacture moulds
                and products for various Engineering industries such as Auto,
                Defence, Railways, Aviation, Space, Marine, Home appliances,
                mass transit, just to name a few. Today Wind sector is the core
                business at Indutch.
              </p>
              <p className="text-[14px] text-[#020202] lg:text-[18px] mt-4 mb-4">Indutch has 4 manufacturing facilities</p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 lg:gap-0">
                {["Chennai", "Halol", "Manjusar", "Waghodia (Under Construction)"].map(
                  (process, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-1 h-1 bg-black rounded-full mr-2 mt-1.5 lg:mt-2.5 flex-shrink-0"></div>
                      <span className="text-[#020202] text-[13px] lg:text-[18px] font-[400] leading-tight lg:leading-normal">
                        {process}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CompositeTechnology;
