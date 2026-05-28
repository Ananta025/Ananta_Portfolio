import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { Award, Briefcase, Code2, GraduationCap, Trophy } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function EducationSection() {
  const sectionRef = useRef(null);
  const timelineContainerRef = useRef(null);
  const lineTrackRef = useRef(null);
  const lineFillRef = useRef(null);
  const lineGlowRef = useRef(null);
  const iconRefs = useRef([]);
  const iconGlowRefs = useRef([]);
  const iconPulseRefs = useRef([]);
  const activatedIconsRef = useRef(new Set());

  const educationItems = [
    {
      title: "HIGHER SECONDARY EDUCATION",
      color: "bg-blue-500",
      icon: GraduationCap,
      activeColor: "#F0C56D",
      institution: "Barabisha High School (H.S)",
      duration: "2020 - 2022",
      content: (
        <>
          <p className="font-medium">Focused on basic science.</p>
          <p>Core studies include:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>Fundamental of Seience.</li>
            <li>Top 5% in class with focus on Mathematics</li>
          </ul>
        </>
      ),
    },
    {
      title: "SPECIALIZED CERTIFICATIONS",
      color: "bg-orange-500",
      icon: Award,
      activeColor: "#6EA8FF",
      duration: "2023 - 2024",
      content: (
        <>
          <p className="font-medium">Advanced technical skills validation</p>
          <p className="mt-2">Earned certificates in:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>AWS Solutions Architect</li>
            <li>React Developer Certification</li>
          </ul>
        </>
      ),
    },
    {
      title: "COMPUTER SCIENCE & ENGINEERING",
      color: "bg-purple-500",
      icon: Briefcase,
      activeColor: "#F0C56D",
      institution: "RCC Institute of Information Technology",
      duration: "2023 - 2027",
      content: (
        <>
          <p className="font-medium">Specialized in Computer Science & Mathematics</p>
          <p className="mt-2">Achievements include:</p>
          <div className="mt-2 space-y-1">
            <p>• Data Structures & Algorithms</p>
            <p>• Operating Systems</p>
          </div>
        </>
      ),
    },
    {
      title: "TECHNICAL WORKSHOPS",
      color: "bg-green-500",
      icon: Code2,
      activeColor: "#6EA8FF",
      duration: "2021 - 2023",
      content: (
        <>
          <p className="font-medium">Hands-on learning experiences</p>
          <p className="mt-2">Participated in specialized workshops:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>Advanced React Patterns</li>
            <li>CI/CD Pipeline Implementation</li>
          </ul>
        </>
      ),
    },
    {
      title: "HACKATHONS & PROJECTS",
      color: "bg-teal-500",
      icon: Trophy,
      activeColor: "#F0C56D",
      duration: "2023 - Present",
      content: (
        <>
          <p className="font-medium">Applied learning through challenges</p>
          <p className="mt-2">Notable achievements:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>Got hands-on with MongoDB, Express.js, React, and Node.js.</li>
            <li>Developed some cool sttaf</li>
          </ul>
        </>
      ),
    }
  ];

  useEffect(() => {
    if (
      !sectionRef.current ||
      !timelineContainerRef.current ||
      !lineTrackRef.current ||
      !lineFillRef.current ||
      !lineGlowRef.current ||
      !iconRefs.current.length
    ) {
      return undefined;
    }

    /* ═══════════════════════════════════════════════════
       Collect all cleanup handles so we can tear down
       everything in one place, even if init is deferred.
       ═══════════════════════════════════════════════════ */
    let ctx = null;
    let lenis = null;
    let resizeObserver = null;
    let rafId = null;
    const deferredTimers = [];
    let destroyed = false;

    /* ────────── helpers ────────── */

    /** Get the Y center of an icon relative to the timeline container */
    const getIconCenterY = (index) => {
      const icon = iconRefs.current[index];
      const container = timelineContainerRef.current;
      if (!icon || !container) return 0;
      const containerRect = container.getBoundingClientRect();
      const iconRect = icon.getBoundingClientRect();
      return iconRect.top + iconRect.height / 2 - containerRect.top;
    };

    const getFirstIconTop = () => getIconCenterY(0);
    const getLastIconBottom = () => getIconCenterY(educationItems.length - 1);

    /** Position the dark track to span first→last icon exactly */
    const positionLine = () => {
      const topY = getFirstIconTop();
      const bottomY = getLastIconBottom();
      const height = bottomY - topY;

      const track = lineTrackRef.current;
      if (!track || height <= 0) return;
      track.style.top = `${topY}px`;
      track.style.height = `${height}px`;
      track.style.bottom = "auto";
    };

    /** Recompute line position + refresh ScrollTrigger in one call */
    const recalculate = () => {
      if (destroyed) return;
      positionLine();
      onScrollUpdate();
      ScrollTrigger.refresh();
    };

    /* ────────── icon state ────────── */

    const setIconState = (index, active) => {
      const iconContainer = iconRefs.current[index];
      const iconGlow = iconGlowRefs.current[index];
      const iconPulse = iconPulseRefs.current[index];
      const icon = iconContainer?.querySelector("svg");
      const activeColor = educationItems[index]?.activeColor ?? "#F0C56D";

      if (!iconContainer || !icon) return;

      if (active) {
        gsap.killTweensOf([iconContainer, iconGlow, iconPulse, icon]);

        gsap.to(iconContainer, {
          scale: 1.12,
          y: -1,
          borderColor: activeColor,
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.08), 0 0 24px rgba(240, 197, 109, 0.24)",
          duration: 0.3,
          ease: "power2.out",
        });

        gsap.to(icon, {
          color: activeColor,
          duration: 0.3,
          ease: "power2.out",
        });

        if (iconGlow) {
          gsap.to(iconGlow, {
            opacity: 1,
            scale: 1.18,
            duration: 0.3,
            ease: "power2.out",
          });
        }

        if (iconPulse) {
          gsap.set(iconPulse, { opacity: 0.34, scale: 0.92 });
          gsap.to(iconPulse, {
            opacity: 0,
            scale: 1.8,
            duration: 1.6,
            ease: "power1.out",
            repeat: -1,
            repeatDelay: 0.35,
          });
        }

        return;
      }

      /* Deactivate */
      gsap.killTweensOf([iconContainer, iconGlow, iconPulse, icon]);

      gsap.to(iconContainer, {
        scale: 1,
        y: 0,
        borderColor: "rgba(255, 255, 255, 0.12)",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        boxShadow: "0 0 0 1px rgba(255,255,255,0.04)",
        duration: 0.25,
        ease: "power2.out",
      });

      gsap.to(icon, {
        color: "rgba(255, 255, 255, 0.42)",
        duration: 0.25,
        ease: "power2.out",
      });

      if (iconGlow) {
        gsap.to(iconGlow, {
          opacity: 0,
          scale: 0.94,
          duration: 0.25,
          ease: "power2.out",
        });
      }

      if (iconPulse) {
        gsap.set(iconPulse, { opacity: 0, scale: 0.92 });
      }
    };

    /* ────────── viewport-driven scroll logic ────────── */

    /**
     * On each scroll frame, we compute how far the "trigger line" (at 60% viewport
     * height) has traveled past the first icon, clamped to the last icon.
     * The fill height is set directly. Icons activate the instant the trigger
     * crosses their center — no delayed thresholds.
     */
    const onScrollUpdate = () => {
      const container = timelineContainerRef.current;
      const fill = lineFillRef.current;
      const glow = lineGlowRef.current;
      if (!container || !fill || !glow) return;

      const containerRect = container.getBoundingClientRect();
      const viewportTriggerY = window.innerHeight * 0.6;

      // How far the viewport trigger is into the container
      const triggerInContainer = viewportTriggerY - containerRect.top;

      const firstY = getFirstIconTop();
      const lastY = getLastIconBottom();
      const totalHeight = lastY - firstY;

      if (totalHeight <= 0) return;

      // Clamp the fill between 0 and total track height
      const rawFill = triggerInContainer - firstY;
      const clampedFill = Math.max(0, Math.min(rawFill, totalHeight));
      const progress = clampedFill / totalHeight;

      // Set fill and glow height directly (no scaleY)
      fill.style.height = `${clampedFill}px`;
      glow.style.height = `${clampedFill}px`;

      // Activate/deactivate icons based on whether the trigger has reached them
      for (let i = 0; i < educationItems.length; i++) {
        const iconY = getIconCenterY(i);
        const iconFraction = (iconY - firstY) / totalHeight;
        const isReached = progress >= iconFraction - 0.005;
        const wasActive = activatedIconsRef.current.has(i);

        if (isReached && !wasActive) {
          activatedIconsRef.current.add(i);
          setIconState(i, true);
        } else if (!isReached && wasActive) {
          activatedIconsRef.current.delete(i);
          setIconState(i, false);
        }
      }
    };

    /* ═══════════════════════════════════════════════════
       Main initialization — deferred until layout is stable
       ═══════════════════════════════════════════════════ */
    const initTimeline = () => {
      if (destroyed) return;

      /* Reset icons to inactive */
      iconRefs.current.forEach((_, index) => setIconState(index, false));
      activatedIconsRef.current.clear();

      /* Set fill to height-based approach */
      gsap.set([lineFillRef.current, lineGlowRef.current], {
        height: 0,
        scaleY: 1,
        transformOrigin: "top center",
      });

      /* Measure & position after layout is finalized */
      positionLine();

      /* ── Lenis smooth scroll ── */
      lenis = new Lenis({
        lerp: 0.08,
        smoothWheel: true,
        smoothTouch: false,
      });

      const onLenisScroll = () => {
        ScrollTrigger.update();
      };

      lenis.on("scroll", onLenisScroll);

      const raf = (time) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(raf);

      /* ── ScrollTrigger ── */
      ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          onUpdate: () => {
            onScrollUpdate();
          },
          onRefresh: () => {
            positionLine();
            onScrollUpdate();
          },
        });
      }, sectionRef);

      /* ── ResizeObserver — catches container-level layout changes
            (responsive breakpoints, content reflow, etc.) ── */
      let resizeDebounce = null;
      resizeObserver = new ResizeObserver(() => {
        if (resizeDebounce) clearTimeout(resizeDebounce);
        resizeDebounce = setTimeout(() => {
          if (!destroyed) recalculate();
        }, 100);
      });
      resizeObserver.observe(timelineContainerRef.current);

      /* ── Window resize ── */
      const onResize = () => {
        recalculate();
      };
      window.addEventListener("resize", onResize);

      /* Initial refresh */
      ScrollTrigger.refresh();

      /* ── Staggered deferred refreshes to catch late layout shifts
            (images loading, lazy content, etc.) ── */
      [200, 600, 1200].forEach((delay) => {
        const t = setTimeout(() => {
          if (!destroyed) recalculate();
        }, delay);
        deferredTimers.push(t);
      });

      /* Store resize handler ref for cleanup */
      initTimeline._onResize = onResize;
      initTimeline._raf = raf;
      initTimeline._onLenisScroll = onLenisScroll;
    };

    /* ═══════════════════════════════════════════════════
       Wait for fonts + one rAF frame before initializing.
       This ensures getBoundingClientRect() returns accurate
       values on first load and on hard refresh.
       ═══════════════════════════════════════════════════ */
    const fontsReady = document.fonts?.ready ?? Promise.resolve();

    fontsReady.then(() => {
      if (destroyed) return;
      // Double-rAF: first rAF waits for the browser to
      // commit the font-swapped layout, second rAF ensures
      // a full paint cycle has occurred before measuring.
      rafId = requestAnimationFrame(() => {
        rafId = requestAnimationFrame(() => {
          initTimeline();
        });
      });
    });

    /* ═══════════════════════════════════════════════════
       Cleanup
       ═══════════════════════════════════════════════════ */
    return () => {
      destroyed = true;

      /* Cancel deferred timers */
      deferredTimers.forEach(clearTimeout);

      /* Cancel pending rAF */
      if (rafId) cancelAnimationFrame(rafId);

      /* GSAP context */
      if (ctx) ctx.revert();

      /* GSAP ticker */
      if (initTimeline._raf) gsap.ticker.remove(initTimeline._raf);

      /* Lenis */
      if (lenis) {
        if (initTimeline._onLenisScroll) {
          lenis.off("scroll", initTimeline._onLenisScroll);
        }
        lenis.destroy();
      }

      /* ResizeObserver */
      if (resizeObserver) resizeObserver.disconnect();

      /* Window resize */
      if (initTimeline._onResize) {
        window.removeEventListener("resize", initTimeline._onResize);
      }

      activatedIconsRef.current.clear();
    };
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="bg-black text-gray-100 py-12 sm:py-16 md:py-20 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-500 filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-purple-500 filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-teal-400 filter blur-2xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-['Bebas_Neue'] text-white tracking-wider relative inline-block">
            EDUCATION
            <motion.span
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-2 left-0 h-1 bg-[#F0C56D]"
            />
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mt-3 sm:mt-4 font-['Rubik']">
            My pursuit of knowledge and skills that have shaped my development career
          </p>
        </motion.div>

        <div className="relative mt-20" aria-label="Education timeline" ref={timelineContainerRef}>
          {/* Vertical timeline line — track spans first→last icon only */}
          <div
            ref={lineTrackRef}
            aria-hidden="true"
            className="pointer-events-none absolute left-4 md:left-1/2 md:-translate-x-1/2 w-px md:w-[3px]"
            style={{ top: 0, height: 0 }}
          >
            {/* Dark inactive track */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/5 via-white/10 to-white/5" />
            {/* Active gold fill */}
            <div
              ref={lineFillRef}
              className="absolute top-0 left-0 right-0 rounded-full will-change-transform"
              style={{
                height: 0,
                background: "linear-gradient(to bottom, #FFF7E4, #F0C56D 50%, #D4A94E)",
                boxShadow: "0 0 14px rgba(240, 197, 109, 0.5), 0 0 40px rgba(240, 197, 109, 0.2)",
              }}
            />
            {/* Glow overlay */}
            <div
              ref={lineGlowRef}
              className="absolute top-0 left-0 right-0 rounded-full will-change-transform"
              style={{
                height: 0,
                background: "linear-gradient(to bottom, #FFF7E4, #F0C56D 50%, #D4A94E)",
                filter: "blur(10px)",
                opacity: 0.55,
              }}
            />
          </div>
          
          {/* Education items */}
          {educationItems.map((item, index) => (
            <TimelineItem 
              key={item.title} 
              item={item} 
              iconRef={(el) => {
                iconRefs.current[index] = el;
              }}
              glowRef={(el) => {
                iconGlowRefs.current[index] = el;
              }}
              pulseRef={(el) => {
                iconPulseRefs.current[index] = el;
              }}
              isEven={index % 2 === 0} 
              isLast={index === educationItems.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item, iconRef, glowRef, pulseRef, isEven, isLast }) {
  const controls = useAnimation();
  const TimelineIcon = item.icon;
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { 
      opacity: 0, 
      x: isEven ? -30 : 30,
      y: 30
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const circleVariants = {
    hidden: { 
      scale: 0,
      opacity: 0 
    },
    visible: { 
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <div className={`relative ${isLast ? '' : 'mb-6 md:mb-4'}`} ref={ref}>
      {/* Timeline icon - centered on the line for all screen sizes */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={circleVariants}
        className="absolute left-4 md:left-1/2 transform -translate-x-1/2 md:-translate-x-1/2 -translate-y-1/2 z-10"
      >
        <div
          ref={iconRef}
          className="relative flex h-8 w-8 items-center justify-center overflow-visible rounded-full border border-white/10 bg-white/5 text-white/40 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-xl transition-colors duration-300 sm:h-11 sm:w-11 md:h-14 md:w-14"
        >
          <div
            ref={glowRef}
            className="absolute inset-0 rounded-full bg-gradient-to-br from-[#F0C56D]/30 via-[#F6E7BC]/20 to-[#6EA8FF]/30 opacity-0 blur-md"
          />
          <div
            ref={pulseRef}
            className="absolute inset-0 rounded-full border border-[#F0C56D]/30 opacity-0"
          />
          <TimelineIcon className="relative z-10 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" strokeWidth={1.85} />
        </div>
      </motion.div>
      
      {/* Content card - full width on mobile, alternating sides on larger screens */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={variants}
        className={`w-full md:w-5/12 ml-0 pl-16 pr-4 sm:pl-20 sm:pr-6 
                   ${isEven ? 'md:ml-auto md:pl-0 md:pr-12' : 'md:mr-auto md:pl-12 md:pr-0'}`}
      >
        <div className="group bg-[#111111] p-4 sm:p-5 md:p-6 rounded-xl shadow-lg border border-gray-800 hover:border-[#3A3A3A] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] relative">
          <h3 className="text-lg sm:text-xl font-['Bebas_Neue'] text-white tracking-wider mb-1 sm:mb-2">{item.title}</h3>
          {item.institution && <h4 className="text-[#F0C56D] font-['Rubik'] text-sm sm:text-base mb-0.5 sm:mb-1">{item.institution}</h4>}
          {item.duration && <div className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3 font-['Rubik']">{item.duration}</div>}
          <div className="text-[#C0C0C0] text-xs sm:text-sm font-['Rubik']">
            {item.content}
          </div>
          
          {/* Decorative corner borders on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute top-0 left-0 w-12 h-1 bg-[#F0C56D] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
            <div className="absolute top-0 left-0 w-1 h-12 bg-[#F0C56D] transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out"></div>
            <div className="absolute bottom-0 right-0 w-12 h-1 bg-[#F0C56D] transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
            <div className="absolute bottom-0 right-0 w-1 h-12 bg-[#F0C56D] transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}