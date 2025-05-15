import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaFileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const AboutSection = () => {
  return (
    <div id="about" className="w-full min-h-screen py-20 md:py-0 flex items-center justify-center bg-black">
      <div className="cntnr flex flex-col md:flex-row text-white w-full max-w-7xl px-4">
        {/* Image - adjusted positioning for big screens */}
        <div className="limg relative w-full md:w-[45%] h-72 sm:h-80 md:h-auto md:flex md:items-center md:justify-center mb-14 md:mb-0">
          <div className="relative w-full h-full md:h-[80%]">
            <img
              className="absolute scale-[0.7] sm:scale-[0.65] md:scale-[0.6] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="./boy-char.png"
              alt="Character avatar"
            />
          </div>
        </div>
        
        {/* Icons - horizontal on mobile, vertical on larger screens */}
        <div className="flex justify-center md:flex-col md:justify-center md:items-center w-full md:w-[8%] mb-14 md:mb-0">
          <div className="flex flex-row md:flex-col gap-8 md:gap-8">
            <a href="https://www.linkedin.com/in/ananta-chandra-das/" className="text-xl text-gray-300 hover:text-white transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Ananta025" className="text-xl text-gray-300 hover:text-white transition-colors">
              <FaGithub />
            </a>
            <a href="https://x.com/Ananta025" className="text-xl text-gray-300 hover:text-white transition-colors">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/_its_ananta_/" className="text-xl text-gray-300 hover:text-white transition-colors">
              <FaInstagram />
            </a>
            <a href="mailto:danantach@gmail.com"  className="text-xl text-gray-300 hover:text-white transition-colors">
              <MdEmail />
            </a>
          </div>
        </div>
        
        {/* Content - adjusted padding and text sizes for different screens */}
        <div className="rg w-full md:w-[45%] py-4 px-4 sm:px-6 md:py-20 md:px-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl pb-1 sm:pb-2 font-bold">Deploying Dreams,</h1>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Scaling Ambitions</h1>
          
          <div className="mt-6 sm:mt-8 lg:mt-10 space-y-3 sm:space-y-4 text-base sm:text-lg font-['Rubik'] leading-relaxed">
            <p>
              Hey! I'm Ananta, a code-slinger who's not chasing trends — just
              running my own race. Frontend wizard by day, full stack tinkerer by night. 
              Built for speed, not for comfort.
            </p>
            <p>
              Design? Check. APIs? Check. Late-night debugging with a Redbull? 
              Double-check. Let's build something legendary. Or at least weird enough 
              to be unforgettable.
            </p>
          </div>
          
          <div className="mt-8 sm:mt-10">
            <a 
              href="https://drive.google.com/file/d/1UZBbxW6BETzp3mxrso3Hq65smPvCavjZ/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#F0C56D] hover:bg-[#DA8937] transition-colors duration-300 px-5 sm:px-6 py-2 sm:py-2.5 text-black text-lg sm:text-xl font-medium font-['Bebas_Neue'] tracking-wider rounded-xl inline-flex items-center gap-2"
            >
              VIEW CV <FaFileAlt />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
