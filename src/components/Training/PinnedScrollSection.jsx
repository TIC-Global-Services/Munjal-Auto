import { motion, useScroll, useTransform } from 'framer-motion';
import train1 from '../../assets/training1.jpg';
import train2 from '../../assets/training2.jpg';
import train3 from '../../assets/training3.png';
import { useRef } from 'react';

const PinnedScrollSection = () => {
  const containerRef = useRef(null);

  // Track scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const cards = [
    {
      title: 'Employee Development',
      description:
        'Creating a pool of readily available and adequate replacements for personnel who may leave or move up in the organization.',
      image: train1,
    },
    {
      title: 'Skill Enhancement',
      description:
        'Comprehensive training programs designed to enhance technical and soft skills of our workforce.',
      image: train2,
    },
    {
      title: 'Leadership Development',
      description:
        'Nurturing future leaders through specialized training and mentorship programs.',
      image: train3,
    },
  ];

  return (
    <div className="relative -mt-20">
      {/* Container height set to 400vh for slow scroll */}
      <div ref={containerRef} className="h-[400vh] md:h-[600vh] relative bg-transparent">
        <div className="sticky top-0 h-screen w-full bg-transparent flex items-center justify-center">
          <div className="px-4 md:px-6 lg:px-20 mx-auto w-full max-w-7xl bg-transparent h-full flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-26">
            {/* Left Side - Stacked Images */}
            <div className="w-full md:w-1/2 h-[40vh] md:h-[70vh] relative bg-transparent flex items-center justify-center md:justify-start md:-ml-16">
              <div className="relative w-full max-w-sm md:max-w-lg aspect-[4/3] bg-transparent h-full">
                {cards.map((card, index) => {
                  // Scroll ranges for slower transitions
                  const scrollRange = [index * 0.4, (index + 1) * 0.4];
                  // Extended range for smooth fade-in and fade-out
                  const extendedRange = [
                    (index * 0.4) - 0.15,
                    index * 0.4,
                    (index + 1) * 0.4,
                    (index + 1) * 0.4 + 0.15,
                  ];

                  // Prevent last card from fading out or scaling down
                  const isLast = index === cards.length - 1;
                  const opacityValues = isLast
                    ? [0, 1, 1, 1]
                    : [0, 1, 1, 0];
                  const scaleValues = isLast
                    ? [0.85, 1, 1, 1]
                    : [0.85, 1, 1, 0.85];

                  return (
                    <motion.div
                      key={index}
                      className="absolute inset-0 w-full h-full bg-transparent rounded-2xl overflow-hidden"
                      style={{
                        zIndex: useTransform(scrollYProgress, scrollRange, [
                          cards.length - index,
                          0,
                        ]),
                        rotateZ: useTransform(scrollYProgress, scrollRange, [
                          index * 2 - 2,
                          (index - 1) * 2 - 2,
                        ]),
                        x: useTransform(scrollYProgress, scrollRange, [
                          index * 8,
                          (index - 1) * 8,
                        ]),
                        y: useTransform(scrollYProgress, scrollRange, [
                          index * 8,
                          (index - 1) * 8,
                        ]),
                        scale: useTransform(scrollYProgress, extendedRange, scaleValues),
                        opacity: useTransform(scrollYProgress, extendedRange, opacityValues),
                        transition: { ease: 'easeInOut', duration: 0.3 },
                      }}
                    >
                      <img
                        src={card.image}
                        alt={card.title}
                        className="h-full w-[90%] object-contain mx-auto rounded-[10px]"
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right Side - Text */}
            <div className="w-full md:w-3/5 h-[50vh] md:h-[70vh] relative flex items-center">
              <div className="relative w-full space-y-4 md:space-y-10">
                {cards.map((card, index) => {
                  // Determine which card is currently active based on scroll progress
                  const activeCardIndex = Math.floor(scrollYProgress.get() / 0.4);
                  const isActive = index === activeCardIndex;
                  
                  // Blur effect for inactive cards
                  const blurValue = useTransform(
                    scrollYProgress,
                    [
                      (index * 0.4) - 0.2,
                      index * 0.4,
                      (index + 1) * 0.4,
                      (index + 1) * 0.4 + 0.2,
                    ],
                    ['blur(4px)', 'blur(0px)', 'blur(0px)', 'blur(4px)']
                  );

                  // Opacity for better visual hierarchy
                  const opacityValue = useTransform(
                    scrollYProgress,
                    [
                      (index * 0.4) - 0.2,
                      index * 0.4,
                      (index + 1) * 0.4,
                      (index + 1) * 0.4 + 0.2,
                    ],
                    [0.4, 1, 1, 0.4]
                  );

                  // Font size based on blur state - responsive
                  const fontSizeValue = useTransform(
                    scrollYProgress,
                    [
                      (index * 0.4) - 0.2,
                      index * 0.4,
                      (index + 1) * 0.4,
                      (index + 1) * 0.4 + 0.2,
                    ],
                    ['12px', '16px', '16px', '12px'] // Smaller font sizes for mobile
                  );

                  // Font size for desktop
                  const desktopFontSizeValue = useTransform(
                    scrollYProgress,
                    [
                      (index * 0.4) - 0.2,
                      index * 0.4,
                      (index + 1) * 0.4,
                      (index + 1) * 0.4 + 0.2,
                    ],
                    ['14px', '20px', '20px', '14px']
                  );

                  // Scale based on blur state - less dramatic on mobile
                  const scaleValue = useTransform(
                    scrollYProgress,
                    [
                      (index * 0.4) - 0.2,
                      index * 0.4,
                      (index + 1) * 0.4,
                      (index + 1) * 0.4 + 0.2,
                    ],
                    [0.98, 1.05, 1.05, 0.98] // Less scaling on mobile
                  );

                  // Desktop scale
                  const desktopScaleValue = useTransform(
                    scrollYProgress,
                    [
                      (index * 0.4) - 0.2,
                      index * 0.4,
                      (index + 1) * 0.4,
                      (index + 1) * 0.4 + 0.2,
                    ],
                    [0.95, 1.1, 1.1, 0.95]
                  );

                  return (
                    <motion.div
                      key={index}
                      className="w-full max-w-none bg-white p-4 md:p-10 rounded-xl md:rounded-2xl shadow-lg"
                      style={{
                        filter: blurValue,
                        opacity: opacityValue,
                        scale: window.innerWidth >= 768 ? desktopScaleValue : scaleValue,
                        transition: { ease: 'easeInOut', duration: 0.3 },
                      }}
                    >
                      <motion.p 
                        className="text-gray-600 leading-relaxed"
                        style={{
                          fontSize: window.innerWidth >= 768 ? desktopFontSizeValue : fontSizeValue,
                        }}
                      >
                        {card.description}
                      </motion.p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PinnedScrollSection;