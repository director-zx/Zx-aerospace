"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { PiDiamondsFourLight } from "react-icons/pi";
import { RxDimensions } from "react-icons/rx";
import { LiaBandcamp } from "react-icons/lia";
import { PiArrowsClockwiseLight } from "react-icons/pi";
import { LiaWeightHangingSolid } from "react-icons/lia";
import { AiOutlineBlock } from "react-icons/ai";

const Technical = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // 1. Smooth Scroll Initialization with TypeScript fix
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // 2. Parallax Animation Logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );
  const headingOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  const specs = [
    {
      label: "Material",
      value: "Carbon Fibre Reinforced Nylon Composite",
      icon: <PiDiamondsFourLight />,
    },
    {
      label: "Diameter",
      value: "24 Inches",
      icon: <RxDimensions />,
    },
    {
      label: "Pitch",
      value: "8 Inches",
      icon: <LiaBandcamp />,
    },
    {
      label: "Direction",
      value: "CW & CCW Pair",
      icon: <PiArrowsClockwiseLight />,
    },
    {
      label: "Weight",
      value: "~34g Per Blade",
      icon: <LiaWeightHangingSolid />,
    },
    {
      label: "Mounting Type",
      value: "Folding Hub Compatible",
      icon: <AiOutlineBlock />,
    },
  ];

  return (
    <main
      ref={containerRef}
      className="relative w-full flex flex-col items-center justify-center overflow-hidden py-24 bg-black max-sm:px-2.5 max-sm:py-12"
      id="specifications"
    >
      {/* --- PARALLAX BACKGROUND BANNER --- */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-b from-black via-black/30 to-black z-10" />
        <img
          src="/product-features.webp"
          alt="Technical Backdrop"
          className="w-full h-[130%] object-cover opacity-50"
        />
      </motion.div>

      {/* --- MAIN CONTENT --- */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-20 w-full max-w-360 px-8 flex flex-col gap-16 justify-between items-center max-sm:py-0 max-sm:px-0 max-sm:gap-8"
      >
        <motion.div style={{ opacity: headingOpacity }} className="text-center">
          <motion.h2
            className="text-6xl font-bold text-zxwhite mb-4 max-sm:text-2xl"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Technical Specifications
          </motion.h2>
        </motion.div>

        {/* --- SPECS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{y: -10, backgroundColor: "rgba(255, 255, 255, 0.08)", borderColor: "#f09c18"}}
              className="group relative border border-white/10 bg-white/5 backdrop-blur-xl p-10 rounded-[30px] transition-all duration-500"
            >
              {/* Animated SVG Icon */}
              <div className="text-[#f09c18] mb-4 text-3xl transition-transform duration-500 group-hover:rotate-6">
                {spec.icon}
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-white/40 uppercase text-[12px] font-semibold tracking-[0.4em]">
                  {spec.label}
                </span>
                <h4 className="text-3xl font-semibold text-zxwhite leading-tight max-sm:text-xl">
                  {spec.value}
                </h4>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute -inset-px rounded-[40px] bg-linear-to-tr from-[#f09c18]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
};

export default Technical;
