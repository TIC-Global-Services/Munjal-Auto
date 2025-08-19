import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const BoardOfDirectors = () => {
  const directors = [
    {
      id: 1,
      name: "Mr. Sudhir Kumar Munjal",
      position: "Chairman & Managing Director",
      description:
        "Mr. Sudhir Kumar Munjal is a visionary entrepreneur with over 46 years of experience in the bicycle, automotive, and engineering industries. He served as Director from 1991 to 1993, became Managing Director in 1993, and Chairman & Managing Director in 2015. He successfully led the company’s strategic shift from bicycle manufacturing to becoming a leading auto components manufacturer in India, fostering a culture of performance, teamwork, and innovation.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Mrs. Anju Munjal",
      position: "Executive Director",
      description:
        "Mrs. Anju Munjal has over 30 years of experience in the bicycle, automotive, and engineering sectors. She played a pivotal role in the company's revival as Chief Executive and has been serving as Whole-time Director since 1999. Her leadership has contributed significantly to Munjal Auto's growth into one of India's fastest-growing auto component manufacturers.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Mr. Anuj Munjal",
      position: "Executive Director",
      description:
        "Mr. Anuj Munjal holds an MBA in Finance and Marketing from Northeastern University, Boston (USA), and brings over 17 years of experience across marketing, finance, IT, administration, and operations. Formerly Chief Executive of Hero Cycles' CR Division, he now oversees day-to-day operations at Munjal Auto as Whole-time Director, driving operational excellence and strategic growth.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "Mrs. Avi Kersi Sabavala",
      position: "Director",
      description:
        "Mrs. Avi Sabavala is a postgraduate in Social Sciences, Law, and Management, and a reputed corporate trainer with extensive experience in industry-focused skill development. She has served as President of Baroda Management Association and Vadodara Chamber of Commerce & Industry. A governing council member of AIMA, she continues to contribute to industry leadership and business excellence.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=face",
    },
    {
      id: 5,
      name: "Mr. Atul Haribhai Patel",
      position: "Independent Director",
      description:
        "Mr. Atul Haribhai Patel is a Textile Engineering graduate and a dynamic industrialist with deep experience in specialty chemicals. He currently serves as Managing Director of Tarak Chemicals Limited, leveraging his strategic vision and business acumen to support Munjal Auto's governance and growth.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=600&fit=crop&crop=face",
    },
    {
      id: 6,
      name: "Mr. Sunil Chinubhai Vakil",
      position: "Independent Director",
      description:
        "A Chartered Accountant from ICAI, Mr. Sunil Vakil brings over 40 years of expertise in corporate finance and strategy. He has advised leading corporates and multinationals and has run a successful independent consultancy for more than two decades, offering deep financial insights to Munjal Auto's board.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=600&fit=crop&crop=face",
    },
    {
      id: 7,
      name: "Mr. Sameer Subhash Khera",
      position: "Independent Director",
      description:
        "Mr. Sameer Khera is a Mechanical Engineer with a post-graduate degree in Manufacturing Management from SPJIMR, Mumbai. With over 30 years of experience in strategy, operations, and international business, he currently serves as Managing Director of SEE Linkages and Whole-time Director at Eclipse Global. He is also a founder trustee of the SEE Foundation, an organization dedicated to supporting education and healthcare initiatives that empower girls and promote gender equality.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop&crop=face",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === directors.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  }, [directors.length, isTransitioning]);

  const goToPrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? directors.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  }, [directors.length, isTransitioning]);

  const goToSlide = useCallback((index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [currentIndex, isTransitioning]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, goToNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          goToPrev();
          break;
        case 'ArrowRight':
          event.preventDefault();
          goToNext();
          break;
        case ' ':
          event.preventDefault();
          setIsAutoPlaying(!isAutoPlaying);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev, isAutoPlaying]);

  const getVisibleDirectors = () => {
    const total = directors.length;
    const indices = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + total) % total;
      indices.push(index);
    }
    return indices.map((index, i) => ({
      ...directors[index],
      relativePosition: i - 2, // -2 to 2
    }));
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <div id='board-directors' className="w-full bg-gradient-to-br from-slate-50 to-slate-100 py-12 lg:py-20">
      {/* Desktop Carousel Version */}
      <div className="hidden lg:block">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col gap-8">
            {/* Header */}
            <div className="text-center space-y-4">
              <h1 className="text-5xl lg:text-6xl font-light text-slate-900">
                Board of <span className="text-red-600 font-semibold">Directors</span>
              </h1>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Meet our distinguished board members who guide our vision and drive strategic excellence
              </p>
            </div>

            {/* Carousel */}
            <div 
              className="relative overflow-hidden py-8"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              role="region"
              aria-label="Board of Directors Carousel"
            >
              <div className="flex justify-center items-center gap-6 px-20">
                {getVisibleDirectors().map((director) => {
                  const isCenter = director.relativePosition === 0;
                  const scale = isCenter ? 1.1 : Math.max(0.7, 1 - Math.abs(director.relativePosition) * 0.15);
                  const opacity = Math.max(0.4, 1 - Math.abs(director.relativePosition) * 0.25);
                  const blur = Math.abs(director.relativePosition) > 0 ? 'blur-sm' : '';
                  
                  return (
                    <div
                      key={`${director.id}-${currentIndex}`}
                      className={`relative overflow-hidden rounded-2xl shadow-2xl bg-white transition-all duration-500 ease-out cursor-pointer hover:shadow-3xl ${
                        isCenter ? 'w-80 h-[520px] z-20' : 'w-64 h-[420px] z-10'
                      } ${blur}`}
                      style={{
                        transform: `scale(${scale})`,
                        opacity,
                      }}
                      onClick={() => !isCenter && goToSlide(directors.findIndex(d => d.id === director.id))}
                      role="button"
                      tabIndex={isCenter ? 0 : -1}
                      aria-label={`${director.name}, ${director.position}`}
                    >
                      <div className="relative h-full group">
                        <img
                          src={director.image}
                          alt={director.name}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <div className={`transition-all duration-500 ${isCenter ? 'opacity-100 translate-y-0' : 'opacity-80 translate-y-2'}`}>
                            <h3 className="text-xl font-bold mb-1 leading-tight">
                              {director.name}
                            </h3>
                            <p className="text-red-400 font-medium mb-3">
                              {director.position}
                            </p>
                            {isCenter && (
                              <p className="text-sm text-slate-200 leading-relaxed line-clamp-6">
                                {director.description}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Hover overlay for non-center cards */}
                        {!isCenter && (
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                              Click to view
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Navigation buttons */}
              <button
                onClick={goToPrev}
                disabled={isTransitioning}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-slate-800 p-4 rounded-full hover:bg-white hover:scale-110 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed z-30"
                aria-label="Previous director"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                onClick={goToNext}
                disabled={isTransitioning}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-slate-800 p-4 rounded-full hover:bg-white hover:scale-110 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed z-30"
                aria-label="Next director"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Controls */}
            <div className="flex justify-center items-center gap-6">
              {/* Dots */}
              <div className="flex space-x-3">
                {directors.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    disabled={isTransitioning}
                    className={`w-3 h-3 rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
                      index === currentIndex
                        ? "bg-red-600 scale-125 shadow-lg"
                        : "bg-slate-300 hover:bg-slate-400 hover:scale-110"
                    }`}
                    aria-label={`Go to director ${index + 1}`}
                  />
                ))}
              </div>

              {/* Auto-play control */}
              
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Carousel Version */}
      <div className="block lg:hidden">
        <div className="w-full px-4 sm:px-6 py-8 sm:py-12">
          <div className="text-center mb-8 space-y-3">
            <h1 className="text-3xl sm:text-4xl font-light text-slate-900">
              Board of <span className="text-red-600 font-semibold">Directors</span>
            </h1>
            <p className="text-slate-600 text-base">
              Leadership that drives our success
            </p>
          </div>
          
          <div 
            className="relative max-w-md mx-auto"
            onTouchStart={handleMouseEnter}
            onTouchEnd={handleMouseLeave}
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-72 sm:h-80">
                <img
                  src={directors[currentIndex].image}
                  alt={directors[currentIndex].name}
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    isTransitioning ? 'scale-105 opacity-75' : 'scale-100 opacity-100'
                  }`}
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Mobile navigation buttons */}
                <button
                  onClick={goToPrev}
                  disabled={isTransitioning}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-slate-800 p-3 rounded-full hover:bg-white transition-all duration-200 shadow-lg disabled:opacity-50"
                  aria-label="Previous director"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <button
                  onClick={goToNext}
                  disabled={isTransitioning}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-slate-800 p-3 rounded-full hover:bg-white transition-all duration-200 shadow-lg disabled:opacity-50"
                  aria-label="Next director"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Auto-play indicator */}
               
              </div>
              
              <div className="p-6">
                <div className={`transition-all duration-300 ${
                  isTransitioning ? 'opacity-75 translate-y-2' : 'opacity-100 translate-y-0'
                }`}>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {directors[currentIndex].name}
                  </h3>
                  <p className="text-red-600 font-medium mb-4">
                    {directors[currentIndex].position}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {directors[currentIndex].description}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Mobile dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {directors.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  disabled={isTransitioning}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-red-600 scale-125"
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to director ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardOfDirectors;