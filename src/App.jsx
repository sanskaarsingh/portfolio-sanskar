// src/App.jsx

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

// Import all components
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import ScrollProgressBar from './components/ScrollProgressBar';

// Using the MainSite component structure you provided
const MainSite = ({ theme, setTheme, lenis, onModalClose, scrollProgress, setScrollProgress }) => (
  <motion.div
    key="main-site"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1.5, ease: [0.87, 0, 0.13, 1] }}
  >
    {/* The ScrollProgressBar now correctly lives inside the main site */}
    <ScrollProgressBar setProgress={setScrollProgress} />
    <Navbar theme={theme} setTheme={setTheme} scrollProgress={scrollProgress} />
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects lenis={lenis} onModalClose={onModalClose} />
      <Experience />
      <Contact />
    </main>
    <Footer />
  </motion.div>
);

function App() {
  const [theme, setTheme] = useState('dark');
  const [showLanding, setShowLanding] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const lenisRef = useRef(null);
  const cursorRef = useRef(null);
  const isTransitioning = useRef(false);

  // Theme logic
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') { root.classList.add('dark'); } else { root.classList.remove('dark'); }
  }, [theme]);

  // Lenis initialization with smooth scroll tuning
  useEffect(() => {
    const lenisInstance = new Lenis({ lerp: 0.08, wheelMultiplier: 0.9 });
    lenisRef.current = lenisInstance;
    function raf(time) { lenisInstance.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenisInstance.destroy();
  }, []);

  // Combined scroll and touch transition logic
  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    let touchStartY = 0;

    const handleEnter = () => {
      if (isTransitioning.current) return;
      isTransitioning.current = true;
      setShowLanding(false);
      // Definitive fix for the scroll percentage bug
      if (lenis) lenis.scrollTo(0, { immediate: true });
      setScrollProgress(0);
      setTimeout(() => { isTransitioning.current = false; }, 1600);
    };

    const handleExit = () => {
      if (isTransitioning.current) return;
      isTransitioning.current = true;
      setShowLanding(true);
      setTimeout(() => { isTransitioning.current = false; }, 1600);
    };
    
    const handleWheel = (event) => {
      if (showLanding && event.deltaY > 0) handleEnter();
      if (!showLanding && window.scrollY === 0 && event.deltaY < 0) handleExit();
    };

    const handleTouchStart = (event) => { touchStartY = event.touches[0].clientY; };
    const handleTouchMove = (event) => {
      const deltaY = touchStartY - event.touches[0].clientY;
      if (showLanding && deltaY > 30) handleEnter();
      if (!showLanding && window.scrollY === 0 && deltaY < -30) handleExit();
    };

    if (showLanding) { lenis.stop(); } else { lenis.start(); }

    window.addEventListener('wheel', handleWheel);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [showLanding]);

  // Cursor reset logic
  const handleModalClose = () => {
    if (cursorRef.current) {
      cursorRef.current.resetHover();
    }
  };

  return (
    <>
      <Cursor ref={cursorRef} />
      <div className="App">
        <AnimatePresence mode="wait">
          {showLanding ? (
            <Landing key="landing" />
          ) : (
            <MainSite 
              key="main-site" 
              theme={theme} 
              setTheme={setTheme} 
              lenis={lenisRef.current}
              scrollProgress={scrollProgress}
              setScrollProgress={setScrollProgress}
              onModalClose={handleModalClose}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;