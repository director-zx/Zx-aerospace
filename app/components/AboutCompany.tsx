"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutCompany = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.1, 0.3], [40, 0]);
  const videoScale = useTransform(scrollYProgress, [0.2, 0.5], [1.1, 1]);

  return (
    <main
      ref={sectionRef}
      className="relative w-full bg-black text-white flex items-center justify-center overflow-hidden"
      id="about"
    >
      <div className="w-full max-w-360 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-8 py-24 items-center max-sm:py-12 max-sm:px-2.5">

        {/* LEFT CONTENT */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="flex flex-col gap-10"
        >
          {/* Heading */}
          <motion.h2
            className="text-6xl font-bold text-zxwhite mb-4 max-sm:text-2xl"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            About ZX AeroSpace
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-left font-sans text-xl max-w-2xl text-zxwhite/70 max-sm:text-base"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            ZX AeroSpace is the aerospace division of Fine Techno Plast, a
            manufacturing leader established over five decades ago. By combining
            cutting-edge propulsion science with industrial-scale production
            expertise, we are building India’s most reliable and scalable drone
            component ecosystem.
          </motion.p>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="border-l-2 border-zxprimary pl-6"
            >
              <h4 className="text-xl font-semibold mb-2">Mission</h4>
              <p className="text-white/70 leading-relaxed max-sm:text-base">
                To empower India’s UAV industry with indigenous, high-quality,
                engineering-driven propulsion solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border-l-2 border-zxprimary pl-6"
            >
              <h4 className="text-xl font-semibold mb-2">Vision</h4>
              <p className="text-white/70 leading-relaxed max-sm:text-base">
                To become the global benchmark for drone propeller performance,
                reliability, and manufacturing quality.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT VIDEO */}
        <motion.div
          style={{ scale: videoScale }}
          className="relative w-full rounded-2xl overflow-hidden"
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-zxprimary/20 blur-3xl opacity-30 pointer-events-none" />

          {/* Video */}
          <video
            src="/rotating-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain rounded-full"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      </div>
    </main>
  );
};

export default AboutCompany;
