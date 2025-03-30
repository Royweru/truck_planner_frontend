import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-950/85 bg-opacity-80 backdrop-blur-md shadow-lg z-50">
      <div className="container mx-auto px-4 sm:px-6 py-3">
     
        <div className="flex justify-between items-center">
        <a href="/">
        <div className="flex items-center">
            <img src="/truck-logo.png" alt="TruckMaster Pro Logo" className="h-8 sm:h-10 mr-2 sm:mr-3" />
            <span className="text-white text-lg sm:text-xl font-bold">TruckMaster Pro</span>
          </div>
        </a>
         

          {/* Desktop navigation links - hidden on mobile */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-white hover:text-blue-300 transition duration-300">Features</a>
            <a href="#whyus" className="text-white hover:text-blue-300 transition duration-300">Why us</a>
            <a href="#blogs" className="text-white hover:text-blue-300 transition duration-300">Blogs</a>
            <a href="/auth" className="text-white border border-white px-4 py-2 rounded-full hover:bg-white hover:text-blue-900 transition duration-300">
              Login / Sign Up
            </a>
          </div>

          {/* Mobile menu button - visible only on mobile */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-white focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu - shown when menu is toggled */}
        {isMenuOpen && (
          <div className="md:hidden py-4 px-2 space-y-3 flex flex-col items-center">
            <a href="#features" className="text-white hover:text-blue-300 transition duration-300 py-2 w-full text-center">Features</a>
            <a href="#whyus" className="text-white hover:text-blue-300 transition duration-300 py-2 w-full text-center">Why us</a>
            <a href="#blogs" className="text-white hover:text-blue-300 transition duration-300 py-2 w-full text-center">Blogs</a>
            <a href="/auth" className="text-white border border-white px-4 py-2 rounded-full hover:bg-white hover:text-blue-900 transition duration-300 w-2/3 text-center mt-2">
              Login / Sign Up
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;