// src/components/ProjectModal.jsx

import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectModal = ({ project, onClose }) => {
  const modalRef = useRef(null);

  // This is the new, smarter useEffect hook that fixes the bug
  useEffect(() => {
    const modalElement = modalRef.current;

    if (modalElement) {
      const handleWheel = (e) => {
        // 1. Check if the modal's content is taller than its visible area
        const isOverflowing = modalElement.scrollHeight > modalElement.clientHeight;

        // 2. If the modal is NOT overflowing, we must prevent the default action
        //    (which is scrolling the page behind it).
        if (!isOverflowing) {
          e.preventDefault();
        }
        
        // 3. We always stop propagation to prevent conflicts with Lenis
        e.stopPropagation();
      };

      // 4. We must add { passive: false } to allow preventDefault to work
      modalElement.addEventListener('wheel', handleWheel, { passive: false });

      return () => {
        modalElement.removeEventListener('wheel', handleWheel);
      };
    }
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/90 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          ref={modalRef}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-light dark:bg-dark border border-dark/10 dark:border-light/10 rounded-lg shadow-2xl custom-scrollbar"
          onClick={(e) => e.stopPropagation()} 
        >
          <button onClick={onClose} className="absolute z-10 text-2xl transition-colors top-4 right-4 hover:text-primary">
            <FiX />
          </button>
          <div className="p-8 md:p-12">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl text-primary">{project.title}</h2>
            <img src={project.image} alt={project.title} className="object-cover w-full h-64 mb-6 rounded-lg" />
            
            <h3 className="mb-2 text-xl font-semibold">About the Project</h3>
            <p className="mb-6 text-dark/80 dark:text-light/80">{project.longDescription}</p>

            <h3 className="mb-2 text-xl font-semibold">Challenges Faced</h3>
            <p className="mb-6 text-dark/80 dark:text-light/80">{project.challenges}</p>
            
            <h3 className="mb-2 text-xl font-semibold">My Solution</h3>
            <p className="mb-6 text-dark/80 dark:text-light/80">{project.solution}</p>

            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="mr-2 font-semibold">Tech Stack:</span>
              {project.tech.map((tech, i) => (
                <span key={i} className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center space-x-6">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg transition-colors hover:text-primary"><FiGithub /> GitHub</a>
              {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg transition-colors hover:text-primary"><FiExternalLink /> Live Demo</a>}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;