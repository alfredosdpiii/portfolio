import React from "react";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-center items-center space-x-4">
        <a
          href="https://github.com/alfredosdpiii"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors"
          aria-label="GitHub Profile"
        >
          <Github size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/asdpiii/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors"
          aria-label="LinkedIn Profile"
        >
          <Linkedin size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
