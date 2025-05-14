import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function EducationSection() {
  // Define education items
  const educationItems = [
    {
      title: "COMPUTER SCIENCE DEGREE",
      color: "bg-blue-500",
      icon: "👨‍🎓",
      institution: "Indian Institute of Technology",
      duration: "2020 - 2024",
      content: (
        <>
          <p className="font-medium">Focused on software engineering fundamentals.</p>
          <p>Core studies include:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>Data Structures & Algorithms</li>
            <li>Operating Systems</li>
          </ul>
        </>
      ),
    },
    {
      title: "SPECIALIZED CERTIFICATIONS",
      color: "bg-orange-500",
      icon: "📜",
      duration: "2022 - Present",
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
      title: "HIGHER SECONDARY EDUCATION",
      color: "bg-purple-500",
      icon: "🏫",
      institution: "Delhi Public School",
      duration: "2018 - 2020",
      content: (
        <>
          <p className="font-medium">Specialized in Computer Science & Mathematics</p>
          <p className="mt-2">Achievements include:</p>
          <div className="mt-2 space-y-1">
            <p>• Top 5% in class with focus on Mathematics</p>
            <p>• Winner of inter-school coding competition</p>
          </div>
        </>
      ),
    },
    {
      title: "TECHNICAL WORKSHOPS",
      color: "bg-green-500",
      icon: "👨‍💻",
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
      icon: "🧩",
      duration: "2019 - Present",
      content: (
        <>
          <p className="font-medium">Applied learning through challenges</p>
          <p className="mt-2">Notable achievements:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>1st place in Regional Code Challenge</li>
            <li>Developed open-source developer tools</li>
          </ul>
        </>
      ),
    }
  ];

  return (
    <section id="education" className="bg-black text-gray-100 py-20 relative overflow-hidden">
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
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-['Bebas_Neue'] text-white tracking-wider relative inline-block">
            EDUCATION
            <motion.span
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-2 left-0 h-1 bg-[#F0C56D]"
            />
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-4 font-['Rubik']">
            My pursuit of knowledge and skills that have shaped my development career
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line - rewritten to precisely end at the last icon */}
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-700"
            style={{ 
              top: '8px',
              bottom: '50%',
              height: 'calc(100% - 210px)'
            }}
          ></div>
          
          {/* Education items */}
          {educationItems.map((item, index) => (
            <TimelineItem 
              key={index} 
              item={item} 
              index={index} 
              isEven={index % 2 === 0} 
              isLast={index === educationItems.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item, index, isEven, isLast }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false // Changed from true to enable re-triggering
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
      x: isEven ? -50 : 50 
    },
    visible: {
      opacity: 1,
      x: 0,
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
    <div className={`relative ${isLast ? '' : 'mb-4'}`} ref={ref}>
      {/* Timeline emoji - removed background and border */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={circleVariants}
        className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center z-10"
      >
        <span className="text-4xl">{item.icon}</span>
      </motion.div>
      
      {/* Content card */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={variants}
        className={`w-5/12 ${isEven ? 'ml-auto pr-12' : 'mr-auto pl-12'}`}
      >
        <div className="group bg-[#111111] p-6 rounded-xl shadow-lg border border-gray-800 hover:border-[#3A3A3A] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] relative">
          <h3 className="text-xl font-['Bebas_Neue'] text-white tracking-wider mb-2">{item.title}</h3>
          {item.institution && <h4 className="text-[#F0C56D] font-['Rubik'] mb-1">{item.institution}</h4>}
          {item.duration && <div className="text-gray-400 text-sm mb-3 font-['Rubik']">{item.duration}</div>}
          <div className="text-[#C0C0C0] text-sm font-['Rubik']">
            {item.content}
          </div>
          
          {/* Decorative corner borders on hover - similar to ProjectSection */}
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