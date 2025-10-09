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
    <nav className="fixed top-0 left-0 w-full z-40">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold tracking-wider cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          S<span className="text-primary">.</span>
        </motion.div>
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item}
              onClick={() => scrollToSection(item)}
              className="cursor-pointer relative group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <button onClick={toggleTheme} className="text-xl">
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleTheme} className="text-xl mr-4">
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl z-50">
            {isOpen ? <CgClose /> : <CgMenuRight />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'tween', ease: 'easeInOut' }}
        className="md:hidden fixed top-0 right-0 h-full w-2/3 bg-dark/80 dark:bg-light/80 backdrop-blur-md shadow-lg"
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