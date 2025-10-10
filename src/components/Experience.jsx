// src/components/Experience.jsx

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { experiences, education } from '../constants';
import SectionHeader from './SectionHeader';
import { FiBriefcase, FiAward } from 'react-icons/fi';

// --- Combined Data ---
const timelineItems = [
  ...experiences.map(item => ({ ...item, type: 'work' })),
  ...education.map(item => ({ ...item, type: 'education' }))
];

// --- Component for the Desktop (PC) Alternating Timeline ---
const DesktopTimeline = () => (
  <div className="relative h-full p-10 overflow-hidden wrap">
    <div className="absolute h-full border border-2-2 border-primary/30" style={{ left: '50%' }}></div>
    {timelineItems.map((item, index) => (
      <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
        <div className="order-1 w-5/12"></div>
        <div className="z-20 flex items-center order-1 w-10 h-10 rounded-full shadow-xl bg-primary">
          <div className="mx-auto text-xl text-dark">
            {item.type === 'work' ? <FiBriefcase /> : <FiAward />}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: index % 2 !== 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          // THIS IS THE LINE THAT WAS FIXED: Added hover glow effect
          className="order-1 w-5/12 px-6 py-4 transition-shadow duration-300 border rounded-lg shadow-xl bg-light dark:bg-dark border-dark/10 dark:border-light/10 hover:shadow-lg hover:shadow-primary/20"
        >
          <p className="mb-1 text-sm font-semibold text-primary">{item.date}</p>
          <h3 className="mb-2 text-xl font-bold">{item.role || item.degree}</h3>
          <h4 className="mb-3 font-medium text-dark/60 dark:text-light/60">{item.company || item.institution}</h4>
          <p className="text-dark/80 dark:text-light/80">{item.description}</p>
        </motion.div>
      </div>
    ))}
  </div>
);

// --- Component for the Mobile Single-Column Timeline ---
const MobileTimeline = () => (
  <div className="relative max-w-3xl mx-auto mt-12">
    <div className="absolute top-0 h-full w-0.5 bg-primary/30 left-5" />
    {timelineItems.map((item, index) => (
      <motion.div 
        key={index}
        className="relative pl-16 mb-12"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        <div className="absolute z-10 flex items-center justify-center w-10 h-10 -translate-x-1/2 rounded-full top-1 left-5 bg-primary">
          <div className="text-xl text-dark">
            {item.type === 'work' ? <FiBriefcase /> : <FiAward />}
          </div>
        </div>
        <div className="p-6 border rounded-lg bg-light dark:bg-dark border-dark/10 dark:border-light/10">
          <p className="mb-1 text-sm font-semibold text-primary">{item.date}</p>
          <h3 className="mb-2 text-xl font-bold">{item.role || item.degree}</h3>
          <h4 className="mb-3 font-medium text-dark/60 dark:text-light/60">{item.company || item.institution}</h4>
          <p className="text-dark/80 dark:text-light/80">{item.description}</p>
        </div>
      </motion.div>
    ))}
  </div>
);

// --- Main Experience Component with Adaptive Logic ---
const Experience = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="career" className="py-24 bg-dark/5 dark:bg-light/5">
      <div className="container px-6 mx-auto">
        <SectionHeader title="Career & Education" />
        {isMobile ? <MobileTimeline /> : <DesktopTimeline />}
      </div>
    </section>
  );
};

export default Experience;