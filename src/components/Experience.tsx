import React from "react";
import { experiences } from "../common/constants";
import type { ExperienceItem } from "../common/interfaces";

function CardContent({ exp }: { exp: ExperienceItem }) {
  return (
    <>
      <h3 className="text-base font-bold font-josefin text-blue-700 dark:text-blue-400">
        {exp.role}
      </h3>
      <p className="text-sm font-semibold text-slate-800 dark:text-gray-200 mt-0.5">
        {exp.company}
      </p>
      <p className="text-xs text-gray-500 mt-0.5 mb-3">{exp.location}</p>
      <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700 dark:text-gray-300 mb-4">
        {exp.points.map((point, j) => (
          <li key={j}>{point}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-1.5">
        {exp.tags.map((tag) => (
          <span key={tag} className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
            {tag}
          </span>
        ))}
      </div>
    </>
  );
}

function Experience() {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center bg-gray-50 dark:bg-black text-gray-900 dark:text-white py-16"
    >
      <div className="container max-w-3xl mx-auto px-4">
        <h2 className="underline underline-offset-4 text-4xl font-bold mb-12 text-center font-josefin text-blue-900 dark:text-white">
          Experience
        </h2>

        {/* Mobile layout — full-width cards with left-border timeline */}
        <div className="sm:hidden space-y-6">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-8">
              {/* Connecting line to next entry */}
              {i < experiences.length - 1 && (
                <div className="absolute left-[13px] top-4 bottom-0 w-px bg-gradient-to-b from-blue-400/60 to-transparent" />
              )}
              {/* Dot */}
              <div className="absolute left-[7px] top-1 w-3.5 h-3.5 rounded-full bg-blue-500 border-[3px] border-gray-50 dark:border-black shadow-md shadow-blue-500/40 z-10" />
              {/* Date row */}
              <div className="flex items-center gap-2 mb-2.5">
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400">{exp.dateLabel}</span>
                <span className="text-[10px] text-gray-400 dark:text-gray-500">– {exp.endLabel}</span>
              </div>
              {/* Full-width card */}
              <div className="w-full bg-white dark:bg-gray-900 rounded-xl px-4 py-4 border border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-700 transition-colors duration-300 shadow-sm">
                <CardContent exp={exp} />
              </div>
            </div>
          ))}
        </div>

        {/* Desktop layout — 3-column grid: date | dot+line | card */}
        <div className="hidden sm:block space-y-8">
          {experiences.map((exp, i) => (
            <div key={i} className="grid items-start gap-4" style={{ gridTemplateColumns: "90px 20px 1fr" }}>
              {/* Date column */}
              <div className="text-right pt-1.5">
                <p className="text-xs font-bold text-blue-600 dark:text-blue-400 leading-tight">{exp.dateLabel}</p>
                <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-0.5">{exp.endLabel}</p>
              </div>
              {/* Dot + connecting line */}
              <div className="flex flex-col items-center">
                <div className="w-3.5 h-3.5 rounded-full bg-blue-500 border-[3px] border-gray-50 dark:border-black shadow-md shadow-blue-500/40 mt-1.5 shrink-0 z-10" />
                {i < experiences.length - 1 && (
                  <div className="w-px bg-gradient-to-b from-blue-400/60 to-transparent flex-1 mt-1.5" style={{ minHeight: "60px" }} />
                )}
              </div>
              {/* Card */}
              <div className="bg-white dark:bg-gray-900 rounded-xl px-5 py-5 border border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-700 transition-colors duration-300 shadow-sm">
                <CardContent exp={exp} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
