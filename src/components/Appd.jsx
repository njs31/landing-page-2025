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
  padding: theme.spacing(6, 3),
  textAlign: 'center',
  minHeight: '100vh',
  minWidth: '100vw',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
}));

const StyledLaptop = styled('img')({
  maxWidth: '80%',
  height: 'auto',
  marginBottom: '30px',
});

const GooglePlayBadge = () => (
  <a href="https://play.google.com/store/apps/details?id=com.onesaz.studentapp&hl=en_IN" target="_blank" rel="noopener noreferrer">
    <img src={android} alt="Google Play" style={{ height: '60px', margin: '0 15px' }}/>
  </a>
);

const AppStoreBadge = () => (
  <a href="https://apps.apple.com/in/developer/onesaz/id1713076053" target="_blank" rel="noopener noreferrer">
    <img src={apple} alt="App Store" style={{ height: '60px', margin: '0 15px' }}/>
  </a>
);

const Appd = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <StyledContainer maxWidth="md">
      <Typography variant={isMobile ? "h4" : "h2"} component="h1" gutterBottom fontWeight={700} sx={{ position: 'relative', zIndex: 1 }}>
        Enjoy a seamless experience with our
      </Typography>
      <Typography variant={isMobile ? "h4" : "h2"} component="h1" gutterBottom fontWeight={700} sx={{ color: 'red', position: 'relative', zIndex: 1 }}>
        Simplified app
      </Typography>
      <Typography variant={isMobile ? "h6" : "h4"} gutterBottom fontWeight={500} sx={{ position: 'relative', zIndex: 1 }}>
        Watch the live classes anytime and anywhere
      </Typography>

      <Box display="flex" justifyContent="center" alignItems="center" flexDirection={isMobile ? 'column' : 'row'} sx={{ position: 'relative', zIndex: 1 }}>
        <StyledLaptop src={laptop} alt="Laptop" /> 
      </Box>

      <Box display="flex" justifyContent="center" marginTop={3} sx={{ position: 'relative', zIndex: 1 }}>
        <GooglePlayBadge /> 
        <AppStoreBadge /> 
      </Box>
    </StyledContainer>
  );
};

export default Appd;
