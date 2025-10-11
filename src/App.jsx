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

const MainSite = ({ theme, setTheme, lenis, onModalClose, scrollProgress }) => (
  <motion.div
    key="main-site"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1, ease: 'easeInOut' }}
  >
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
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const lenisRef = useRef(null);
  const cursorRef = useRef(null);
  const isTransitioning = useRef(false);


  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
    }
  }, []);


  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') { root.classList.add('dark'); } else { root.classList.remove('dark'); }
  }, [theme]);


  useEffect(() => {
    const lenisInstance = new Lenis({ lerp: 0.08, wheelMultiplier: 0.9 });
    lenisRef.current = lenisInstance;
    function raf(time) { lenisInstance.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenisInstance.destroy();
  }, []);


  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;

 
    const updateProgress = (e) => {
      const progress = Math.round(e.progress * 100);
      setScrollProgress(progress);
    };


    if (!showLanding) {
     
      const timer = setTimeout(() => {
        lenis.on('scroll', updateProgress);
      }, 100);
      return () => {
        clearTimeout(timer);
        lenis.off('scroll', updateProgress); 
      }
    }
  }, [showLanding]);


  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;
    let touchStartY = 0;
    const handleEnter = () => { if (!isTransitioning.current) { isTransitioning.current = true; setShowLanding(false); setTimeout(() => { isTransitioning.current = false; }, 1200); }};
    const handleExit = () => { if (!isTransitioning.current) { isTransitioning.current = true; setShowLanding(true); setTimeout(() => { isTransitioning.current = false; }, 1200); }};
    const handleWheel = (event) => { if (showLanding && event.deltaY > 0) handleEnter(); if (!showLanding && window.scrollY === 0 && event.deltaY < 0) handleExit(); };
    const handleTouchStart = (event) => { touchStartY = event.touches[0].clientY; };
    const handleTouchMove = (event) => { const deltaY = touchStartY - event.touches[0].clientY; if (showLanding && deltaY > 30) handleEnter(); if (!showLanding && window.scrollY === 0 && deltaY < -30) handleExit(); };
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

  const handleModalClose = () => {
    if (cursorRef.current) {
      cursorRef.current.resetHover();
    }
  };

  return (
    <>
      {!isTouchDevice && <Cursor ref={cursorRef} />}

      
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
              onModalClose={handleModalClose}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;