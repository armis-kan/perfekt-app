import React from 'react';
import { motion } from 'framer-motion';

const MobileSidebar = ({ isOpen, onClose }) => {
  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: isOpen ? 0 : '-100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed top-0 left-0 w-64 h-screen bg-blue-800 text-white shadow-md transition-all ease-in-out"
    >
      <div className="p-4 bg-blue-800">
        <button onClick={onClose} className="text-white text-lg">
          <svg className='w-6 h-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Close_LG"> <path id="Vector" d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g></svg>        </button>
        <div className="mt-16 space-y-4 text-gray-200">
          <a href="/" className="block p-4 text-lg hover:bg-blue-200 hover:text-gray-700 transition-all ease-in-out">Naslovna</a>
          <a href="#services" className="block p-4 text-lg hover:bg-blue-200 hover:text-gray-700 transition-all ease-in-out">Naše usluge</a>
          <a href="#contact" className="block p-4 text-lg hover:bg-blue-200 hover:text-gray-700 transition-all ease-in-out">Kontakt</a>
          <a href="#gallery" className="block p-4 text-lg hover:bg-blue-200 hover:text-gray-700 transition-all ease-in-out">Galerija</a>
          <a href="#location" className="block p-4 text-lg hover:bg-blue-200 hover:text-gray-700 transition-all ease-in-out">Gdje se nalazimo</a>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileSidebar;
