import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from './SectionHeader';
import resume from '../assets/resume_placeholder.pdf';
import { FiCode, FiDatabase, FiCpu, FiDownload, FiMail } from 'react-icons/fi';


const pillars = [
  {
    id: 1,
    title: 'Full Stack Development',
    icon: FiCode,
    description: 'I bring ideas to life by building complete, end-to-end applications. My experience ranges from developing responsive user interfaces with React, like in the Schedulr and Currency Tracker apps, to engineering robust backends with Node.js and Python. I connect clean frontends with powerful server-side logic to create seamless, impactful user experiences.',
  },
  {
    id: 2,
    title: 'Data Analysis & Automation',
    icon: FiDatabase,
    description: 'I specialize in transforming raw data into strategic assets. At Black Diamond Motors, I automated dispatch and fuel tracking dashboards using SQL and Power BI, cutting manual work by 80%. My project work, like the Stock Price Predictor, showcases my ability to apply statistical modeling and machine learning to build intelligent, data-driven systems.',
  },
  {
    id: 3,
    title: 'System Architecture & DevOps',
    icon: FiCpu,
    description: 'I focus on designing systems that are not just functional but also scalable and efficient. My work involves architecting RESTful APIs, building data pipelines for IoT sensor data, and leveraging cloud services like AWS and Google Cloud. I use tools like Docker to ensure my applications are containerized, consistent, and ready for deployment.',
  },
];

const About = () => {
  const [activePillar, setActivePillar] = useState(pillars[0]);

  return (
    <section id="about" className="py-24">
      <div className="container px-6 mx-auto">
        <SectionHeader title="Sanskar Core" />
        
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
        
          <div className="relative flex flex-col w-full space-y-4 lg:w-1/3">
            {pillars.map((pillar) => (
              <motion.button
                key={pillar.id}
                onClick={() => setActivePillar(pillar)}
                className="relative w-full p-6 text-left transition-colors duration-300 border rounded-lg border-dark/10 dark:border-light/10"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {activePillar.id === pillar.id && (
                  <motion.div
                    layoutId="activePillarBackground"
                    className="absolute inset-0 rounded-lg bg-primary/10"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <div className="relative z-10 flex items-center gap-4">
                  <pillar.icon className="text-3xl text-primary" />
                  <span className="text-lg font-semibold">{pillar.title}</span>
                </div>
              </motion.button>
            ))}
          </div>

          
          <div className="relative w-full lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <p className="text-xl leading-relaxed text-dark/80 dark:text-light/80">
                  {activePillar.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center mt-16 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6"
        >
          <a
            href={resume}
            download
            className="flex items-center gap-3 px-8 py-4 text-lg font-semibold transition-all duration-300 transform rounded-lg shadow-lg bg-primary text-light hover:bg-opacity-80 hover:scale-105"
          >
            <FiDownload /> View Resume
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center gap-3 px-8 py-4 text-lg font-semibold transition-all duration-300 transform border-2 rounded-lg border-primary text-primary hover:bg-primary hover:text-light hover:scale-105"
          >
            <FiMail /> Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;