// src/components/Skills.jsx

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { categorizedSkills } from '../constants';
import SectionHeader from './SectionHeader';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const radii = [100, 180, 260, 340]; 

  return (
    <section id="skills" className="py-24 bg-dark/5 dark:bg-light/5">
      <div className="container px-6 mx-auto">
        <SectionHeader title="Tech Radar" />
        <div 
          className="relative flex items-center justify-center w-full h-[800px]"
        >

          {radii.map((radius, index) => (
            <motion.div
              key={`ring-${index}`}
              className="absolute border rounded-full border-dark/10 dark:border-primary/20"
              style={{ width: radius * 2, height: radius * 2 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1, delay: index * 0.2 } }}
            />
          ))}

    
          <div className="absolute z-10 flex flex-col items-center justify-center w-48 h-48 text-center border-2 rounded-full border-dark/10 dark:border-primary/30 bg-dark/5 dark:bg-primary/5">
            <AnimatePresence mode="wait">
              {hoveredSkill ? (
                <motion.div
                  key={hoveredSkill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col items-center"
                >
                  <div className="text-5xl" style={{ color: hoveredSkill.color }}>
                    <hoveredSkill.icon />
                  </div>
                  <p className="mt-2 font-semibold text-dark dark:text-light">{hoveredSkill.name}</p>
                  <p className="text-xs text-primary/70">{hoveredSkill.category}</p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center"
                >
                  <p className="font-bold text-primary">TECH RADAR</p>
                  <p className="text-xs text-dark/60 dark:text-light/60">Hover a skill</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

  
          {Object.entries(categorizedSkills).map(([category, skills], categoryIndex) => {
            const currentRadius = radii[categoryIndex];
            return skills.map((skill, skillIndex) => {
              const angle = (skillIndex / skills.length) * 2 * Math.PI;
              const x = currentRadius * Math.cos(angle);
              const y = currentRadius * Math.sin(angle);

              return (
                <motion.div
                  key={skill.name}
                  className="absolute flex items-center justify-center w-8 h-8 rounded-full cursor-pointer top-1/2 left-1/2"
                  style={{
                    backgroundColor: skill.color,
                    boxShadow: `0 0 12px ${skill.color}`,
                  }}
                  initial={{ x: '-50%', y: '-50%', opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: `calc(-50% + ${x}px)`,
                    y: `calc(-50% + ${y}px)`,
                    transition: {
                      duration: 1.5,
                      delay: 0.5 + categoryIndex * 0.2 + skillIndex * 0.05,
                      ease: "circOut",
                    },
                  }}
                  whileHover={{ scale: 1.8, zIndex: 50 }}
                  onHoverStart={() => setHoveredSkill({ ...skill, category })}
                  onHoverEnd={() => setHoveredSkill(null)}
                >
                   <div className="text-xl text-white mix-blend-difference">
                      <skill.icon />
                    </div>
                </motion.div>
              );
            });
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;