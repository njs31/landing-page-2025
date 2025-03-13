import React from "react";
import {
  Typography,
  Button,
  Box,
} from "@mui/material";
import Marquee from "react-fast-marquee";

// Add this to your index.html or import a font package
// <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <Box 
        sx={{ 
          background: "linear-gradient(to bottom, #00416A, #E4E5E6)", 
          padding: { xs: "40px 16px", sm: "50px 20px", md: "60px 24px" }, 
          textAlign: "center" 
        }}
      >
        <Typography 
          variant="h2" 
          sx={{ 
            color: "white", 
            fontWeight: "bold",
            fontFamily: "'Poppins', sans-serif",
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" },
            lineHeight: 1.2,
            marginBottom: { xs: 2, sm: 3, md: 4 }
          }}
        >
          Revolutionize Education Management with our <span style={{ color: "#00C4B4" }}>Onesaz</span> ERP Solutions
        </Typography>
        
        <Typography 
          sx={{ 
            color: "white", 
            marginTop: "10px",
            fontFamily: "'Poppins', sans-serif",
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem", lg: "1.5rem" },
            maxWidth: "800px",
            margin: "0 auto 24px"
          }}
        >
          Transform the way educational institutions operate with our cutting-edge ERP solutions tailored for the ed-tech industry.
        </Typography>
        
        
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: { xs: "24px", sm: "30px", md: "40px" } }}>
        <video
  width="800"
  height="450"
  src="https://onesaz-assets.s3.ap-south-1.amazonaws.com/assets/video.mp4"
  title="Custom video player"
  autoPlay
  loop
  muted
  style={{ 
    width: "100%", 
    maxWidth: "800px", 
    height: "auto", 
    aspectRatio: "16/9",
   
  }}
></video>
        </Box>
      </Box>

      {/* Client Logos Marquee */}
      <Box sx={{ background: "#e0e2e4", padding: "16px 0" }}>
        <Marquee gradient={false} speed={40}>
          <Box
            component="img"
            src='https://onesaz-assets.s3.ap-south-1.amazonaws.com/assets/c1.png'
            alt="Logo 1"
            sx={{ 
              height: { xs: "50px", sm: "60px", md: "70px" }, 
              marginRight: { xs: "100px", sm: "150px", md: "200px", lg: "300px" } 
            }}
          />
          <Box
            component="img"
            src='https://onesaz-assets.s3.ap-south-1.amazonaws.com/assets/c2.png'
            alt="Logo 2"
            sx={{ 
              height: { xs: "50px", sm: "60px", md: "70px" }, 
              marginRight: { xs: "100px", sm: "150px", md: "200px", lg: "300px" } 
            }}
          />
          <Box
            component="img"
            src='https://onesaz-assets.s3.ap-south-1.amazonaws.com/assets/c3.png'
            alt="Logo 3"
            sx={{ 
              height: { xs: "50px", sm: "60px", md: "70px" }, 
              marginRight: { xs: "100px", sm: "150px", md: "200px", lg: "300px" } 
            }}
          />
          <Box
            component="img"
            src='https://onesaz-assets.s3.ap-south-1.amazonaws.com/assets/c4.png'
            alt="Logo 4"
            sx={{ 
              height: { xs: "50px", sm: "60px", md: "70px" }, 
              marginRight: { xs: "100px", sm: "150px", md: "200px", lg: "300px" } 
            }}
          />
        </Marquee>
      </Box>
    </>
  );
};

export default HeroSection;