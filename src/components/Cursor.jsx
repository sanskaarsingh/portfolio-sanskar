import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, [role="button"]')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest('a, button, [role="button"]')) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  const cursorVariants = {
    default: {
      x: position.x - 12,
      y: position.y - 12,
      height: 24,
      width: 24,
      backgroundColor: '#07beb8',
      mixBlendMode: 'difference',
    },
    hover: {
      x: position.x - 32,
      y: position.y - 32,
      height: 64,
      width: 64,
      backgroundColor: '#fefffe',
      mixBlendMode: 'difference',
    },
  };

  const trailVariants = {
    default: {
      x: position.x - 4,
      y: position.y - 4,
    },
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 h-2 w-2 rounded-full bg-primary pointer-events-none z-50"
        variants={trailVariants}
        animate="default"
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50"
        variants={cursorVariants}
        animate={isHovering ? 'hover' : 'default'}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    </>
  );
};

export default Cursor;