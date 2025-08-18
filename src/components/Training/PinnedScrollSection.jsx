import { motion, useScroll, useTransform } from 'framer-motion';
import train1 from '../../assets/train1.png';
import train2 from '../../assets/train2.png';
import train3 from '../../assets/train3.png';
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
      <div ref={containerRef} className="h-[600vh] relative bg-transparent">
        <div className="sticky top-0 h-screen w-full bg-transparent flex items-center justify-center">
          <div className="px-6 md:px-20 mx-auto w-full max-w-7xl bg-transparent h-full flex flex-col md:flex-row items-center">
            {/* Left Side - Stacked Images */}
            <div className="w-full md:w-1/2 h-[70vh] relative bg-transparent flex items-center justify-center">
              <div className="relative w-full max-w-lg aspect-[4/3] bg-transparent h-full">
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
                        className="h-full w-[75%] object-contain mx-auto"
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right Side - Text */}
            <div className="w-full md:w-1/2 h-[70vh] relative flex items-center">
              <div className="relative w-full max-w-lg">
                {cards.map((card, index) => {
                  // Scroll ranges for text
                  const scrollRange = [
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
                    ? [0.9, 1, 1, 1]
                    : [0.9, 1, 1, 0.9];
                  const visibilityValues = isLast
                    ? ['hidden', 'visible', 'visible', 'visible']
                    : ['hidden', 'visible', 'visible', 'hidden'];
                  const pointerEventsValues = isLast
                    ? ['none', 'auto', 'auto', 'auto']
                    : ['none', 'auto', 'auto', 'none'];

                  return (
                    <motion.div
                      key={index}
                      className="absolute w-full bg-white p-8 rounded-2xl shadow-xl"
                      style={{
                        y: useTransform(scrollYProgress, scrollRange, [
                          '20vh',
                          '0vh',
                          '0vh',
                          '-20vh',
                        ]),
                        scale: useTransform(scrollYProgress, scrollRange, scaleValues),
                        opacity: useTransform(scrollYProgress, scrollRange, opacityValues),
                        visibility: useTransform(scrollYProgress, scrollRange, visibilityValues),
                        pointerEvents: useTransform(scrollYProgress, scrollRange, pointerEventsValues),
                        transition: { ease: 'easeInOut', duration: 0.3 },
                      }}
                    >
                      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                        {card.title}
                      </h2>
                      <p className="text-gray-600 text-base md:text-lg">
                        {card.description}
                      </p>
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