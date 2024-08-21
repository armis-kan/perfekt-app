import React from 'react';
import Hamburger from './Hamburger';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-blue-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-white overflow-x-hidden shadow-md z-50 relative">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-fit">
          {/* Left Column */}
          <div className="flex-1 flex justify-between items-center">
            <div className="flex items-center">
              <a href="/">
                <img src="./assets/logo.svg" alt="Logo" className="w-36 sm:w-48 md:w-56 lg:w-60 py-4" />
              </a>
            </div>

            {/* Center Column */}
            <div className="items-center justify-center flex-1 hidden sm:flex">
              <div className="flex space-x-6 text-lg">
                <a href="/" className="hover:text-gray-400 bg-gray-100 bg-opacity-5 p-4 rounded-2xl transition-all ease-in-out">Naslovna</a>
                <a href="#services" className="hover:text-gray-400 bg-gray-100 bg-opacity-5 p-4 rounded-2xl transition-all ease-in-out">Naše usluge</a>
                <a href="#contact" className="hover:text-gray-400 bg-gray-100 bg-opacity-5 p-4 rounded-2xl transition-all ease-in-out">Kontakt</a>
                <a href="#gallery" className="hover:text-gray-400 bg-gray-100 bg-opacity-5 p-4 rounded-2xl transition-all ease-in-out">Galerija</a>
              </div>
            </div>

            {/* Hamburger Button (for small screens) */}
            <div className="sm:hidden flex items-center">
              <Hamburger onClick={toggleSidebar} />
            </div>
          </div>

          {/* Right Column */}
          <div className="items-center justify-end hidden sm:flex">
            <a href="#location" className="text-xl bg-transparent p-3 border border-white rounded-2xl hover:bg-blue-100 hover:text-gray-800 transition-all ease-in-out">
              Gdje se nalazimo
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
