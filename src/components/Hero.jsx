import React from 'react';
import { motion } from 'framer-motion';
import heroBgImage from '../assets/hero-bg.jpg'; // <-- Import your image here!

const Hero = () => {
  return (
    <section id="home" className="relative flex items-center justify-center h-screen overflow-hidden">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 z-0">
        {/* The background image */}
        <img 
          src={heroBgImage} 
          alt="Hero Background" 
          className="object-cover w-full h-full opacity-30" // Adjust opacity here (e.g., opacity-20 to opacity-80)
        />
        {/* Semi-transparent dark overlay to add tint and improve text readability */}
        <div className="absolute inset-0 bg-dark/30 dark:bg-dark/30" /> 
      </div>

      <div className="relative z-10 px-6 text-center text-light">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-4 text-5xl font-bold tracking-tight md:text-7xl"
        >
          Sanskar Singh
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-lg font-light md:text-2xl text-light/80"
        >
          Full Stack Developer | Data Analyst | Backend & Data Systems
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute flex flex-col items-center -translate-x-1/2 bottom-10 left-1/2"
      >
        <span className="text-sm text-light/70">See More</span>
        <span className="mt-2 text-xl text-primary">↓</span>
      </motion.div>
    </section>
  );
};

export default Hero;