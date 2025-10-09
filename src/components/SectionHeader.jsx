import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ title }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-4xl font-bold text-center mb-12 relative pb-4"
    >
      {title}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-primary rounded-full"></span>
    </motion.h2>
  );
};

export default SectionHeader;