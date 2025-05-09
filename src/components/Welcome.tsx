"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const socialMediaLinks = [
  {
    name: "Email",
    url: "mailto:harshj6680@google.com",
    logo: "/logos/Email.svg",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/harsh-jolapara-a63b99205/",
    logo: "/logos/LinkedIn.svg",
  },
  {
    name: "GitHub",
    url: "https://github.com/harshj-1703",
    logo: "/logos/GitHub.svg",
  },
  {
    name: "Stack Overflow",
    url: "https://stackoverflow.com/users/19262833/harsh-jolapara",
    logo: "/logos/Stack Overflow.svg",
  },
  {
    name: "Medium",
    url: "https://medium.com/@harshj-1703",
    logo: "/logos/Medium.svg",
  },
];

function Welcome() {
  return (
    <section
      id="welcome"
      className="flex items-center justify-center min-h-screen bg-black text-white relative"
    >
      <div className="container justify-center mx-auto flex flex-col md:flex-row items-center px-4">
        <div className="absolute top-4 right-5">
          <div className="flex justify-center space-x-4">
            {socialMediaLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Image
                  src={link.logo}
                  alt={link.name}
                  className="w-9 h-9 cursor-pointer transition-transform transform hover:scale-110"
                />
              </a>
            ))}
          </div>
        </div>
        <div className="absolute top-4 left-5">
          <motion.img
            src="/Programming_Languages.gif"
            alt="Icon 2"
            className="w-12 h-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
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
            className="text-5xl font-extrabold cursor-pointer font-josefin"
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
            className="text-2xl mt-4 font-semibold cursor-pointer font-playwritegbs"
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
