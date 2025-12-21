"use client";

import React from "react";
import { motion } from "framer-motion";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const cards = [
  {
    title: "Agricultural Drones",
    desc: "Extended flight times for spraying, seeding, and fertilizer drones.",
    img: "/product-features.webp",
  },
  {
    title: "Survey & Mapping UAVs",
    desc: "High stability required for photogrammetry missions.",
    img: "https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg",
  },
  {
    title: "Inspection Drones",
    desc: "Durable propellers essential for industrial site inspections.",
    img: "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg",
  },
  {
    title: "Surveillance & Security UAVs",
    desc: "Efficient propulsion ensures low vibration and clearer imaging.",
    img: "/Surveillance.jpg",
  },
  {
    title: "Fleet Maintenance & Replacement",
    desc: "Ideal for drone rental companies, fleet operators, and repair units.",
    img: "/fleet-maintenance.jpg",
  },
];

const Application = () => {
  return (
    <main className="w-full min-h-screen bg-white flex justify-center items-center" id="application">
      <div className="max-w-360 mx-auto flex flex-col gap-10 py-24 px-6 w-full max-sm:py-12 max-sm:px-2.5">

        {/* Heading */}
        <div className="flex justify-between items-center mb-8">
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-zxblack max-sm:text-2xl"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Use Cases / Applications
          </motion.h2>

          <div className="flex gap-3">
            <button className="app-prev p-3 rounded-full border hover:bg-black hover:text-white transition">
              <GoArrowLeft size={22} />
            </button>
            <button className="app-next p-3 rounded-full border hover:bg-black hover:text-white transition">
              <GoArrowRight size={22} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Navigation]}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".app-next",
            prevEl: ".app-prev",
          }}
          spaceBetween={24}
          slidesPerView={1.1}
          breakpoints={{
            640: {
              slidesPerView: 2.2,
            },
            1024: {
              slidesPerView: 3.2,
            },
          }}
          className="w-full"
        >
          {cards.map((card, i) => (
            <SwiperSlide key={i}>
              <motion.div
                className="relative h-135 rounded-2xl overflow-hidden group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Image */}
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {card.title}
                  </h3>

                  <motion.p
                    className="text-white/90 text-sm"
                  >
                    {card.desc}
                  </motion.p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
};

export default Application;
