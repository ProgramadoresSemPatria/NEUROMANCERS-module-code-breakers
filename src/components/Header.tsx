import React from 'react';
import logo from '../assets/símbolo.png';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white shadow-lg fixed w-full top-0 left-0 z-10">
<<<<<<< HEAD:src/components/header.tsx
      <div className="container mx-auto px-6 py-4 flex items-center">
        <div className="flex items-center space-x-3">
=======
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
>>>>>>> b046b2665c770c8b973a9912bfff01853297e06c:src/components/Header.tsx
          <img
            src={logo}
            alt="Code Breakers Logo"
            className="w-12 h-12 object-contain animate-fade-in hover:scale-110 transition-transform"
          />
          <a
            href="/"
            className="text-xl font-semibold text-gray-100 hover:text-gray-300 transition-colors"
          >
            Borderless Coding
          </a>
        </div>

<<<<<<< HEAD:src/components/header.tsx
        <nav className="flex-1 flex justify-center space-x-10">
=======
        <nav className="absolute left-1/2 transform -translate-x-1/2">
>>>>>>> b046b2665c770c8b973a9912bfff01853297e06c:src/components/Header.tsx
          <a
            href="/roadmap"
            className="text-lg text-gray-300 hover:text-white transition-transform transform hover:scale-105 font-bold relative group"
          >
            Roadmap
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-white transition-all group-hover:w-full"></span>
          </a>
        </nav>

        <div className="space-x-4">
          <a
            href="/"
            className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

