import React from 'react';
import android from '../assets/lapmo/android.png';
import apple from '../assets/lapmo/apple.png';
import laptop from '../assets/lapmo/lapmob.png';
import { 
  Container, 
  Typography, 
  Grid, 
  TextField, 
  Button, 
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
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
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
  <img src={android} alt="Logo" style={{ height: '50px', margin: '0 10px' }}/>
);
const AppStoreBadge = () => (
  <img src={apple} alt="Logo" style={{ height: '50px', margin: '0 10px' }}/>
);

const Appd = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <StyledContainer maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Enjoy a seamless experience with our
      </Typography>
      <Typography variant="h4" component="h1" gutterBottom style={{ color: 'red' }}>
        Simplified app
      </Typography>
      <Typography variant="body1" gutterBottom>
        Watch the live classes anytime and anywhere
      </Typography>

      <Box display="flex" justifyContent="center" alignItems="center" flexDirection={isMobile ? 'column' : 'row'}>
        <StyledLaptop src={laptop} alt="Laptop" /> 
      </Box>

      <Typography variant="subtitle1" gutterBottom>
        Get the App
      </Typography>

      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Enter mobile number"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Button variant="contained" color="primary" fullWidth>
            Get link
          </Button>
        </Grid>
      </Grid>

      <Box display="flex" justifyContent="center" marginTop={2}>
        <GooglePlayBadge /> 
        <AppStoreBadge /> 
      </Box>

      
    </StyledContainer>
  );
};

export default Appd;