import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import resume from '../assets/resume_placeholder.pdf';

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container px-6 mx-auto">
        <SectionHeader title="About Me" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-lg text-center text-dark/80 dark:text-light/80"
        >
          <p className="mb-8">
           A Full Stack Developer and Data Analyst passionate about building intelligent, data-driven systems. I specialize in creating scalable backends, dynamic dashboards, and seamless user experiences that connect clean design with powerful analytics. With a strong foundation in statistics, programming, and modern web technologies, I focus on transforming raw data into meaningful insights and efficient solutions. My goal is simple, to engineer systems that are as elegant in logic as they are impactful in execution.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href={resume}
              download
              className="px-6 py-3 font-semibold transition-all duration-300 transform rounded-lg shadow-lg bg-primary text-light hover:bg-opacity-80 hover:scale-105"
            >
              View Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 font-semibold transition-all duration-300 transform border-2 rounded-lg border-primary text-primary hover:bg-primary hover:text-light hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;