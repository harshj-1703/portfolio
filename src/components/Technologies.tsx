import Image from "next/image";
import React from "react";
import { technologies } from "../common/constants";

function Technologies() {
  return (
    <section
      id="technologies"
      className="flex flex-col items-center justify-center bg-gray-50 dark:bg-black text-gray-900 dark:text-white py-14"
    >
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="underline underline-offset-4 text-4xl font-bold mb-8 text-center font-josefin text-blue-900 dark:text-white">
          Technologies Worked With
        </h2>

        {/* Table card */}
        <div className="border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-sm">
          {technologies.map((cat, i) => (
            <div
              key={i}
              className={`flex flex-col sm:flex-row sm:items-center gap-3 px-5 py-4 ${
                i % 2 === 0
                  ? "bg-white dark:bg-gray-900"
                  : "bg-gray-50/80 dark:bg-gray-800/50"
              } ${i < technologies.length - 1 ? "border-b border-gray-200 dark:border-gray-700" : ""}`}
            >
              {/* Category label */}
              <div className="sm:w-40 shrink-0">
                <span className="text-[11px] font-bold uppercase tracking-widest text-blue-700 dark:text-blue-400">
                  {cat.category}
                </span>
              </div>

              {/* Icons row */}
              <div className="flex flex-wrap gap-3">
                {cat.items.map((tech) => (
                  <a
                    key={tech.name}
                    href={tech.doc}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={tech.name}
                    className="flex flex-col items-center gap-0.5 group"
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/40 border border-gray-200 dark:border-gray-600 group-hover:border-blue-300 dark:group-hover:border-blue-600 transition-all duration-200 group-hover:scale-110">
                      <Image src={tech.logo} alt={tech.name} width={26} height={26} />
                    </div>
                    <span className="text-[9px] text-gray-500 dark:text-gray-400 max-w-[40px] text-center leading-tight">
                      {tech.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
