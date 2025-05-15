import React, { useEffect, useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import NavBar from "./NavBar";

const HeroSection = ({ showContent }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const characterRef = useRef(null);
  const textRef = useRef(null);
  
  // Handle scroll down functionality
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  // Set up animations based on current screen size
  const setupResponsiveAnimations = () => {
    if (!showContent) return;
    
    const isMobileView = window.innerWidth < 768;
    setIsMobile(isMobileView);
    
    // Update character position based on screen size
    gsap.to(".character", {
      scale: isMobileView ? 0.5 : 0.8,
      x: "-50%",
      bottom: isMobileView ? "-35%" : "-85%", // Changed from -95% to -85% for large screens
      rotate: 0,
      duration: 0.5,
      ease: "Power2.easeOut",
      onComplete: () => {
        if (isMobileView) {
          gsap.set(".character", { visibility: "visible", opacity: 1 });
        }
      }
    });
    
    // Update text position based on screen size
    gsap.to(".text", {
      top: isMobileView ? "40%" : "20%",
      duration: 0.5,
      ease: "Power2.easeOut"
    });
  };

  // Initial setup and resize handling
  useEffect(() => {
    if (!showContent) return;
    
    setupResponsiveAnimations();
    
    // Handle resize events
    const handleResize = () => {
      setupResponsiveAnimations();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [showContent]);

  // Main animations
  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    // Character animation will be handled by setupResponsiveAnimations

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    // Mouse scroll animation
    gsap.to(".mouse-scroll", {
      y: 10,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    const main = document.querySelector(".main");

    // Mouse movement parallax
    const handleMouseMove = (e) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      const parallaxFactor = window.innerWidth < 768 ? 0.2 : 0.4;
      
      gsap.to(".main .text", {
        x: `${xMove * parallaxFactor}%`,
        duration: 0.3
      });
      gsap.to(".sky", {
        x: xMove,
        duration: 0.3
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
        duration: 0.3
      });
    };
    
    main?.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      main?.removeEventListener("mousemove", handleMouseMove);
    };
  }, [showContent]);

  return (
    <div className="landing overflow-hidden relative w-full h-screen bg-black">
      <NavBar />

      <div className="imagesdiv relative overflow-hidden w-full h-screen">
        <img
          className="absolute sky scale-[1.5] md:scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
          src="./sky.png"
          alt=""
        />
        <img
          className="absolute scale-[1.8] md:scale-[1.8] rotate-[-3deg] bg top-0 left-0 w-full h-full object-cover"
          src="./bg.png"
          alt=""
        />
        <div 
          ref={textRef}
          className="text text-white flex flex-col gap-1 sm:gap-2 md:gap-3 absolute top-[40%] sm:top-14 md:top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:-translate-y-0 scale-[1.4] rotate-[-10deg]"
        >
          <h1 className="text-[4rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] leading-none -ml-10 sm:-ml-20 md:-ml-40">grand</h1>
          <h1 className="text-[4rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] leading-none ml-5 sm:ml-10 md:ml-20">theft</h1>
          <h1 className="text-[4rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] leading-none -ml-10 sm:-ml-20 md:-ml-40">auto</h1>
        </div>
        <img
          ref={characterRef}
          className="absolute character -bottom-[65%] sm:-bottom-[160%] left-1/2 -translate-x-1/2 scale-[2.5] sm:scale-[3] rotate-[-20deg]"
          src="./boy.png"
          alt=""
          style={{ visibility: 'visible' }}
        />
      </div>
      <div className="btmbar text-white absolute bottom-0 left-0 w-full py-5 sm:py-10 md:py-15 px-4 sm:px-6 md:px-10 bg-gradient-to-t from-black to-transparent">
        <div className="flex gap-2 sm:gap-3 md:gap-4 items-center cursor-pointer" onClick={handleScrollDown}>
          <div className="mouse-scroll flex flex-col items-center">
            <div className="mouse w-4 h-7 sm:w-5 sm:h-8 md:w-6 md:h-10 border-2 border-white rounded-full flex justify-center">
              <div className="wheel w-1 h-1.5 bg-white rounded-full mt-1.5"></div>
            </div>
          </div>
          <h3 className="text-sm sm:text-base font-['Bebas_Neue'] md:text-xl">Scroll Down</h3>
        </div>
        <img
        className="h-[30px] sm:h-[40px] md:h-[50px] lg:h-[45px] top-[5%] absolute md:top-[73%] left-[44%] lg:left-[48%] -translate-x-1/2 -translate-y-1/2 mix-blend-screen opacity-70"
        src="./ps5.png"
        alt=""
      />
      </div>
    </div>
  );
};

export default HeroSection;
