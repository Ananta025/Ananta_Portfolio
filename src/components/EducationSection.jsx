import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function EducationSection() {
  // Define education items
  const educationItems = [
    {
      title: "HIGHER SECONDARY EDUCATION",
      color: "bg-blue-500",
      icon: "👨‍🎓",
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
      icon: "📜",
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
      icon: "🏫",
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

  return (
    <section id="education" className="bg-black text-gray-100 py-12 sm:py-16 md:py-20 relative overflow-hidden">
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
          className="text-center mb-10 md:mb-16"
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

        <div className="relative">
          {/* Vertical timeline line - responsive positioning */}
          <div 
            className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gray-700"
            style={{ 
              top: '8px',
              height: window.innerWidth < 768 ? 'calc(100% - 185px)' : 'calc(100% - 225px)'
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
      {/* Timeline emoji - centered on the line for all screen sizes */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={circleVariants}
        className="absolute left-4 md:left-1/2 transform -translate-x-1/2 md:-translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 flex items-center justify-center z-10"
      >
        <span className="text-2xl sm:text-3xl md:text-4xl">{item.icon}</span>
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