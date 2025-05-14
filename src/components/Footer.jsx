import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative w-full min-h-[250px]">
      {/* Top gradient for smooth transition from contact section */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black to-transparent z-10"></div>
      
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-[url('/footer.png')] bg-cover bg-center bg-no-repeat h-full w-full"
      />
      <div className="absolute inset-0 bg-black/80" /> {/* Increased opacity from 70% to 80% */}
      
      {/* Content container */}
      <div className="relative container mx-auto px-10 sm:px-16 lg:px-24 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between h-full">
          {/* Left side - Social icons and copyright text */}
          <div className="flex flex-col items-start mb-8 md:mb-0 order-2 md:order-1 px-6">
            {/* Social icons */}
            <div className="flex items-center space-x-6 mb-4">
              <a 
                href="https://github.com/Ananta025" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white p-2 border-2 border-gray-700 hover:border-green-500 rounded-full hover:text-green-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.8)]"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/ananta-chandra-das/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white p-2 border-2 border-gray-700 hover:border-blue-500 rounded-full hover:text-blue-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:danantach@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white p-2 border-2 border-gray-700 hover:border-purple-500 rounded-full hover:text-purple-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(192,132,252,0.8)]"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
            
            {/* Copyright text */}
            <div className="text-left">
              <p className="text-white text-base font-['Bebas_Neue'] tracking-wider">
                © 2025 ANANTA. ALL RIGHTS RESERVED.
              </p>
              <p className="text-gray-300 text-base mt-1 font-['Rubik']">
                Building digital experiences that inspire.
              </p>
            </div>
          </div>
          
          {/* Character image - Right side */}
          <div className="order-1 md:order-3 px-6">
            <img 
              src="/footer-char1.png" 
              alt="Coder character" 
              className="h-48 md:h-64 -mb-6 md:-mb-12 mr-6 md:mr-8 relative z-0 opacity-75"
            />
          </div>
        </div>
        
        {/* Made with love text - Bottom */}
        <div className="text-center mt-4 pt-1">
          <p className="text-zinc-200 text-sm flex items-center justify-center">
            Made with <Heart size={14} className="mx-1 text-red-400 fill-red-400" /> by Ananta
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
