import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = ({ imageSrc }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Check if device is mobile
    const checkIfMobile = () => {
      const mobileBreakpoint = 768; // Common mobile breakpoint (adjust as needed)
      return window.innerWidth <= mobileBreakpoint || 
             ('ontouchstart' in window) || 
             (navigator.maxTouchPoints > 0);
    };
    
    const handleResize = () => {
      const mobile = checkIfMobile();
      setIsMobile(mobile);
      
      // Only hide cursor on non-mobile devices
      document.body.style.cursor = mobile ? 'auto' : 'none';
    };
    
    // Initial check
    handleResize();
    
    // Update cursor position only on non-mobile devices
    const updateCursorPosition = (e) => {
      if (!isMobile) {
        setPosition({ x: e.clientX, y: e.clientY });
      }
    };
    
    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      document.body.style.cursor = 'default';
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);
  
  // Don't render custom cursor component on mobile devices
  if (isMobile) {
    return null;
  }
  
  return (
    <img 
      src={imageSrc}
      className="custom-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      alt="cursor"
    />
  );
};

export default CustomCursor;