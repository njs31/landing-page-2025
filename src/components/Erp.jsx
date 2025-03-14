import React, { useRef, useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Container,
  Paper,
  Button,
  useTheme,
  useMediaQuery,
  LinearProgress,
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
      width: { xs: 48, sm: 52, md: 56 },
      height: { xs: 48, sm: 52, md: 56 },
      borderRadius: '10px', 
      backgroundColor: color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      mb: { xs: 1.5, sm: 2, md: 2 },
    }}
  >
    {children}
  </Box>
);

const Erp = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isIphoneXR = useMediaQuery('(max-width: 414px) and (max-height: 896px)');
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollContainerRef = useRef(null);

  const getCardWidth = () => {
    if (isMobile) return '260px';
    if (isTablet) return '300px';
    return '320px';
  };

  const getCardHeight = () => {
    if (isMobile) return '280px';
    if (isTablet) return '300px';
    return '320px';
  };

  // Reduced card gap for better visibility of adjacent cards
  const getCardsGap = () => (isMobile ? 6 : isTablet ? 8 : 10);

  // Handle scroll event to update progress bar
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const scrollableWidth = scrollWidth - clientWidth;
      const progress = (scrollLeft / scrollableWidth) * 100;
      setScrollProgress(progress);
    }
  };

  // Add scroll event listener
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

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
    <div id="erp">
      <Box
        id="erp"
        sx={{
          width: '100%',
          borderBottom: '0.1px solid white',
          background: 'rgb(0,0,0)',
          background:
            'linear-gradient(85deg, rgba(0,0,0,1) 0%, rgba(35,65,80,1) 33%, rgba(10,11,22,1) 66%, rgba(39,78,87,1) 100%)',
          color: 'white',
          py: { xs: 3, sm: 4, md: 6 },
          px: { xs: 1.5, sm: 2, md: 3 },
          overflow: 'visible',
          position: 'relative',
        }}
      >
        <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ mb: { xs: 2.5, sm: 3, md: 5 }, textAlign: 'left' }}>
            <Typography
              variant="h3"
              fontWeight="500"
              sx={{
                fontSize: { xs: '1.8rem', sm: '2.2rem', md: '3rem' },
                fontFamily: 'Poppins, sans-serif',
                mb: { xs: 1.5, sm: 2, md: 2.5 },
              }}
            >
              Optimize Operations with
              <Box component="span" sx={{ color: '#4FC3F7' }}>
                {' Onesaz ERP'}
              </Box>
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                opacity: 0.7,
                mb: { xs: 2, sm: 2.5, md: 3 },
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' },
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              With Onesaz ERP, you're embracing a new era of education management
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 1.5, sm: 2 }, mt: 2 }}>
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
                  px: { xs: 1.5, sm: 2 },
                  py: { xs: 0.75, sm: 1 },
                  fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
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
                  px: { xs: 1.5, sm: 2 },
                  py: { xs: 0.75, sm: 1 },
                  fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
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
              mb: { xs: 3, sm: 4 },
            }}
          >
            {/* Scroll Progress Bar */}
            <Box sx={{ width: '100%', mb: 1 }}>
              <LinearProgress 
                variant="determinate" 
                value={scrollProgress} 
                sx={{ 
                  height: 6, 
                  borderRadius: 3,
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: '#4FC3F7',
                    borderRadius: 3,
                  }
                }}
              />
            </Box>
            
            {/* Cards Container with Partial Card Visibility */}
            <Box
              ref={scrollContainerRef}
              sx={{
                display: 'flex',
                overflowX: 'auto',
                overflowY: 'hidden',
                gap: getCardsGap(),
                width: '100%',
                pb: 1,
                height: '100%',
                scrollSnapType: 'x mandatory',
                msOverflowStyle: 'none',  /* IE and Edge */
                scrollbarWidth: 'none',  /* Firefox */
                '&::-webkit-scrollbar': {
                  display: 'none', /* Chrome, Safari, Opera */
                },
                // Add padding to the right to show part of the next card
                pr: { xs: 20, sm: 40, md: 60 },
              }}
            >
              {featureData.map((feature, index) => (
                <Paper
                  key={index}
                  elevation={2}
                  sx={{
                    p: { xs: 2, sm: 2.5, md: 3 },
                    height: getCardHeight(),
                    width: getCardWidth(),
                    bgcolor: 'white',
                    borderRadius: 2,
                    color: 'text.primary',
                    flexShrink: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    scrollSnapAlign: 'start',
                    // Add subtle shadow for better visibility
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
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
                      fontSize: { xs: '1.3rem', sm: '1.5rem', md: '1.8rem' },
                      fontFamily: 'Poppins, sans-serif',
                      mb: { xs: 1.5, sm: 2 },
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                      lineHeight: 1.6,
                      fontFamily: 'Poppins, sans-serif',
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Paper>
              ))}
            </Box>
            
            {/* Optional: Text indicator for scrolling */}
            <Typography 
              variant="caption" 
              sx={{ 
                textAlign: 'center', 
                mt: 1, 
                opacity: 0.7,
                fontSize: { xs: '0.7rem', sm: '0.8rem' },
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              Scroll to explore all features
            </Typography>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Erp;