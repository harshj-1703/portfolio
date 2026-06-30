import Image from "next/image";
import React from "react";
import { projects } from "../common/constants";

function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white py-10"
    >
      <div className="container mx-auto px-4">
        <h2 className="underline underline-offset-4 text-4xl font-bold mb-6 text-center font-josefin text-blue-900 dark:text-white">
          Personal Projects
        </h2>
        <div className="flex flex-wrap justify-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col m-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg overflow-hidden max-w-xs w-full hover:border-blue-400 dark:hover:border-blue-700 transition-colors duration-300 ${project.link ? "cursor-pointer" : ""}`}
            >
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full block overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <Image
                    width={320}
                    height={192}
                    src={project.image}
                    alt={project.name}
                    className="w-full h-44 object-contain p-2 transition-transform duration-300 hover:scale-105"
                  />
                </a>
              ) : (
                <div className="w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <Image
                    width={320}
                    height={192}
                    src={project.image}
                    alt={project.name}
                    className="w-full h-44 object-contain p-2"
                  />
                </div>
              )}
              <div className="p-4 flex-1">
                <h3 className="text-lg font-semibold text-center mb-1">
                  {project.name}
                </h3>
                <p className="text-center text-gray-500 dark:text-gray-400 text-xs leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
