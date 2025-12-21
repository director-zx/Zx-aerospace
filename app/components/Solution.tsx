"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "@studio-freight/lenis";

const Solution = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bloomScale = useTransform(scrollYProgress, [0.2, 0.4], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  const problemItems = [
    "Long procurement lead times",
    "Inconsistent quality across batches",
    "High replacement and parts costs",
    "No localized technical support",
    "Limited availability during peak seasons",
  ];

  const solutionItems = [
    "Local manufacturing ensures rapid delivery",
    "Consistent high-quality OEM-grade production",
    "Competitive pricing via indigenous production",
    "Direct support from expert propulsion engineers",
    "Guaranteed stock through regional supply chains",
  ];

  return (
    <main
      ref={containerRef}
      className="relative w-full min-h-screen bg-white pt-24 pb-0 flex flex-col gap-0 items-center justify-center overflow-hidden px-8 max-sm:px-2.5 max-sm:py-12"
      id="solution"
    >
      <motion.div
        style={{ opacity: headingOpacity }}
        className="text-center"
      >
        <motion.h2
          className="text-6xl font-bold text-zxblack mb-4 max-sm:text-2xl"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Problem Vs Solution
        </motion.h2>
        <motion.p
          className="text-center font-sans text-xl max-w-2xl text-zxblack/70 max-sm:text-base"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          ZX AeroSpace introduces India’s first indigenous, precision-engineered
          Carbon Fibre Reinforced Nylon Composite Propulsion System designed for
          agricultural drones.
        </motion.p>
      </motion.div>

      <motion.div
        style={{ scale: bloomScale, opacity }}
        className="relative flex items-center justify-center w-full max-w-360 h-187.5 max-sm:h-auto max-sm:flex-col"
      >
        {/* --- SVG CONNECTING LINES (Recalibrated for Alignment) --- */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>

          {/* Problem Lines - Aligned to 16px font boxes */}
          {problemItems.map((_, i) => (
            <line
              key={`p-line-${i}`}
              x1="22%"
              y1={`${24 + i * 13}%`}
              x2="50%"
              y2="50%"
              stroke="#e2e8f0"
              strokeWidth="1"
              className="max-sm:hidden"
            />
          ))}

          {/* Solution Lines - Aligned to 16px font boxes */}
          {solutionItems.map((_, i) => (
            <line
              key={`s-line-${i}`}
              x1="50%"
              y1="50%"
              x2="78%"
              y2={`${24 + i * 13}%`}
              stroke="#f09d188f"
              strokeWidth="1"
              strokeDasharray="5,5"
              className="max-sm:hidden"
            />
          ))}
        </svg>

        {/* --- LEFT: PROBLEMS --- */}
        <div className="absolute left-0 flex flex-col gap-10 max-sm:static max-sm:my-12 max-sm:gap-2.5 max-sm:w-full">
          {problemItems.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, x: -5 }}
              className="flex items-center gap-0 bg-white border border-[#dadbdb] p-4 rounded-full max-sm:p-2.5"
            >
              <p className="text-[16px] font-medium text-zxblack text-center max-sm:text-left max-sm:text-[14px]">
                {p}
              </p>
            </motion.div>
          ))}
        </div>
        {/* --- CENTER: THE CORE --- */}
        <div className="relative z-20 group max-sm:static">
          <div className="absolute inset-0 bg-zxprimary/20 blur-3xl rounded-full scale-150 group-hover:bg-zxprimary/30 transition-all duration-700 max-sm:hidden" />
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-8 border-white shadow-[0_0_50px_rgba(0,0,0,0.1)] overflow-hidden bg-zxblack">
            <video
              src="/video/p-s-rotating.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="absolute -inset-4 border border-zxprimary/30 rounded-full animate-ping pointer-events-none" />
        </div>

        {/* --- RIGHT: SOLUTIONS --- */}
        <div className="absolute right-0 flex flex-col gap-10 max-sm:static max-sm:mt-12 max-sm:gap-2.5 max-sm:w-full">
          {solutionItems.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, x: 10 }}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-0 bg-white border border-[#f09d188f] p-4 rounded-full max-sm:p-2.5"
            >
              <p className="text-[16px] font-medium text-zxblack text-center max-sm:text-left max-sm:text-[14px]">{s}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
};

export default Solution;