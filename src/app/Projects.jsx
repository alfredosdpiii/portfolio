"use client";

import React, { useState, useEffect } from "react";
import { ExternalLink, ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";

const FullScreenImage = ({ src, alt, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center">
      <div className="w-full flex justify-end p-4">
        <button
          onClick={onClose}
          className="text-red-600 hover:text-red-300 transition-colors"
          aria-label="Close full-screen image"
        >
          <X size={24} />
        </button>
      </div>
      <div className="relative w-full h-[calc(100vh-64px)]">
        <Image src={src} alt={alt} layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};

const ImageGallery = ({ screenshots }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullScreenImage, setFullScreenImage] = useState(null);

  useEffect(() => {
    setCurrentIndex(0);
  }, [screenshots]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const closeFullScreen = () => {
    setFullScreenImage(null);
  };

  return (
    <div className="relative">
      <div
        className="relative w-full h-64 md:h-96 cursor-pointer"
        onClick={() => setFullScreenImage(screenshots[currentIndex])}
      >
        <Image
          src={screenshots[currentIndex]}
          alt={`Screenshot ${currentIndex + 1}`}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full"
      >
        <ChevronRight size={24} />
      </button>
      <div className="text-center mt-2">
        {currentIndex + 1} / {screenshots.length}
      </div>
      {fullScreenImage && (
        <FullScreenImage
          src={fullScreenImage}
          alt={`Full-screen Screenshot ${currentIndex + 1}`}
          onClose={closeFullScreen}
        />
      )}
    </div>
  );
};

const Projects = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <li
            key={index}
            className="bg-opacity-20 bg-gray-700 p-3 rounded cursor-pointer hover:bg-opacity-30 transition-colors duration-200"
            onClick={() =>
              setSelectedProject(selectedProject === project ? null : project)
            }
          >
            <h3 className="font-semibold">{project.name}</h3>
            <p className="text-sm">{project.description}</p>
          </li>
        ))}
      </ul>
      {selectedProject && (
        <div className="mt-4 p-4 bg-opacity-10 bg-gray-700 rounded">
          <h3 className="font-semibold mb-2">
            {selectedProject.name} Details:
          </h3>
          <p className="whitespace-pre-line mb-4">{selectedProject.details}</p>
          <ImageGallery screenshots={selectedProject.screenshots} />
          <a
            href={selectedProject.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-4 text-blue-400 hover:text-blue-300"
          >
            Visit Website <ExternalLink size={16} className="ml-1" />
          </a>
        </div>
      )}
    </div>
  );
};

export default Projects;
