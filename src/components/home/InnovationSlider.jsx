import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import slide1 from "../../assets/slider/100 cc.png";
import slide2 from "../../assets/slider/125 cc scooter.png";
import slide3 from "../../assets/slider/125 cc.png";
import slide4 from "../../assets/slider/2w Fender.png";
import slide7 from "../../assets/slider/CNG Cradle.png";

const images = [slide1, slide2, slide3, slide4, slide7];
const captions = [
  "100 cc",
  "CNG Cradle",
  "Fenders for 2W",
  "125 CC",
  "125 CC (Scooter)",
];
const smallCaptions = [
  "Unmatched strength and precision\nto ensure automotive safety",
  "Securely holds cylinders in vehicles\n for safe, stable transport.",
  "Protective covers that shield tires\n to keep riders and bikes clean and dry.",
  "Durable fenders for\ntwo-wheeler protection",
  "Innovative CNG storage\nfor eco-friendly transport",
];

const InnovationSlider = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full min-h-[300px] overflow-hidden bg-white">
      {isMobile ? <MobileImageSlider /> : <DesktopImageSlider />}
    </div>
  );
};

const MobileImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageError, setImageError] = useState(null);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleTouchEnd = (event, info) => {
    const threshold = 50;
    if (info.offset.x > threshold) {
      handlePrev();
    } else if (info.offset.x < -threshold) {
      handleNext();
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full py-6 md:py-12 px-4">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-light text-center mb-6">
        Where <span className="text-[#ED1C24] font-bold">Innovation Meets</span>
        <br />
        Engineering Excellence
      </h1>

      <div className="relative w-full max-w-[90vw] sm:max-w-md h-[30dvh]">
        <AnimatePresence initial={false}>
          <motion.img
            key={activeIndex}
            src={images[activeIndex]}
            alt={captions[activeIndex]}
            className="w-full aspect-[4/3] object-cover rounded-xl"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5 }}
            onError={() => setImageError(activeIndex)}
            loading="lazy"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleTouchEnd}
            whileDrag={{ scale: 0.95 }}
          />
        </AnimatePresence>

        {imageError === activeIndex && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-xl">
            <p className="text-red-500 text-sm">Failed to load image</p>
          </div>
        )}

        <div className=" absolute right-1/2 translate-x-1/2  -bottom-[10%] ">

        <AnimatePresence mode="wait">
          <motion.div
            className=" bg-white/80 px-2 py-1 rounded-lg font-bold text-xs sm:text-sm text-black"
            key={`caption-${activeIndex}`}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.5 }}
          >
            {captions[activeIndex]}
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            className=" text-[10px] sm:text-xs text-gray-600 bg-white/80 px-2 py-1 rounded-lg"
            key={`small-caption-${activeIndex}`}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.5 }}
          >
            {smallCaptions[activeIndex].split("\n").map((line, idx) => (
              <div key={idx} className="leading-relaxed">{line}</div>
            ))}
          </motion.div>
        </AnimatePresence>
        </div>

        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 text-gray-600 hover:bg-white transition-colors text-sm"
          aria-label="Previous slide"
        >
          {"<"}
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 text-gray-600 hover:bg-white transition-colors text-sm"
          aria-label="Next slide"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

const DesktopImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [imageError, setImageError] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        handleNext();
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isDragging]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % images.length
      );
      return updatedIndexes;
    });
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevious = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
      return updatedIndexes;
    });
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleDragEnd = (event, info) => {
    setIsDragging(false);
    const threshold = 50;
    if (info.offset.x > threshold) {
      handlePrevious();
    } else if (info.offset.x < -threshold) {
      handleNext();
    }
  };

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1.2, zIndex: 5, opacity: 1, filter: "blur(0px)" },
    left1: { x: "-100%", scale: 0.6, zIndex: 3, opacity: 0.7, filter: "blur(2px)" },
    left: { x: "-140%", scale: 0.4, zIndex: 2, opacity: 0.4, filter: "blur(4px)" },
    right: { x: "140%", scale: 0.4, zIndex: 2, opacity: 0.4, filter: "blur(4px)" },
    right1: { x: "100%", scale: 0.6, zIndex: 3, opacity: 0.7, filter: "blur(2px)" },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative w-full my-16 py-20 min-h-[80vh]">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-center mb-10">
        Where <span className="text-[#ED1C24] font-bold">Innovation Meets</span>
        <br />
        Engineering Excellence
      </h1>

      <div className="relative flex items-center justify-center h-[50vh] ">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="absolute"
            animate={positions[positionIndexes[index]]}
            variants={imageVariants}
            transition={{
              duration: isDragging ? 0.1 : 0.8,
              ease: [0.42, 0, 0.58, 1],
            }}
          >
            <motion.img
              src={image}
              alt={captions[index]}
              className={`w-[400px] sm:w-[450px] max-w-[70vw] aspect-[4/3] object-cover rounded-xl ${isDragging ? 'cursor-grabbing' : 'cursor-grab'
                }`}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={handleDragEnd}
              whileDrag={{ scale: 0.95 }}
              onError={() => setImageError(index)}
              loading="lazy"
            />
            {imageError === index && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-xl">
                <p className="text-red-500 text-sm">Failed to load image</p>
              </div>
            )}
          </motion.div>
        ))}

        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-10rem] sm:bottom-[-9rem] text-center">
          <AnimatePresence mode="wait">
            <motion.div
              className="bg-white/80 px-3 py-1.5 rounded-lg font-bold text-base sm:text-lg text-black"
              key={`caption-${activeIndex}`}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
            >
              {captions[activeIndex]}
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              className="bg-white/80 px-3 py-1.5 rounded-lg text-xs sm:text-sm text-gray-600 mt-2"
              key={`small-caption-${activeIndex}`}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
            >
              {smallCaptions[activeIndex].split("\n").map((line, idx) => (
                <div key={idx} className="leading-relaxed">{line}</div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default InnovationSlider;