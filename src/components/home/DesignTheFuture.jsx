import React from "react";
import { motion } from "framer-motion";

const DesignTheFuture = () => {
  return (
    <div className=" h-1/2 md:h-screen w-full flex items-center text-center justify-center px-10">
      <motion.h1
        className="text-5xl font-normal max-w-5xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }} // ✅ only animates when visible
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }} 
      >
        Designing the Future with Lightweight Solutions and Advanced Technology
      </motion.h1>
    </div>
  );
};

export default DesignTheFuture;
