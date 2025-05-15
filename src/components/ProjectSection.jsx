import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// FilterBar subcomponent - enhanced with improved responsive design
const FilterBar = ({ filters, activeFilter, setActiveFilter }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-4 mb-8 sm:mb-12"
    >
      {filters.map((filter) => (
        <motion.button
          key={filter}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveFilter(filter)}
          className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-['Bebas_Neue'] tracking-wider transition-all duration-300 ${
            activeFilter === filter
              ? "bg-[#F0C56D] text-black hover:bg-[#DA8937]"
              : "bg-[#3A3A3A] text-[#C0C0C0] hover:bg-[#2A2A2A]"
          }`}
        >
          {filter.toUpperCase()}
        </motion.button>
      ))}
    </motion.div>
  );
};

// Enhanced ProjectCard subcomponent with responsive design
const ProjectCard = ({ project }) => {
  const videoRef = useRef(null);

  // Handle mouse enter/leave for video playback
  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error);
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="relative h-[280px] sm:h-[320px] md:h-[340px] lg:h-[360px] rounded-xl sm:rounded-2xl overflow-hidden group cursor-pointer border border-[#333333] hover:border-[#444444] transition-colors duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Black background that's always visible */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Project Video with Enhanced Overlay - only visible on hover */}
      <div className="absolute inset-0 w-full h-full rounded-xl sm:rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {project.video ? (
          <video
            ref={videoRef}
            src={project.video}
            poster={project.image} // Use image as poster/fallback
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            muted
            playsInline
            preload="metadata"
            loop
          />
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />
      </div>
      
      {/* Content Container - Enhanced animation with responsive design */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end transition-all duration-500 ease-in-out">
        <div className="transform transition-all duration-500 ease-in-out group-hover:translate-y-[-10px] sm:group-hover:translate-y-[-15px] md:group-hover:translate-y-[-20px]">
          {/* Project Info with enhanced animation */}
          <div className="px-4 sm:px-6 pb-2 sm:pb-3">
            <h3 className="text-xl sm:text-2xl font-['Bebas_Neue'] text-white tracking-wider transition-all duration-300 group-hover:text-[#F0C56D]">
              {project.title.toUpperCase()}
            </h3>
            
            <p className="text-[#C0C0C0] font-['Rubik'] mt-1 sm:mt-2 line-clamp-2 text-xs sm:text-sm transition-all duration-300 group-hover:line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Action Buttons - Enhanced animations with responsive design */}
          <div className="px-4 sm:px-6 pb-4 sm:pb-6 flex gap-2 sm:gap-3 opacity-0 transform translate-y-8 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 mt-4 sm:mt-6">
            <a 
              href={project.demoLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#F0C56D] hover:bg-[#DA8937] text-black text-center py-2 sm:py-3 rounded-lg text-sm sm:text-base font-['Bebas_Neue'] tracking-wider transition-colors duration-300"
            >
              LIVE DEMO
            </a>
            <a 
              href={project.githubLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 bg-[#577A6C] hover:bg-[#3A5A4C] text-white text-center py-2 sm:py-3 rounded-lg text-sm sm:text-base font-['Bebas_Neue'] tracking-wider transition-colors duration-300"
            >
              GITHUB
            </a>
          </div>
        </div>
      </div>
      
      {/* Hover Effect Decorative Elements - All corners on hover only */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute top-0 left-0 w-12 h-1 bg-[#F0C56D] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
        <div className="absolute top-0 left-0 w-1 h-12 bg-[#F0C56D] transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out"></div>
        <div className="absolute bottom-0 right-0 w-12 h-1 bg-[#F0C56D] transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
        <div className="absolute bottom-0 right-0 w-1 h-12 bg-[#F0C56D] transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out"></div>
        
        {/* Adding top-right and bottom-left corners with hover animation */}
        <div className="absolute top-0 right-0 w-12 h-1 bg-[#F0C56D] transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
        <div className="absolute top-0 right-0 w-1 h-12 bg-[#F0C56D] transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out"></div>
        <div className="absolute bottom-0 left-0 w-12 h-1 bg-[#F0C56D] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
        <div className="absolute bottom-0 left-0 w-1 h-12 bg-[#F0C56D] transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out"></div>
      </div>
    </motion.div>
  );
};

// Main ProjectSection component with responsive improvements
const ProjectSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);
  
  const filters = ["All", "Major", "Clone", "Minor"];

  const projects = [
    {
      id: 1,
      title: "VIDEOMEET",
      description: "A Real-Time Video Conferencing platform featuring video/audio calls, screen sharing, and in-call messaging.",
      image: "./project.png",
      video: "./project1.mp4", // Add video source
      category: "Major",
      demoLink: "https://video-meet-ivory.vercel.app/",
      githubLink: "https://github.com/Ananta025/VIDEO_MEET"
    },
    {
      id: 2,
      title: "FINANCY",
      description: "A full-stack  Smart Trading & Investment Platform with real-time inventory management and secure payment processing.",
      image: "./project.png",
      video: "./project2.mp4", // Add video source
      category: "Major",
      demoLink: "https://financy-zeta.vercel.app/",
      githubLink: "https://github.com/Ananta025/Financy"
    },
    {
      id: 3,
      title: "NEST FINDER",
      description: "A responsive Airbnb clone with movie browsing, search functionality, and many more features.",
      image: "./project3.png",
      video: "./project3.mp4", // Add video source
      category: "Clone",
      demoLink: "https://nest-finder-w3bc.onrender.com/",
      githubLink: "https://github.com/Ananta025/Nest-Finder"
    },
    {
      id: 4,
      title: "COMMIT CONTROL",
      description: "Custom Version Control System.",
      image: "./project4.png",
      video: "./project4.mp4", // Add video source
      category: "Minor",
      demoLink: "https://commit-control.vercel.app/",
      githubLink: "https://github.com/Ananta025/COMMIT_CONTROL"
    }
  ];

  // Update filtered projects when active filter changes
  useEffect(() => {
    setFilteredProjects(
      activeFilter === "All"
        ? projects
        : projects.filter(project => project.category === activeFilter)
    );
  }, [activeFilter]);

  return (
    <section id="projects" className="w-full min-h-screen bg-black py-16 sm:py-20 md:py-24">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
        {/* Section Header with improved responsiveness */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-['Bebas_Neue'] text-white tracking-wider relative inline-block">
            PROJECTS
            <motion.span
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-1 sm:-bottom-2 left-0 h-1 bg-[#F0C56D]"
            />
          </h2>
          <p className="text-[#AAAAAA] mt-3 sm:mt-4 max-w-2xl mx-auto font-['Rubik'] text-sm sm:text-base">
            Explore my portfolio of projects showcasing my technical skills and creativity.
          </p>
        </motion.div>

        {/* Filter Bar Component - preserved */}
        <FilterBar 
          filters={filters} 
          activeFilter={activeFilter} 
          setActiveFilter={setActiveFilter} 
        />

        {/* Projects Grid with responsive column layout */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
        
        {/* Empty state when no projects match filter */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 sm:py-20"
          >
            <p className="text-[#AAAAAA] text-base sm:text-lg font-['Rubik']">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectSection;
