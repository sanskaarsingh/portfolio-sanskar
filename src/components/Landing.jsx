// src/components/Landing.jsx

import React, { useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const Landing = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    let scene, camera, renderer, stars, geometry, material;
    
    // Storing the current ref in a variable for the cleanup function
    const currentMount = mountRef.current;

    // --- Animation Setup (unchanged) ---
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 1;
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1);
    currentMount.appendChild(renderer.domElement);
    const starVertices = [];
    for (let i = 0; i < 10000; i++) starVertices.push((Math.random() - 0.5) * 2000, (Math.random() - 0.5) * 2000, (Math.random() - 0.5) * 2000);
    geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    material = new THREE.PointsMaterial({ color: 0xaaaaaa, size: 0.7 });
    stars = new THREE.Points(geometry, material);
    scene.add(stars);
    let mouse = new THREE.Vector2();
    const onMouseMove = (event) => { mouse.x = event.clientX; mouse.y = event.clientY; };
    window.addEventListener('mousemove', onMouseMove);
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      stars.position.x = (mouse.x - window.innerWidth / 2) * 0.0001;
      stars.position.y = (mouse.y - window.innerHeight / 2) * -0.0001;
      stars.rotation.y -= 0.0001;
      renderer.render(scene, camera);
    };
    animate();
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onWindowResize);

    // --- THIS IS THE CORRECTED CLEANUP FUNCTION ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onWindowResize);
      
      // Check if the renderer's DOM element is still a child before removing it
      if (currentMount && currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }

      // Dispose of Three.js objects to free up GPU memory
      geometry.dispose();
      material.dispose();
      scene.remove(stars);
      renderer.dispose();
    };
  }, []);

  const text = "PARIVARTAN";
  const characters = text.split("");
  const randomDelays = useMemo(() => Array.from({ length: characters.length }, () => Math.random() * 1.5), [characters.length]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
      exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeOut' } }}
    >
      <div ref={mountRef} className="absolute inset-0 z-0" />
      <div className="relative z-10 text-center pointer-events-none">
        <motion.h1
          className="text-white font-montserrat-black uppercase text-[12vw] md:text-9xl tracking-widest text-glow-white"
          exit={{ opacity: 0, scale: 1.5, transition: { duration: 1.2, ease: 'easeOut' } }}
        >
          {characters.map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: randomDelays[index] }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
      </div>
      <div className="absolute z-10 text-center bottom-10 text-light">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 2.5 }} className="flex flex-col items-center">
          <p className="mb-2 text-sm font-light tracking-widest uppercase">Scroll to Explore</p>
          <motion.div className="w-0.5 h-10 bg-white" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Landing;