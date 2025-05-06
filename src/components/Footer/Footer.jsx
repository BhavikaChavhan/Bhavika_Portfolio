// src/components/FooterSection.jsx
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-8 px-[8vw]" data-aos='fade-up'>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left Side */}
        <div className="text-center md:text-left" >
          <h3 className="text-xl font-semibold">Bhavika Chavhan</h3>
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} All Rights Reserved</p>
        </div>

        {/* Right Side - Socials */}
        <div className="flex space-x-6 text-xl">
          <a
            href="https://www.linkedin.com/in/bhavika-chavhan-111b79278"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/BhavikaChavhan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:bhervi2024@gmail.com"
            className="hover:text-purple-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
