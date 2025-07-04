import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import slide1 from "../assets/slider/100 cc.png";
import slide2 from "../assets/slider/125 cc scooter.png";
import slider3 from "../assets/slider/125 cc.png"
import slider4 from "../assets/slider/2w Fender.png"
import slider5 from "../assets/slider/440 cc.png"
import slider6 from "../assets/slider/Battery Tray.png"
import sldier7 from "../assets/slider/CNG Cradle.png"

const images = [slide1, slide2, slider3, slider4, sldier7];
const captions = [
  "100 cc",
  "125 cc scooter",
  "125 cc ",
  "2w Fender",
  "CNG Cradle.",
];
const smallcaptions = [
  "Unmatched strength and precision\n to ensure automotive safety.",
  "First ensure automotive safety line\nSecond line",
  "Unmatched strength and precision\n to ensure automotive safety.",
  "Another first line Another second \nline ensure automotive safety",
  "More ensure automotive safety lines\nLine two here",
];

const ImageSlider = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <MobileImageSlider /> : <DesktopImageSlider />;
};

// Mobile version
const MobileImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative flex flex-col md:mt-40 items-center justify-center w-full h-full mb-[20%] overflow-hidden">
         <h1 className="text-2xl py-16 !font-[300] text-center">
        Where <span className="text-[#ED1C24] font-bold">Innovation Meets</span> <br />
        Engineering Excellence
      </h1>
      <AnimatePresence initial={false} >
        <motion.img
          key={activeIndex}
          src={images[activeIndex]}
          alt={`Slide ${activeIndex + 1}`}
          className="rounded-[16px] w-[60%] -mt-10 -ml-20 object-cover"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
      <AnimatePresence mode="wait">
          <motion.div
            className="absolute right-10 font-bold top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs text-center text-black p-2 rounded-md"
            key={`caption-${activeIndex}`}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{
              duration: 0.5,
              ease: [0.42, 0, 0.58, 1],
            }}
          >
            {captions[activeIndex]}
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            className="absolute  right-5 top-1/2 mt-4 transform -translate-x-1/2 -translate-y-1/2 text-[10px] text-center text-[#8C8989] p-2 rounded-md"
            key={`small-caption-${activeIndex}`}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{
              duration: 0.5,
              ease: [0.42, 0, 0.58, 1],
            }}
          >
            {smallcaptions[activeIndex].split("\n").map((line, idx) => (
              <div key={idx}>{line}</div>
            ))}
          </motion.div>
        </AnimatePresence>
      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-2 mt-10 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 text-black/40"
      >
        {"<"}
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 mt-10 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 text-black/40"
      >
        {">"}
      </button>

      {/* Pagination Dots */}
      {/* <div className="mt-10 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-[#930000db]" : "bg-[#aa2d2d96]"
            }`}
          ></div>
        ))}
      </div> */}
    </div>
  );
};

const DesktopImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) { // Only auto-advance if not dragging
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
    const threshold = 50; // Minimum drag distance to trigger slide change
    
    if (info.offset.x > threshold) {
      // Dragged right - go to previous
      handlePrevious();
    } else if (info.offset.x < -threshold) {
      // Dragged left - go to next
      handleNext();
    }
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const positions = ["center", "left1", "left", "right", "right1"];
  const imageVariants = {
    center: { x: "0%", scale: 0.7, zIndex: 500, opacity: 1 },
    left1: { x: "-100%", scale: 0.5, zIndex: 3, opacity: 0.5 },
    left: { x: "-90%", scale: 0.4, zIndex: 2, opacity: 0 },
    right: { x: "90%", scale: 0.4, zIndex: 1, opacity: 0 },
    right1: { x: "100%", scale: 0.5, zIndex: 3, opacity: 0.5 },
  };
     
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <h1 className="text-6xl pt-40 text-center">
        Where <span className="text-[#ED1C24] font-bold">Innovation Meets</span>
        <div>Engineering Excellence</div>
      </h1>
      <div className="flex items-center mt-6 flex-col mb-[10%] relative">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`rounded-[16px] md:w-[35%] md:h-[100%] w-[90%] object-cover ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
            initial="center"
            animate={positions[positionIndexes[index]]}
            variants={imageVariants}
            transition={{
              duration: isDragging ? 0.1 : 1.5,
              ease: [0.42, 0, 0.58, 1],
            }}
            style={{ position: "absolute" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            whileDrag={{ scale: 0.95 }}
          />
        ))}

        {/* Animated Caption */}
        <AnimatePresence mode="wait">
          <motion.div
            className="absolute right-[28%] font-bold top-1/4 transform -translate-x-1/2 -translate-y-1/2 text-lg text-center text-black p-2 rounded-md pointer-events-none"
            key={`caption-${activeIndex}`}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{
              duration: 0.5,
              ease: [0.42, 0, 0.58, 1],
            }}
          >
            {captions[activeIndex]}
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            className="absolute right-[27%] top-[32%] transform -translate-x-1/2 -translate-y-1/2 text-sm text-center text-[#8C8989] p-2 rounded-md pointer-events-none"
            key={`small-caption-${activeIndex}`}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{
              duration: 0.5,
              ease: [0.42, 0, 0.58, 1],
            }}
          >
            {smallcaptions[activeIndex].split("\n").map((line, idx) => (
              <div key={idx}>{line}</div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination Dots */}
        <div className="md:mt-[30%] mt-[80%] flex gap-2">
          {images.map((_, index) => (
            <motion.div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === activeIndex ? "bg-[#930000db]" : "bg-[#aa2d2d96]"
              }`}
              animate={{ scale: index === activeIndex ? 1.2 : 1 }}
              transition={{ duration: 0.3 }}
            ></motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default ImageSlider;
