"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const images = [
  "/zx-propeller-two.webp",
  "/zx-propeller-one.webp",
  "/zx-propeller-three.webp",
  "/zx-propeller-four.webp",
];

const FeatureCarousel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="w-full h-full rounded-[20px] overflow-hidden p-0 max-sm:h-auto"
    >
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        loop={true}
        grabCursor={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        className="w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`ZX Aerospace Feature ${index + 1}`}
              className="w-full h-full rounded-[20px] object-cover object-center border border-gray-200 max-sm:object-contain max-sm:h-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default FeatureCarousel;
