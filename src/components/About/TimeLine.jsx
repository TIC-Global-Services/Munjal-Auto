import React, { useState, useEffect } from "react";

const TimeLine = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visiblePoints, setVisiblePoints] = useState([]);
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const timelineData = [
    {
      year: "1987",
      title: "Humble Beginnings",
      description: "Started with Gujrat Cycle in Vadodara, focusing on Export",
      position: "bottom",
    },
    {
      year: "1997",
      title: "Product Expansion & certification",
      description: [
        "Began manufactuirng exhaust systems and spoke rims for HHML",
        "Achieved QS 9000 certification",
      ],
      position: "top",
    },
    {
      year: "2006",
      title: "Diversification  & Environment progress",
      description: [
        "Entered steel rim production ",
        "Obtained EMS certification",
      ],
      position: "bottom",
    },
    {
      year: "2010",
      title: "Advamced collaboration & New Facilties",
      description: [
        "Established a techinical collaboration with Samsung Industries",
        "Began producing fuel tanks for 4-wheelers",
        "Set up a central tool room",
        "Established Bawal Plant"

      ],
      position: "top",
    },
    {
      year: "2012",
      title: "New Partnership & Certification",
      description: [
        "Started supplying Piaggio with  exhaust systems for both domestic and export markets",
        " Established Haridwar Plant",
        " Received OHSAS certification"
      ],
      position: "bottom",
    },
    {
      year: "2014",
      title: "Technical Advacanced and New Products ",
      description: [
        "Partnered with Lafranconi for E-T-E exhaust system design ",
        "Began producing BIW parts for GM India",
        "Established Dharuhera Plant"
      ],
      position: "top",
    },
    {
      year: "2018",
      title: "Strategic Growth & Acquisitiions",
      description: [
        "Entered a new phase of accelerated growth",
        "Acquired Indutch Composites to diversify into composites for the wind energy sector",
      ],
      position: "bottom",
    },
    {
      year: "2021",
      title: "Electronics Division ",
      description: [
        "Established in 2021, Munjal Auto Electronics Division (MAED)",
        "builds on over four decades of Munjal Auto’s precision engineering legacy."
      ],
      position: "top",
    },
    {
      year: "2025 & Beyond",
      title: "Progressing Towards Lightweight: Excellence & Diversification",
      description: [
        "Focused on lightweighting, R&D, and 3P engineering",
        "Striving to become the supplier of choice through quality and advanced technology Expanding into new sectors",
      ],
      position: "bottom",
    },
  ];

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1280);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
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
          setVisiblePoints((prev) => [...prev, index]);
        }, 800 + index * 300);
      });
    }
  }, [isVisible, isMobile]);

  // Mobile auto-scroll logic
  useEffect(() => {
    if (isMobile && isVisible) {
      const interval = setInterval(() => {
        setCurrentMobileIndex((prev) => {
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
      <div className="  min-h-screen w-full flex items-center justify-center p-4 px-[10%] mb-40">
        <div className="relative w-full max-w-7xl ">
          {/* Timeline Container */}
          <div className="relative h-96 flex items-center">
            {/* Main Horizontal Line */}
            <div className="absolute bottom-10 left-0 w-full h-1 bg-gray-600 opacity-30 rounded-full transform -translate-y-2" />

            {/* Animated Horizontal Line */}
            <div
              className="absolute bottom-10 left-0 h-1 bg-gradient-to-r bg-[#ED1C24] rounded-full transform -translate-y-1/2 -translate-x-10 transition-all duration-2000 ease-out"
              style={{
                width: isVisible ? "110%" : "0%",
                transitionDelay: "300ms",
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
                      item.position === "bottom" ? "bottom-5" : "top-5"
                    } ${
                      visiblePoints.includes(index)
                        ? "opacity-100 translate-y-0"
                        : `opacity-0 ${
                            item.position === "top"
                              ? "translate-y-2"
                              : "-translate-y-2"
                          }`
                    }`}
                    style={{ transitionDelay: `${200 + index * 100}ms` }}
                  >
                    <div className="text-white font-bold text-lg text-center whitespace-nowrap">
                      {item.year}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-700 ${
                      item.position === "top" ? "top-[50px]" : "bottom-[50px]"
                    } ${
                      visiblePoints.includes(index)
                        ? "opacity-100 translate-y-0"
                        : `opacity-0 ${
                            item.position === "top"
                              ? "translate-y-8"
                              : "-translate-y-8"
                          }`
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                 <div
  className="text-center px-6 py-4 rounded-xl w-[200px] mx-auto group"
  style={{
    backdropFilter: "blur(2px)",
    background: "rgba(0, 0, 0, 0.3)",
    border: "2.5px solid rgba(192, 177, 177, 0.2)",
  }}
>
  <p className="text-[#FFFCFC] font-bold text-[10px] leading-relaxed">
    {item.title}
  </p>
  <p className="text-white text-[10px] leading-[11px] tracking-[0%] mt-1 overflow-hidden max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out">
    {item.description}
  </p>
</div>



                  </div>

                  {/* Triangle Pointer */}
                  <div
                    className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-500 ${
                      item.position === "top" ? "top-3" : "bottom-3"
                    } ${
                      visiblePoints.includes(index)
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                    style={{
                      transitionDelay: `${500 + index * 100}ms`,
                      width: 0,
                      height: 0,
                      borderLeft: "6px solid transparent",
                      borderRight: "6px solid transparent",
                      ...(item.position === "top"
                        ? { borderBottom: "6px solid #ED1C24" }
                        : { borderTop: "6px solid #ED1C24" }),
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
              width: isVisible ? "100%" : "0%",
              transitionDelay: "300ms",
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
                borderTop: "6px solid #ED1C24",
              }}
            />
          </div>

  
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
