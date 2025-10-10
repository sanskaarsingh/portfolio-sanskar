

import { useEffect } from 'react';
import { useScroll, useSpring } from 'framer-motion';


const ScrollProgressBar = ({ setProgress }) => {
  const { scrollYProgress } = useScroll();
  

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
  });

  useEffect(() => {

    const unsubscribe = smoothProgress.on("change", (latest) => {
 
      const percentage = Math.round(latest * 100);
      setProgress(percentage);
    });


    return () => unsubscribe();
  }, [smoothProgress, setProgress]);


  return null;
};

export default ScrollProgressBar;