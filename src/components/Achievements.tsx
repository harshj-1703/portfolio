import React from "react";
import { FiDownload, FiExternalLink } from "react-icons/fi";
import { achievements } from "../common/constants";

function Achievements() {
  return (
    <section
      id="achievements"
      className="flex flex-col items-center justify-center bg-white dark:bg-black text-gray-900 dark:text-white py-10"
    >
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="underline underline-offset-4 text-4xl font-bold mb-10 text-center font-josefin text-blue-900 dark:text-white">
          Achievements &amp; Certificates
        </h2>

        <div className="flex flex-col gap-4">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-50 dark:bg-gray-900 rounded-xl px-6 py-4 border border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-800 transition-colors duration-300 gap-4"
            >
              <div className="flex-1">
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                  {item.issuer}
                  {item.year && (
                    <span className="ml-2 text-gray-400 dark:text-gray-600">· {item.year}</span>
                  )}
                  {item.expiry && (
                    <span className="ml-2 text-gray-400 dark:text-gray-600">
                      · Expires {item.expiry}
                    </span>
                  )}
                </p>
              </div>

              <div className="flex items-center gap-3 flex-shrink-0">
                {item.verifyLink && (
                  <a
                    href={item.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 border border-blue-300 dark:border-blue-800 hover:border-blue-500 text-sm font-semibold py-1.5 px-4 rounded-lg transition-colors duration-200"
                  >
                    <FiExternalLink size={14} />
                    Verify
                  </a>
                )}
                {item.downloadLink && (
                  <a
                    href={item.downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="flex items-center gap-1.5 bg-blue-700 hover:bg-blue-600 text-white text-sm font-semibold py-1.5 px-4 rounded-lg transition-colors duration-200"
                  >
                    <FiDownload size={14} />
                    Download
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
