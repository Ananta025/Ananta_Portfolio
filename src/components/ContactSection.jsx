import React, { useState } from 'react';
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="w-full bg-black pt-16 pb-16 md:pt-20 md:pb-16 lg:pt-24 lg:pb-20">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14 lg:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-['Bebas_Neue'] text-white tracking-wider relative inline-block">
            CONTACT
            <motion.span
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-1 sm:-bottom-2 left-0 h-1 bg-[#F0C56D]"
            />
          </h2>
          <p className="text-[#AAAAAA] mt-3 sm:mt-4 max-w-2xl mx-auto font-['Rubik'] text-sm sm:text-base">
            Let's connect and discuss your next project or opportunity.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 md:gap-10 lg:gap-16 xl:gap-20 mx-auto items-center">
          {/* Left Column - Character Image - increased size */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center items-center mx-auto w-full max-w-md md:max-w-full"
          >
            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg shadow-xl">
              <img 
                src="/imag.png" 
                alt="Character illustration" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent"></div>
            </div>
          </motion.div>
          
          {/* Right Column - Contact Form - improved alignment */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-black bg-opacity-70 backdrop-blur-sm p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl border border-[#0D0D0D] border-opacity-10 shadow-xl shadow-black/20 max-w-md mx-auto md:mx-0 w-full self-center"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center h-full flex flex-col items-center justify-center py-8 sm:py-10"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#577A6C] rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <i className="fas fa-check text-xl sm:text-2xl text-white"></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-['Bebas_Neue'] text-white tracking-wider">MESSAGE SENT!</h3>
                <p className="text-[#AAAAAA] mt-2 font-['Rubik'] text-sm sm:text-base">Thank you for reaching out. I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6 font-['Rubik']">
                <div>
                  <label htmlFor="name" className="block text-[#C0C0C0] mb-1 sm:mb-2 font-['Rubik'] text-sm sm:text-base">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#2A2A2A]/80 border border-[#3A3A3A]/20 focus:border-[#F0C56D]/40 focus:ring-[#F0C56D]/20 focus:ring-opacity-20 rounded-lg p-2.5 sm:p-3 text-white placeholder:text-gray-500 text-sm sm:text-base"
                    placeholder="Your name" 
                    required 
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-[#C0C0C0] mb-1 sm:mb-2 font-['Rubik'] text-sm sm:text-base">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#2A2A2A]/80 border border-[#3A3A3A]/20 focus:border-[#F0C56D]/40 focus:ring-[#F0C56D]/20 focus:ring-opacity-20 rounded-lg p-2.5 sm:p-3 text-white placeholder:text-gray-500 text-sm sm:text-base"
                    placeholder="your.email@example.com" 
                    required 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-[#C0C0C0] mb-1 sm:mb-2 font-['Rubik'] text-sm sm:text-base">Message</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#2A2A2A]/80 border border-[#3A3A3A]/20 focus:border-[#F0C56D]/40 focus:ring-[#F0C56D]/20 focus:ring-opacity-20 rounded-lg p-2.5 sm:p-3 text-white placeholder:text-gray-500 text-sm sm:text-base"
                    placeholder="What would you like to discuss?" 
                    required
                  ></textarea>
                </div>
                
                <motion.button 
                  whileTap={{ scale: 0.97 }}
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#F0C56D]/90 hover:bg-[#DA8937] backdrop-blur-sm text-black font-['Bebas_Neue'] tracking-wider py-2.5 px-4 sm:py-3 sm:px-6 rounded-lg text-base sm:text-lg transition-all mt-2"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 sm:h-5 sm:w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      SENDING...
                    </span>
                  ) : "SEND MESSAGE"}
                </motion.button>
              </form>
            )}
            
            <p className="text-[#AAAAAA] text-xs sm:text-sm mt-4 sm:mt-6 text-center font-['Rubik']">
              I typically respond within 24 hours
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
