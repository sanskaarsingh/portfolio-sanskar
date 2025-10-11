// src/components/Skills.jsx

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { categorizedSkills } from '../constants';
import SectionHeader from './SectionHeader';

// --- Mobile-Friendly Skill List Component ---
const MobileSkillsList = () => (
  <div className="space-y-10">
    {Object.entries(categorizedSkills).map(([category, skills]) => (
      <div key={category}>
        <h3 className="mb-6 text-xl font-semibold text-center text-primary">{category}</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, skillIndex) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 px-4 py-2 border rounded-lg bg-light dark:bg-dark border-dark/10 dark:border-light/10"
            >
              <div className="text-2xl" style={{ color: skill.color }}><skill.icon /></div>
              <span className="font-medium text-dark/80 dark:text-light/80">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

// --- Desktop Tech Radar Component ---
const DesktopTechRadar = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [containerSize, setContainerSize] = useState(800);

  const radii = useMemo(() => {
    const baseRadius = containerSize / 2;
    return [baseRadius * 0.3, baseRadius * 0.5, baseRadius * 0.7, baseRadius * 0.9];
  }, [containerSize]);

  useEffect(() => {
    const handleResize = () => {
      const size = Math.min(window.innerWidth * 0.8, 800);
      setContainerSize(size);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full" style={{ height: `${containerSize}px` }}>
        {radii.map((radius, index) => (
            <div key={`ring-${index}`} className="absolute border rounded-full border-dark/10 dark:border-primary/20" style={{ width: radius * 2, height: radius * 2 }} />
        ))}
        <div className="absolute z-10 flex flex-col items-center justify-center w-48 h-48 text-center border-2 rounded-full border-dark/10 dark:border-primary/30 bg-dark/5 dark:bg-primary/5">
            {/* Made this transition faster to match the hover speed */}
            <AnimatePresence mode="wait">
              {hoveredSkill ? (
                <motion.div key={hoveredSkill.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="flex flex-col items-center">
                  <div className="text-5xl" style={{ color: hoveredSkill.color }}><hoveredSkill.icon /></div>
                  <p className="mt-2 font-semibold text-dark dark:text-light">{hoveredSkill.name}</p>
                  <p className="text-xs text-primary/70">{hoveredSkill.category}</p>
                </motion.div>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="text-center">
                  <p className="font-bold text-primary">TECH RADAR</p>
                  <p className="text-xs text-dark/60 dark:text-light/60">Hover a skill</p>
                </motion.div>
              )}
            </AnimatePresence>
        </div>

        {Object.entries(categorizedSkills).map(([category, skills], categoryIndex) => {
            const currentRadius = radii[categoryIndex];
            if (!currentRadius) return null;
            return skills.map((skill, skillIndex) => {
              const angle = (skillIndex / skills.length) * 2 * Math.PI;
              const x = currentRadius * Math.cos(angle);
              const y = currentRadius * Math.sin(angle);
              return (
                <motion.div
                  key={skill.name}
                  className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer top-1/2 left-1/2"
                  style={{ backgroundColor: skill.color, boxShadow: `0 0 12px ${skill.color}` }}
                  initial={{ x: '-50%', y: '-50%', scale: 0 }}
                  animate={{ scale: 1, x: `calc(-50% + ${x}px)`, y: `calc(-50% + ${y}px)` }}
                  transition={{ duration: 1.5, delay: 0.5 + categoryIndex * 0.2 + skillIndex * 0.05, ease: "circOut" }}
                  // THIS IS THE FIX: Added a fast, custom transition for the hover effect
                  whileHover={{ 
                    scale: 1.8, 
                    zIndex: 50,
                    transition: { duration: 0.2, ease: "easeOut" } 
                  }}
                  onHoverStart={() => setHoveredSkill({ ...skill, category })}
                  onHoverEnd={() => setHoveredSkill(null)}
                >
                   <div className="text-xl text-white mix-blend-difference"><skill.icon /></div>
                </motion.div>
              );
            });
        })}
    </div>
  );
};

// --- Main Skills Component with Adaptive Logic ---
const Skills = () => {
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
    <section id="skills" className="py-24 bg-dark/5 dark:bg-light/5">
      <div className="container px-6 mx-auto">
        <SectionHeader title="My Tech Stack" />
        {isMobile ? <MobileSkillsList /> : <DesktopTechRadar />}
      </div>
    </section>
  );
};

export default Skills;