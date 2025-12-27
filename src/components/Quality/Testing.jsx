import React, { useState } from 'react'
import image1 from '../../assets/quality/fueltank.png'
import image2 from '../../assets/quality/Chemicallab.png'
import image3 from '../../assets/quality/Metallurgylab.png'
import image4 from '../../assets/quality/Specialtesting.png'
import image5 from '../../assets/quality/spokewheelrim.png'
import image6 from '../../assets/quality/standard.png'
import image7 from '../../assets/quality/testingfacilities.png'
import image8 from '../../assets/quality/testingwheelrim.png'
import { ArrowLeft, ArrowRight } from 'lucide-react';


const contents = [
  {
    title: 'Standard Room',
    image: image6,
    description: [
      "CMM - 4 NO (at all plants)",
      "Profile Projector",
      "Microscope",
      "Height Masters",
      "Others including Surface Table, Height Gauge, Bevel Protractor, Micrometer (Inside/Outside), Verniers etc",
    ]
  },
  {
    title: 'Metallurgical Lab',
    image: image3,
    description: [
      "Computerized UTM",
      "Wickers Hardness Testing",
      "Facility of weld penetration Test",
      "Weld strength tester",
      "Automatic absorption Spectrophotometer",
    ]
  },
  {
    title: 'Chemical Lab',
    image: image2,
    description: [
      "Cass Test Equipment",
      "Salt Spray Testing",
      "Hot Bath Chamber",
      "Heat Resistance Testing",
      "Humidity Resistance Testing",
      "Water Immersion Resistance Testing",
      "Atomic Absorption Spectrophotometer",
      "PH Checking",
    ]
  },

  {
    title: 'Specialized Testing facilities & Endurance Testing',
    image: image4,
    description: [
      " We at Munjal Auto carry out online / off line testing regularly & periodically. To meet ultimate demand of customers we have endurance testing facilities with specially developed equipments & SPMs to meet Quality standard, Durability & specifications given by customers. Our testing labs has appropriate testing facility for exhaust system, Wheel Rims, Fuel tanks & other parts & assemblies made in-house."
    ]
  },
  {
    title: 'Testing Facility for Exhaust systems',
    image: image7,
    description: [
      "Online / Offline Testing",
      "Muffler Leak Test",
      "Sound Testing",
      "Weld Quality Test – Bead, Penetration & Strength",
      "Paint Resistance Tests using Muffler Furnace, Humidity Bath, Hatch Test, Dry Film & Wet Film Thickness Tests",
    ]
  },

  {
    title: 'Testing Facility for Wheel Rims',
    image: image8,
    description: [
      "Online Testing",
      "Wheel rim run out measuring and low point marking SPM",
      "But Weld joint air leak test",
      "Offline Testing",
      "Corner fatigue tester",
      "Radial fatigue tester",
      "Flange bend Strength tester (Impact resistance )",
      "Weld strength tester",
      "Butt weld joint air leak Testing",
      "Rim profile Projector"
    ]
  },

  {
    title: 'Testing Facility for Fuel Tanks',
    image: image1,
    description: [
      "Online Testing",
      "Leakage Test ( after welding & assembly)",
      "Off line testing (periodically)",
      "Pressure & Vacuum Cycle Test",
      "Vacuum Holding test",
      "Hydro pressure Test",
      "Impulse Cycle Test",
      "Venting Tip angle Test",
      "Slosh Test ( Half Full & Full)",
      "Salt spray Test With Chamber Size (1400 X 800 X 1000)",
          ]
  },

  {
    title: 'Testing facility for Spoke Wheel Rim',
    image: image5,
    description: [
      "Run-out Test",
      "CASS Test",
      "Load Test",
      "Profile Test",
      "Weld Strength Test"
    ]
  },

];
const Testing = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrentIndex((prevIndex) => 
  //         prevIndex === contents.length - 1 ? 0 : prevIndex + 1
  //       );
  //     }, 4000); // Change slide every 4 seconds

  //     return () => clearInterval(interval);
  //   }, [contents.length]);

  const nextSlide = () => {
    setCurrentIndex(currentIndex === contents.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? contents.length - 1 : currentIndex - 1);
  };

  // Function to calculate dynamic spacing based on content length
  const getDynamicSpacing = (contentLength) => {
    if (contentLength <= 3) return 'pb-4 sm:pb-5 md:pb-6'; // Short content
    if (contentLength <= 6) return 'pb-3 sm:pb-4 md:pb-5'; // Medium content  
    if (contentLength <= 8) return 'pb-2 sm:pb-3 md:pb-4';  // Long content
    return 'pb-1 sm:pb-2 md:pb-3'; // Very long content
  };

  // Get current card's content length
  const currentContentLength = contents[currentIndex]?.description.length || 0;


  return (
    <div className={`relative min-h-screen pt-10 w-full max-w-7xl mx-auto rounded-2xl overflow-hidden transition-all duration-500 ${getDynamicSpacing(currentContentLength)}`}>

      <div className="text-center flex flex-col items-center justify-center px-4">
        <h1 className="text-2xl md:text-[40px] font-medium text-[#141313]">Testing & Facilities Lab</h1>
        <p className="md:text-base leading-[20px] text-xs md:max-w-2xl w-[90%] text-[#82848A] mt-4">
          MAIL’s advanced Standard Room houses cutting-edge testing and
          measuring instruments. Our metallurgical and chemical labs ensure
          precise, routine, and periodic testing, guaranteeing unmatched quality
          and reliability.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative overflow-hidden mt-10 w-full">
        {/* Slides Container */}

        <div
          className="flex transition-transform duration-500 ease-in-out w-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {contents.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="rounded-lg p-4 sm:p-6 lg:p-8 mx-2 sm:mx-4 relative">
                {/* Title */}
                <h2 className="text-xl sm:text-2xl font-medium text-[#ED1C24] mb-4 sm:mb-6 text-start">
                  {item.title}
                </h2>

                {/* Mobile First Layout */}
                <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
                  {/* Image Section */}
                  <div className="w-full lg:w-[600px] h-[200px] sm:h-[250px] md:h-[320px] lg:h-[480px] flex-shrink-0 order-1 lg:order-1">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-2xl sm:rounded-3xl shadow-md"
                    />
                  </div>

                  {/* Description Section */}
                  <div className="flex-1 flex items-start order-2 lg:order-2 min-w-0">
                    {item.title === 'Specialized Testing facilities & Endurance Testing' ? (
                      // No bullet points for Specialized Testing
                      <div className="w-full">
                        {item.description.map((desc, i) => (
                          <p key={i} className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed break-words mb-2 sm:mb-3">
                            {desc}
                          </p>
                        ))}
                      </div>
                    ) : (
                      // Bullet points for all other sections with properly aligned bullets
                      <ul className="space-y-2 sm:space-y-3 w-full">
                        {item.description.map((desc, i) => (
                          <li key={i} className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed break-words flex items-start">
                            <span className="text-gray-500 mr-3 mt-1 flex-shrink-0">•</span>
                            <span className="flex-1">{desc}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Navigation Buttons - Inside each card */}
                <div className="flex justify-end gap-2 mt-6 sm:mt-8">
                  {/* Previous button - only show if not on first card */}
                  {currentIndex > 0 && (
                    <button
                      onClick={prevSlide}
                      className="bg-[#FF0000] hover:bg-[#ff0000e5] text-white rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200 hover:scale-110 disabled:opacity-50"
                      aria-label="Previous slide"
                    >
                      <ArrowLeft size={16} className="sm:hidden" />
                      <ArrowLeft size={20} className="hidden sm:block lg:hidden" />
                      <ArrowLeft size={24} className="hidden lg:block" />
                    </button>
                  )}

                  {/* Next button - only show if not on last card */}
                  {currentIndex < contents.length - 1 && (
                    <button
                      onClick={nextSlide}
                      className="bg-[#FF0000] hover:bg-[#ff0000e5] text-white rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200 hover:scale-110 disabled:opacity-50"
                      aria-label="Next slide"
                    >
                      <ArrowRight size={16} className="sm:hidden" />
                      <ArrowRight size={20} className="hidden sm:block lg:hidden" />
                      <ArrowRight size={24} className="hidden lg:block" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testing
