import Image from "next/image";
import React from "react";

function About() {
  return (
    <section
      id="about"
      className="flex items-center justify-center bg-black text-white py-10 min-h-screen"
    >
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center px-4">
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
          <Image
            src="/coder.gif"
            alt="About Me"
            width={208}
            height={208}
            className="w-52 h-52"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="underline underline-offset-4 text-4xl font-bold mb-6 text-gray-100 font-josefin">
            About Me
          </h2>
          <p className="text-lg md:text-xl font-light leading-relaxed">
            Hi, I&apos;m Harsh Jolapara, a software developer with a background
            in Information Communication Engineering. Currently, I am working as
            a full stack developer in a software company based in Rajkot. I
            specialize in building comprehensive applications utilizing both
            front-end and back-end technologies, including Node.js, React.js,
            and databases (SQL/NoSQL). Additionally, I am experienced in using a
            variety of AWS services to develop scalable and secure solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
