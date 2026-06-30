import React from "react";
import { FiDownload } from "react-icons/fi";
import { patents } from "../common/constants";

function Patents() {
  return (
    <section
      id="patents"
      className="flex flex-col items-center justify-center bg-gray-50 dark:bg-black text-gray-900 dark:text-white py-10"
    >
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="underline underline-offset-4 text-4xl font-bold mb-10 text-center font-josefin text-blue-900 dark:text-white">
          Patents &amp; Copyrights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {patents.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-800 transition-colors duration-300"
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
                {item.download && (
                  <a
                    href={item.download}
                    download
                    title={item.downloadLabel ?? "Download"}
                    className="p-1.5 rounded-full text-gray-400 hover:text-purple-500 dark:hover:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-950 transition-colors duration-200"
                  >
                    <FiDownload size={15} />
                  </a>
                )}
              </div>

              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

              {item.number && (
                <p className="text-xs text-gray-500 mb-2 font-mono">
                  {item.number}
                </p>
              )}

              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
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
