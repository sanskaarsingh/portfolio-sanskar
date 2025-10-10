// src/App.jsx

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

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

const MainSite = ({ theme, setTheme, lenis, scrollProgress, setScrollProgress }) => ( 
  <motion.div
    key="main-site"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1.5, ease: [0.87, 0, 0.13, 1] }}
  >
    <ScrollProgressBar setProgress={setScrollProgress} />
    <Navbar theme={theme} setTheme={setTheme} scrollProgress={scrollProgress} />
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects lenis={lenis} />
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
  const isTransitioning = useRef(false);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);
  
  useEffect(() => {
    const lenisInstance = new Lenis();
    lenisRef.current = lenisInstance;
    function raf(time) { lenisInstance.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenisInstance.destroy();
  }, []);

  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;
    const handleScroll = (event) => {
      if (isTransitioning.current) { event.preventDefault(); return; }
      if (showLanding && event.deltaY > 0) {
        event.preventDefault();
        isTransitioning.current = true;
        setShowLanding(false);
        setTimeout(() => { isTransitioning.current = false; }, 1600);
      }
      if (!showLanding && window.scrollY === 0 && event.deltaY < 0) {
        event.preventDefault();
        isTransitioning.current = true;
        setShowLanding(true);
        setTimeout(() => { isTransitioning.current = false; }, 1600);
      }
    };
    if (showLanding) { lenis.stop(); } else { lenis.start(); }
    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => window.removeEventListener('wheel', handleScroll);
  }, [showLanding]);


  return (
    <>
      <Cursor />

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
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;