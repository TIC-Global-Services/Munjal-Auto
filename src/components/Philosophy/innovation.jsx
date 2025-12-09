import React from 'react'
import innovationimg from '../../assets/slider/innovationimg.jpg'

const innovation = () => {
  return (
    <div className='px-20'>
         <div className="relative h-96">
                    <img
                      src={innovationimg}
                      alt="inductch"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-2xl flex items-start p-6">
                      <div className="text-white">
                        <h3 className="text-xl font-semibold mb-4 text-[#FF0000]">
                          Innovation & People
                        </h3>
                        <div className="space-y-2">
                          <div className="flex items-center">
                           <h3>Our people drive our success:</h3>
                          </div>
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></div>
                            <span>Encouraging new ideas – Every employee can contribute to innovation..</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></div>
                            <span>Skill development – Opportunities to learn and grow at all levels.</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></div>
                            <span>Work ownership – Involvement in important decisions fosters accountability.</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></div>
                            <span>Team spirit – Motivational programs and outdoor gatherings strengthen collaboration and harmony</span>
                          </div>
                          {/* <div className="flex items-center">
                            <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></div>
                            <span>Armoured vehicles and shelters</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></div>
                            <span>Antennas</span>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
    </div>
  )
}

export default innovation