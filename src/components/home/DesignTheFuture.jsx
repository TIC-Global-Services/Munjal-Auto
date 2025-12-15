import React from "react";
import { motion } from "framer-motion";

const DesignTheFuture = () => {
  return (
    <div className=" h-1/2 md:h-screen w-full flex items-center text-center justify-center px-10">
      <motion.h1
        className="lg:text-5xl text-2xl font-normal max-w-5xl lg:max-w-7xl lg:leading-[85px] leading-[50px] tracking-[2%]"
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
