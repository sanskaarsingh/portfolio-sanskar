import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CgMenuRight, CgClose } from 'react-icons/cg';
import { FiSun, FiMoon } from 'react-icons/fi';

const Navbar = ({ theme, setTheme, scrollProgress }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  
  const menuItems = [
    { title: 'About', prefix: '01' },
    { title: 'Skills', prefix: '02' },
    { title: 'Projects', prefix: '03' },
    { title: 'Career', prefix: '04' },
    { title: 'Contact', prefix: '05' },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  
  const itemVariants = {
    closed: { y: 20, opacity: 0 },
    open: { y: 0, opacity: 1 },
  };
  
 
  const listVariants = {
    closed: {},
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <nav className="fixed top-0 left-0 z-40 w-full">
      <div className="flex items-center justify-between w-full px-6 py-4 sm:px-10 md:px-16">
        <div className="flex items-center gap-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold tracking-wider cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            S<span className="text-primary">.</span>
          </motion.div>
          <div className="hidden font-mono text-sm sm:block text-primary">{scrollProgress}%</div>
        </div>

        <div className="items-center hidden space-x-8 md:flex">
          {menuItems.map((item) => (
            <a key={item.title} onClick={() => scrollToSection(item.title)} className="relative cursor-pointer group">
              {item.title}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <button onClick={toggleTheme} className="text-xl">
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
        </div>
        
        
        <div className="flex items-center md:hidden">
          <span className="mr-4 font-mono text-primary sm:hidden">{scrollProgress}%</span>
          <button onClick={toggleTheme} className="mr-4 text-xl">
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="z-50 text-3xl text-primary">
            {isOpen ? <CgClose /> : <CgMenuRight />}
          </button>
        </div>
      </div>

      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-dark/90 backdrop-blur-md md:hidden"
          >
            <motion.ul
              variants={listVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col items-center gap-8"
            >
              {menuItems.map((item) => (
                <motion.li key={item.title} variants={itemVariants}>
                  <a
                    onClick={() => scrollToSection(item.title)}
                    className="flex items-baseline gap-3 text-3xl font-semibold text-light/80 hover:text-primary"
                  >
                    <span className="font-mono text-lg text-primary">{item.prefix}.</span>
                    {item.title}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;