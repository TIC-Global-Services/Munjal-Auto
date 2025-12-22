import innovationimg from '../../assets/slider/innovationimg.jpg'

const innovation = () => {
  const inovations=[
    "Encouraging new ideas – Every employee can contribute to innovation.",
      "Skill development – Opportunities to learn and grow at all levels.",
      "Work ownership – Involvement in important decisions fosters accountability.",
      "Team spirit – Motivational programs and outdoor gatherings strengthen collaboration and harmony"
  ]
  return (
    <div className='md:px-10 lg:px-20 lg:mx-10 py-4 px-3'>
         <div className="relative h-80 md:h-80 lg:h-96">
                <img
                    src={innovationimg}
                    alt="inductch"
                    className="w-full h-full object-cover rounded-[20px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-transparent rounded-[20px] flex items-start px-4 p-2 md:p-4 lg:p-8">
                      <div className="text-white w-[328px] max-h-[400px] sm:w-3/4 md:w-2/3 lg:w-full">
                        <h3 className="text-base md:text-lg lg:text-xl font-normal lg:font-semibold mb-2 md:mb-4 text-[#FF0000]">
                          Innovation & People
                        </h3>
                        <div className=" md:space-y-2">
                          <div className="flex items-center">
                           <h3 className="text-xs sm:text-sm md:text-base">Our people drive our success:</h3>
                          </div>
                         <ul className="text-white text-[16px] space-y-2 lg:translate-x-2">
              {inovations.map((point, index) => (
                <li
                  key={index}
                  className="flex font-light  items-start gap-1 text-sm text-muted-foreground"
                >
                  <span className="text-muted-foreground mt-0.5">•</span>
                  <span className="lg:text-[16px] text-[11px] leading-[20px]">{point}</span>
                </li>
              ))}
            </ul>
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