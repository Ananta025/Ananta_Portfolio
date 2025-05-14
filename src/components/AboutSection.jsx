import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaFileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const AboutSection = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <div className="cntnr flex text-white w-full h-[80%]">
        <div className="limg relative w-[45%] h-full">
          <img
            className="absolute scale-[0.6] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src="./boy-char.png"
            alt=""
          />
        </div>
        
        {/* Icons center column */}
        <div className="flex flex-col justify-center items-center w-[8%]">
          <div className="flex flex-col gap-8">
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
        
        <div className="rg w-[45%] py-20 px-10">
          <h1 className="text-5xl pb-2 font-bold">Deploying Dreams,</h1>
          <h1 className="text-5xl font-bold">Scaling Ambitions</h1>
          
          <div className="mt-10 space-y-4 text-lg font-['Rubik'] leading-relaxed">
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
          
          <div className="mt-10">
            <a 
              href="https://drive.google.com/file/d/1UZBbxW6BETzp3mxrso3Hq65smPvCavjZ/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#F0C56D] hover:bg-[#DA8937] transition-colors duration-300 px-6 py-2.5 text-black text-xl font-medium font-['Bebas_Neue'] tracking-wider rounded-xl inline-flex items-center gap-2"
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
