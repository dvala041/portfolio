import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-xl font-bold text-white hover:text-blue-400 transition-colors"
          >
            David Valarezo
          </button>
          <div className="flex gap-6">
            <button 
              onClick={() => scrollToSection('education')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
