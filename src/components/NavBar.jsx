import React, { useState, useEffect } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      // Detect which section is in view
      const sections = ["home", "about", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section is visible in viewport
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle navigation item click with smooth scrolling
  const handleNavClick = (section, e) => {
    e.preventDefault();
    setActiveSection(section);
    setIsMenuOpen(false); // Close mobile menu when item is clicked
    
    // Find the section element
    const element = document.getElementById(section);
    
    // Scroll smoothly to the element
    if (element) {
      // Calculate offset for navbar height
      const navbarHeight = 80; // Approximate navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Text outline style object for menu items
  const menuTextStyle = {
    color: 'white',
    WebkitTextStroke: '0.5px black'
  };

  return (
    <nav className={`navbar fixed z-50 w-full transition-all duration-300 
      py-3 top-3 sm:top-4 md:top-4 lg:top-5`}>
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 md:px-12 lg:px-24">
        {/* Logo */}
        <div className="logo flex gap-3 sm:gap-4 md:gap-7 items-center">
          <div className="lines flex flex-col gap-[3px] sm:gap-[5px]">
            <div className="line w-10 sm:w-12 md:w-15 h-1 sm:h-1.5 md:h-2 bg-white"></div>
            <div className="line w-6 sm:w-7 md:w-8 h-1 sm:h-1.5 md:h-2 bg-white"></div>
            <div className="line w-3 sm:w-4 md:w-5 h-1 sm:h-1.5 md:h-2 bg-white"></div>
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl -mt-[4px] sm:-mt-[6px] md:-mt-[8px] leading-none text-white font-bold cursor-pointer">Ananta</h3>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-12">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick("home", e)} 
            className="transition-colors duration-300 text-lg lg:text-xl font-semibold tracking-wide hover:text-yellow-300"
            style={menuTextStyle}
          >
            Home
          </a>
          <a 
            href="#about" 
            onClick={(e) => handleNavClick("about", e)}
            className="transition-colors duration-300 text-lg lg:text-xl font-semibold tracking-wide hover:text-yellow-300"
            style={menuTextStyle}
          >
            About
          </a>
          <a 
            href="#projects" 
            onClick={(e) => handleNavClick("projects", e)}
            className="transition-colors duration-300 text-lg lg:text-xl font-semibold tracking-wide hover:text-yellow-300"
            style={menuTextStyle}
          >
            Projects
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick("contact", e)}
            className="transition-colors duration-300 text-lg lg:text-xl font-semibold tracking-wide hover:text-yellow-300"
            style={menuTextStyle}
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-7 h-6 flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-sm transition-all duration-300 shadow-lg
        ${isMenuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="container mx-auto py-5 px-5 sm:px-10 flex flex-col gap-4 sm:gap-5">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick("home", e)}
            className="transition-colors duration-300 text-lg font-semibold tracking-wide pl-3 py-2.5 hover:text-yellow-300"
            style={menuTextStyle}
          >
            Home
          </a>
          <a 
            href="#about" 
            onClick={(e) => handleNavClick("about", e)}
            className="transition-colors duration-300 text-lg font-semibold tracking-wide pl-3 py-2.5 hover:text-yellow-300"
            style={menuTextStyle}
          >
            About
          </a>
          <a 
            href="#projects" 
            onClick={(e) => handleNavClick("projects", e)}
            className="transition-colors duration-300 text-lg font-semibold tracking-wide pl-3 py-2.5 hover:text-yellow-300"
            style={menuTextStyle}
          >
            Projects
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick("contact", e)}
            className="transition-colors duration-300 text-lg font-semibold tracking-wide pl-3 py-2.5 hover:text-yellow-300"
            style={menuTextStyle}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
