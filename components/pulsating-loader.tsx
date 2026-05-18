"use client";

import { motion } from "framer-motion";

export function RippleWaveLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center space-x-1 bg-white/80 dark:bg-black/80">
      {[...Array(7)].map((_, index) => (
        <motion.div
          key={index}
          className="h-6 w-0.5 rounded-full bg-neutral-800 dark:bg-neutral-200"
          animate={{
            scaleY: [0.5, 1.5, 0.5],
            scaleX: [1, 0.8, 1],
            translateY: ["0%", "-15%", "0%"],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.1,
          }}
        />
      ))}
    </div>
  );
}
