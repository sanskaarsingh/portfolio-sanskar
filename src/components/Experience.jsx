

import React from 'react';
import { motion } from 'framer-motion';
import { experiences, education } from '../constants';
import SectionHeader from './SectionHeader';

const TimelineItem = ({ data, isLeft }) => (
  <div className={`mb-8 flex justify-between items-center w-full ${isLeft ? 'flex-row-reverse' : ''}`}>
    <div className="order-1 w-5/12"></div>
    <div className="z-20 flex items-center order-1 w-8 h-8 rounded-full shadow-xl bg-primary">
      <h1 className="mx-auto text-lg font-semibold text-white"></h1>
    </div>
    <motion.div
      initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="order-1 w-5/12 px-6 py-4 transition-all duration-300 border rounded-lg shadow-lg cursor-pointer bg-light dark:bg-dark border-dark/10 dark:border-light/10 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/30 hover:scale-[1.03]"
    >
      <h3 className="mb-1 text-lg font-bold">{data.role || data.degree}</h3>
      <p className="mb-2 text-sm font-medium leading-snug tracking-wide text-primary">
        {data.company || data.institution} | {data.date}
      </p>
      <p className="text-sm text-dark/70 dark:text-light/70">{data.description}</p>
    </motion.div>
  </div>
);

const Experience = () => {
  return (
    
    <section id="career" className="py-24 bg-dark/5 dark:bg-light/5">
      <div className="container px-6 mx-auto">
        <SectionHeader title="Career & Education" />
        <div className="relative h-full p-10 overflow-hidden wrap">
          <div className="absolute h-full border border-2-2 border-primary" style={{ left: '50%' }}></div>
          {experiences.map((item, index) => (
            <TimelineItem key={`exp-${index}`} data={item} isLeft={index % 2 !== 0} />
          ))}
           {education.map((item, index) => (
            <TimelineItem key={`edu-${index}`} data={item} isLeft={(experiences.length + index) % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;