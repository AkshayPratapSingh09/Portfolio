import { useState, useEffect } from 'react';

const customProgressBar = () => {

    const [scrollProgress, setScrollProgress] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY;
          const scrollHeight = document.documentElement.scrollHeight;
          const clientHeight = window.innerHeight;
          const scrollTotal = scrollHeight - clientHeight;
          const progress = (scrollTop / scrollTotal) * 100;
          setScrollProgress(progress);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Initial call
        handleScroll();
    
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
      return scrollProgress;
    
}

export default customProgressBar