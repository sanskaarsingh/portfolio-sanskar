

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiChevronDown } from 'react-icons/fi';
import { projects } from '../constants';
import SectionHeader from './SectionHeader';

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <section id="projects" className="py-24">
      <div className="container px-6 mx-auto">
        <SectionHeader title="Projects" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="overflow-hidden transition-shadow duration-300 border rounded-lg shadow-md cursor-pointer bg-light dark:bg-dark border-dark/10 dark:border-light/10 hover:shadow-primary/20 hover:shadow-lg"
              onClick={() => setExpandedIndex(index === expandedIndex ? null : index)}
            >
            
              <img src={project.image} alt={project.title} className="object-cover w-full h-48" />
              
              <div className="p-6">
                <motion.div layout="position" className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <FiChevronDown className={`transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`} />
                </motion.div>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="mb-4 text-dark/70 dark:text-light/70">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="px-2 py-1 text-xs rounded bg-primary/20 text-primary">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center space-x-4">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-2xl transition-colors hover:text-primary"><FiGithub /></a>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-2xl transition-colors hover:text-primary"><FiExternalLink /></a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;