"use client";

import { motion } from "framer-motion";
import React from "react";

const NoisyBg = () => {
  return (
    <div className="perspective-distant absolute inset-0 z-1">
      <div className="size-full relative overflow-hidden">
        <motion.div
          className="absolute opacity-3 -inset-[200%] w-[400%] h-[400%] bg-[url(/imgs/noisy_bg.png)]"
          animate={{
            x: ["0%", "-20%", "20%", "0%"],
            y: ["0%", "20%", "-20%", "0%"],
          }}
          transition={{
            duration: 1,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </div>
    </div>
  );
};

export default NoisyBg;
