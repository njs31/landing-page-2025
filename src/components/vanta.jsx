import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import CLOUDS from "vanta/dist/vanta.clouds.min";

const VantaBackground = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = CLOUDS({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      cloudColor: 0xadcdff,
      sunColor: 0xc8c8c8,
      THREE: THREE, // Pass Three.js instance
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy(); // Cleanup
    };
  }, []);

  return <div ref={vantaRef} style={{ width: "100vw", height: "100vh" }} />;
};

export default VantaBackground;
