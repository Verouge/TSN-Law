import React, { useState, useEffect } from 'react';
import heroImage from '../assets/hero.jpg'; // Adjust the path as needed

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Hero Image */}
      <div
        className={`absolute inset-0 bg-cover bg-center ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>

      {/* Grey Overlay */}
      <div className={`absolute inset-0 bg-gray-500 opacity-75 ${loaded ? 'left-0' : 'left-full'} transition-left duration-1000`}></div>

      {/* Other hero content */}
    </div>
  );
};

export default Hero;
