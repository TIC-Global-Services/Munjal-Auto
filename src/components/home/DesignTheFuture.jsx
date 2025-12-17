import React from "react";
import { motion } from "framer-motion";

const DesignTheFuture = () => {
  return (
    <div className="w-full flex items-center text-center  justify-center px-4 sm:px-6 md:px-10 lg:mb-20 lg:mt-20 py-10">
      <motion.h1
        className="lg:text-5xl md:text-3xl text-[16px] sm:text-[18px] font-normal w-full lg:max-w-7xl lg:leading-[85px] md:leading-[45px] leading-[25px] sm:leading-[29px] tracking-[1%] sm:tracking-[2%]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }} // ✅ only animates when visible
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Lightweighting: The Future of Automotive Technologies
Lightweight, 3P Engineering and R&D
      </motion.h1>
    </div>
  );
};

export default DesignTheFuture;
