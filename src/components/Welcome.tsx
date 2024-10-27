"use client";
import React from "react";
import { motion } from "framer-motion";

function Welcome() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="container justify-center mx-auto flex flex-col md:flex-row items-center px-4">
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8 relative overflow-hidden glowing-border">
          <motion.img
            src="/logo.png"
            alt="Harsh Jolapara"
            className="w-52 h-52 rounded-full"
            initial={{ opacity: 0, x: -100, rotate: -10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 80,
              damping: 10,
            }}
          />
        </div>
        <div className="text-center md:text-left">
          <motion.h1
            className="text-5xl font-extrabold cursor-pointer"
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
            className="text-2xl mt-4 font-semibold cursor-pointer"
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
