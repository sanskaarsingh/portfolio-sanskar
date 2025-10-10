import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiEye } from 'react-icons/fi';
import { projects } from '../constants';
import SectionHeader from './SectionHeader';
import ProjectModal from './ProjectModal';

const Projects = ({ lenis }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      if (lenis) lenis.stop();
    } else {
      if (lenis) lenis.start();
    }
  }, [selectedProject, lenis]);

  return (
    <>
      <section id="projects" className="py-24">
        <div className="container px-6 mx-auto">
          <SectionHeader title="Projects" />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="overflow-hidden border rounded-lg shadow-md cursor-pointer group bg-light dark:bg-dark border-dark/10 dark:border-light/10"
                onClick={() => setSelectedProject(project)}
              >
 
                <div className="relative bg-light dark:bg-dark">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="block object-cover w-full h-48 transition-all duration-300 transform-gpu group-hover:opacity-60 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <FiEye className="text-4xl text-light" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                  <p className="text-sm text-dark/70 dark:text-light/70">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
};

export default Projects;