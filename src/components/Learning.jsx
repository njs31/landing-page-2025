import React from 'react';
import { Box, Typography, Button, Container, Grid, Card, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

// Enhanced GradientBackground with better responsiveness
const GradientBackground = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #5e35b1 0%, #1976d2 100%)',
  borderRadius: theme.spacing(2),
  padding: theme.spacing(3),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.15)',
  height: '100%',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

// Animated StyledButton with improved hover effect
const StyledButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(90deg, #00d4b1 0%, #00bfa0 100%)',
  color: 'white',
  borderRadius: '30px',
  padding: '14px 32px',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  textTransform: 'none',
  transition: 'all 0.3s ease',
  boxShadow: '0px 4px 15px rgba(0, 210, 177, 0.3)',
  '&:hover': {
    background: 'linear-gradient(90deg, #00bfa0 0%, #00d4b1 100%)',
    transform: 'translateY(-2px)',
    boxShadow: '0px 6px 20px rgba(0, 210, 177, 0.4)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '10px 24px',
    fontSize: '1rem',
  },
}));

// Enhanced PortalCard with subtle animations
const PortalCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(6),
  borderRadius: theme.spacing(3),
  boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.08)',
  position: 'relative',
  overflow: 'visible',
  background: 'white',
  transition: 'box-shadow 0.3s ease',
  '&:hover': {
    boxShadow: '0px 15px 50px rgba(0, 0, 0, 0.12)',
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(4),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
    borderRadius: theme.spacing(2),
  },
}));

// Animated Dot component
const Dot = styled(Box)(({ theme, size = 10, color = '#00d4b1' }) => ({
  width: size,
  height: size,
  borderRadius: '50%',
  background: color,
  position: 'absolute',
  zIndex: 0,
  animation: 'float 6s ease-in-out infinite',
  '@keyframes float': {
    '0%, 100%': {
      transform: 'translateY(0)',
    },
    '50%': {
      transform: 'translateY(-10px)',
    },
  },
}));

const StudentPortal = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container 
      maxWidth="lg" 
      sx={{ 
        my: { xs: 3, sm: 4, md: 6 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated decorative dots with improved positioning */}
      <Dot sx={{ top: -20, left: '10%', size: 16, animationDelay: '0s' }} />
      <Dot sx={{ bottom: '10%', right: -8, size: 14, animationDelay: '1s' }} />
      <Dot sx={{ top: '40%', left: -8, size: 12, animationDelay: '2s' }} />
      <Dot sx={{ bottom: -10, left: '30%', size: 8, color: '#1976d2', animationDelay: '3s' }} />
      <Dot sx={{ top: '80%', right: '20%', size: 10, animationDelay: '4s' }} />
      <Dot sx={{ top: '20%', right: '5%', size: 14, color: '#1976d2', animationDelay: '5s' }} />

      <PortalCard>
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ 
              p: { xs: 1, sm: 2, md: 4 },
              textAlign: { xs: 'center', md: 'left' }
            }}>
              <Typography 
                variant="overline" 
                sx={{ 
                  color: '#7986cb',
                  fontWeight: 'bold',
                  letterSpacing: 1.5,
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                  display: 'block',
                  mb: 1,
                }}
              >
                STUDENT PORTAL
              </Typography>
              
              <Typography 
                variant="h3" 
                component="h1" 
                sx={{ 
                  fontWeight: 900,
                  background: 'linear-gradient(135deg, #2c387e 0%, #5c6bc0 100%)',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: { xs: 1.5, md: 2 },
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  lineHeight: 1.2,
                }}
              >
                Learning Beyond the Classroom
                <Box component="span" sx={{ color: '#ff5722', ml: 1 }}>✏️</Box>
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#5c6bc0',
                  mb: { xs: 3, md: 4 },
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.3rem' },
                  lineHeight: 1.8,
                  maxWidth: '550px',
                  mx: { xs: 'auto', md: 0 },
                }}
              >
                Easy access classes, tests, resources, and updates for collaborative education. 
                Elevate your learning journey now!
              </Typography>
              
              <StyledButton
                size="large"
                component="a"
                href="https://api.whatsapp.com/send/?phone=%2B919912340396&text=Hello%21+I%27m+interested+in+your+services.+Can+we+get+on+a+call%3F&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'inline-block',
                  width: { xs: '100%', sm: 'auto' },
                }}
              >
                Explore Portal
              </StyledButton>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6} sx={{ mt: { xs: 2, md: 0 } }}>
            <GradientBackground>
              <Box
                component="img"
                src="https://onesaz-assets.s3.ap-south-1.amazonaws.com/assets/learn.png"
                alt="Student Dashboard Preview"
                sx={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: theme.spacing(isSmallScreen ? 1 : 2),
                  boxShadow: '0px 8px 25px rgba(0, 0, 0, 0.2)',
                  transform: 'perspective(1000px) rotateY(-5deg)',
                  transition: 'all 0.5s ease',
                  '&:hover': {
                    transform: 'perspective(1000px) rotateY(0deg)',
                  },
                }}
              />
            </GradientBackground>
          </Grid>
        </Grid>
      </PortalCard>
    </Container>
  );
};

export default StudentPortal;