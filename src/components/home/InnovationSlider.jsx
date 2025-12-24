import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import slide1 from "../../assets/slider/100 cc.png";
import slide2 from "../../assets/slider/125 cc scooter.png";
import slide3 from "../../assets/slider/125 cc.png";
import slide4 from "../../assets/slider/2w Fender.png";
import slide5 from "../../assets/slider/CNG Cradle.png";


const slides = [
  {
    image: slide1,
    title: "100 CC",
    desc: "Unmatched strength and precision\nto ensure automotive safety",
    captionAlignDesktop: "right-[17%] bottom-[15%] text-left",
  },
  {
    image: slide2,
    title: "CNG Cradle",
    desc: "Securely holds cylinders in vehicles\nfor safe, stable transport",
    captionAlignDesktop: "right-[17%] bottom-[15%] text-left",
  },
  {
    image: slide3,
    title: "Fenders for 2W",
    desc: "Protective covers that shield tires\nto keep bikes clean and dry",
    captionAlignDesktop: "left-1/2 top-[15%] text-center",
  },
  {
    image: slide4,
    title: "125 CC",
    desc: "Durable fenders for\ntwo-wheeler protection",
    captionAlignDesktop: "right-[30%] bottom-[10%] text-left",
  },
  {
    image: slide5,
    title: "125 CC (Scooter)",
    desc: "Innovative CNG storage\nfor eco-friendly transport",
    captionAlignDesktop: "right-[17%] bottom-[15%] text-left",
  },
];


const InnovationSlider = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="w-full overflow-hidden bg-white">
      {isMobile ? <MobileSlider /> : <DesktopSlider />}
    </div>
  );
};

export default InnovationSlider;

const MobileSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((p) => (p + 1) % slides.length);
  const prev = () => setActiveIndex((p) => (p - 1 + slides.length) % slides.length);

  return (
    <div className="relative flex flex-col items-center px-4 py-10">
      <h1 className="text-xl font-light text-center mb-6">
        Where <span className="text-[#ED1C24] font-bold">Innovation Meets</span>
        <br />
        Engineering Excellence
      </h1>

      <div className="relative w-full max-w-md h-[45vh]">
        <AnimatePresence initial={false}>
          <motion.img
            key={activeIndex}
            src={slides[activeIndex].image}
            alt={slides[activeIndex].title}
            className="w-full h-full object-contain rounded-xl"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.4 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x > 50) prev();
              if (info.offset.x < -50) next();
            }}
          />
        </AnimatePresence>

        {/* MOBILE TEXT (always centered) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full px-4 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="font-bold text-sm">
                {slides[activeIndex].title}
              </div>

              <div className="text-xs text-gray-600 mt-1">
                {slides[activeIndex].desc.split("\n").map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

/*DESKTOP SLIDER*/

const DesktopSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  /*AUTOPLAY */
  useEffect(() => {
    if (isDragging) return;
    const id = setInterval(
      () => setActiveIndex((p) => (p + 1) % slides.length),
      3000
    );
    return () => clearInterval(id);
  }, [isDragging]);

  const getPosition = (index) => {
    const diff = (index - activeIndex + slides.length) % slides.length;
    if (diff === 0) return "center";
    if (diff === 1) return "right";
    if (diff === slides.length - 1) return "left";
    return "hidden";
  };

  const imageVariants = {
    center: {
      x: "0%",
      scale: 1.15,
      opacity: 1,
      zIndex: 3,
      filter: "blur(0px)",
    },
    left: {
      x: "-120%",
      scale: 0.7,
      opacity: 0.5,
      zIndex: 2,
      filter: "blur(3px)",
    },
    right: {
      x: "120%",
      scale: 0.7,
      opacity: 0.5,
      zIndex: 2,
      filter: "blur(3px)",
    },
    hidden: {
      opacity: 0,
      scale: 0.4,
      pointerEvents: "none",
    },
  };

  return (
    <div className="relative w-full py-20 min-h-[80vh]">
      <h1 className="text-4xl font-light text-center mb-12">
        Where <span className="text-[#ED1C24] font-bold">Innovation Meets</span>
        <br />
        Engineering Excellence
      </h1>

      <div className="relative flex items-center justify-center h-[60vh]">
        {slides.map((slide, index) => {
          const position = getPosition(index);

          return (
            <motion.div
              key={index}
              className="absolute"
              variants={imageVariants}
              animate={position}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <motion.img
                src={slide.image}
                alt={slide.title}
                className="w-[520px] aspect-[4/3] object-cover rounded-xl cursor-grab"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={(_, info) => {
                  setIsDragging(false);
                  if (info.offset.x > 50)
                    setActiveIndex((p) => (p - 1 + slides.length) % slides.length);
                  if (info.offset.x < -50)
                    setActiveIndex((p) => (p + 1) % slides.length);
                }}
                whileDrag={{ scale: 0.95 }}
              />
            </motion.div>
          );
        })}

        <div
          className={`absolute transition-all duration-500 ${
            slides[activeIndex].captionAlignDesktop
          }`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="max-w-sm"
            >
              <div className="font-bold text-lg">
                {slides[activeIndex].title}
              </div>

              <div className="text-sm text-gray-600 mt-1">
                {slides[activeIndex].desc.split("\n").map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
