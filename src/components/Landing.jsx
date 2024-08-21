import React, { useState } from 'react';
import CarWashAnimation from './CarWashAnimation';

const Landing = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = (loading) => {
    setIsLoading(loading);
  };

  return (
    <section id="landing" className="relative py-16 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm shadow-md overflow-x-hidden -z-30">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-[70px] sm:text-[50px] md:text-[80px] lg:text-[120px] xl:text-[140px] font-extrabold text-white opacity-15 text-center">
          SELF SERVICE CAR WASH
        </h1>
      </div>

      {/* Animation Container */}
      <div className="relative w-full h-[350px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
        <CarWashAnimation onLoadComplete={handleLoadComplete} />
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
            <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
          </div>
        )}
      </div>

      {/* Bouncing Arrow */}
      <a href="#services" className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <svg
          className="w-10 h-10 text-white animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </a>
    </section>
  );
};

export default Landing;
