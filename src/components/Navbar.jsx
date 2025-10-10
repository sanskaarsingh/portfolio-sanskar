import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CgMenuRight, CgClose } from 'react-icons/cg';
import { FiSun, FiMoon } from 'react-icons/fi';

const Navbar = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const menuItems = ['About', 'Skills', 'Projects', 'Contact'];

  const scrollToSection = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 z-40 w-full">
      <div className="container flex items-center justify-between px-6 py-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold tracking-wider cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          S<span className="text-primary">.</span>
        </motion.div>
        <div className="items-center hidden space-x-8 md:flex">
          {menuItems.map((item) => (
            <a
              key={item}
              onClick={() => scrollToSection(item)}
              className="relative cursor-pointer group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <button onClick={toggleTheme} className="text-xl">
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
        </div>
        <div className="flex items-center md:hidden">
          <button onClick={toggleTheme} className="mr-4 text-xl">
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="z-50 text-2xl">
            {isOpen ? <CgClose /> : <CgMenuRight />}
          </button>
        </div>
      </div>

      
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'tween', ease: 'easeInOut' }}
        className="fixed top-0 right-0 w-2/3 h-full shadow-lg md:hidden bg-dark/80 dark:bg-light/80 backdrop-blur-md"
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-light dark:text-dark">
          {menuItems.map((item) => (
            <a
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-2xl font-medium cursor-pointer"
            >
              {item}
            </a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;