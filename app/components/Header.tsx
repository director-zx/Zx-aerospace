"use client";

import React from "react";
import { PiFanThin } from "react-icons/pi";
import { motion } from "framer-motion";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "#" },
  { name: "Solutions", href: "#solution" },
  { name: "Product", href: "#product" },
  { name: "Specifications", href: "#specifications" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  return (
    <motion.main
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 z-50 w-full bg-zxwhite border-b border-zx-gray/20"
    >
      <div className="mx-auto w-full max-w-360 px-8 py-3 flex items-center justify-between gap-6 max-sm:px-2.5">
        {/* LOGO */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex items-center"
        >
          <a href="#">
            <Image
              src="/zx-logo.webp"
              alt="ZX AeroSpace Logo"
              width={150}
              height={40}
              priority
            />
          </a>
        </motion.div>

        {/* NAVIGATION */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.08 }}
                className="relative group"
              >
                <a
                  href={item.href}
                  className="text-sm font-medium text-zx-black tracking-wide transition-colors duration-300 group-hover:text-zx-primary"
                >
                  {item.name}
                </a>
                {/* underline */}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-zx-primary transition-all duration-300 group-hover:w-full" />
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* CTA BUTTON */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center"
        >
          <a href="#contact">
            <motion.button
              whileHover={{
                backgroundColor: "#171717",
                color: "#ffffff",
              }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 border border-zx-black px-5 py-2 text-sm font-medium tracking-wide text-zx-black cursor-pointer"
            >
              Request Sample
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
              >
                <PiFanThin size={18} />
              </motion.span>
            </motion.button>
          </a>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default Header;
