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
            Jay Hind! I'm <strong>Harsh Jolapara</strong>, a Software Engineer
            and a passionate <strong>Full Stack Developer</strong> with
            expertise in
            <strong>Cloud (AWS)</strong>,{" "}
            <strong>CCaaS (Amazon Connect)</strong>, and
            <strong>AI Agent Development</strong>, focused on building scalable,
            secure, and intelligent cloud-based applications.
          </p>

          <p className="text-lg md:text-xl font-light leading-relaxed mt-4">
            I hold a{" "}
            <strong>B.Tech in Information & Communication Technology</strong>{" "}
            and have hands-on industry experience working as a Software
            Engineer. With over
            <strong>2+ years of professional experience</strong>, I have worked
            extensively on:
          </p>

          <ul className="list-disc ml-6 mt-3 text-lg md:text-xl font-light leading-relaxed">
            <li>
              <strong>AWS Services:</strong> Amazon Connect, AWS Lambda, Amazon
              Bedrock
            </li>
            <li>
              <strong>Backend & APIs:</strong> Serverless architectures, cloud
              integrations
            </li>
            <li>
              <strong>Frontend & Mobile:</strong> Flutter & Dart
            </li>
            <li>
              <strong>AI & ML Foundations:</strong> Image Processing, AI Agent
              Development
            </li>
          </ul>

          <p className="text-lg md:text-xl font-light leading-relaxed mt-4">
            I have contributed to real-world products, cloud contact center
            solutions, and scalable applications while working at
            <strong>Digiclarity, LLC</strong> and
            <strong>ProminentPixel</strong>, progressing from
            <strong>Junior Software Engineer</strong> to
            <strong>Software Engineer</strong> roles.
          </p>

          <p className="text-lg md:text-xl font-light leading-relaxed mt-4">
            I am also a <strong>patent and copyright holder</strong>, including:
          </p>

          <ul className="list-disc ml-6 mt-3 text-lg md:text-xl font-light leading-relaxed">
            <li>GetSetWork Application</li>
            <li>Smart Dustbin</li>
          </ul>

          <p className="text-lg md:text-xl font-light leading-relaxed mt-4">
            I enjoy solving complex problems, exploring emerging cloud and AI
            technologies, and building solutions that create real impact.
          </p>

          <p className="text-lg md:text-xl font-light leading-relaxed mt-4">
            📍 <strong>Rajkot, Gujarat, India</strong>
            <br />
            Open to opportunities in
            <strong>Cloud Development</strong>,
            <strong>Full Stack Development</strong>,<strong>CCaaS</strong>, and
            <strong>AI-driven applications</strong>.
          </p>

          <p className="text-lg md:text-xl font-light leading-relaxed mt-4 font-medium">
            Let’s connect and build something impactful!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
