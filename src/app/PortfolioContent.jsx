// app/PortfolioContent.js
"use client";

import React from "react";
import Projects from "./Projects";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "./ThemeProvider";

const renderSection = (title, content) => (
  <div className="mb-6">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    {content}
  </div>
);

export default function PortfolioContent({ portfolioData }) {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen ${theme === "dark" ? "bg-gray-900 text-green-400" : "bg-[#F0EAD6] text-gray-800"} font-mono p-4 transition-colors duration-300`}
    >
      <ThemeToggle />
      <div className="max-w-4xl mx-auto mt-8">
        <div className="bg-opacity-20 bg-gray-800 p-4 rounded-lg h-full overflow-y-scroll scrollbar-hide">
          {renderSection("About", <p>{portfolioData.about}</p>)}

          {renderSection(
            "Experience",
            <ul>
              {portfolioData.experience.map((exp, index) => (
                <li key={index} className="mb-4">
                  <h3 className="font-semibold">
                    {exp.title} at {exp.company}
                  </h3>
                  <p className="text-sm">{exp.date}</p>
                  <p>{exp.description}</p>
                </li>
              ))}
            </ul>,
          )}

          {renderSection(
            "Skills",
            <ul className="flex flex-wrap gap-2">
              {portfolioData.skills.map((skill, index) => (
                <li
                  key={index}
                  className="bg-opacity-20 bg-gray-700 px-2 py-1 rounded"
                >
                  {skill}
                </li>
              ))}
            </ul>,
          )}

          {renderSection(
            "Projects",
            <Projects projects={portfolioData.projects} />,
          )}
        </div>
      </div>
    </div>
  );
}
