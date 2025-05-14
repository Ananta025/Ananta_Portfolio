import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import NavBar from "./NavBar";

const HeroSection = ({ showContent }) => {
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

    gsap.to(".character", {
      scale: 0.65,
      x: "-50%",
      bottom: "-85%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

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

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);

  return (
    <div className="landing overflow-hidden relative w-full h-screen bg-black">
      <NavBar />

      <div className="imagesdiv relative overflow-hidden w-full h-screen">
        <img
          className="absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
          src="./sky.png"
          alt=""
        />
        <img
          className="absolute scale-[1.8] rotate-[-3deg] bg top-0 left-0 w-full h-full object-cover"
          src="./bg.png"
          alt=""
        />
        <div className="text text-white flex flex-col gap-3 absolute top-20 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]">
          <h1 className="text-[9rem] leading-none -ml-40">grand</h1>
          <h1 className="text-[9rem] leading-none ml-20">theft</h1>
          <h1 className="text-[9rem] leading-none -ml-40">auto</h1>
        </div>
        <img
          className="absolute character -bottom-[150%] left-1/2 -translate-x-1/2  scale-[3] rotate-[-20deg]"
          src="./boy.png"
          alt=""
        />
      </div>
      <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
        <div className="flex gap-4 items-center">
          <div className="mouse-scroll flex flex-col items-center">
            <div className="mouse w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="wheel w-1 h-1.5 bg-white rounded-full mt-1.5"></div>
            </div>
          </div>
          <h3 className="text-xl font-[Helvetica_Now_Display]">Scroll Down</h3>
        </div>
        <img
          className="absolute h-[55px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          src="./ps5.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection;
