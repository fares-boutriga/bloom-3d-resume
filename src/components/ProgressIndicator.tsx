
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ProgressIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const updateScroll = () => {
      // Calculate how far down the page the user is
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = window.scrollY / totalHeight;
      
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', updateScroll);
    
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-accent z-[9999] origin-left"
      style={{ scaleX: scrollProgress }}
    />
  );
};

export default ProgressIndicator;
