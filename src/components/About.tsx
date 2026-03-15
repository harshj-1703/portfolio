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
            Jay Hind! I&apos;m <strong>Harsh Jolapara</strong>, an{" "}
            <strong>AWS Certified Cloud Practitioner</strong> and Software
            Engineer with 2+ years of experience specializing in{" "}
            <strong>Full Stack Development</strong>,{" "}
            <strong>Cloud (AWS)</strong>,{" "}
            <strong>CCaaS (Amazon Connect)</strong>, and{" "}
            <strong>AI Agent Development</strong>.
          </p>

          <p className="text-lg md:text-xl font-light leading-relaxed mt-4">
            I hold a{" "}
            <strong>
              B.Tech in Information &amp; Communication Technology
            </strong>{" "}
            and am currently working at <strong>Digiclarity, LLC</strong> as a{" "}
            <strong>Software Engineer</strong>.
          </p>

          <p className="text-lg md:text-xl font-light leading-relaxed mt-4">
            I&apos;m also a <strong>patent and copyright holder</strong> for the
            GetSetWork Application and Smart Dustbin projects.
          </p>

          <p className="text-lg md:text-xl font-light leading-relaxed mt-4">
            Open to opportunities in Cloud, Full Stack, CCaaS, and AI-driven
            development.{" "}
            <a
              href="https://www.linkedin.com/in/harshjolapara/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
            >
              Visit my LinkedIn for more details.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
