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
  padding: theme.spacing(4, 2),
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
  maxWidth: '100%',
  height: 'auto',
  marginBottom: '20px',
});

const StyledPhone = styled('img')({
  maxWidth: '50%',
  height: 'auto',
  marginBottom: '20px',
});

const GooglePlayBadge = () => (
  <a href="https://play.google.com/store/apps/details?id=com.onesaz.studentapp&hl=en_IN" target="_blank" rel="noopener noreferrer">
    <img src={android} alt="Google Play" style={{ height: '50px', margin: '0 10px' }}/>
  </a>
);

const AppStoreBadge = () => (
  <a href="https://apps.apple.com/in/developer/onesaz/id1713076053" target="_blank" rel="noopener noreferrer">
    <img src={apple} alt="App Store" style={{ height: '50px', margin: '0 10px' }}/>
  </a>
);

const generateShapes = () => {
  const shapes = [];
  const colors = ['rgba(255, 0, 0, 0.05)', 'rgba(255, 255, 0, 0.05)', 'rgba(0, 255, 0, 0.05)', 'rgba(0, 0, 255, 0.05)'];

  for (let i = 0; i < 100; i++) {
    const size = Math.random() * 20 + 5;
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const color = colors[Math.floor(Math.random() * colors.length)];

    if (i % 3 === 0) {
      shapes.push(
        <div
          key={`circle-${i}`}
          style={{
            position: 'absolute',
            width: `${size}px`,
            height: `${size}px`,
            top: `${top}%`,
            left: `${left}%`,
            background: color,
            borderRadius: '50%',
            animation: 'float 6s ease-in-out infinite alternate',
          }}
        />
      );
    } else if (i % 3 === 1) {
      shapes.push(
        <div
          key={`triangle-${i}`}
          style={{
            position: 'absolute',
            width: `${size}px`,
            height: `${size}px`,
            top: `${top}%`,
            left: `${left}%`,
            background: color,
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            animation: 'float 8s ease-in-out infinite alternate-reverse',
          }}
        />
      );
    } else {
      shapes.push(
        <div
          key={`rectangle-${i}`}
          style={{
            position: 'absolute',
            width: `${size * 1.5}px`,
            height: `${size * 0.8}px`,
            top: `${top}%`,
            left: `${left}%`,
            background: color,
            animation: 'float 10s ease-in-out infinite alternate',
          }}
        />
      );
    }
  }
  return shapes;
};

const Appd = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <StyledContainer maxWidth="md">
      <div style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0 }}>
        {generateShapes()}
      </div>
      <Typography variant="h3" component="h1" gutterBottom sx={{ position: 'relative', zIndex: 1 }}>
        Enjoy a seamless experience with our
      </Typography>
      <Typography variant="h3" component="h1" gutterBottom style={{ color: 'red', position: 'relative', zIndex: 1 }}>
        Simplified app
      </Typography>
      <Typography variant="h5" gutterBottom sx={{ position: 'relative', zIndex: 1 }}>
        Watch the live classes anytime and anywhere
      </Typography>

      <Box display="flex" justifyContent="center" alignItems="center" flexDirection={isMobile ? 'column' : 'row'} sx={{ position: 'relative', zIndex: 1 }}>
        <StyledLaptop src={laptop} alt="Laptop" /> 
      </Box>

      <Box display="flex" justifyContent="center" marginTop={2} sx={{ position: 'relative', zIndex: 1 }}>
        <GooglePlayBadge /> 
        <AppStoreBadge /> 
      </Box>
    </StyledContainer>
  );
};

export default Appd;