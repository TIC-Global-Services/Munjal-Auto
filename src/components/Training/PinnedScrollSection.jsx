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
    <div className="relative">
      {/* Container height set to 300vh for slow scroll */}
      <div ref={containerRef} className="h-[300vh] sm:h-[350vh] md:h-[400vh] lg:h-[450vh] relative bg-white">
        <div className="sticky top-0 h-screen w-full bg-white flex items-center justify-center">
          <div className="px-3 sm:px-4 md:px-6 lg:px-20 mx-auto w-full max-w-7xl bg-white h-full flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-8 lg:gap-12">
            {/* Left Side - Stacked Images */}
            <div className="w-full md:w-2/5 h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] relative bg-white flex items-center justify-center">
              <div className="relative w-[280px] sm:w-[350px] md:w-[450px] lg:w-[600px] h-[180px] sm:h-[220px] md:h-[280px] lg:h-[380px]">
                {cards.map((card, index) => {
                  // Slower transitions - each card gets more scroll space with overlap
                  const start = index * 0.25;
                  const end = start + 0.4; // Longer transition period
                  
                  // Check if this is the last card
                  const isLast = index === cards.length - 1;
                  
                  // Rotation for stacking effect - freeze at start and end
                  const rotateTransform = useTransform(
                    scrollYProgress,
                    [0, 0.05, start, end, 0.8, 1],
                    isLast 
                      ? [index * -4, index * -4, index * -4, 0, 0, 0] 
                      : [index * -4, index * -4, index * -4, 0, 8, 8]
                  );

                  // Y position for stacking - freeze at start and end
                  const yTransform = useTransform(
                    scrollYProgress,
                    [0, 0.05, start, end, 0.8, 1],
                    isLast 
                      ? [index * 8, index * 8, index * 8, 0, 0, 0] 
                      : [index * 8, index * 8, index * 8, 0, -30, -30]
                  );

                  // Scale effect - freeze at start and end
                  const scaleTransform = useTransform(
                    scrollYProgress,
                    [0, 0.05, start, end, 0.8, 1],
                    isLast 
                      ? [0.9 - (index * 0.03), 0.9 - (index * 0.03), 0.9 - (index * 0.03), 1, 1, 1] 
                      : [0.9 - (index * 0.03), 0.9 - (index * 0.03), 0.9 - (index * 0.03), 1, 0.85, 0.85]
                  );

                  // Opacity - zero initial opacity to prevent overlapping
                  const opacityTransform = useTransform(
                    scrollYProgress,
                    [0, 0.05, start - 0.1, start, end, end + 0.1, 0.8, 1],
                    isLast 
                      ? [0, 0, 0, 0.2, 1, 1, 1, 1] 
                      : [0, 0, 0, 0.3, 1, 0, 0, 0]
                  );

                  // Dynamic z-index - better layering control
                  const zIndexTransform = useTransform(
                    scrollYProgress,
                    [0, 0.05, start - 0.1, start, start + 0.1, end - 0.1, end, end + 0.1, 0.8, 1],
                    isLast 
                      ? [1, 1, 1, 2, 20, 20, 20, 2, 2, 2]
                      : index === 1
                        ? [2, 2, 2, 3, 20, 20, 3, 2, 2, 2]
                        : [3, 3, 3, 4, 20, 20, 4, 3, 3, 3]
                  );

                  return (
                    <motion.div
                      key={index}
                      className="absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden shadow-lg"
                      style={{
                        y: yTransform,
                        scale: scaleTransform,
                        rotate: rotateTransform,
                        opacity: opacityTransform,
                        zIndex: zIndexTransform,
                      }}
                    >
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right Side - Text */}
            <div className="w-full md:w-3/5 h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] relative flex items-start justify-center flex-col">
              <div className="relative w-full space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
                {cards.map((card, index) => {
                  // Slower transitions - each card gets more scroll space with overlap
                  const start = index * 0.25;
                  const end = start + 0.4; // Longer transition period
                  
                  // Check if this is the last card
                  const isLast = index === cards.length - 1;
                  
                  // Blur effect - freeze at start, active card is clear, others are blurred
                  const blurValue = useTransform(
                    scrollYProgress,
                    [0, 0.05, start - 0.1, start + 0.1, end - 0.1, end + 0.1, 0.8, 1],
                    isLast 
                      ? ['blur(4px)', 'blur(4px)', 'blur(4px)', 'blur(0px)', 'blur(0px)', 'blur(0px)', 'blur(0px)', 'blur(0px)']
                      : index === 0 
                        ? ['blur(0px)', 'blur(0px)', 'blur(0px)', 'blur(0px)', 'blur(0px)', 'blur(4px)', 'blur(4px)', 'blur(4px)']
                        : ['blur(4px)', 'blur(4px)', 'blur(4px)', 'blur(0px)', 'blur(0px)', 'blur(4px)', 'blur(4px)', 'blur(4px)']
                  );

                  // Opacity - all cards visible, freeze at start
                  const opacityValue = useTransform(
                    scrollYProgress,
                    [0, 0.05, 0.1, 0.8, 1],
                    [1, 1, 1, 1, 1]
                  );

                  // Scale effect for active text - freeze at start
                  const scaleValue = useTransform(
                    scrollYProgress,
                    [0, 0.05, start, start + 0.1, end - 0.1, end, 0.8, 1],
                    isLast 
                      ? [0.98, 0.98, 0.98, 1, 1, 1, 1, 1]
                      : index === 0
                        ? [1, 1, 1, 1, 1, 0.98, 0.98, 0.98]
                        : [0.98, 0.98, 0.98, 1, 1, 0.98, 0.98, 0.98]
                  );

                  return (
                    <motion.div
                      key={index}
                      className="w-full"
                      style={{
                        filter: blurValue,
                        opacity: opacityValue,
                        scale: scaleValue,
                        zIndex: index,
                      }}
                    >
                      <div className="bg-white p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 rounded-xl shadow-md border border-gray-200">
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl xl:text-[20px]">
                          {card.description}
                        </p>
                      </div>
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
