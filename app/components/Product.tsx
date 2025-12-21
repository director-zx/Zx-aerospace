"use client";

import React from "react";
import { motion } from "framer-motion";
import { GiWindTurbine } from "react-icons/gi";
import { WiStrongWind } from "react-icons/wi";
import { IoInfiniteOutline } from "react-icons/io5";
import { VscGraphLine } from "react-icons/vsc";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import { RiLoopRightFill } from "react-icons/ri";
import FeatureCarousel from "../layouts/FeatureCarousel";

const ProductFeatures = () => {
  const features = [
    {
      title: "Indigenous Carbon Fibre Composite",
      desc: "High-strength material engineered for durability and optimized thrust.",
      icon: <GiWindTurbine />,
    },
    {
      title: "Aerodynamic Efficiency",
      desc: "Improved airflow design ensures longer flight times and lower energy consumption.",
      icon: <WiStrongWind />,
    },
    {
      title: "Precision Balanced",
      desc: "Reduced vibration → smoother flight, less motor stress, enhanced stability for agricultural payloads.",
      icon: <IoInfiniteOutline />,
    },
    {
      title: "High Impact Resistance",
      desc: "Nylon blend with carbon reinforcement ensures field durability, even in demanding conditions.",
      icon: <VscGraphLine />,
    },
    {
      title: "OEM-Ready Production Capability",
      desc: "Manufactured at Fine Techno Plast, a 50-year-old industrial facility equipped for high-volume and consistent output.",
      icon: <MdOutlinePrecisionManufacturing />,
    },
    {
      title: "CW + CCW Pair Availability",
      desc: "Perfectly tuned rotational pairs for multi-rotor agricultural drones.",
      icon: <RiLoopRightFill />,
    },
  ];

  return (
    <main className="w-full bg-white px-8 max-sm:px-2.5" id="product">
      <div className="max-w-360 mx-auto flex flex-col lg:flex-row gap-16 py-24 max-sm:py-12 max-sm:gap-8 max-sm:flex-col-reverse">
        {/* --- LEFT SIDE: SCROLLING CONTENT --- */}
        <div className="w-full lg:w-1/2 flex flex-col gap-10">
          <div className="mb-8 max-sm:mb-0">
            <motion.h2
              className="text-6xl font-bold text-zxblack mb-4 max-sm:text-2xl max-sm:mb-2"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Product Features
            </motion.h2>
          </div>

          <div className="flex flex-col gap-8 pb-20 max-sm:pb-2.5">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="group flex flex-col gap-4 bg-white border border-gray-200 p-8 rounded-[20px] shadow-sm hover:shadow-xl hover:border-zxprimary transition-all duration-300 max-sm:p-4"
              >
                {/* Icon Box - Outline Style */}
                <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 text-2xl group-hover:text-zxprimary group-hover:border-zxprimary transition-all duration-300">
                  {feature.icon}
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-3xl font-bold text-zxblack leading-tight max-sm:text-xl">
                    {feature.title}
                  </h3>
                  <motion.p
                    className="text-left font-sans text-xl max-w-2xl text-zxblack/70 max-sm:text-base"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {feature.desc}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- RIGHT SIDE: STATIC FIXED IMAGE --- */}
        <div className="w-full lg:w-1/2 relative">
          <div className="lg:sticky lg:top-32 flex items-center bg-white justify-center overflow-hidden h-125 lg:h-[75vh]">
            {/* <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              src="/product-features.webp"
              alt="ZX Aerospace Product Features"
              className="w-full h-full rounded-[20px] object-cover object-center drop-shadow-[0_30px_60px_rgba(0,0,0,0.1)]"
            /> */}
            <FeatureCarousel />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductFeatures;
