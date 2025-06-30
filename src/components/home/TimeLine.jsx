import React, { useState, useEffect } from 'react';

const TimeLine = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visiblePoints, setVisiblePoints] = useState([]);
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const timelineData = [
    {
      year: "1987",
      description: "Humble beginning with Gujrat Cycle in Vadodara for Export",
      position: "top"
    },
    {
      year: "1997",
      description: "Product Expansion & certification",
      position: "bottom"
    },
    {
      year: "2006",
      description: "Diversification  & Environment progress",
      position: "top"
    },
    {
      year: "2010",
      description: "Advamced collaboration & New Facilties",
      position: "bottom"
    },
    {
      year: "2012",
      description: "New Partnership & Certification",
      position: "top"
    },
    {
      year: "2014",
      description: "Technical Advacanced and New Products ",
      position: "bottom"
    },
    {
        year: "2015",
        description: "New Partnership & Certification",
        position: "top"
      },
      {
        year: "2016",
        description: "Technical Advacanced and New Products  ",
        position: "bottom"
      },
      {
        year: "2025",
        description: "New Partnership & Certification ",
        position: "top"
      }
  ];

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1280);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Desktop animation logic (unchanged)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible && !isMobile) {
      timelineData.forEach((_, index) => {
        const timer = setTimeout(() => {
          setVisiblePoints(prev => [...prev, index]);
        }, 800 + (index * 300));
      });
    }
  }, [isVisible, isMobile]);

  // Mobile auto-scroll logic
  useEffect(() => {
    if (isMobile && isVisible) {
      const interval = setInterval(() => {
        setCurrentMobileIndex(prev => {
          if (prev < timelineData.length - 1) {
            return prev + 1;
          } else {
            return 0; // Reset to beginning
          }
        });
      }, 3000); // Change every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isMobile, isVisible, timelineData.length]);

  // Desktop version (unchanged)
  if (!isMobile) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center p-4 px-40">
        <div className="relative w-full max-w-7xl min-w-[800px]">
          
          {/* Timeline Container */}
          <div className="relative h-96 flex items-center">
            
            {/* Main Horizontal Line */}
            <div className="absolute bottom-10 left-0 w-full h-1 bg-gray-600 opacity-30 rounded-full transform -translate-y-1/2" />
            
            {/* Animated Horizontal Line */}
            <div
              className="absolute bottom-10 left-0 h-1 bg-gradient-to-r bg-[#ED1C24] rounded-full transform -translate-y-1/2 transition-all duration-2000 ease-out"
              style={{
                width: isVisible ? '100%' : '0%',
                transitionDelay: '300ms',
              }}
            />

            {/* Timeline Points */}
            {timelineData.map((item, index) => {
              const leftPosition = (index / (timelineData.length - 1)) * 100;
              
              return (
                <div
                  key={index}
                  className="absolute bottom-10 transform -translate-y-1/2"
                  style={{ left: `${leftPosition}%` }}
                >
                  {/* Year Label - positioned above/below the line */}
                  <div
                    className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-700 ${
                      item.position === 'bottom' ? 'bottom-3' : 'top-3'
                    } ${
                      visiblePoints.includes(index)
                        ? 'opacity-100 translate-y-0'  
                        : `opacity-0 ${item.position === 'top' ? 'translate-y-2' : '-translate-y-2'}`
                    }`}
                    style={{ transitionDelay: `${200 + index * 100}ms` }}
                  >
                    <div className="text-[#ED1C24] font-bold text-lg text-center whitespace-nowrap">
                      {item.year}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-700 ${
                      item.position === 'top' ? 'bottom-10' : 'top-10'
                    } ${
                      visiblePoints.includes(index)
                        ? 'opacity-100 translate-y-0'
                        : `opacity-0 ${item.position === 'top' ? 'translate-y-8' : '-translate-y-8'}`
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <div
                      className="text-center px-6 py-4 rounded-xl w-64 mx-auto w-[148px]"
                      style={{
                        backdropFilter: "blur(15px)",
                        background: "rgba(0, 0, 0, 0.3)",
                        border: "2.5px solid rgba(192, 177, 177, 0.5)",
                      }}
                    >
                      <p className="text-[#FFFCFC] text-[10px] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Triangle Pointer */}
                  <div
                    className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-500 ${
                      item.position === 'bottom' ? 'top-2' : 'bottom-4'
                    } ${visiblePoints.includes(index) ? 'opacity-100' : 'opacity-0'}`}
                    style={{ 
                      transitionDelay: `${500 + index * 100}ms`,
                      width: 0,
                      height: 0,
                      borderLeft: "6px solid transparent",
                      borderRight: "6px solid transparent",
                      ...(item.position === 'bottom' 
                        ? { borderBottom: "6px solid #ED1C24" }
                        : { borderTop: "6px solid #ED1C24" }
                      )
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Mobile version with auto-scroll
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
    <div className="relative w-full max-w-sm">
      
      {/* Mobile Timeline Container */}
      <div className="relative h-96 w-full flex items-center justify-center">
        
      

        {/* Main Horizontal Line */}
        <div className="absolute bottom-10 left-0 w-full h-1 bg-gray-600 opacity-30 rounded-full transform -translate-y-1/2 " />
        
        {/* Animated Horizontal Line */}
        <div
          className="absolute bottom-10 left-0 h-1 bg-gradient-to-r bg-[#ED1C24] w-full rounded-full transform -translate-y-1/2 transition-all duration-2000 ease-out  "
          style={{
            width: isVisible ? '100%' : '0%',
            transitionDelay: '300ms',
          }}
        />

        {/* Current Point on Line */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* Year Label - below the line */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 transition-all duration-500">
            <div 
              className="text-[#ED1C24] font-bold text-xl text-center whitespace-nowrap"
              key={`year-${currentMobileIndex}`}
            >
              {timelineData[currentMobileIndex].year}
            </div>
          </div>

          {/* Content Card - above the line */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-500">
            <div
              className="text-center px-6 py-4 rounded-xl w-64 mx-auto"
              style={{
                backdropFilter: "blur(15px)",
                background: "rgba(0, 0, 0, 0.3)",
                border: "2.5px solid rgba(192, 177, 177, 0.5)",
              }}
              key={`content-${currentMobileIndex}`}
            >
              <p className="text-[#FFFCFC] text-[13px] leading-relaxed">
                {timelineData[currentMobileIndex].description}
              </p>
            </div>
          </div>

          {/* Triangle Pointer - above the line pointing down */}
          <div
            className="absolute bottom-3 left-1/2 transform -translate-x-1/2 transition-all duration-500"
            style={{ 
              width: 0,
              height: 0,
              borderLeft: "6px solid transparent",
              borderRight: "6px solid transparent",
              borderTop: "6px solid #ED1C24"
            }}
          />
        </div>

        {/* Navigation dots */}
        
      </div>
    </div>
  </div>
  );
};

export default TimeLine;