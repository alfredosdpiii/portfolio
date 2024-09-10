"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const handleToggle = () => {
    console.log("Theme toggle clicked. Current theme:", theme); // Debug log
    toggleTheme();
  };

  return (
    <button
      onClick={handleToggle}
      className="fixed top-4 right-4 p-2 rounded-full bg-opacity-20 bg-gray-600 z-10"
    >
      {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
};

export default ThemeToggle;
