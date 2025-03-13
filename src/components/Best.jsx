import React from "react";
import {
  Card,
  CardContent,
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
const StyledCard = styled(Card)(({ theme }) => ({
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
  height: "300px", // Increased card height
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

export default function FeatureCards() {
  const features = [
    {
      icon: SettingsIcon,
      title: "Customized Applications",
      description:
        "Our tech-savvy team listens to your needs, delivering fast, tailored solutions.",
    },
    {
      icon: LockIcon,
      title: "4 Layer security",
      description:
        "Your data is guarded by 4 layers of protection, ensuring a hack-free environment. Notified whenever data is edited/damaged.",
    },
    {
      icon: CameraIcon,
      title: "OMR scan analysis",
      description:
        "Easily scan any OMR sheet with your mobile camera. We provide instant, comprehensive analysis with 14 detailed insights.",
    },
    {
      icon: AutoGraphIcon,
      title: "Adaptive Learning",
      description:
        "Our system leverages advanced algorithms to analyze individual student performance and preferences.",
    },
    {
      icon: SchoolIcon,
      title: "School operating system",
      description:
        "Our ERP solution seamlessly integrates all aspects of education management, from enrollment to assessments, into a unified platform.",
    },
    {
      icon: MenuBookIcon,
      title: "Best content",
      description:
        "Explore Onesaz's question bank with 300,000+ questions, subject-wise, topics, and subtopics – all expertly organized to save your time & energy.",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#F8F9FC",
        minHeight: "100vh",
        py: 8,
        px: { xs: 2, sm: 3, md: 4 }, // Responsive padding
        position: "relative",
      }}
    >
      {/* Title */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          color="#2D3B6F"
          sx={{ display: "inline-block", fontFamily: 'Montserrat, sans-serif' }} // Attractive Font
        >
          Why our product is the{"  "}
        </Typography>
        <Typography
          variant="h4"
          fontWeight="bold"
          color="#00D2C6"
          sx={{ display: "inline-block", fontFamily: 'Montserrat, sans-serif' }} // Attractive Font
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
            <StyledCard>
              {/* Corner Decorative Element */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "50px",
                  height: "50px",
                  background: "url(/corner-pattern.svg) no-repeat center",
                  backgroundSize: "contain",
                  opacity: 0.2,
                }}
              />

              {/* Icon with Background Circle */}
              <Box
                sx={{
                  width: 60, // Increased size
                  height: 60, // Increased size
                  borderRadius: "50%",
                  bgcolor: "#F8F9FC",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mx: "auto",
                  mb: 2,
                }}
              >
                <SvgIcon component={feature.icon} fontSize="large" color="primary" sx={{fontSize : '2.5rem'}}/>
              </Box>

              {/* Card Content */}
              <Typography
                variant="h6"
                fontWeight="bold"
                color="primary"
                sx={{ mb: 1, fontSize: '1.3rem', fontFamily: 'Montserrat, sans-serif' }} // Increased font size and attractive font
              >
                {feature.title}
              </Typography>
              <Typography variant="body2" color="#6B7AB7" sx={{fontSize:'1.1rem', fontFamily: 'Montserrat, sans-serif'}}>
                {feature.description}
              </Typography>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}