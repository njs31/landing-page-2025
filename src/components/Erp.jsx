import React, { useRef, useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Paper,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import TouchAppOutlinedIcon from '@mui/icons-material/TouchAppOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import HexagonOutlinedIcon from '@mui/icons-material/HexagonOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';

const IconBox = ({ color, children }) => (
  <Box
    sx={{
      width: 56, // Increased size
      height: 56, // Increased size
      borderRadius: '10px', // Slightly increased
      backgroundColor: color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      mb: 2,
    }}
  >
    {children}
  </Box>
);

const Erp = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isIphoneXR = useMediaQuery('(max-width: 414px) and (max-height: 896px)'); // Adjust for iPhone XR

  const scrollContainerRef = useRef(null);

  const getCardWidth = () => (isMobile ? '95%' : isTablet ? 380 : 400); // Increased width
  const getCardsGap = () => (isMobile ? 12 : 20); // Reduced gap for mobile

  const featureData = [
    {
      title: 'Institute management',
      iconColor: '#E3F2FD',
      textColor: '#64B5F6',
      description:
        'Automate enrollment, attendance, fees, exams, analysis. Optimize institute performance and resource use',
      icon: <VideocamOutlinedIcon fontSize="large" style={{ color: '#64b5f6' }} />,
    },
    {
      title: 'Data management',
      iconColor: '#FCE4EC',
      textColor: '#EC407A',
      description:
        'Easily record, backup, export data in CSV or XML format. Customize fields, manage student details, and save records for in-depth analysis',
      icon: <AnalyticsOutlinedIcon fontSize="large" style={{ color: '#ec407a' }} />,
    },
    {
      title: 'Finance management',
      iconColor: '#F1F8E9',
      textColor: '#AED581',
      description: 'Simplifies fees collection, Automate Transactions and Provide In-depth Financial Reports',
      icon: <TouchAppOutlinedIcon fontSize="large" style={{ color: '#aed581' }} />,
    },
    {
      title: 'Admission management',
      iconColor: '#FFF3E0',
      textColor: '#FFB74D',
      description: 'Digital admission process, Easy form submission, Seamless admission tracking',
      icon: <AssignmentOutlinedIcon fontSize="large" style={{ color: '#ffb74d' }} />,
    },
    {
      title: 'Transport management',
      iconColor: '#F3E5F5',
      textColor: '#BA68C8',
      description: 'Enhance student safety, Tracking vehicle status and Collect transportation fees',
      icon: <QuizOutlinedIcon fontSize="large" style={{ color: '#ba68c8' }} />,
    },
    {
      title: 'Inventory management',
      iconColor: '#F3E5F5',
      textColor: '#BA68C8',
      description: 'Manage Inventory, Maintain Supplier details and Generate a paperless invoice',
      icon: <QuizOutlinedIcon fontSize="large" style={{ color: '#ba68c8' }} />,
    },
  ];

  return (
    <div id="erp" style={{ height: '100vh' }}>
      <Box
        id="erp"
        sx={{
          height: '100vh',
          maxHeight: { xs: '100vh', sm: 'none' },
          borderBottom: '0.1px solid white',
          background: 'rgb(0,0,0)',
          background:
            'linear-gradient(85deg, rgba(0,0,0,1) 0%, rgba(35,65,80,1) 33%, rgba(10,11,22,1) 66%, rgba(39,78,87,1) 100%)',
          color: 'white',
          py: 6,
          px: { xs: 2, md: 3 },
          overflow: 'visible',
          position: 'relative',
        }}
      >
        <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Box sx={{ mb: 5, textAlign: 'left' }}>
            <Typography
              variant="h3"
              fontWeight="500"
              sx={{
                fontSize: { xs: isIphoneXR ? '2.5rem' : '2rem', sm: '2.5rem', md: '3rem' }, // Increased font size for iPhone XR
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              Optimize Operations with
              <Box component="span" sx={{ color: '#4FC3F7' }}>
                Onesaz ERP
              </Box>
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                opacity: 0.7,
                mb: 3,
                fontSize: { xs: isIphoneXR ? '1.2rem' : '1rem', sm: '1.1rem', md: '1.2rem' }, // Increased font size for iPhone XR
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              With Onesaz ERP, you're embracing a new era of education management
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2 }}>
              <Button
                variant="outlined"
                startIcon={<HexagonOutlinedIcon />}
                sx={{
                  borderRadius: '2rem',
                  color: 'white',
                  borderColor: 'rgba(255,255,255,0.2)',
                  bgcolor: 'rgba(255,255,255,0.05)',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
                  borderLeft: '3px solid #9a6aff',
                  px: 2,
                  fontSize: { xs: isIphoneXR ? '1rem' : '0.9rem', sm: '1rem' }, // Increased font size for iPhone XR
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                12+ ERP features
              </Button>
              <Button
                variant="outlined"
                startIcon={<FlagOutlinedIcon />}
                sx={{
                  borderRadius: '2rem',
                  color: 'white',
                  borderColor: 'rgba(255,255,255,0.2)',
                  bgcolor: 'rgba(255,255,255,0.05)',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
                  borderLeft: '3px solid #ff9f6a',
                  px: 2,
                  fontSize: { xs: isIphoneXR ? '1rem' : '0.9rem', sm: '1rem' }, // Increased font size for iPhone XR
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                Fully customizable
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 2,
              flex: 1,
            }}
          >
            <Box
              ref={scrollContainerRef}
              sx={{
                display: 'flex',
                overflowX:'auto',
                overflowY: 'hidden',
                gap: getCardsGap(),
                width: '100%',
                pb: 4,
                // Custom scrollbar styles
                '&::-webkit-scrollbar': {
                  height: '12px',
                },
                '&::-webkit-scrollbar-track': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '6px',
                },
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: 'blue',
                  borderRadius: '6px',
                  '&:hover': {
                    backgroundColor: '#29B6F6',
                  },
                },
                // Firefox support
                scrollbarWidth: 'thin',
                scrollbarColor: 'blue rgba(255, 255, 255, 0.1)',
              }}
            >
              {featureData.map((feature, index) => (
                <Paper
                  key={index}
                  elevation={2}
                  sx={{
                    p: 3,
                    height: 'auto',
                    minHeight: { xs: isIphoneXR ? '450px' : '400px', sm: '350px' }, // Increased minHeight for iPhone XR
                    width: { xs: '95%', sm: getCardWidth() },
                    bgcolor: 'white',
                    borderRadius: 2,
                    color: 'text.primary',
                    flexShrink: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}
                >
                  <IconBox color={feature.iconColor}>
                    {feature.icon}
                  </IconBox>
                  <Typography
                    variant="h5"
                    fontWeight="500"
                    gutterBottom
                    color="text.primary"
                    sx={{
                      fontSize: { xs: isIphoneXR ? '2.2rem' : '1.8rem', sm: '1.8rem', md: '2.25rem' }, // Increased font size for iPhone XR
                      fontFamily: 'Poppins, sans-serif',
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      fontSize: { xs: isIphoneXR ? '1.4rem' : '1.2rem', sm: '1.1rem', md: '1.4rem' }, // Increased font size for iPhone XR
                      lineHeight: 1.6,
                      fontFamily: 'Poppins, sans-serif',
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Paper>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Erp;