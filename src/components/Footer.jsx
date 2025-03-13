import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Button, useMediaQuery, useTheme } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if the screen is mobile

  return (
    <Box
      sx={{
        background: 'linear-gradient(90deg, hsla(240, 45%, 13%, 1) 25%, hsla(234, 58%, 14%, 1) 52%, hsla(258, 59%, 7%, 1) 83%)',
        color: 'white',
        padding: '3rem 0',
        position: 'relative',
        fontFamily: 'Roboto, sans-serif',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} direction={isMobile ? 'column' : 'row'} justifyContent={isMobile ? 'flex-start' : 'center'}>
          {/* Onesaz Information */}
          <Grid item xs={12} md={4} sx={{ textAlign: isMobile ? 'left' : 'center' }}>
            <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif' }}>
              Onesaz
            </Typography>
            <Typography variant="body1" sx={{ marginTop: '1rem', lineHeight: '1.6' }}>
              Suvarna Habitat, Jai Hind Gandhi Rd, Cyber Hills Colony, VIP Hills, Jaihind Enclave, Madhapur,
              Hyderabad, Telangana 500081
            </Typography>
          </Grid>

          {/* Company Links */}
          <Grid item xs={12} md={4} sx={{ textAlign: isMobile ? 'left' : 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '1rem', fontSize: '1.3rem', fontFamily: 'Poppins, sans-serif' }}>
              Company
            </Typography>
            <Box>
              <Link href="https://onesaz.com/about-us" color="inherit" display="block" underline="none" sx={{ fontSize: '1rem', marginBottom: '0.8rem', fontWeight: 500 }}>
                About us
              </Link>
              <Link href="#" color="inherit" display="block" underline="none" sx={{ fontSize: '1rem', marginBottom: '0.8rem', fontWeight: 500 }}>
                Product
              </Link>
              <Link href="#" color="inherit" display="block" underline="none" sx={{ fontSize: '1rem', marginBottom: '0.8rem', fontWeight: 500 }}>
                Contact
              </Link>
            </Box>
          </Grid>

          {/* Support Links */}
          <Grid item xs={12} md={4} sx={{ textAlign: isMobile ? 'left' : 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '1rem', fontSize: '1.3rem', fontFamily: 'Poppins, sans-serif' }}>
              Support
            </Typography>
            <Box>
              <Link href="#" color="inherit" display="block" underline="none" sx={{ fontSize: '1rem', marginBottom: '0.8rem', fontWeight: 500 }}>
                FAQ
              </Link>
              <Link href="#" color="inherit" display="block" underline="none" sx={{ fontSize: '1rem', marginBottom: '0.8rem', fontWeight: 500 }}>
                Privacy Policy
              </Link>
              <Link href="#" color="inherit" display="block" underline="none" sx={{ fontSize: '1rem', marginBottom: '0.8rem', fontWeight: 500 }}>
                Terms of Service
              </Link>
            </Box>
          </Grid>
        </Grid>

        {/* Login Button and Instagram Icon */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: isMobile ? 'flex-start' : 'center',
            marginTop: '2rem',
          }}
        >
          <Button
            variant="contained"
            href="https://onesaz.com/sign-in"
            sx={{
              backgroundColor: '#87CEEB', // Sky blue color
              color: '#000', // Black font color
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: 500,
              marginRight: isMobile ? 0 : '1rem',
              marginBottom: isMobile ? '1rem' : 0,
            }}
          >
            Log In
          </Button>
          <IconButton color="inherit" aria-label="instagram" href="https://www.instagram.com/onesazlearning/" target="_blank">
            <InstagramIcon />
          </IconButton>
        </Box>
      </Container>

      {/* Copyright Section */}
      <Box sx={{ textAlign: 'center', mt: 'auto', paddingTop: '2rem' }}>
        <Typography variant="body2">
          &copy; 2025 ACACADHUB EDU TECH PRIVATE LIMITED. ALL RIGHTS RESERVED.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
