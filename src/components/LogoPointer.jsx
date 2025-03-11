import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';

// Custom cursor component
const CustomCursor = styled('div')(({ theme, isVisible }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '40px', // Adjust size as needed
  height: '40px',
  pointerEvents: 'none', // Makes the cursor pass-through for mouse events
  zIndex: 9999,
  opacity: isVisible ? 1 : 0,
  transition: 'opacity 0.2s ease',
  transform: 'translate(-50%, -50%)', // Center the cursor at the pointer position
}));

// Logo element inside the cursor
const CursorLogo = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
});

const LogoPointer = ({ logoSrc = '/path/to/your/logo.svg' }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to update cursor position
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Show cursor when mouse enters the window
    const showCursor = () => setIsVisible(true);
    
    // Hide cursor when mouse leaves the window
    const hideCursor = () => setIsVisible(false);

    // Add event listeners
    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseenter', showCursor);
    document.addEventListener('mouseleave', hideCursor);

    // Remove event listeners on cleanup
    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseenter', showCursor);
      document.removeEventListener('mouseleave', hideCursor);
    };
  }, []);

  return (
    <CustomCursor 
      isVisible={isVisible}
      style={{ 
        left: `${position.x}px`,
        top: `${position.y}px`
      }}
    >
      <CursorLogo src={logoSrc} alt="Custom cursor" />
    </CustomCursor>
  );
};

export default LogoPointer;