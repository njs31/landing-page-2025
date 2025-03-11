import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = ({ imageSrc }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    // Hide the default cursor when component mounts
    document.body.style.cursor = 'none';
    
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', updateCursorPosition);
    
    // Clean up
    return () => {
      document.body.style.cursor = 'default';
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);
  
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