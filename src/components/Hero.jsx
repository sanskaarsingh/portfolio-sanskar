// src/components/Hero.jsx

import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import heroBgImage from '../assets/hero-bg.jpg';

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // --- THIS IS WHERE THE FIX IS ---
  // The output range (e.g., [10, -10]) controls the intensity. We'll make it smaller.

  // Background movement is now more subtle
  const bgX = useTransform(mouseX, [-window.innerWidth / 2, window.innerWidth / 2], [10, -10]);
  const bgY = useTransform(mouseY, [-window.innerHeight / 2, window.innerHeight / 2], [10, -10]);

  // Foreground (text) movement is even more subtle for a refined depth effect
  const fgX = useTransform(mouseX, [-window.innerWidth / 2, window.innerWidth / 2], [-5, 5]);
  const fgY = useTransform(mouseY, [-window.innerHeight / 2, window.innerHeight / 2], [-5, 5]);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX - window.innerWidth / 2);
    mouseY.set(e.clientY - window.innerHeight / 2);
  };

  return (
    <section 
      id="home" 
      className="relative flex items-center justify-center h-screen overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background with Parallax */}
      <motion.div
        className="absolute inset-[-50px] z-0"
        style={{
          backgroundImage: `url(${heroBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          x: bgX,
          y: bgY,
        }}
      >
        <div className="absolute inset-0 bg-dark/70" />
      </motion.div>

      {/* Text Content Container */}
      <div className="relative z-10 px-6 text-center text-light">
        <motion.h1
          style={{ x: fgX, y: fgY }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-4 text-5xl font-bold tracking-tight md:text-7xl"
        >
          Sanskar Singh
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <TypeAnimation
            sequence={[
              'Full Stack Developer', 2000,
              'Data Analyst', 2000,
              'Backend & Data Systems Engineer', 2000,
            ]}
            wrapper="p"
            speed={50}
            className="text-lg font-light md:text-2xl text-primary"
            repeat={Infinity}
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute z-20 flex flex-col items-center -translate-x-1/2 bottom-10 left-1/2"
      >
        <span className="text-sm text-light/70">SCROLL</span>
        <span className="mt-2 text-xl text-primary">↓</span>
      </motion.div>
    </section>
  );
};

export default Hero;