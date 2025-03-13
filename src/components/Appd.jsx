import React from 'react';
import android from '../assets/lapmo/android.png';
import apple from '../assets/lapmo/apple.png';
import laptop from '../assets/lapmo/lapmob.png';
import {
  Container,
  Typography,
  Box,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { styled } from '@mui/system';

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: '#f8f9fa',
  padding: theme.spacing(1, 1), // Reduced top padding
  textAlign: 'center',
  minHeight: 'auto', // Changed from 100vh to auto
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start', // Changed to start
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
}));

const StyledLaptop = styled('img')(({ theme }) => ({
  maxWidth: '80%', // Default for larger screens
  height: 'auto',
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%', // Full width on mobile screens
  },
}));

const StoreBadge = styled('img')(({ theme }) => ({
  height: '60px',
  margin: '0 15px',
  [theme.breakpoints.down('sm')]: {
    height: '45px',
    margin: '0 8px',
  },
}));

const Appd = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <StyledContainer maxWidth="md">
      <Box sx={{ marginTop: theme.spacing(4) }}>
        <Typography
          variant={isMobile ? "h5" : "h2"}
          component="h1"
          gutterBottom
          fontWeight={700}
          sx={{ position: 'relative', zIndex: 1 }}
        >
          Enjoy a seamless experience with our
        </Typography>
        <Typography
          variant={isMobile ? "h5" : "h2"}
          component="h1"
          gutterBottom
          fontWeight={700}
          sx={{ color: 'red', position: 'relative', zIndex: 1 }}
        >
          Simplified app
        </Typography>
        <Typography
          variant={isMobile ? "body1" : "h4"}
          gutterBottom
          fontWeight={500}
          sx={{ position: 'relative', zIndex: 1 }}
        >
          Watch the live classes anytime and anywhere
        </Typography>
      </Box>
      
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        sx={{ position: 'relative', zIndex: 1 }}
      >
        <StyledLaptop src={laptop} alt="Laptop" />
      </Box>
      
      <Box
        display="flex"
        justifyContent="center"
        marginBottom={theme.spacing(4)} // Added bottom margin
        sx={{ position: 'relative', zIndex: 1 }}
      >
        <a href="https://play.google.com/store/apps/developer?id=onesaz+developer&hl=en_IN" target="_blank" rel="noopener noreferrer">
          <StoreBadge src={android} alt="Google Play" />
        </a>
        <a href="https://apps.apple.com/in/developer/onesaz/id1713076053" target="_blank" rel="noopener noreferrer">
          <StoreBadge src={apple} alt="App Store" />
        </a>
      </Box>
    </StyledContainer>
  );
};

export default Appd;