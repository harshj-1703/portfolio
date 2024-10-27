// src/components/Navbar.tsx
"use client";

import { useTheme } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

export const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-md">
      <div className="text-xl font-bold text-gray-800 dark:text-gray-200">
        My Portfolio
      </div>
      <ul className="flex space-x-4">
        <li>
          <a
            href="#home"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#technologies"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
          >
            Technologies
          </a>
        </li>
        <li>
          <a
            href="#resume"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
          >
            Resume
          </a>
        </li>
      </ul>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {theme === "dark" ? (
          <FaSun className="text-yellow-500" />
        ) : (
          <FaMoon className="text-gray-800" />
        )}
      </button>
    </nav>
  );
};
