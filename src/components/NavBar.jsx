import React, { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar fixed top-8 left-0 z-50 w-full py-1 px-20 bg-transparent">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="logo flex gap-7 items-center">
          <div className="lines flex flex-col gap-[5px]">
            <div className="line w-15 h-2 bg-white"></div>
            <div className="line w-8 h-2 bg-white"></div>
            <div className="line w-5 h-2 bg-white"></div>
          </div>
          <h3 className="text-4xl -mt-[8px] leading-none text-white font-bold">Ananta</h3>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <a href="#home" className="text-white hover:text-yellow-500 transition-colors duration-300">Home</a>
          <a href="#about" className="text-white hover:text-yellow-500 transition-colors duration-300">About</a>
          <a href="#projects" className="text-white hover:text-yellow-500 transition-colors duration-300">Projects</a>
          <a href="#contact" className="text-white hover:text-yellow-500 transition-colors duration-300">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-sm transition-all duration-300 ${isMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="container mx-auto py-4 px-10 flex flex-col gap-4">
          <a href="#home" className="text-white hover:text-yellow-500 transition-colors duration-300">Home</a>
          <a href="#about" className="text-white hover:text-yellow-500 transition-colors duration-300">About</a>
          <a href="#projects" className="text-white hover:text-yellow-500 transition-colors duration-300">Projects</a>
          <a href="#contact" className="text-white hover:text-yellow-500 transition-colors duration-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
