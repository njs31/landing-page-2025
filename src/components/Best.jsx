import React from "react";
import {
  Card,
  Typography,
  Grid,
  Box,
  SvgIcon,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import LockIcon from "@mui/icons-material/Lock";
import CameraIcon from "@mui/icons-material/Camera";
import SchoolIcon from "@mui/icons-material/School";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { styled } from "@mui/material/styles";

// Styled Card for improved aesthetics
const StyledCard = styled(Card)(({ theme, accentColor }) => ({
  borderRadius: "16px",
  boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.08)",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0px 15px 35px rgba(0, 0, 0, 0.12)",
  },
  textAlign: "center",
  padding: theme.spacing(4),
  backgroundColor: "white",
  position: "relative",
  overflow: "hidden",
  height: "400px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

// Content container to position above the geometric shapes
const ContentContainer = styled(Box)({
  position: "relative",
  zIndex: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "100%",
  justifyContent: "center",
});

export default function FeatureCards() {
  const features = [
    {
      icon: SettingsIcon,
      title: "Customized Applications",
      description:
        "Our tech-savvy team listens to your needs, delivering fast, tailored solutions.",
      accentColor: "#FF5722", // Orange
    },
    {
      icon: LockIcon,
      title: "4 Layer security",
      description:
        "Your data is guarded by 4 layers of protection, ensuring a hack-free environment. Notified whenever data is edited/damaged.",
      accentColor: "#673AB7", // Deep Purple
    },
    {
      icon: CameraIcon,
      title: "OMR scan analysis",
      description:
        "Easily scan any OMR sheet with your mobile camera. We provide instant, comprehensive analysis with 14 detailed insights.",
      accentColor: "#2196F3", // Blue
    },
    {
      icon: AutoGraphIcon,
      title: "Adaptive Learning",
      description:
        "Our system leverages advanced algorithms to analyze individual student performance and preferences.",
      accentColor: "#4CAF50", // Green
    },
    {
      icon: SchoolIcon,
      title: "School operating system",
      description:
        "Our ERP solution seamlessly integrates all aspects of education management, from enrollment to assessments, into a unified platform.",
      accentColor: "#9C27B0", // Purple
    },
    {
      icon: MenuBookIcon,
      title: "Best content",
      description:
        "Explore Onesaz's question bank with 300,000+ questions, subject-wise, topics, and subtopics – all expertly organized to save your time & energy.",
      accentColor: "#E91E63", // Pink
    },
  ];

  // Generate random geometric shapes for each card with reduced opacity
  const renderGeometricShapes = (accentColor) => {
    const shapes = [];
    const totalShapes = 10;
    
    for (let i = 0; i < totalShapes; i++) {
      // Randomly determine shape type
      const shapeType = Math.floor(Math.random() * 4); // 0: circle, 1: square, 2: triangle, 3: rectangle
      
      // Random position
      const top = `${Math.random() * 100}%`;
      const left = `${Math.random() * 100}%`;
      
      // Random size (based on shape type)
      const size = 10 + Math.random() * 30;
      
      // Random rotation
      const rotation = Math.random() * 360;
      
      // Reduced random opacity (reduced from 0.1-0.3 to 0.05-0.15)
      const opacity = 0.05 + Math.random() * 0.1;
      
      // Common styles
      const commonStyles = {
        position: "absolute",
        top,
        left,
        transform: `rotate(${rotation}deg)`,
        opacity,
        background: accentColor,
        zIndex: 1,
      };
      
      switch (shapeType) {
        case 0: // Circle
          shapes.push(
            <Box
              key={`circle-${i}`}
              sx={{
                ...commonStyles,
                width: `${size}px`,
                height: `${size}px`,
                borderRadius: "50%",
              }}
            />
          );
          break;
        case 1: // Square
          shapes.push(
            <Box
              key={`square-${i}`}
              sx={{
                ...commonStyles,
                width: `${size}px`,
                height: `${size}px`,
              }}
            />
          );
          break;
        case 2: // Triangle (CSS triangle)
          shapes.push(
            <Box
              key={`triangle-${i}`}
              sx={{
                ...commonStyles,
                width: 0,
                height: 0,
                backgroundColor: "transparent",
                borderLeft: `${size / 2}px solid transparent`,
                borderRight: `${size / 2}px solid transparent`,
                borderBottom: `${size}px solid ${accentColor}`,
              }}
            />
          );
          break;
        case 3: // Rectangle
          shapes.push(
            <Box
              key={`rectangle-${i}`}
              sx={{
                ...commonStyles,
                width: `${size * 1.5}px`,
                height: `${size}px`,
              }}
            />
          );
          break;
        default:
          break;
      }
    }
    
    // Add a few special shapes for visual interest with reduced opacity
    // Large blurred circle in a corner (reduced from 0.1 to 0.05)
    shapes.push(
      <Box
        key="large-circle"
        sx={{
          position: "absolute",
          bottom: "-5%",
          right: "-5%",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          background: accentColor,
          opacity: 0.05,
          filter: "blur(20px)",
          zIndex: 1,
        }}
      />
    );
    
    // Small shapes cluster (reduced from 0.6 to 0.3)
    shapes.push(
      <Box
        key="dot-cluster"
        sx={{
          position: "absolute",
          top: "15%",
          left: "10%",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: accentColor,
            opacity: 0.3,
            position: "absolute",
          }}
        />
        <Box
          sx={{
            width: "4px",
            height: "4px",
            borderRadius: "50%",
            background: accentColor,
            opacity: 0.3,
            position: "absolute",
            top: "10px",
            left: "10px",
          }}
        />
        <Box
          sx={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: accentColor,
            opacity: 0.3,
            position: "absolute",
            top: "8px",
            left: "-5px",
          }}
        />
      </Box>
    );
    
    return shapes;
  };

  return (
    <Box
      sx={{
        backgroundColor: "#F8F9FC",
        minHeight: "100vh",
        py: 8,
        px: { xs: 2, sm: 3, md: 4 },
        position: "relative",
        overflowY: "auto",
      }}
    >
      {/* Title */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          color="#2D3B6F"
          sx={{ display: "inline-block", fontFamily: "Montserrat, sans-serif" }}
        >
          Why our product is the{"   "}
        </Typography>

        <Typography
          variant="h4"
          fontWeight="bold"
          color="#00D2C6"
          sx={{ display: "inline-block", fontFamily: "Montserrat, sans-serif" }}
        >
          best
        </Typography>
      </Box>

      {/* Decorative Elements */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: { xs: "5%", md: "10%" },
          width: 12,
          height: 12,
          backgroundColor: "#00D2C6",
          borderRadius: "50%",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "15%",
          left: { xs: "5%", md: "10%" },
          width: 12,
          height: 12,
          backgroundColor: "#00D2C6",
          borderRadius: "50%",
        }}
      />

      {/* Feature Cards */}
      <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledCard accentColor={feature.accentColor}>
              {/* Geometric shapes with decreased opacity */}
              {renderGeometricShapes(feature.accentColor)}
              
              <ContentContainer>
                {/* Icon with Glowing Effect */}
                <Box
                  sx={{
                    width: 70,
                    height: 70,
                    borderRadius: "50%",
                    bgcolor: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mx: "auto",
                    mb: 3,
                    boxShadow: `0 0 20px rgba(${parseInt(feature.accentColor.slice(1, 3), 16)}, ${parseInt(feature.accentColor.slice(3, 5), 16)}, ${parseInt(feature.accentColor.slice(5, 7), 16)}, 0.2)`, // Reduced shadow opacity from 0.3 to 0.2
                    border: `2px solid ${feature.accentColor}`,
                    position: "relative",
                    zIndex: 3,
                  }}
                >
                  <SvgIcon
                    component={feature.icon}
                    fontSize="large"
                    sx={{
                      fontSize: "2.5rem",
                      color: feature.accentColor,
                    }}
                  />
                </Box>

                {/* Card Content with updated typography */}
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    fontSize: "1.6rem",
                    fontWeight: 800,
                    fontFamily: "Montserrat, sans-serif",
                    position: "relative",
                    color: "#2D3B6F",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: "-8px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "50px",
                      height: "4px",
                      backgroundColor: feature.accentColor,
                      borderRadius: "10px",
                    },
                    letterSpacing: "0.5px",
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "1.25rem",
                    fontFamily: "Montserrat, sans-serif",
                    mt: 2,
                    position: "relative",
                    zIndex: 3,
                    color: "#000000",
                    fontWeight: 500,
                    lineHeight: 1.5,
                  }}
                >
                  {feature.description}
                </Typography>
              </ContentContainer>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}