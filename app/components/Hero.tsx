"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Parallax } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Fixed Animation Variants to resolve the "Type is not assignable" error
  const textVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  };

  const imageVariants = {
    initial: { opacity: 0, scale: 0.8, filter: "blur(15px)" },
    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
    exit: { opacity: 0, scale: 1.1, filter: "blur(15px)" },
  };

  return (
    <main className="relative h-screen w-full overflow-hidden bg-[#050505] pt-14 max-sm:h-auto max-sm:pt-0 max-sm:mt-20" id="home">
      {/* ===== FULLSCREEN BACKGROUND VIDEO ===== */}
      <div className="absolute inset-0 z-0">
        <video
          className="h-full w-full object-cover"
          src="/video/zx-video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/87 backdrop-blur-[1px]" />
      </div>

      {/* ===== CONTENT SECTION ===== */}
      <div className="relative z-10 h-full w-full">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade, Parallax]}
          effect="fade"
          speed={1200}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          loop
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="h-full hero-swiper"
        >
          {/* SLIDE 1 */}
          <SwiperSlide className="w-full">
            <div className="flex flex-col lg:flex-row h-full max-w-360 items-center justify-between px-8 mx-auto gap-0 max-sm:px-2.5 max-sm:justify-center">
              <div className="w-full lg:w-[55%]">
                <AnimatePresence mode="wait">
                  {activeIndex === 0 && (
                    <motion.div
                      variants={textVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <h1 className="text-5xl md:text-6xl leading-tight font-semibold text-white max-sm:text-2xl max-sm:pt-16">
                        India’s First Indigenous{" "}
                        <span className="text-[#f09c18]"> Carbon Fibre</span>{" "}
                        Drone Propulsion
                      </h1>
                      <p className="mt-6 text-lg text-white/70 max-w-xl max-sm:text-base">
                        Engineered by a Rocket Propulsion Specialist.
                        Manufactured with 50+ years of industrial excellence.
                      </p>
                      <div className="mt-10 flex flex-wrap gap-4">
                        <a href="#contact">
                          <button className="bg-[#f09c18] cursor-pointer px-8 py-3 font-semibold text-black transition-all hover:bg-white hover:scale-105 active:scale-95 max-sm:px-4 max-sm:py-2.5 max-sm:text-xs">
                            Request a Sample Pair
                          </button>
                        </a>
                        <a href="/Brochure.pdf" download>
                          <button className="border cursor-pointer border-white/40 px-8 py-3 text-white transition-all hover:bg-white hover:text-black max-sm:px-4 max-sm:py-2.5 max-sm:text-xs">
                            Download Brochure
                          </button>
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="w-full lg:w-[45%] flex justify-center relative">
                <AnimatePresence mode="wait">
                  {activeIndex === 0 && (
                    <motion.div
                      variants={imageVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="relative flex items-center justify-center"
                    >
                      {/* White Smoke / Rounded Blur Background */}
                      <div className="absolute w-[120%] h-[120%] bg-white/10 blur-[100px] rounded-full animate-pulse" />
                      <div className="absolute w-[80%] h-[80%] bg-white/5 blur-[50px] rounded-full" />

                      <img
                        src="/banner-one.png"
                        alt="Propulsion"
                        className="relative z-10 w-full  drop-shadow-[0_0_40px_rgba(255,255,255,0.2)] max-sm:w-[80%]"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </SwiperSlide>

          {/* SLIDE 2 */}
          <SwiperSlide className="w-full">
            <div className="flex flex-col lg:flex-row h-full max-w-360 items-center justify-between px-8 mx-auto gap-0 max-sm:px-2.5">
              <div className="w-full lg:w-[55%]">
                <AnimatePresence mode="wait">
                  {activeIndex === 1 && (
                    <motion.div
                      variants={textVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <h1 className="text-5xl md:text-6xl leading-tight font-semibold text-white max-sm:text-2xl max-sm:pt-16">
                        <span className="text-[#f09c18]">ZX-2480</span> Carbon
                        Fibre Propeller with Precision & Power
                      </h1>
                      <p className="mt-6 text-lg text-white/70 max-w-xl max-sm:text-base">
                        24-inch aerodynamically optimized folding propeller
                        engineered for longer flight times and reduced
                        vibration.
                      </p>
                      <div className="mt-10 flex flex-wrap gap-4">
                        <a href="#specifications">
                        <button className="bg-[#f09c18] cursor-pointer px-8 py-3 font-semibold text-black transition-all hover:bg-white hover:scale-105 active:scale-95 max-sm:px-4 max-sm:py-2.5 max-sm:text-xs">
                          View Specifications
                        </button>
                        </a>
                        <a href="/Brochure.pdf" download>
                        <button className="border cursor-pointer border-white/40 px-8 py-3 text-white transition-all hover:bg-white hover:text-black max-sm:px-4 max-sm:py-2.5 max-sm:text-xs">
                          Download Brochure
                        </button>
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="w-full lg:w-[45%] flex justify-center relative">
                <AnimatePresence mode="wait">
                  {activeIndex === 1 && (
                    <motion.div
                      variants={imageVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="relative flex items-center justify-center"
                    >
                      <div className="absolute w-[80%] h-[80%] bg-[#fff9f1]/90 blur-[0px] rounded-full max-sm:w-[50%] max-sm:h-[60%]" />
                      <img
                        src="/banner-three.png"
                        alt="System"
                        className="relative z-10 w-full drop-shadow-[0_0_50px_rgba(255,255,255,0.15)] max-sm:w-[80%]"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </SwiperSlide>

          {/* SLIDE 3 */}
          <SwiperSlide className="w-full">
            <div className="flex flex-col lg:flex-row h-full max-w-360 items-center justify-between px-8 mx-auto gap-0 max-sm:px-2.5">
              <div className="w-full lg:w-[55%]">
                <AnimatePresence mode="wait">
                  {activeIndex === 2 && (
                    <motion.div
                      variants={textVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <h1 className="text-5xl md:text-6xl leading-tight font-semibold text-white max-sm:text-2xl max-sm:pt-16">
                        Built for{" "}
                        <span className="text-[#f09c18]">Agriculture</span>,
                        Surveying & Industrial UAV Missions
                      </h1>
                      <p className="mt-6 text-lg text-white/70 max-w-xl max-sm:text-base">
                        Trusted by drone manufacturers for durability,
                        efficiency, and reliable supply.
                      </p>
                      <div className="mt-10 flex flex-wrap gap-4">
                        <a href="#applications">
                        <button className="bg-[#f09c18] cursor-pointer px-8 py-3 font-semibold text-black transition-all hover:bg-white hover:scale-105 active:scale-95 max-sm:px-4 max-sm:py-2.5 max-sm:text-xs">
                          Explore Use Cases
                        </button>
                        </a>
                        <a href="tel:+919600075808" download>
                        <button className="border border-white/40 px-8 py-3 cursor-pointer text-white transition-all hover:bg-white hover:text-black max-sm:px-4 max-sm:py-2.5 max-sm:text-xs">
                          Talk to Our Expert
                        </button>
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="w-full lg:w-[45%] flex justify-center relative">
                <AnimatePresence mode="wait">
                  {activeIndex === 2 && (
                    <motion.div
                      variants={imageVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="relative flex items-center justify-center"
                    >
                      <div className="absolute w-[120%] h-[120%] bg-white/10 blur-[100px] rounded-full" />
                      <img
                        src="/banner-two.png"
                        alt="UAV"
                        className="relative z-10 w-full  drop-shadow-[0_0_40px_rgba(255,255,255,0.1)] max-sm:w-[80%]"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </main>
  );
}
