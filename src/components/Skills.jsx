import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../constants';
import SectionHeader from './SectionHeader';

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-dark/5 dark:bg-light/5">
      <div className="container mx-auto px-6">
        <SectionHeader title="My Tech Stack" />
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center group"
            >
              <div
                className="text-6xl p-4 rounded-full bg-dark/10 dark:bg-light/10 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110"
                style={{
                  color: skill.color,
                  boxShadow: `0 0 15px ${skill.color}33`,
                }}
              >
                <skill.icon />
              </div>
              <p className="mt-4 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;