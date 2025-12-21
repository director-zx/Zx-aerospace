"use client";

import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white px-8 pt-20 pb-10 max-sm:px-2.5">
      <div className="max-w-360 mx-auto flex flex-col items-center text-center gap-8">
        {/* Logo */}
        <motion.img
          src="/zx-white-logo.png"
          alt="ZX AeroSpace Logo"
          className="h-12 w-auto object-contain"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        />

        {/* Contact Info */}
        <motion.div
          className="flex flex-col md:flex-row gap-3 md:gap-6 text-white/70 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span>
            Email:{" "}
            <span className="text-white">
              {" "}
              <a href="mailto:director@zxaero.space">director@zxaero.space</a>
            </span>
          </span>
          <span className="hidden md:inline">|</span>
          <span>
            Phone:{" "}
            <span className="text-white">
              {" "}
              <a href="tel:+919600075808">+91 96000 75808</a>
            </span>
          </span>
          <span className="hidden md:inline">|</span>
          <span>
            Address:{" "}
            <span className="text-white">
              No.8 Rizwan road Kodungaiyur chennai, India.
            </span>
          </span>
        </motion.div>

        {/* Divider */}
        <div className="w-full max-w-xl h-px bg-white/10 my-4" />

        {/* Copyright */}
        <motion.p
          className="text-xs text-white/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          © 2025 ZX AeroSpace — A Division of Fine Techno Plast. All rights
          reserved | Designed and developed by{" "}
          <a
            href="https://chezhiyansathish.vercel.app/"
            target="blank"
            className="font-medium text-zxsoft"
          >
            Chezhiyan Sathish
          </a>
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
