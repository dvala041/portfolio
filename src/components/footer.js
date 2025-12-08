import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer 
      className="bg-gray-900 border-t border-gray-800 py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-4">
          {/* Tech Stack Information */}
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-2">Built with:</p>
            <div className="flex flex-wrap justify-center gap-3 text-gray-300">
              <span className="px-3 py-1 bg-gray-800 rounded-full text-xs">Next.js</span>
              <span className="px-3 py-1 bg-gray-800 rounded-full text-xs">React</span>
              <span className="px-3 py-1 bg-gray-800 rounded-full text-xs">Tailwind CSS</span>
              <span className="px-3 py-1 bg-gray-800 rounded-full text-xs">shadcn/ui</span>
              <span className="px-3 py-1 bg-gray-800 rounded-full text-xs">Framer Motion</span>
            </div>
          </div>

          {/* End of Page Indicator */}
          <div className="flex flex-col items-center gap-2 mt-4">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
            <p className="text-gray-500 text-xs">You've reached the end</p>
            <div className="w-2 h-2 rounded-full bg-gray-600"></div>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-xs mt-4">
            © {new Date().getFullYear()} David Valarezo. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
