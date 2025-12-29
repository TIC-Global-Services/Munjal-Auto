import { useState, useEffect, useRef } from "react"
import cer1 from "../../assets/cer1.jpeg"
import cer2 from "../../assets/cer2.jpeg"
import cer3 from "../../assets/cer3.jpeg"
import cer4 from "../../assets/cert4.png"
import cer5 from "../../assets/cert5.png"
import cer6 from "../../assets/cert-6.png"
import { ArrowLeft, ArrowRight } from 'lucide-react'

const Certification = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [currentMobileSlide, setCurrentMobileSlide] = useState(1)
    const mobileCarouselRef = useRef(null)
    const touchStartX = useRef(0)
    const touchEndX = useRef(0)

    const certificates = [
        {
            image: cer1,
            year: "2012",
            title: "Certification of ISO/TS 16949-2009"
        },
        {
            image: cer2,
            year: "",
            title: "Certification From Hero Honda Motors Limited"
        },
        {
            image: cer3,
            year: "2009",
            title: "Certification of ISO/TS 14001-2004"
        },
        {
            image: cer4,
            year: "2016",
            title: "BS OHSAS 18001:2007"
        },
        {
            image: cer5,
            year: "2018",
            title: "ISO/TS 16949:2009"
        },
        {
            image: cer6,
            year: "2020",
            title: "ISO/TS 14001:2004"
        }
    ]

    // Group certificates into slides of 3 for desktop
    const slides = []
    for (let i = 0; i < certificates.length; i += 3) {
        slides.push(certificates.slice(i, i + 3))
    }

    // Touch/Swipe handlers for mobile
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX
    }

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX
    }

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return
        
        const distance = touchStartX.current - touchEndX.current
        const isLeftSwipe = distance > 50
        const isRightSwipe = distance < -50

        if (isLeftSwipe) {
            nextMobileSlide()
        }
        if (isRightSwipe) {
            prevMobileSlide()
        }

        // Reset touch positions
        touchStartX.current = 0
        touchEndX.current = 0
    }

    // Auto-scroll functionality for desktop
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 4000) // Change slide every 4 seconds

        return () => clearInterval(interval)
    }, [slides.length])

    // Auto-scroll functionality for mobile
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMobileSlide((prev) => (prev + 1) % certificates.length)
        }, 4000) // Change slide every 4 seconds

        return () => clearInterval(interval)
    }, [certificates.length])

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    const nextMobileSlide = () => {
        setCurrentMobileSlide((prev) => (prev + 1) % certificates.length)
    }

    const prevMobileSlide = () => {
        setCurrentMobileSlide((prev) => (prev - 1 + certificates.length) % certificates.length)
    }

    return (
        <div id="quality-certification" className="max-w-6xl mx-auto mt-10 pb-10">
            <h1 className="text-2xl md:text-4xl font-medium text-[#ED1C24] text-center mb-10">Our Certification</h1>
            
            {/* Desktop Carousel */}
            <div className="hidden md:block relative">
                <div className="overflow-hidden">
                    <div 
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {slides.map((slide, slideIndex) => (
                            <div key={slideIndex} className="w-full flex-shrink-0">
                                <div className={`flex justify-center items-start gap-8 ${slide.length < 3 ? 'px-16' : ''}`}>
                                    {slide.map((cert, certIndex) => (
                                        <div key={certIndex} className="flex flex-col items-center w-full max-w-[300px] flex-shrink-0">
                                            <img 
                                                src={cert.image} 
                                                className="rounded-lg w-full h-auto object-cover" 
                                                alt={cert.title} 
                                            />
                                            <div className="text-center mt-4">
                                                {cert.year && (
                                                    <h1 className="text-[#ED1C24] text-2xl font-medium">{cert.year}</h1>
                                                )}
                                                <h2 className="mt-2 text-gray-700 text-sm leading-relaxed">{cert.title}</h2>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#ED1C24] hover:bg-[#d91820] text-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
                    aria-label="Previous slide"
                >
                    <ArrowLeft size={20} />
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#ED1C24] hover:bg-[#d91820] text-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
                    aria-label="Next slide"
                >
                    <ArrowRight size={20} />
                </button>

                {/* Slide Indicators */}
                <div className="flex justify-center mt-6 space-x-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                currentSlide === index ? 'bg-[#ED1C24]' : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Mobile Version - Carousel */}
            <div className="md:hidden relative">
                <div className="overflow-hidden">
                    <div 
                        ref={mobileCarouselRef}
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentMobileSlide * 100}%)` }}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {certificates.map((cert, index) => (
                            <div key={index} className="w-full flex-shrink-0 flex flex-col items-center justify-center px-4 min-h-[400px]">
                                <div className="flex flex-col items-center justify-center w-full">
                                    <img 
                                        src={cert.image} 
                                        className="rounded-lg w-[80%] max-w-[300px] h-auto object-cover mx-auto" 
                                        alt={cert.title} 
                                    />
                                    <div className="text-center mt-4 w-full">
                                        {cert.year && (
                                            <h1 className="text-[#ED1C24] text-2xl font-medium">{cert.year}</h1>
                                        )}
                                        <h2 className="mt-2 text-gray-700 text-sm leading-relaxed px-4">{cert.title}</h2>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Navigation Buttons */}
                {/* <button
                    onClick={prevMobileSlide}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#ED1C24] hover:bg-[#d91820] text-white rounded-full p-2 shadow-lg transition-all duration-200"
                    aria-label="Previous certificate"
                >
                    <ArrowLeft size={16} />
                </button>

                <button
                    onClick={nextMobileSlide}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#ED1C24] hover:bg-[#d91820] text-white rounded-full p-2 shadow-lg transition-all duration-200"
                    aria-label="Next certificate"
                >
                    <ArrowRight size={16} />
                </button> */}

                {/* Mobile Slide Indicators */}
                <div className="flex justify-center mt-6 space-x-2">
                    {certificates.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentMobileSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                currentMobileSlide === index ? 'bg-[#ED1C24]' : 'bg-gray-300'
                            }`}
                            aria-label={`Go to certificate ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Certification;