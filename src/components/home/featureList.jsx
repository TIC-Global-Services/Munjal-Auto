import { motion, useTransform } from 'framer-motion';
const FeatureList = ({ feature, index, scrollYProgress }) => {
const startPoint = Math.min(0.1 + index * 0.15, 0.7);
  const endPoint = Math.min(0.2 + index * 0.15, 0.8);

  const opacity = useTransform(
    scrollYProgress,
    [startPoint, endPoint],
    [0, 1]
  );

  const y = useTransform(opacity, [0, 1], [20, 0]);

  return (
    <motion.div
      className="border-b border-gray-200 pb-3 md:pb-4 last:border-b-0"
      style={{ opacity, y }}
    >
      <h3 className="text-base sm:text-lg md:text-[36px] lg:text-[36px] text-[#151414] font-medium mb-1 md:mb-2">
        {feature.title}
      </h3>
      <p className="text-[#8C8989] text-xs sm:text-sm md:text-[20px] leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  );
}

export default FeatureList