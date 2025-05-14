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
    <section id="contact" className="w-full bg-black pt-12 pb-6 md:pt-16 md:pb-8">
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 xl:px-32">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-6xl font-['Bebas_Neue'] text-white tracking-wider relative inline-block">
            CONTACT
            <motion.span
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-2 left-0 h-1 bg-[#F0C56D]"
            />
          </h2>
          <p className="text-[#AAAAAA] mt-4 max-w-2xl mx-auto font-['Rubik']">
            Let's connect and discuss your next project or opportunity.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 mx-auto px-2 items-center">
          {/* Left Column - Character Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center items-center mx-auto w-full"
          >
            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg">
              <img 
                src="/imag.png" 
                alt="Character illustration" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent"></div>
            </div>
          </motion.div>
          
          {/* Right Column - Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#111111] p-5 md:p-7 rounded-xl border border-[#3A3A3A] shadow-lg max-w-md mx-auto md:mx-0 w-full"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center h-full flex flex-col items-center justify-center py-10"
              >
                <div className="w-16 h-16 bg-[#577A6C] rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-check text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-['Bebas_Neue'] text-white tracking-wider">MESSAGE SENT!</h3>
                <p className="text-[#AAAAAA] mt-2 font-['Rubik']">Thank you for reaching out. I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 font-['Rubik']">
                <div>
                  <label htmlFor="name" className="block text-[#C0C0C0] mb-2 font-['Rubik']">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#2A2A2A] border border-[#3A3A3A] focus:border-[#F0C56D] focus:ring-[#F0C56D] rounded-lg p-3 text-white placeholder:text-gray-500"
                    placeholder="Your name" 
                    required 
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-[#C0C0C0] mb-2 font-['Rubik']">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#2A2A2A] border border-[#3A3A3A] focus:border-[#F0C56D] focus:ring-[#F0C56D] rounded-lg p-3 text-white placeholder:text-gray-500"
                    placeholder="your.email@example.com" 
                    required 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-[#C0C0C0] mb-2 font-['Rubik']">Message</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#2A2A2A] border border-[#3A3A3A] focus:border-[#F0C56D] focus:ring-[#F0C56D] rounded-lg p-3 text-white placeholder:text-gray-500"
                    placeholder="What would you like to discuss?" 
                    required
                  ></textarea>
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#F0C56D] hover:bg-[#DA8937] text-black font-['Bebas_Neue'] tracking-wider py-2 px-6 rounded-lg text-lg transition-all"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      SENDING...
                    </span>
                  ) : "SEND MESSAGE"}
                </motion.button>
              </form>
            )}
            
            <p className="text-[#AAAAAA] text-sm mt-6 text-center font-['Rubik']">
              I typically respond within 24 hours
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
