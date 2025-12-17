import React from "react";
import { motion } from "framer-motion";

const PioneeringText = () => {
  return (
    <div className=" h-1/2 md:h-[70dvh] w-full flex items-center text-center justify-center px-10">
      <motion.h1
        className="text-[18px] lg:text-[40px] font-normal max-w-5xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }} 
      >
        Pioneering Lightweight Solutions with <br/> Cutting-Edge Technology
      </motion.h1>
    </div>
  );
};

export default PioneeringText;
