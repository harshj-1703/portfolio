import React from "react";
import { FiExternalLink } from "react-icons/fi";

const patents = [
  {
    title: "GetSetWork Application",
    type: "Copyright",
    description:
      "A job-seeking platform connecting job seekers and companies using Flutter and Firebase, featuring OTP verification, Google Ads, and real-time listings.",
    number: null,
    link: null,
  },
  {
    title: "Smart Dustbin",
    type: "Patent",
    description:
      "An IoT-based smart dustbin system that automates waste management and notifies authorities when full.",
    number: null,
    link: null,
  },
];

function Patents() {
  return (
    <section
      id="patents"
      className="flex flex-col items-center justify-center bg-black text-white py-10"
    >
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="underline underline-offset-4 text-4xl font-bold mb-10 text-center font-josefin">
          Patents &amp; Copyrights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {patents.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-blue-800 transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    item.type === "Patent"
                      ? "bg-blue-900 text-blue-300"
                      : "bg-purple-900 text-purple-300"
                  }`}
                >
                  {item.type}
                </span>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <FiExternalLink size={18} />
                  </a>
                )}
              </div>

              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

              {item.number && (
                <p className="text-xs text-gray-500 mb-2 font-mono">
                  {item.number}
                </p>
              )}

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Patents;
