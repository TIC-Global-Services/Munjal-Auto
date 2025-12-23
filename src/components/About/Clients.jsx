import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "../../assets/clients/client-1.png";
import image2 from "../../assets/clients/client-2.png";
import image3 from "../../assets/clients/client-3.png";
import image4 from "../../assets/clients/client-4.png";

const contents = [
  { img: image1 },
  { img: image2 },
  { img: image3 },
  { img: image4 },
];

const Clients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-scroll only for mobile
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % contents.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isMobile]);

  const variants = {
    enter: {
      x: 100,
      opacity: 0,
      filter: "blur(4px)",
    },
    center: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      zIndex: 10,
    },
    exit: {
      x: -100,
      opacity: 0,
      filter: "blur(4px)",
    },
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div className="py-20 max-w-5xl mx-auto mt-10 lg:mt-20">
      <h1 className="text-[#141313] lg:text-[40px] text-[24px] text-center mb-10 font-normal">
        Our Customers
      </h1>

      {/* Desktop: Horizontal scroll with drag (no auto-scroll) */}
      {!isMobile ? (
        <motion.div
          className="flex justify-between overflow-x-auto scrollbar-hide gap-4"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          whileTap={{ cursor: "grabbing" }}
        >
          {contents.map((item, index) => (
            <motion.div key={index} className="flex-shrink-0">
              <div className="flex justify-center items-center h-40">
                <div className="">
                  <img
                    src={item.img}
                    alt={`client-${index}`}
                    className={`${
                      index == 0 ? "w-[396px] h-30" : "w-[94px] h-[94px]"
                    } object-contain`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        /* Mobile: Carousel with blur effect and auto-scroll */
        <>
          {/* Center Circle Background */}
          <div className="relative flex justify-center items-center h-54">
            {/* <div className="absolute w-40 h-40 " /> */}

            <div className="relative w-full max-w-[396px] h-40 flex justify-center items-center z-10">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                    filter: { duration: 0.2 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);

                    if (swipe < -swipeConfidenceThreshold) {
                      setDirection(1);
                      setCurrentIndex((prev) =>
                        prev === contents.length - 1 ? 0 : prev + 1
                      );
                    } else if (swipe > swipeConfidenceThreshold) {
                      setDirection(-1);
                      setCurrentIndex((prev) =>
                        prev === 0 ? contents.length - 1 : prev - 1
                      );
                    }
                  }}
                  whileTap={{ cursor: "grabbing" }}
                  className="absolute inset-0 flex justify-center items-center"
                >
                  <img
                    src={contents[currentIndex].img}
                    alt={`client-${currentIndex}`}
                    className="w-full max-w-[396px] h-32 object-contain"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {contents.map((_, index) => (
              <motion.div
                key={index}
                className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
                  index === currentIndex ? "bg-[#ED1C24]" : "bg-gray-300"
                }`}
                animate={{
                  scale: index === currentIndex ? 1.4 : 1,
                }}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Clients;
