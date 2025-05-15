import React, { useState, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import EducationSection from "./components/EducationSection";
import SkillSection from "./components/SkillSection";

function App() {
  let [showContent, setShowContent] = useState(false);
  let [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const mainAnimationsInitialized = useRef(false);
  const mousePosition = useRef({ x: 0 });

  const updateResponsiveAnimations = () => {
    if (!showContent) return;

    const currentIsMobile = window.innerWidth < 768;
    setIsMobile(currentIsMobile);

    // Don't animate character position here, let HeroSection handle it
    // This avoids conflicts between the two components
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (showContent && mainAnimationsInitialized.current) {
        updateResponsiveAnimations();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [showContent]);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2.5,
      ease: "power3.inOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2.5,
      delay: -2,
      ease: "expo.inOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg")?.remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    const mainTl = gsap.timeline({
      defaults: {
        ease: "expo.out",
        duration: 2.5,
      },
      onComplete: () => {
        mainAnimationsInitialized.current = true;
      },
    });

    mainTl
      .to(".main", {
        scale: 1,
        rotate: 0,
      })
      .to(
        [".sky", ".bg"],
        {
          scale: 1.1,
          rotate: 0,
        },
        "-=2.3"
      );
    // Remove or comment out the character and text animations from here
    // Let HeroSection handle them instead
    // .to(
    //   ".character",
    //   {
    //     scale: isMobile ? 0.95 : 0.65,
    //     bottom: isMobile ? "-15%" : "-83%",
    //     rotate: 0,
    //   },
    //   "-=2.3"
    // )
    // .to(
    //   ".text",
    //   {
    //     scale: 1,
    //     rotate: 0,
    //   },
    //   "-=2.3"
    // );

    const main = document.querySelector(".main");
    let rafId = null;

    const updateParallax = () => {
      const xMove = mousePosition.current.x;

      gsap.to(".main .text", {
        x: `${xMove * (isMobile ? 0.2 : 0.4)}%`,
        duration: 0.6,
        ease: "power1.out",
      });

      gsap.to(".sky", {
        x: xMove,
        duration: 0.6,
        ease: "power1.out",
      });

      gsap.to(".bg", {
        x: xMove * 1.7,
        duration: 0.6,
        ease: "power1.out",
      });

      rafId = null;
    };

    const handleMouseMove = (e) => {
      const targetX = (e.clientX / window.innerWidth - 0.5) * 40;

      mousePosition.current.x =
        mousePosition.current.x + (targetX - mousePosition.current.x) * 0.1;

      if (!rafId) {
        rafId = requestAnimationFrame(updateParallax);
      }
    };

    main?.addEventListener("mousemove", handleMouseMove);

    return () => {
      main?.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [showContent, isMobile]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.2] sm:scale-[1.4] md:scale-[1.7]">
          <HeroSection showContent={showContent} />
          <AboutSection />
          <ProjectSection />
          <SkillSection />
          <EducationSection />
          <ContactSection />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;


