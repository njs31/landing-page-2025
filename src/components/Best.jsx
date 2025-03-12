import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";

import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SecurityIcon from "@mui/icons-material/Security";
import DescriptionIcon from "@mui/icons-material/Description";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import SchoolIcon from "@mui/icons-material/School";
import ArticleIcon from "@mui/icons-material/Article";

const MotionCard = motion(Card);

const StyledCard = styled(MotionCard)(({ theme }) => ({
  padding: "28px",
  boxShadow: "0 6px 18px rgba(0, 136, 255, 0.15)",
  background: "#E3F2FD", // Light blue background
  textAlign: "left",
  transition: "all 0.3s ease",
  borderRadius: "20px",
  border: "3px solid",
  borderImage: "linear-gradient(135deg, #0072FF, #A070FF) 1",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 10px 25px rgba(0, 136, 255, 0.3)",
  },
}));

const features = [
  {
    title: "Customized Solutions",
    description:
      "Our tech-savvy team listens to your needs, delivering fast, tailored solutions.",
    icon: <RocketLaunchIcon sx={{ fontSize: 40, color: "#0072FF" }} />,
  },
  {
    title: "4 Layer Security",
    description:
      "Your data is guarded by 4 layers of protection, ensuring a hack-free environment.",
    icon: <SecurityIcon sx={{ fontSize: 40, color: "#0072FF" }} />,
  },
  {
    title: "OMR Scan Analysis",
    description:
      "Easily scan any OMR sheet with your mobile camera for instant analysis.",
    icon: <DescriptionIcon sx={{ fontSize: 40, color: "#0072FF" }} />,
  },
  {
    title: "Adaptive Learning",
    description:
      "Our system uses AI to analyze student performance and provide personalized recommendations.",
    icon: <CastForEducationIcon sx={{ fontSize: 40, color: "#0072FF" }} />,
  },
  {
    title: "School Operating System",
    description:
      "Manage enrollment, attendance, and assessments seamlessly with our ERP solution.",
    icon: <SchoolIcon sx={{ fontSize: 40, color: "#0072FF" }} />,
  },
  {
    title: "Best Content",
    description:
      "Access a question bank of 300,000+ expertly curated questions organized by topics.",
    icon: <ArticleIcon sx={{ fontSize: 40, color: "#0072FF" }} />,
  },
];

const FeaturesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        width: "100%",
        textAlign: "center",
        py: 10,
        px: { xs: 3, sm: 5, md: 10 },
        background: "linear-gradient(135deg, #F0F7FF, #E3F2FD)",
        position: "relative",
        border: "1px solid #0072FF",
        mb: 0, // Ensure no margin at the bottom
      }}
    >
      <Typography
        variant={isMobile ? "h5" : "h3"}
        fontWeight={900}
        sx={{ color: "#222", mb: 6 }}
      >
        Why Choose <span style={{ color: "#0072FF" }}>Our Product?</span>
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledCard whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <CardContent sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ mb: 2, textAlign: "left" }}>{feature.icon}</Box>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  sx={{ color: "#333", textAlign: "left" }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mt: 1, color: "#555", textAlign: "left" }}
                >
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
          mt: 8,
          backgroundColor: "#0072FF",
          padding: "14px 48px",
          borderRadius: "30px",
          textTransform: "none",
          fontSize: "20px",
          fontWeight: "bold",
          boxShadow: "0 8px 18px rgba(135, 199, 255, 0.4)",
          ":hover": { backgroundColor: "#005BB5" },
        }}
      >
        Sign Up Now
      </Button>
    </Box>
  );
};

export default FeaturesSection;