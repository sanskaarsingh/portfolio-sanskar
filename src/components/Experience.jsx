import React from 'react';
import { motion } from 'framer-motion';
import { experiences, education } from '../constants';
import SectionHeader from './SectionHeader';

const TimelineItem = ({ data, isLeft }) => (
  <div className={`mb-8 flex justify-between items-center w-full ${isLeft ? 'flex-row-reverse' : ''}`}>
    <div className="order-1 w-5/12"></div>
    <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
      <h1 className="mx-auto font-semibold text-lg text-white"></h1>
    </div>
    <motion.div
      initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="order-1 bg-light dark:bg-dark border border-dark/10 dark:border-light/10 rounded-lg shadow-xl w-5/12 px-6 py-4"
    >
      <h3 className="mb-1 font-bold text-lg">{data.role || data.degree}</h3>
      <p className="text-sm font-medium leading-snug tracking-wide text-primary mb-2">
        {data.company || data.institution} | {data.date}
      </p>
      <p className="text-sm text-dark/70 dark:text-light/70">{data.description}</p>
    </motion.div>
  </div>
);


const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-dark/5 dark:bg-light/5">
      <div className="container mx-auto px-6">
        <SectionHeader title="Career & Education" />
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="absolute border-2-2 border-primary h-full border" style={{ left: '50%' }}></div>
          {experiences.map((item, index) => (
            <TimelineItem key={index} data={item} isLeft={index % 2 !== 0} />
          ))}
           {education.map((item, index) => (
            <TimelineItem key={index} data={item} isLeft={(experiences.length + index) % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;