import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative w-full min-h-[220px] sm:min-h-[220px] md:min-h-[250px]">
      {/* Top gradient for smooth transition from contact section */}
      <div className="absolute inset-x-0 top-0 h-12 sm:h-16 bg-gradient-to-b from-black to-transparent z-10"></div>
      
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-[url('/footer.png')] bg-cover bg-center bg-no-repeat h-full w-full"
      />
      <div className="absolute inset-0 bg-black/80" />
      
      {/* Content container */}
      <div className="relative container mx-auto px-4 sm:px-8 md:px-10 lg:px-16 xl:px-24 2xl:px-32 pt-4 pb-2 sm:pt-8 sm:pb-5">
        <div className="flex flex-col md:flex-row items-center justify-between h-full relative bottom-[-40px] sm:bottom-[-50px]">
          {/* Character image - positioned at the bottom */}
          <div className="order-1 md:order-2 absolute left-1/2 -translate-x-1/2 md:relative md:left-auto md:translate-x-0 opacity-45 md:opacity-75 z-0">
            <img 
              src="/footer-char1.png" 
              alt="Coder character" 
              className="h-36 sm:h-56 md:h-56 lg:h-64 mr-0 md:mr-6 lg:mr-8"
            />
            {/* Gradient overlay for bottom blending */}
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent"></div>
          </div>
          
          {/* Left side - Social icons and copyright text */}
          <div className="flex flex-col items-center md:items-start mb-8 sm:mb-10 md:mb-0 order-2 md:order-1 w-full md:w-auto z-10 relative">
            {/* Text wrapper - no background on any screen size */}
            <div className="py-2 md:p-0">
              {/* Social icons */}
              <div className="flex items-center justify-center md:justify-start space-x-4 sm:space-x-6 mb-3 sm:mb-4">
                <a 
                  href="https://github.com/Ananta025" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white p-1.5 sm:p-2 border-2 border-gray-700 hover:border-green-500 rounded-full hover:text-green-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.8)]"
                  aria-label="GitHub"
                >
                  <Github size={20} className="sm:w-6 sm:h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/ananta-chandra-das/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white p-1.5 sm:p-2 border-2 border-gray-700 hover:border-blue-500 rounded-full hover:text-blue-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="sm:w-6 sm:h-6" />
                </a>
                <a 
                  href="mailto:danantach@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white p-1.5 sm:p-2 border-2 border-gray-700 hover:border-purple-500 rounded-full hover:text-purple-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(192,132,252,0.8)]"
                  aria-label="Email"
                >
                  <Mail size={20} className="sm:w-6 sm:h-6" />
                </a>
              </div>
              
              {/* Copyright text */}
              <div className="text-center md:text-left">
                <p className="text-white text-sm sm:text-base font-['Bebas_Neue'] tracking-wider">
                  © 2025 ANANTA. ALL RIGHTS RESERVED.
                </p>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base mt-1 font-['Rubik']">
                  Building digital experiences that inspire.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Made with love text - Bottom - fixed to always be in one line */}
        <div className="text-center mt-6 sm:mt-8 pt-1 relative z-10">
          <p className="text-zinc-200 text-xs sm:text-sm inline-flex items-center justify-center whitespace-nowrap">
            Made with <Heart size={12} className="mx-1 text-red-400 fill-red-400" /> by Ananta
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
