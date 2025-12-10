import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import strategyImg from '../../assets/Electronics/strategy-elec.png'
import coreCompImg from '../../assets/Electronics/corecomp-1.jpg'
import industry1 from '../../assets/Electronics/industry1.jpg'
import industry2 from '../../assets/Electronics/industry2.png'
import industry3 from '../../assets/Electronics/industry3.jpg'
import industry4 from '../../assets/Electronics/industry4.png'
import whyUsImg from '../../assets/Electronics/whyus-elec.png'
import teamImg from '../../assets/Electronics/teamimg-elec.png'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const ElectronicsContent = () => {
  const [currentCard, setCurrentCard] = useState(0)

  const competencies = [
    {
      title: 'Embedded System Design & Development',
      image: coreCompImg,
      points: [
        'Microcontroller-based systems',
        'ARM Cortex M4, PIC, AVR, and STM32 platforms',
        'Bare-metal and RTOS-based solutions',
        'Programmable Logic- CPLD, FPGA integration',
        'Custom product development',
        'Cross-functional team collaboration',
      ],
    },
    {
      title: 'PCB Design & Manufacturing',
      image: coreCompImg,
      points: [
        'Multi-layer PCB design',
        'High-speed signal integrity',
        'EMI/EMC compliance',
        'Prototype to production',
        'Component sourcing',
        'Assembly and testing',
      ],
    },
    {
      title: 'IoT & Connectivity Solutions',
      image: coreCompImg,
      points: [
        'Wireless communication protocols',
        'Cloud integration',
        'Data analytics platforms',
        'Remote monitoring systems',
        'Edge computing solutions',
        'Secure data transmission',
      ],
    },
    {
      title: 'Testing & Validation',
      image: coreCompImg,
      points: [
        'Functional testing',
        'Environmental testing',
        'Compliance certification',
        'Reliability testing',
        'Performance benchmarking',
        'Quality assurance',
      ],
    },
    {
      title: 'Power Management Systems',
      image: coreCompImg,
      points: [
        'Battery management systems',
        'Energy optimization',
        'Power conversion circuits',
        'Thermal management',
        'Fast charging solutions',
        'Low-power design',
      ],
    },
    {
      title: 'Software Development',
      image: coreCompImg,
      points: [
        'Firmware development',
        'Device drivers',
        'Application software',
        'Bootloader development',
        'OTA updates',
        'Version control & CI/CD',
      ],
    },
  ]

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % competencies.length)
  }

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + competencies.length) % competencies.length)
  }
  return (
    <div className="min-h-screen bg-[#fafafa] py-6 sm:py-8 md:py-12 lg:py-16">
      <div className="w-[94%] max-w-7xl mx-auto">
        {/* Main Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6 sm:gap-8 lg:gap-12 items-start px-4 sm:px-6 md:px-8 lg:px-10"
        >
          {/* Left Side - Heading */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-[36px] font-[400] leading-tight">
              Munjal Auto
              <br />
              <span className="text-[#ED1C24]">Electronics Division</span>
            </h2>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 max-gap-4xl">
            {/* Paragraphs */}
            <p className="text-base md:text-lg lg:text-xl xl:text-[20px] font-[400] leading-relaxed text-gray-700">
              Established in 2021, the Munjal Auto Electronics Division (MAED) leverages
              over four decades of Munjal Auto's precision engineering expertise to
              deliver advanced embedded solutions for automotive, railways, defence,
              consumer electronics, and industrial automation.
            </p>
            
            <p className="text-base md:text-lg lg:text-xl xl:text-[20px] font-[400] leading-relaxed text-gray-700">
              We bridge the gap between hardware and software, creating robust,
              scalable, and energy-efficient systems. With expert engineers, cutting-edge
              tools, and a focus on quality, MAED is set to take challenges of
              customised embedded system solutions, design and development apart
              from being trusted manufacturing partner for the world.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-3 pt-4">
              <li className="flex items-start gap-2 text-base md:text-lg lg:text-xl xl:text-[20px] font-[400] leading-relaxed text-gray-600">
                <span className="text-[#ED1C24] mt-1">•</span>
                <span>Advanced facility for high-precision electronics.</span>
              </li>
              <li className="flex items-start gap-2 text-base md:text-lg lg:text-xl xl:text-[20px] font-[400] leading-relaxed text-gray-600">
                <span className="text-[#ED1C24] mt-1">•</span>
                <span>ISO 9001 Certified with zero-defect focus.</span>
              </li>
              <li className="flex items-start gap-2 text-base md:text-lg lg:text-xl xl:text-[20px] font-[400] leading-relaxed text-gray-600">
                <span className="text-[#ED1C24] mt-1">•</span>
                <span>100% Compliance with international quality and safety standards</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Strategy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 sm:mt-16 md:mt-20 px-4 sm:px-6 md:px-8 lg:px-10"
        >
          <div className="bg-[#F5F5F5] rounded-[14px] overflow-hidden min-h-[300px] sm:min-h-[350px]">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-0 h-full">
              {/* Left Side - Image */}
              <div className="h-full py-6 sm:py-8 md:py-10 px-4 sm:px-6 flex items-center">
                <div className="w-full overflow-hidden">
                  <img
                    src={strategyImg}
                    alt="Strategy"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="py-8 sm:py-12 md:py-16 px-6 sm:px-8 md:px-12 flex flex-col justify-center">
                <h3 className="text-[#ED1C24] text-2xl sm:text-3xl md:text-[36px] font-[500] leading-tight sm:leading-[51px] mb-4 sm:mb-6">
                  Strategy
                </h3>
                <p className="text-base sm:text-lg md:text-[20px] font-[400] leading-relaxed sm:leading-[30px] text-gray-700">
                  To be a recognized leader in embedded technology, driving
                  innovation through intelligent design and seamless hardware-
                  software integration.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core Competencies Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 sm:mt-16 md:mt-20 px-4 sm:px-6 md:px-8 lg:px-10"
        >
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCard}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="bg-[#F5F5F5] rounded-[14px] overflow-hidden min-h-[300px] sm:min-h-[350px]"
              >
                {/* Core Competencies Title */}
                <div className="px-4 sm:px-6 md:px-8 lg:px-10 pt-6 sm:pt-8">
                  <h2 className="text-2xl sm:text-3xl md:text-[36px] font-[600]">Core Competencies</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1.5fr] gap-0 h-full pt-4">
                  <div className="h-full py-4 sm:py-6 px-4 sm:px-6 flex items-start">
                    <div className="w-full overflow-hidden">
                      <img
                        src={competencies[currentCard].image}
                        alt={competencies[currentCard].title}
                        className="w-full h-auto object-cover scale-110"
                      />
                    </div>
                  </div>
                  <div className="py-4 sm:py-6 px-6 sm:px-8 md:px-12 flex flex-col justify-start relative">
                    <h3 className="text-[#ED1C24] text-xl sm:text-2xl md:text-[26px] font-[600] leading-tight sm:leading-[34px] mb-3 sm:mb-4">
                      {competencies[currentCard].title}
                    </h3>
                    <ul className="space-y-1 sm:space-y-2 mb-16 sm:mb-20">
                      {competencies[currentCard].points.map((point, index) => (
                        <li key={index} className="text-sm sm:text-base md:text-[16px] font-[400] leading-relaxed sm:leading-[34px] text-gray-600">
                          • {point}
                        </li>
                      ))}
                    </ul>
                    
                    {/* Navigation Buttons */}
                    <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 flex gap-2 sm:gap-3">
                      <button
                        onClick={prevCard}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#ED1C24] text-white flex items-center justify-center hover:bg-[#c41519] transition-colors shadow-lg"
                        aria-label="Previous card"
                      >
                        <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
                      </button>
                      <button
                        onClick={nextCard}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#ED1C24] text-white flex items-center justify-center hover:bg-[#c41519] transition-colors shadow-lg"
                        aria-label="Next card"
                      >
                        <ChevronRight size={20} className="sm:w-6 sm:h-6" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Industries Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 sm:mt-16 md:mt-20 px-4 sm:px-6 md:px-8 lg:px-10"
        >
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-[36px] font-[500]">
              Industries we Serve
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Industry 1 - Automotive */}
            <div className="bg-transparent">
              <div className="w-full aspect-[630/400] overflow-hidden rounded-[14px]">
                <img
                  src={industry1}
                  alt="Automotive"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-4 sm:pt-6">
                <h3 className="text-[#ED1C24] text-xl sm:text-2xl md:text-[28px] font-[500] leading-tight sm:leading-[34px] mb-2">
                  Automotive
                </h3>
                <p className="text-base sm:text-lg md:text-[20px] font-[400] leading-relaxed sm:leading-[34px] text-gray-600">
                  Intelligent vehicle systems, IoT-enabled components.
                </p>
              </div>
            </div>

            {/* Industry 2 - Railways */}
            <div className="bg-transparent">
              <div className="w-full aspect-[630/400] overflow-hidden rounded-[14px]">
                <img
                  src={industry2}
                  alt="Railways"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-4 sm:pt-6">
                <h3 className="text-[#ED1C24] text-xl sm:text-2xl md:text-[28px] font-[500] leading-tight sm:leading-[34px] mb-2">
                  Railways
                </h3>
                <p className="text-base sm:text-lg md:text-[20px] font-[400] leading-relaxed sm:leading-[34px] text-gray-600">
                  Safety-certified control systems.
                </p>
              </div>
            </div>

            {/* Industry 3 - Industrial Automation */}
            <div className="bg-transparent">
              <div className="w-full aspect-[630/400] overflow-hidden rounded-[14px]">
                <img
                  src={industry3}
                  alt="Industrial Automation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-4 sm:pt-6">
                <h3 className="text-[#ED1C24] text-xl sm:text-2xl md:text-[28px] font-[500] leading-tight sm:leading-[34px] mb-2">
                  Industrial Automation
                </h3>
                <p className="text-base sm:text-lg md:text-[20px] font-[400] leading-relaxed sm:leading-[34px] text-gray-600">
                  Smart monitoring, control, and automation solutions.
                </p>
              </div>
            </div>

            {/* Industry 4 - Defence */}
            <div className="bg-transparent">
              <div className="w-full aspect-[630/400] overflow-hidden rounded-[14px]">
                <img
                  src={industry4}
                  alt="Defence"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-4 sm:pt-6">
                <h3 className="text-[#ED1C24] text-xl sm:text-2xl md:text-[28px] font-[500] leading-tight sm:leading-[34px] mb-2">
                  Defence
                </h3>
                <p className="text-base sm:text-lg md:text-[20px] font-[400] leading-relaxed sm:leading-[34px] text-gray-600">
                  High-reliability electronics for mission-critical applications.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Why Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-16 sm:mt-20 md:mt-24 lg:mt-32 px-4 sm:px-6 md:px-8 lg:px-10"
        >
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-[36px] font-[600]">
              Why <span className="text-[#ED1C24]">Us</span> ?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-32 items-center">
            {/* Left Side - Image */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="w-full max-w-[629px] aspect-[629/400] overflow-hidden rounded-[14px]">
                <img
                  src={whyUsImg}
                  alt="Why Us"
                  className="w-full h-full object-cover pointer-events-none select-none"
                  style={{ touchAction: 'none', userSelect: 'none' }}
                  draggable={false}
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-4 sm:space-y-5 order-1 lg:order-2">
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start gap-2 sm:gap-3 text-base sm:text-lg md:text-[20px] font-[400] leading-relaxed sm:leading-[30px] text-[#82848A]">
                  <span className="text-[#ED1C24] mt-1 flex-shrink-0">•</span>
                  <span>Experienced team with diverse technical expertise.</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 text-base sm:text-lg md:text-[20px] font-[400] leading-relaxed sm:leading-[30px] text-[#82848A]">
                  <span className="text-[#ED1C24] mt-1 flex-shrink-0">•</span>
                  <span>Rapid development cycles using agile methodologies.</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 text-base sm:text-lg md:text-[20px] font-[400] leading-relaxed sm:leading-[30px] text-[#82848A]">
                  <span className="text-[#ED1C24] mt-1 flex-shrink-0">•</span>
                  <span>Scalable and future-proof electronics solutions.</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 text-base sm:text-lg md:text-[20px] font-[400] leading-relaxed sm:leading-[30px] text-[#82848A]">
                  <span className="text-[#ED1C24] mt-1 flex-shrink-0">•</span>
                  <span>Strong financial backing for R&D and production scaling.</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Our Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-16 sm:mt-20 md:mt-24 lg:mt-32 px-4 sm:px-6 md:px-8 lg:px-10"
        >
          <div className="bg-white w-full max-w-7xl mx-auto p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 rounded-[14px]">
            <h2 className="text-2xl sm:text-3xl md:text-[36px] font-[600] mb-8 sm:mb-10 md:mb-12">Our Team</h2>
            
            <div className="space-y-8 sm:space-y-10 md:space-y-12">
              {/* Team Member 1 - Horizontal Container */}
              <div className="bg-transparent rounded-[14px] p-3 sm:p-4 md:p-6">
                <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-center lg:items-start justify-start">
                  <div className="w-full max-w-[629px] aspect-[629/400] lg:w-[629px] lg:h-[400px] rounded-[14px] relative overflow-hidden flex-shrink-0">
                    <img
                      src={teamImg}
                      alt="Mr. Kulvinder Singh Seehra"
                      className="w-full h-full object-cover"
                    />
                    {/* Red circle with P */}
                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 w-10 h-10 sm:w-12 sm:h-12 bg-[#ED1C24] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-base sm:text-lg">P</span>
                    </div>
                  </div>
                  <div className="flex-1 lg:pl-6 xl:pl-8 text-center lg:text-left">
                    <h3 className="text-xl sm:text-2xl md:text-[26px] font-[600] mb-2">Mr. Kulvinder Singh Seehra</h3>
                    <h4 className="text-[#ED1C24] text-lg sm:text-xl md:text-[20px] font-[500] mb-3 sm:mb-4">Chief Technology Officer (Electronics)</h4>
                    <p className="text-base sm:text-lg md:text-[20px] font-[400] leading-relaxed sm:leading-[30px] text-[#82848A]">
                      Embedded systems expert with over 40 years of experience in electronics and product development. He has developed many solutions for Army, Airforce, Railways, Public sectors companies viz. BEL, ECIL, ITI etc. He is a specialist in hardware-software integration and system architecture.
                    </p>
                  </div>
                </div>
              </div>

              {/* Team Member 2 - Horizontal Container (Text Left, Image Right) */}
              <div className="bg-transparent rounded-[14px] p-3 sm:p-4 md:p-6">
                <div className="flex flex-col lg:flex-row-reverse gap-6 sm:gap-8 items-center lg:items-start justify-start">
                  <div className="w-full max-w-[629px] aspect-[629/400] lg:w-[629px] lg:h-[400px] rounded-[14px] relative overflow-hidden flex-shrink-0">
                    <img
                      src={teamImg}
                      alt="Mr. Sandeep Agrgawal"
                      className="w-full h-full object-cover"
                    />
                    {/* Red circle with P */}
                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 w-10 h-10 sm:w-12 sm:h-12 bg-[#ED1C24] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-base sm:text-lg">P</span>
                    </div>
                  </div>
                  <div className="flex-1 lg:pr-6 xl:pr-8 text-center lg:text-right">
                    <h3 className="text-xl sm:text-2xl md:text-[26px] font-[600] mb-2">Mr. Sandeep Agrgawal</h3>
                    <h4 className="text-[#ED1C24] text-lg sm:text-xl md:text-[20px] font-[500] mb-3 sm:mb-4">Founder & Executive Director</h4>
                    <p className="text-base sm:text-lg md:text-[20px] font-[400] leading-relaxed sm:leading-[30px] text-[#82848A]">
                      Under his strong leadership, the organization has continued to grow in impact, operational efficiency and community engagement. He brings a vision of innovation, coupled with a commitment to excellence and service. He is leading strategic growth initiatives and overseeing the company's expansion into new markets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default ElectronicsContent
