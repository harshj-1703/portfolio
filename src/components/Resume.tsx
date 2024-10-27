import React from "react";

function Resume() {
  return (
    <section
      id="resume"
      className="flex flex-col items-center justify-center bg-black text-white py-10"
    >
      <h2 className="underline underline-offset-4 text-4xl font-semibold mb-6 font-josefin">
        My Resume
      </h2>
      <a
        href="/resume.pdf"
        download
        className="bg-[#00008B] hover:bg-blue-700 text-white font-bold py-3 px-6 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
      >
        Download Resume
      </a>
    </section>
  );
}

export default Resume;
