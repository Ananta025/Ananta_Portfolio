import React from "react";
import { motion, useAnimation } from "framer-motion";
import {
  SiAmazonwebservices,
  SiBootstrap,
  SiCss3,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiLinux,
  SiMongodb,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiRedux,
  SiSass,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

// ─── Data ────────────────────────────────────────────────────────────────────
const SKILLS = {
  "Front-end": [
    { name: "JavaScript", Icon: SiJavascript,       color: "#f7df1e" },
    { name: "React",      Icon: SiReact,             color: "#61dafb" },
    { name: "Redux",      Icon: SiRedux,             color: "#764abc" },
    { name: "HTML5",      Icon: SiHtml5,             color: "#e34f26" },
    { name: "CSS3",       Icon: SiCss3,              color: "#1572b6" },
    { name: "Sass",       Icon: SiSass,              color: "#cc6699" },
    { name: "Bootstrap",  Icon: SiBootstrap,         color: "#7952b3" },
    { name: "Tailwind",   Icon: SiTailwindcss,       color: "#38bdf8" },
  ],
  "Back-end": [
    { name: "Node.js",    Icon: SiNodedotjs,         color: "#3c873a" },
    { name: "MongoDB",    Icon: SiMongodb,           color: "#13aa52" },
    { name: "Python",     Icon: SiPython,            color: "#3776ab" },
    { name: "Firebase",   Icon: SiFirebase,          color: "#ffca28" },
    { name: "Supabase",   Icon: SiSupabase,          color: "#3ecf8e" },
    { name: "Express",    Icon: SiExpress,           color: "#ffffff" },
  ],
  "DevOps & Tools": [
    { name: "Git",        Icon: SiGit,               color: "#f34f29" },
    { name: "Linux",      Icon: SiLinux,             color: "#f2f2f2" },
    { name: "Jest",       Icon: SiJest,              color: "#c21325" },
    { name: "TypeScript", Icon: SiTypescript,        color: "#3178c6" },
    { name: "Docker",     Icon: SiDocker,            color: "#2496ed" },
    { name: "GitHub",     Icon: SiGithub,            color: "#e6e6e6" },
    { name: "AWS",        Icon: SiAmazonwebservices, color: "#ff9900" },
  ],
};

// ─── Variants ────────────────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const cardVariants = {
  hidden:   { opacity: 0, y: 24 },
  visible:  { opacity: 1, y: 0,
    transition: { type: "spring", stiffness: 110, damping: 16 } },
};

// ─── Category Heading ────────────────────────────────────────────────────────
function CategoryHeading({ label }) {
  const leftCtrl = useAnimation();
  const rightCtrl = useAnimation();
  const dotCtrl = useAnimation();

  React.useEffect(() => {
    let mounted = true;

    async function run() {
      // Loop slowly and elegantly
      while (mounted) {
        // animate both glows toward center
        await Promise.all([
          // scale a bit past 1 so the trail visibly reaches the center dot (accounts for gaps)
          leftCtrl.start({ scaleX: 1.35, transition: { duration: 1.3, ease: [0.22, 1, 0.36, 1] } }),
          rightCtrl.start({ scaleX: 1.35, transition: { duration: 1.3, ease: [0.22, 1, 0.36, 1] } }),
        ]);

        // pulse the dot once glows arrive
        await dotCtrl.start({ scale: [1, 1.14, 1], transition: { duration: 0.7, times: [0, 0.5, 1], ease: "easeInOut" } });

        // gently retract glows
        await Promise.all([
          leftCtrl.start({ scaleX: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }),
          rightCtrl.start({ scaleX: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }),
        ]);

        // pause slightly shorter before next loop to increase frequency subtly
        await new Promise((r) => setTimeout(r, 700));
      }
    }

    run();
    return () => { mounted = false; };
  }, [leftCtrl, rightCtrl, dotCtrl]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 14,
        marginBottom: 32,
      }}
    >
      {/* Left line + dot */}
      {/* Left static line (no glow in static state) + animated glow overlay */}
      <div style={{ position: "relative", display: "block", height: 1, width: 56 }}>
        <span style={{ display: "block", height: 1, width: "100%", background: "linear-gradient(90deg, transparent, rgba(240,197,109,0.12))" }} />
        <motion.span
          initial={{ scaleX: 0 }}
          animate={leftCtrl}
          style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, transformOrigin: "left", background: "linear-gradient(90deg, rgba(240,197,109,0.0), rgba(240,197,109,1) 85%, rgba(240,197,109,0.92))", borderRadius: 1 }}
        />
      </div>
      <motion.span style={{
        display: "block", width: 6, height: 6, borderRadius: "50%",
        background: "#F0C56D",
        boxShadow: "0 0 10px rgba(240,197,109,0.26)",
        flexShrink: 0,
        transformOrigin: "center",
      }} animate={dotCtrl} initial={{ scale: 1 }} aria-hidden="true" />

      {/* Label */}
      <h3 style={{
        fontFamily: "'Rubik', sans-serif",
        fontSize: 18,
        fontWeight: 600,
        color: "#f0f0f0",
        margin: 0,
        letterSpacing: "0.01em",
        whiteSpace: "nowrap",
      }}>
        {label}
      </h3>

      {/* Dot + right line */}
      <span style={{
        display: "block", width: 6, height: 6, borderRadius: "50%",
        background: "#F0C56D",
        boxShadow: "0 0 10px #F0C56D, 0 0 22px rgba(240,197,109,0.6)",
        flexShrink: 0,
      }} />
      {/* Right static line + animated glow overlay */}
      <div style={{ position: "relative", display: "block", height: 1, width: 56 }}>
        <span style={{ display: "block", height: 1, width: "100%", background: "linear-gradient(90deg, rgba(240,197,109,0.12), transparent)" }} />
        <motion.span
          initial={{ scaleX: 0 }}
          animate={rightCtrl}
          style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, transformOrigin: "right", background: "linear-gradient(90deg, rgba(240,197,109,0.92), rgba(240,197,109,1) 15%, rgba(240,197,109,0.0))", borderRadius: 1 }}
        />
      </div>
    </motion.div>
  );
}

// ─── Skill Card ───────────────────────────────────────────────────────────────
function SkillCard({ skill }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      className="skill-card group"
      style={{ position: "relative", cursor: "default" }}
    >
      {/* Card body */}
      <div
        className="card-body"
        style={{
          position: "relative",
          zIndex: 1,
          width: 122,
          paddingTop: 26,
          paddingBottom: 16,
          paddingLeft: 9,
          paddingRight: 9,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
          borderRadius: 14,
          background: "linear-gradient(135deg, rgba(255,255,255,0.16), rgba(255,255,255,0.05))",
          border: "1px solid rgba(255,255,255,0.18)",
          backdropFilter: "blur(22px)",
          WebkitBackdropFilter: "blur(22px)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.22)",
          overflow: "hidden",
          transition: "border-color 0.3s ease, background 0.3s ease",
        }}
      >
        {/* Corner decorations (gold, match original) */}
        <div className="corner-tl-h" style={{
          position: "absolute", top: 0, left: 0, width: 40, height: 3,
          background: "#F0C56D", transformOrigin: "left",
          transform: "scaleX(0)", transition: "transform 0.4s ease",
        }} />
        <div className="corner-tl-v" style={{
          position: "absolute", top: 0, left: 0, width: 3, height: 40,
          background: "#F0C56D", transformOrigin: "top",
          transform: "scaleY(0)", transition: "transform 0.4s ease",
        }} />
        <div className="corner-br-h" style={{
          position: "absolute", bottom: 0, right: 0, width: 40, height: 3,
          background: "#F0C56D", transformOrigin: "right",
          transform: "scaleX(0)", transition: "transform 0.4s ease",
        }} />
        <div className="corner-br-v" style={{
          position: "absolute", bottom: 0, right: 0, width: 3, height: 40,
          background: "#F0C56D", transformOrigin: "bottom",
          transform: "scaleY(0)", transition: "transform 0.4s ease",
        }} />

        {/* Icon */}
        <skill.Icon
          className="skill-icon"
          style={{
            fontSize: 48,
            color: skill.color,
            transition: "filter 0.3s ease, transform 0.3s ease",
            display: "block",
          }}
          aria-hidden="true"
        />

        {/* Name + accent line */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <span
            className="skill-label"
            style={{
              fontFamily: "'Rubik', sans-serif",
              fontSize: 13.5,
              fontWeight: 500,
              color: "rgba(255,255,255,0.82)",
              letterSpacing: "0.02em",
              transition: "color 0.3s ease",
            }}
          >
            {skill.name}
          </span>
          {/* Gold accent underline — always visible, matches screenshot */}
          <span style={{
            display: "block",
            width: 28,
            height: 2,
            borderRadius: 99,
            background: `linear-gradient(90deg, ${skill.color}88, ${skill.color}33)`,
          }} />
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main ────────────────────────────────────────────────────────────────────
export default function SkillSection() {
  return (
    <section
      id="skills"
      className="bg-black text-gray-100 py-12 sm:py-16 md:py-20 relative overflow-hidden"
    >
      {/* Hover CSS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rubik:wght@300;400;500;600&display=swap');

        .skill-card:hover .card-body {
          border-color: rgba(255,255,255,0.18) !important;
          background: linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.06)) !important;
        }
        .skill-card:hover .skill-label     { color: #ffffff !important; }
        .skill-card:hover .corner-tl-h    { transform: scaleX(1.02) !important; }
        .skill-card:hover .corner-tl-v    { transform: scaleY(1.02) !important; }
        .skill-card:hover .corner-br-h    { transform: scaleX(1.02) !important; }
        .skill-card:hover .corner-br-v    { transform: scaleY(1.02) !important; }

        @media (max-width: 480px) {
          .skill-card .card-body { width: 90px !important; padding-top: 20px !important; }
          .skill-card .skill-icon { font-size: 40px !important; }
        }
        @media (min-width: 481px) and (max-width: 640px) {
          .skill-card .card-body { width: 104px !important; }
          .skill-card .skill-icon { font-size: 46px !important; }
        }
      `}</style>

      {/* Background blobs */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-500 filter blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-purple-500 filter blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-teal-400 filter blur-2xl" />
      </div>

      <div className="max-w-xs sm:max-w-md md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 relative z-10">

        {/* ── Section Heading (unchanged style) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2
            className="text-4xl sm:text-5xl md:text-6xl text-white tracking-wider relative inline-block"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            SKILLS
            <motion.span
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-2 left-0 h-1 bg-[#F0C56D]"
            />
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-4 px-2"
            style={{ fontFamily: "'Rubik', sans-serif" }}
          >
            Technologies and tools I've mastered throughout my development journey
          </p>
        </motion.div>

        {/* ── Categories ── */}
        <div className="space-y-10 sm:space-y-12 md:space-y-16">
          {Object.entries(SKILLS).map(([category, categorySkills]) => (
            <div key={category} className="mb-8 md:mb-12">
              <CategoryHeading label={category} />

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: 18,
                }}
              >
                {categorySkills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}