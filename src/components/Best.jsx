import React from "react";
import { Box, Typography, Grid, Button, Card, CardContent, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";

import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SecurityIcon from '@mui/icons-material/Security';
import DescriptionIcon from '@mui/icons-material/Description';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import SchoolIcon from '@mui/icons-material/School';
import ArticleIcon from '@mui/icons-material/Article';

const StyledCard = styled(motion.create(Card))(({ theme }) => ({
  padding: "24px",     
  boxShadow: "0 4px 12px rgba(0, 136, 255, 0.1)", 
  background: "#E3F2FD", // Slight light blue background
  textAlign: "left",  
  transition: "all 0.3s ease",
  overflow: "hidden",
  position: "relative",
  border: "1px solid",
  borderImage: "linear-gradient(135deg, #00C6FF, #0072FF) 1", 
  borderRadius: "30px",
  ":hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 16px rgba(0, 136, 255, 0.2)"
  },
}));

const features = [
  {
    title: "Customized Solutions",
    description: "Our tech-savvy team listens to your needs, delivering fast, tailored solutions.",
    icon: <RocketLaunchIcon sx={{ fontSize: 32, color: "#0088FF" }} />, 
  },
  {
    title: "4 Layer Security",
    description: "Your data is guarded by 4 layers of protection, ensuring a hack-free environment. Notified whenever data is edited/damaged.",
    icon: <SecurityIcon sx={{ fontSize: 32, color: "#0088FF" }} />,
  },
  {
    title: "OMR Scan Analysis",
    description: "Easily scan any OMR sheet with your mobile camera. We provide instant, comprehensive analysis with 14 detailed insights.",
    icon: <DescriptionIcon sx={{ fontSize: 32, color: "#0088FF" }} />,
  },
  {
    title: "Adaptive Learning",
    description: "Our system leverages advanced algorithms to analyze individual student performance and preferences.",
    icon: <CastForEducationIcon sx={{ fontSize: 32, color: "#0088FF" }} />,
  },
  {
    title: "School Operating System",
    description: "Our ERP solution seamlessly integrates all aspects of education management, from enrollment to assessments, into a unified platform.",
    icon: <SchoolIcon sx={{ fontSize: 32, color: "#0088FF" }} />,
  },
  {
    title: "Best Content",
    description: "Explore Onesaz's question bank with 300,000+ questions, subject wise, topics, and subtopics – all expertly organized to save your time & energy.",
    icon: <ArticleIcon sx={{ fontSize: 32, color: "#0088FF" }} />,
  },
];

const FeaturesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const backgroundShapes = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 0,
    overflow: 'hidden',
  };

  const shapeStyle = {
    position: 'absolute',
    borderRadius: '50%',
    animation: 'float 6s ease-in-out infinite alternate',
  };

  const triangleStyle = {
    position: 'absolute',
    clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
    animation: 'float 8s ease-in-out infinite alternate-reverse',
  };

  const rectangleStyle = {
    position: 'absolute',
    animation: 'float 10s ease-in-out infinite alternate',
  };

  const generateShapes = () => {
    const shapes = [];
    const colors = ['rgba(255, 0, 0, 0.2)', 'rgba(255, 255, 0, 0.2)', 'rgba(0, 255, 0, 0.2)', 'rgba(0, 0, 255, 0.2)'];

    for (let i = 0; i < 100; i++) { // Increased number of shapes
      const size = Math.random() * 20 + 5;
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const color = colors[Math.floor(Math.random() * colors.length)];

      if (i % 3 === 0) {
        shapes.push(
          <div
            key={`circle-${i}`}
            style={{
              ...shapeStyle,
              width: `${size}px`,
              height: `${size}px`,
              top: `${top}%`,
              left: `${left}%`,
              background: color,
            }}
          />
        );
      } else if (i % 3 === 1) {
        shapes.push(
          <div
            key={`triangle-${i}`}
            style={{
              ...triangleStyle,
              width: `${size}px`,
              height: `${size}px`,
              top: `${top}%`,
              left: `${left}%`,
              background: color,
            }}
          />
        );
      } else {
        shapes.push(
          <div
            key={`rectangle-${i}`}
            style={{
              ...rectangleStyle,
              width: `${size * 1.5}px`,
              height: `${size * 0.8}px`,
              top: `${top}%`,
              left: `${left}%`,
              background: color,
            }}
          />
        );
      }
    }
    return shapes;
  };

  return (
    <Box sx={{ textAlign: "center", py: 8, backgroundColor: "#F9FAFB", position: 'relative', overflow: 'hidden', height: isMobile ? 'auto' : '100vh' }}>
      <div style={backgroundShapes}>
        {generateShapes()}
      </div>
      <Typography variant="h4" fontWeight={1000} sx={{ color: "#333", position: 'relative', zIndex: 1 }}>
        Why our product is the <span style={{ color: "#0088FF" }}>best</span>
      </Typography>

      <Grid container spacing={4} justifyContent="center" sx={{ mt: 4, px: { xs: 2, sm: 4, md: 8 }, position: 'relative', zIndex: 1 }}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledCard
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ mb: 2, textAlign: 'left' }}>
                  {feature.icon} 
                </Box>
                <Typography variant="h6" fontWeight={600} sx={{ mt: 1, color: "#333", textAlign: 'left' }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, color: "#777", textAlign: 'left', fontSize: '1rem' }}>
                  {feature.description}
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>

      <Button
        variant="contained"
        sx={{
          mt: 6,
          backgroundColor: "#0088FF",
          padding: "12px 40px",
          borderRadius: "30px",
          textTransform: "none",
          fontSize: "18px",
          boxShadow: "0 6px 12px rgba(0, 136, 255, 0.3)",
          ":hover": { backgroundColor: "#0066CC" },
          position: 'relative', zIndex: 1
        }}
      >
        Sign up
      </Button>
    </Box>
  );
};

export default FeaturesSection;