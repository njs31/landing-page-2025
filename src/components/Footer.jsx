import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, useMediaQuery, useTheme } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        backgroundColor: '#155f6e',
        color: 'white',
        padding: '3rem 0',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} md={3}>
            <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', fontFamily: 'Roboto, sans-serif' }}>
              Onesaz
            </Typography>
            <Typography variant="body1" sx={{ marginTop: '1rem', fontFamily: 'Roboto, sans-serif' }}>
              Onesaz - where both LMS and ERP come together in a fantastic fusion. Let's simplify education, together!
            </Typography>
            <Typography variant="body1" sx={{ marginTop: '1rem', fontFamily: 'Roboto, sans-serif' }}>
              Suvarna Habitat, Jai Hind Gandhi Rd, Cyber Hills Colony, VIP Hills, Jaihind Enclave, Madhapur, Hyderabad, Telangana 500081
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={2} justifyContent="space-around">
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '1rem', fontSize: '1.5rem' }}>
                  Company
                </Typography>
                <Box>
                  <Link href="#" color="inherit" display="block" underline="none" sx={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                    About us
                  </Link>
                  <Link href="#" color="inherit" display="block" underline="none" sx={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                    Product
                  </Link>
                  <Link href="#" color="inherit" display="block" underline="none" sx={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                    Contact
                  </Link>
                </Box>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '1rem', fontSize: '1.5rem' }}>
                  Support
                </Typography>
                <Box>
                  <Link href="#" color="inherit" display="block" underline="none" sx={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                    FAQ
                  </Link>
                  <Link href="#" color="inherit" display="block" underline="none" sx={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                    Privacy Policy
                  </Link>
                  <Link href="#" color="inherit" display="block" underline="none" sx={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                    Terms of Service
                  </Link>
                </Box>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '1rem', fontSize: '1.5rem' }}>
                  Our Work
                </Typography>
                <Box>
                  <Link href="#" color="inherit" display="block" underline="none" sx={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                    Pricing
                  </Link>
                  <Link href="#" color="inherit" display="block" underline="none" sx={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                    Customer
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="body2" sx={{ marginTop: '1rem', fontFamily: 'Roboto, sans-serif' }}>
              © 2025 ACACADHUB EDU TECH PRIVATE LIMITED.<br></br> All rights reserved.
            </Typography>
            <Link href="#" color="inherit" sx={{ display: 'flex', alignItems: 'center', marginTop: '1rem', fontSize: '1.2rem', fontWeight: 'bold' }} underline="none">
              → Log In
            </Link>
            <Box sx={{ marginTop: '1rem' }}>
              <IconButton color="inherit" aria-label="facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="twitter">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="instagram">
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
