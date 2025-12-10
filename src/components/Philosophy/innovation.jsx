import innovationimg from '../../assets/slider/innovationimg.jpg'

const innovation = () => {
  return (
    <div className='px-4 md:px-10 lg:px-20 mx-3 lg:mx-10 py-4'>
         <div className="relative h-80 md:h-80 lg:h-96">
                    <img
                      src={innovationimg}
                      alt="inductch"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-2xl flex items-start p-2 md:p-4 lg:p-6">
                      <div className="text-white w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2">
                        <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-2 md:mb-4 text-[#FF0000]">
                          Innovation & People
                        </h3>
                        <div className="space-y-1 md:space-y-2">
                          <div className="flex items-center">
                           <h3 className="text-xs sm:text-sm md:text-base">Our people drive our success:</h3>
                          </div>
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-white rounded-full mr-2 md:mr-3 flex-shrink-0"></div>
                            <span className="text-xs sm:text-sm md:text-base break-words">Encouraging new ideas – Every employee can contribute to innovation..</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-white rounded-full mr-2 md:mr-3 flex-shrink-0"></div>
                            <span className="text-xs sm:text-sm md:text-base break-words">Skill development – Opportunities to learn and grow at all levels.</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-white rounded-full mr-2 md:mr-3 flex-shrink-0"></div>
                            <span className="text-xs sm:text-sm md:text-base break-words">Work ownership – Involvement in important decisions fosters accountability.</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-white rounded-full mr-2 md:mr-3 flex-shrink-0"></div>
                            <span className="text-xs sm:text-sm md:text-base break-words">Team spirit – Motivational programs and outdoor gatherings strengthen collaboration and harmony</span>
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