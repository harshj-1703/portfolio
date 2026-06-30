import React from "react";
import { FiDownload } from "react-icons/fi";

function Resume() {
  return (
    <section
      id="resume"
      className="flex flex-col items-center justify-center bg-black text-white py-20"
    >
      <div className="bg-gray-900 border border-gray-800 rounded-2xl px-12 py-10 flex flex-col items-center gap-4 shadow-xl">
        <div className="w-16 h-16 rounded-full bg-blue-950 border border-blue-800 flex items-center justify-center mb-2">
          <FiDownload size={28} className="text-blue-400" />
        </div>
        <h2 className="text-4xl font-semibold font-josefin underline underline-offset-4">
          My CV
        </h2>
        <p className="text-gray-400 text-sm text-center max-w-xs">
          Download my resume to learn more about my experience and skills.
        </p>
        <a
          href="/resume.pdf"
          download
          className="mt-2 flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
        >
          <FiDownload size={18} />
          Download CV
        </a>
      </div>
    </section>
  );
}

export default Resume;
