"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import HeroCanvas from "./HeroCanvas";
import ThemeToggle from "./ThemeToggle";

import { socialMediaLinks } from "../common/constants";

function Welcome() {
  return (
    <section
      id="welcome"
      className="flex items-center justify-center min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white relative overflow-hidden"
    >
      <HeroCanvas />

      {/* Top-right: social links + theme toggle */}
      <div className="absolute top-4 right-3 sm:right-5 z-20 flex items-center gap-2">
        <div className="flex items-center space-x-2 sm:space-x-3 bg-black/60 dark:bg-black/40 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 border border-white/10">
          {socialMediaLinks.map((link) => (
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Image src={link.logo} alt={link.name} width={28} height={28} className="w-5 h-5 sm:w-7 sm:h-7 cursor-pointer transition-transform transform hover:scale-110" />
            </a>
          ))}
        </div>
        <ThemeToggle />
      </div>

      {/* Programming GIF */}
      <div className="absolute top-4 left-5 z-20">
        <motion.img
          src="/Programming_Languages.gif"
          alt="Programming Languages"
          className="w-12 h-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      {/* Main content */}
      <div className="container justify-center mx-auto flex flex-col md:flex-row items-center px-4 z-10">
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8 relative overflow-hidden glowing-border">
          <motion.img
            src="/logo.png"
            alt="Harsh Jolapara"
            className="w-52 h-52 rounded-full"
            initial={{ opacity: 0, x: -100, rotate: -10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 80, damping: 10 }}
          />
        </div>
        <div className="text-center md:text-left">
          <motion.h1
            className="text-5xl font-extrabold cursor-pointer font-josefin dark:text-white text-blue-900"
            style={{ fontSize: "80px" }}
            drag
            dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Harsh Jolapara
          </motion.h1>
          <motion.h2
            className="text-2xl mt-4 font-semibold cursor-pointer font-playwritegbs dark:text-white text-blue-900"
            style={{ fontSize: "40px" }}
            drag
            dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            Software Developer
          </motion.h2>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
