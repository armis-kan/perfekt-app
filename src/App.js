import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Contact from './components/Contact';
import Location from './components/Location';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Gallery from './components/Gallery';
import MobileSidebar from './components/MobileSidebar';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Loading state

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLoadingChange = (loading) => {
    setIsLoading(loading);
  };

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
          <div className="w-16 h-16 border-6 border-t-4 border-white-500 border-solid rounded-full animate-spin"></div>
        </div>
      )}
      <Navbar toggleSidebar={toggleSidebar} />
      <MobileSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <Landing onLoadingChange={handleLoadingChange} />
      <Services />
      <Contact />
      <Location />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
