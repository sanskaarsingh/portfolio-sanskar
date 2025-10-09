import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { FiMail, FiPhone, FiGithub } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container px-6 mx-auto">
        <SectionHeader title="Let's Build Something Amazing" />
        <div className="flex flex-col max-w-4xl gap-12 mx-auto md:flex-row">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <p className="mb-8 text-lg text-dark/80 dark:text-light/80">
              Have an idea in mind or looking for someone to bring data and design together? Let’s connect, I’m always open to meaningful collaborations and impactful projects.
            </p>
            <div className="space-y-4">
              <a href="mailto:sanskaarprivate2@gmail.com" className="flex items-center gap-4 group">
                <FiMail className="text-2xl text-primary" />
                <span className="transition-colors group-hover:text-primary">sanskaarprivate2@gmail.com</span>
              </a>
              
               <a href="https://github.com/sanskaarsingh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group">
                <FiGithub className="text-2xl text-primary" />
                <span className="transition-colors group-hover:text-primary">GitHub Profile</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
<motion.form
  action="https://formspree.io/f/xkgqvlgv" 
  method="POST"
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="flex-1 space-y-6"
>
  <input 
    type="text" 
    name="name"
    placeholder="Your Name" 
    className="w-full p-3 transition-colors bg-transparent border-2 rounded-lg border-dark/20 dark:border-light/20 focus:outline-none focus:border-primary" 
  />
  <input 
    type="email" 
    name="email"
    placeholder="Your Email" 
    className="w-full p-3 transition-colors bg-transparent border-2 rounded-lg border-dark/20 dark:border-light/20 focus:outline-none focus:border-primary" 
  />
  <textarea 
    name="message"
    placeholder="Your Message" 
    rows="5" 
    className="w-full p-3 transition-colors bg-transparent border-2 rounded-lg border-dark/20 dark:border-light/20 focus:outline-none focus:border-primary">
  </textarea>
  <button 
    type="submit" 
    className="w-full py-3 font-semibold transition-all duration-300 rounded-lg shadow-lg bg-primary text-light hover:bg-opacity-80">
    Send Message
  </button>
</motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;