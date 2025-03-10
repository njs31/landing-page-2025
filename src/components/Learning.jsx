import React from 'react';
import { Box, Typography, Button, Container, Grid, Card, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

const GradientBackground = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #5e35b1 0%, #1976d2 100%)',
  borderRadius: theme.spacing(2),
  padding: theme.spacing(3),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  height: '100%',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  background: '#00d4b1',
  color: 'white',
  borderRadius: '25px',
  padding: '10px 20px',
  fontWeight: 'bold',
  textTransform: 'none',
  '&:hover': {
    background: '#00bfa0',
  },
}));

const PortalCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(5),
  borderRadius: theme.spacing(3),
  boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)',
  position: 'relative',
  overflow: 'visible',
  background: 'white',
}));

const Dot = styled(Box)(({ theme, size = 10, color = '#00d4b1' }) => ({
  width: size,
  height: size,
  borderRadius: '50%',
  background: color,
  position: 'absolute',
}));

const StudentPortal = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container maxWidth="lg" sx={{ my: 4, position: 'relative' }}>
      <Dot sx={{ top: -20, left: '10%', size: 16 }} />
      <Dot sx={{ bottom: '10%', right: -8, size: 14 }} />
      <Dot sx={{ top: '40%', left: -8, size: 12 }} />
      <Dot sx={{ bottom: -10, left: '30%', size: 8, color: '#1976d2' }} />
      <Dot sx={{ top: '80%', right: '20%', size: 10 }} />
      <Dot sx={{ top: '20%', right: '5%', size: 14, color: '#1976d2' }} />

      <PortalCard>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ p: { xs: 1, md: 3 } }}>
              <Typography 
                variant="overline" 
                sx={{ 
                  color: '#7986cb',
                  fontWeight: 'bold',
                  letterSpacing: 1
                }}
              >
                STUDENT PORTAL
              </Typography>
              
              <Typography 
                variant="h3" 
                component="h1" 
                sx={{ 
                  fontWeight: 'bold',
                  color: '#2c387e',
                  mb: 2,
                  fontSize: { xs: '2rem', md: '2.5rem' }
                }}
              >
                Learning Beyond the Classroom 
                <Box component="span" sx={{ color: '#ff5722' }}>✏️</Box>
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#5c6bc0',
                  mb: 4,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.6
                }}
              >
                Easy access classes, tests, resources, and updates for collaborative education. 
                Elevate your learning journey now!
              </Typography>
              
              <StyledButton size="large">
                Explore Portal
              </StyledButton>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <GradientBackground>
              <Box
                component="img"
                src="./src/assets/learn.png"
                alt="Student Dashboard Preview"
                sx={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: theme.spacing(1),
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
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