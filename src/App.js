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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <MobileSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <Landing />
      <Services />
      <Contact />
      <Location />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
