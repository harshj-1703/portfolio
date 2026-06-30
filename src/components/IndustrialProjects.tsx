import React from "react";
import { industrialProjects } from "../common/constants";

function IndustrialProjects() {
  return (
    <section
      id="industrial-projects"
      className="flex flex-col items-center justify-center bg-white dark:bg-black text-gray-900 dark:text-white py-16"
    >
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="underline underline-offset-4 text-4xl font-bold mb-10 text-center font-josefin text-blue-900 dark:text-white">
          Industrial Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {industrialProjects.map((project, i) => (
            <div
              key={i}
              className="flex flex-col bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-700 transition-colors duration-300 shadow-sm"
            >
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <h3 className="text-base font-bold font-josefin text-blue-700 dark:text-blue-400 flex-1 min-w-0">
                  {project.name}
                </h3>
                <span className="text-[10px] font-semibold text-blue-600 dark:text-blue-500 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 px-2 py-0.5 rounded-full whitespace-nowrap shrink-0">
                  {project.period}
                </span>
              </div>

              <ul className="list-disc list-inside space-y-1.5 text-xs text-gray-700 dark:text-gray-300 mb-4 flex-1 leading-relaxed">
                {project.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustrialProjects;
