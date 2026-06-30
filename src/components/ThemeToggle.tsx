"use client";
import { useTheme } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="flex items-center gap-2 bg-gray-900/95 backdrop-blur-md rounded-full px-3 py-1.5 sm:px-5 sm:py-2.5 shadow-2xl border border-gray-700/60 hover:border-blue-500/60 transition-all duration-300"
    >
      <FaSun className={`text-xs sm:text-base transition-colors duration-300 ${isDark ? "text-gray-600" : "text-yellow-400"}`} />
      <div className={`relative w-7 h-3.5 sm:w-10 sm:h-5 rounded-full transition-colors duration-300 ${isDark ? "bg-blue-600" : "bg-yellow-400"}`}>
        <div className={`absolute top-0.5 w-2.5 h-2.5 sm:w-4 sm:h-4 rounded-full bg-white shadow-md transition-all duration-300 ${isDark ? "left-[14px] sm:left-[22px]" : "left-0.5"}`} />
      </div>
      <FaMoon className={`text-xs sm:text-base transition-colors duration-300 ${isDark ? "text-blue-400" : "text-gray-500"}`} />
    </button>
  );
}
