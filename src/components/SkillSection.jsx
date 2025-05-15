import React from "react";
import { motion, useInView } from "framer-motion";

export default function SkillSection() {
  const skills = {
    "Front-end": [
      { name: "JavaScript", icon: "JS", color: "#f7df1e", textColor: "#000" },
      { name: "React", icon: "⚛️", color: "#61dafb", textColor: "#000" },
      { name: "Redux", icon: "🔄", color: "#764abc", textColor: "#fff" },
      { name: "HTML5", icon: "H5", color: "#e34f26", textColor: "#fff" },
      { name: "CSS3", icon: "C3", color: "#1572b6", textColor: "#fff" },
      { name: "Sass", icon: "Sass", color: "#cc6699", textColor: "#fff" },
      { name: "Bootstrap", icon: "B", color: "#563d7c", textColor: "#fff" },
      { name: "Tailwind", icon: "TW", color: "#38b2ac", textColor: "#fff" },
    ],
    "Back-end": [
      { name: "Node.js", icon: "Node", color: "#3c873a", textColor: "#fff" },
      { name: "MongoDB", icon: "🍃", color: "#13aa52", textColor: "#fff" },
      { name: "Python", icon: "Py", color: "#306998", textColor: "#fff" },
      { name: "Firebase", icon: "🔥", color: "#ffca28", textColor: "#000" },
      { name: "Express", icon: "Ex", color: "#000000", textColor: "#fff" },
    ],
    "Miscellaneous": [
      { name: "Git", icon: "Git", color: "#f34f29", textColor: "#fff" },
      { name: "Linux", icon: "🐧", color: "#333333", textColor: "#fff" },
      { name: "Jest", icon: "Jest", color: "#99425b", textColor: "#fff" },
      { name: "TypeScript", icon: "TS", color: "#007acc", textColor: "#fff" },
      { name: "Docker", icon: "🐳", color: "#2496ed", textColor: "#fff" },
      { name: "GitHub", icon: "GH", color: "#171515", textColor: "#fff" },
      { name: "AWS", icon: "AWS", color: "#ff9900", textColor: "#000" },
    ]
  };

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  // Item animation
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    },
    hover: {
      y: -10,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.5)",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  return (
    <section id="skills" className="bg-black text-gray-100 py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Background elements - unchanged */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-blue-500 filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-28 sm:w-40 h-28 sm:h-40 rounded-full bg-purple-500 filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-teal-400 filter blur-2xl"></div>
      </div>
      
      <div className="max-w-xs sm:max-w-md md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-['Bebas_Neue'] text-white tracking-wider relative inline-block">
            SKILLS
            <motion.span
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-2 left-0 h-1 bg-[#F0C56D]"
            />
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-4 font-['Rubik'] px-2">
            Technologies and tools I've mastered throughout my development journey
          </p>
        </motion.div>

        <div className="space-y-10 sm:space-y-12 md:space-y-16">
          {Object.entries(skills).map(([category, categorySkills], categoryIndex) => (
            <motion.div 
              key={category} 
              className="mb-8 md:mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: categoryIndex * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-xl sm:text-2xl font-medium text-gray-200 mb-6 sm:mb-8 text-center font-['Rubik']"
              >
                {category}
              </motion.h3>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6"
              >
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    custom={index}
                    whileHover="hover"
                    className="group"
                  >
                    <div className="w-[85px] h-[110px] sm:w-24 sm:h-32 md:w-28 md:h-36 bg-[#111111] rounded-lg overflow-hidden flex flex-col items-center justify-center relative shadow-lg shadow-black/50 border border-gray-800 hover:border-[#3A3A3A] transition-all duration-300">
                      {/* Glowing effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      
                      {/* Icon */}
                      <motion.div 
                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center text-base sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3"
                        style={{ 
                          backgroundColor: skill.color,
                          color: skill.textColor,
                          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
                        }}
                        whileInView={{ 
                          scale: [0.8, 1.05, 1],
                          transition: { delay: index * 0.04, duration: 0.5 }
                        }}
                        viewport={{ once: true }}
                      >
                        {skill.icon}
                      </motion.div>
                      
                      {/* Name */}
                      <div className="text-gray-300 text-xs sm:text-sm font-medium text-center font-['Rubik'] px-1">
                        {skill.name}
                      </div>

                      {/* Decorative corner borders on hover - unchanged */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="absolute top-0 left-0 w-8 sm:w-10 md:w-12 h-1 bg-[#F0C56D] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
                        <div className="absolute top-0 left-0 w-1 h-8 sm:h-10 md:h-12 bg-[#F0C56D] transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out"></div>
                        <div className="absolute bottom-0 right-0 w-8 sm:w-10 md:w-12 h-1 bg-[#F0C56D] transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
                        <div className="absolute bottom-0 right-0 w-1 h-8 sm:h-10 md:h-12 bg-[#F0C56D] transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out"></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}