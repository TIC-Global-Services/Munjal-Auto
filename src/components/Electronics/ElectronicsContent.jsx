import React, { useState } from 'react'
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
    <div className="min-h-screen bg-[#fafafa] py-16">
      <div className="w-[94%] mx-auto">
        {/* Main Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-start px-10"
        >
          {/* Left Side - Heading */}
          <div>
            <h2 className="text-[36px] font-[400] leading-tight">
              Munjal Auto
              <br />
              <span className="text-[#ED1C24]">Electronics Division</span>
            </h2>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 max-gap-4xl">
            {/* Paragraphs */}
            <p className="text-[20px] font-[400] leading-[30px] text-gray-700">
              Established in 2021, the Munjal Auto Electronics Division (MAED) leverages
              over four decades of Munjal Auto's precision engineering expertise to
              deliver advanced embedded solutions for automotive, railways, defence,
              consumer electronics, and industrial automation.
            </p>
            
            <p className="text-[20px] font-[400] leading-[30px] text-gray-700">
              We bridge the gap between hardware and software, creating robust,
              scalable, and energy-efficient systems. With expert engineers, cutting-edge
              tools, and a focus on quality, MAED is set to take challenges of
              customised embedded system solutions, design and development apart
              from being trusted manufacturing partner for the world.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-3 pt-4">
              <li className="flex items-start gap-2 text-[20px] font-[400] leading-[30px] text-gray-600">
                <span className="text-[#ED1C24] mt-1">•</span>
                <span>Advanced facility for high-precision electronics.</span>
              </li>
              <li className="flex items-start gap-2 text-[20px] font-[400] leading-[30px] text-gray-600">
                <span className="text-[#ED1C24] mt-1">•</span>
                <span>ISO 9001 Certified with zero-defect focus.</span>
              </li>
              <li className="flex items-start gap-2 text-[20px] font-[400] leading-[30px] text-gray-600">
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
          className="mt-20 px-10"
        >
          <div className="bg-white rounded-[14px] shadow-lg overflow-hidden min-h-[350px]">
            <div className="grid md:grid-cols-[1fr_1.5fr] gap-0 h-full">
              {/* Left Side - Image */}
              <div className="h-full py-10 px-6 flex items-center">
                <div className="w-full overflow-hidden">
                  <img
                    src={strategyImg}
                    alt="Strategy"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="py-16 px-12 flex flex-col justify-center">
                <h3 className="text-[#ED1C24] text-[36px] font-[500] leading-[51px] mb-6">
                  Strategy
                </h3>
                <p className="text-[20px] font-[400] leading-[30px] text-gray-700">
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
          className="mt-20 px-10"
        >
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCard}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="bg-[#F5F5F5] rounded-[14px] shadow-lg overflow-hidden min-h-[350px]"
              >
                {/* Core Competencies Title */}
                <div className="px-10 pt-8">
                  <h2 className="text-[36px] font-[600]">Core Competencies</h2>
                </div>
                <div className="grid md:grid-cols-[1.2fr_1.5fr] gap-0 h-full pt-4">
                  <div className="h-full py-6 px-6 flex items-start">
                    <div className="w-full overflow-hidden">
                      <img
                        src={competencies[currentCard].image}
                        alt={competencies[currentCard].title}
                        className="w-full h-auto object-cover scale-110"
                      />
                    </div>
                  </div>
                  <div className="py-6 px-12 flex flex-col justify-start relative">
                    <h3 className="text-[#ED1C24] text-[26px] font-[600] leading-[34px] mb-4">
                      {competencies[currentCard].title}
                    </h3>
                    <ul className="space-y-2">
                      {competencies[currentCard].points.map((point, index) => (
                        <li key={index} className="text-[16px] font-[400] leading-[34px] text-gray-600">
                          • {point}
                        </li>
                      ))}
                    </ul>
                    
                    {/* Navigation Buttons */}
                    <div className="absolute bottom-6 right-6 flex gap-3">
                      <button
                        onClick={prevCard}
                        className="w-12 h-12 rounded-full bg-[#ED1C24] text-white flex items-center justify-center hover:bg-[#c41519] transition-colors shadow-lg"
                        aria-label="Previous card"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button
                        onClick={nextCard}
                        className="w-12 h-12 rounded-full bg-[#ED1C24] text-white flex items-center justify-center hover:bg-[#c41519] transition-colors shadow-lg"
                        aria-label="Next card"
                      >
                        <ChevronRight size={24} />
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
          className="mt-20 px-10"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Industry 1 - Automotive */}
            <div className="bg-transparent">
              <img
                src={industry1}
                alt="Automotive"
                className="w-[630px] h-[400px] object-cover rounded-[14px]"
              />
              <div className="pt-6">
                <h3 className="text-[#ED1C24] text-[28px] font-[500] leading-[34px] mb-2">
                  Automotive
                </h3>
                <p className="text-[20px] font-[400] leading-[34px] text-gray-600">
                  Intelligent vehicle systems, IoT-enabled components.
                </p>
              </div>
            </div>

            {/* Industry 2 - Railways */}
            <div className="bg-transparent">
              <img
                src={industry2}
                alt="Railways"
                className="w-[630px] h-[400px] object-cover rounded-[14px]"
              />
              <div className="pt-6">
                <h3 className="text-[#ED1C24] text-[28px] font-[500] leading-[34px] mb-2">
                  Railways
                </h3>
                <p className="text-[20px] font-[400] leading-[34px] text-gray-600">
                  Safety-certified control systems.
                </p>
              </div>
            </div>

            {/* Industry 3 - Industrial Automation */}
            <div className="bg-transparent">
              <img
                src={industry3}
                alt="Industrial Automation"
                className="w-[630px] h-[400px] object-cover rounded-[14px]"
              />
              <div className="pt-6">
                <h3 className="text-[#ED1C24] text-[28px] font-[500] leading-[34px] mb-2">
                  Industrial Automation
                </h3>
                <p className="text-[20px] font-[400] leading-[34px] text-gray-600">
                  Smart monitoring, control, and automation solutions.
                </p>
              </div>
            </div>

            {/* Industry 4 - Defence */}
            <div className="bg-transparent">
              <img
                src={industry4}
                alt="Defence"
                className="w-[630px] h-[400px] object-cover rounded-[14px]"
              />
              <div className="pt-6">
                <h3 className="text-[#ED1C24] text-[28px] font-[500] leading-[34px] mb-2">
                  Defence
                </h3>
                <p className="text-[20px] font-[400] leading-[34px] text-gray-600">
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
          className="mt-32 px-10"
        >
          <div className="text-center mb-12">
            <h2 className="text-[36px] font-[600]">
              Why <span className="text-[#ED1C24]">Us</span> ?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-[1.5fr_1fr] gap-32 items-center">
            {/* Left Side - Image */}
            <div className="flex justify-start">
              <img
                src={whyUsImg}
                alt="Why Us"
                className="w-[629px] h-[400px] object-cover rounded-[14px]"
              />
            </div>

            {/* Right Side - Content */}
            <div className="space-y-5">
              <ul className="space-y-2">
                <li className="flex items-start gap-1 text-[20px] font-[400] leading-[30px] text-[#82848A]">
                  <span className="text-[#ED1C24] mt-1">•</span>
                  <span>Experienced team with diverse technical expertise.</span>
                </li>
                <li className="flex items-start gap-1 text-[20px] font-[400] leading-[30px] text-[#82848A]">
                  <span className="text-[#ED1C24] mt-1">•</span>
                  <span>Rapid development cycles using agile methodologies.</span>
                </li>
                <li className="flex items-start gap-1 text-[20px] font-[400] leading-[30px] text-[#82848A]">
                  <span className="text-[#ED1C24] mt-1">•</span>
                  <span>Scalable and future-proof electronics solutions.</span>
                </li>
                <li className="flex items-start gap-1 text-[20px] font-[400] leading-[30px] text-[#82848A]">
                  <span className="text-[#ED1C24] mt-1">•</span>
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
          className="mt-32 px-10"
        >
          <div className="bg-white w-[1400px] h-[1000px] mx-auto p-20">
            <h2 className="text-[36px] font-[600] mb-12">Our Team</h2>
            
            <div className="space-y-12">
              {/* Team Member 1 - Horizontal Container */}
              <div className="bg-transparent rounded-[14px] p-6">
                <div className="flex gap-8 items-center justify-start">
                  <div className="w-[629px] h-[400px] rounded-[14px] relative overflow-hidden flex-shrink-0">
                    <img
                      src={teamImg}
                      alt="Mr. Kulvinder Singh Seehra"
                      className="w-full h-full object-cover"
                    />
                    {/* Red circle with P */}
                    <div className="absolute bottom-6 left-6 w-12 h-12 bg-[#ED1C24] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">P</span>
                    </div>
                  </div>
                  <div className="flex-1 pl-8">
                    <h3 className="text-[26px] font-[600] mb-2">Mr. Kulvinder Singh Seehra</h3>
                    <h4 className="text-[#ED1C24] text-[20px] font-[500] mb-4">Chief Technology Officer (Electronics)</h4>
                    <p className="text-[20px] font-[400] leading-[30px] text-[#82848A]">
                      Embedded systems expert with over 40 years of experience in electronics and product development. He has developed many solutions for Army, Airforce, Railways, Public sectors companies viz. BEL, ECIL, ITI etc. He is a specialist in hardware-software integration and system architecture.
                    </p>
                  </div>
                </div>
              </div>

              {/* Team Member 2 - Horizontal Container (Text Left, Image Right) */}
              <div className="bg-transparent rounded-[14px] p-6">
                <div className="flex gap-8 items-center justify-end">
                  <div className="flex-1 pr-8 text-right">
                    <h3 className="text-[26px] font-[600] mb-2">Mr. Sandeep Agrgawal</h3>
                    <h4 className="text-[#ED1C24] text-[20px] font-[500] mb-4">Founder & Executive Director</h4>
                    <p className="text-[20px] font-[400] leading-[30px] text-[#82848A]">
                      Under his strong leadership, the organization has continued to grow in impact, operational efficiency and community engagement. He brings a vision of innovation, coupled with a commitment to excellence and service. He is leading strategic growth initiatives and overseeing the company's expansion into new markets.
                    </p>
                  </div>
                  <div className="w-[629px] h-[400px] rounded-[14px] relative overflow-hidden flex-shrink-0">
                    <img
                      src={teamImg}
                      alt="Mr. Sandeep Agrgawal"
                      className="w-full h-full object-cover"
                    />
                    {/* Red circle with P */}
                    <div className="absolute bottom-6 left-6 w-12 h-12 bg-[#ED1C24] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">P</span>
                    </div>
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
