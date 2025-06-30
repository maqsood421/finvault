"use client";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-white/80 backdrop-blur-sm shadow-inner mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 text-center animate-fade-in">
        <h2 className="text-xl font-bold text-indigo-600 mb-4">FinVault</h2>
        <p className="text-gray-600 mb-6">
          Secure your finances, plan your future.
        </p>
        <div className="flex justify-center gap-6 text-gray-600 text-2xl mb-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-black transition-transform hover:scale-125" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-blue-600 transition-transform hover:scale-125" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="hover:text-blue-400 transition-transform hover:scale-125" />
          </a>
        </div>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} FinVault. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
