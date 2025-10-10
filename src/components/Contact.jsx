

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { FiMail, FiGithub, FiSend } from 'react-icons/fi';

const AnimatedInput = ({ id, type = 'text', placeholder, rows }) => {
  const InputComponent = type === 'textarea' ? 'textarea' : 'input';
  
  return (
    <div className="relative group">
      <InputComponent
        id={id}
        name={id}
        type={type}
        rows={rows || 1}
        className="w-full p-2 text-lg align-bottom bg-transparent border-b-2 text-dark dark:text-white peer border-dark/20 dark:border-light/20 focus:outline-none placeholder:text-dark/50 dark:placeholder:text-light/50"
        placeholder={placeholder}
        autoComplete="off"
        required
      />
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 ease-out" />
    </div>
  );
};

const Contact = () => {
  return (
    
    <section id="contact" className="relative py-24 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-50 bg-gradient-to-r from-purple-900 via-dark to-cyan-900 bg-[length:400%_400%] animate-aurora"
      />

      <div className="container relative z-10 px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
            <SectionHeader title="Connect"/>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-12 text-lg text-dark/70 dark:text-light/70"
            >
              Have an idea in mind or looking for someone to bring data and design together? Let’s connect, I’m always open to meaningful collaborations and impactful projects.
            </motion.p>
        </div>
        
        <motion.form
          action="https://formspree.io/f/xkgqvlgv"
          method="POST"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto space-y-8"
        >
          <AnimatedInput id="name" placeholder="Your Name" />
          <AnimatedInput id="email" type="email" placeholder="Your Email" />
          <AnimatedInput id="message" type="textarea" placeholder="Your Message" rows={4} />

          <motion.button
            type="submit"
            className="w-full py-4 text-lg font-semibold transition-all duration-300 rounded-lg shadow-lg bg-primary text-dark hover:shadow-primary/40"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center justify-center gap-2">
              Spam <FiSend />
            </span>
          </motion.button>
        </motion.form>

        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center mt-16 space-y-6 md:flex-row md:justify-center md:space-y-0 md:space-x-12"
        >
            <a href="mailto:sanskaarprivate2@gmail.com" className="flex items-center gap-3 text-lg transition-all duration-300 text-dark/70 dark:text-light/70 hover:text-primary hover:scale-105">
                <FiMail className="text-2xl" />
                <span>sanskaarprivate2@gmail.com</span>
            </a>
            <a href="https://github.com/sanskaarsingh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg transition-all duration-300 text-dark/70 dark:text-light/70 hover:text-primary hover:scale-105">
                <FiGithub className="text-2xl" />
                <span>GitHub Profile</span>
            </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;