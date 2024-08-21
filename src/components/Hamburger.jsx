import React from 'react';
import { motion } from 'framer-motion';

const Hamburger = ({ onClick, isOpen }) => {
  return (
    <button onClick={onClick} className="p-4 text-white focus:outline-none">
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.3 }}
        className="w-6 h-0.5 bg-white my-1"
      />
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="w-6 h-0.5 bg-white my-1"
      />
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: isOpen ? -45 : 0 }}
        transition={{ duration: 0.3 }}
        className="w-6 h-0.5 bg-white my-1"
      />
    </button>
  );
};

export default Hamburger;
