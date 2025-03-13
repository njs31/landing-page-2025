import React, { useRef, useState } from 'react';
import { 
  Box, 
  Typography, 
  Container,
  Paper, 
  Button,
  useTheme,
  useMediaQuery
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
      width: 48, 
      height: 48, 
      borderRadius: '8px', 
      backgroundColor: color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      mb: 2
    }}
  >
    {children}
  </Box>
);

const Lms = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const scrollContainerRef = useRef(null);

  const getCardWidth = () => (isMobile ? 320 : isTablet ? 360 : 380);
  const getCardsGap = () => (isMobile ? 8 : 16);

  const featureData = [
    { title: 'Secure Virtual Classes', iconColor: '#E3F2FD', textColor: '#64B5F6', description: 'Our solutions empower you to conduct online classes with ironclad security. You have full control over class access and participants', icon: <VideocamOutlinedIcon fontSize="large" style={{ color: '#64b5f6' }} /> },
    { title: 'Quick Analysis', iconColor: '#FCE4EC', textColor: '#EC407A', description: 'We provides 14 types of analysis that teachers and students can dive into for insights that spark improvement', icon: <AnalyticsOutlinedIcon fontSize="large" style={{ color: '#ec407a' }} /> },
    { title: 'Multiple Question Papers', iconColor: '#F1F8E9', textColor: '#AED581', description: 'Leverage our library to effortlessly create & customize multiple question papers tailored to your exact needs', icon: <TouchAppOutlinedIcon fontSize="large" style={{ color: '#aed581' }} /> },
    { title: 'User friendly interface', iconColor: '#FFF3E0', textColor: '#FFB74D', description: 'Designed for both students and institutes, our easy-to-navigate interface ensures a seamless and straightforward learning experience.', icon: <AssignmentOutlinedIcon fontSize="large" style={{ color: '#ffb74d' }} /> },
    { title: 'Test Creation', iconColor: '#F3E5F5', textColor: '#BA68C8', description: 'Our test creation tool lets students craft personalized papers aligned with their performance, fostering progress and improvement', icon: <QuizOutlinedIcon fontSize="large" style={{ color: '#ba68c8' }} /> },
  ];

  return (
    <Box 
      sx={{ 
        borderTop: '1px solid pink', 
        borderBottom: '1px solid pink', 
        bgcolor: '#1a2a42', 
        color: 'white', 
        py: 6, 
        px: { xs: 2, md: 3 },
        overflow: 'visible',
        position: 'relative'
      }}
    >  
      <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ mb: 5, textAlign: 'left' }}>
          <Typography variant="h3" fontWeight="500" sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }}>
          Increased results with <Box component="span" sx={{ color: '#4FC3F7' }}>LMS</Box> features
          </Typography>
          <Typography variant="subtitle1" sx={{ opacity: 0.7, mb: 3, fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' } }}>
          Run your school on most intelligent operating system
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
                fontSize: { xs: '0.9rem', sm: '1rem' }
              }}
            >
              Empower Management Efficiency
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
                fontSize: { xs: '0.9rem', sm: '1rem' }
              }}
            >
              Enhance the Students Learning
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
            mb: 2
          }}
        >
          <Box
            ref={scrollContainerRef}
            sx={{
              display: 'flex',
              overflowX: 'auto',
              overflowY: 'hidden',
              gap: getCardsGap(),
              width: '100%',
              pb: 4, // Add padding at bottom for scrollbar
              // Custom scrollbar styles
              '&::-webkit-scrollbar': {
                height: '12px',
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '6px',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#4FC3F7',
                borderRadius: '6px',
                '&:hover': {
                  backgroundColor: '#29B6F6',
                },
              },
              // Firefox
              scrollbarWidth: 'thin',
              scrollbarColor: '#4FC3F7 rgba(255, 255, 255, 0.1)',
            }}
          >
            {featureData.map((feature, index) => (
              <Paper 
                key={index}
                elevation={2}
                sx={{ 
                  p: 3,
                  height: 'auto',
                  minHeight: '400px',
                  width: getCardWidth(), 
                  bgcolor: 'white',
                  borderRadius: 2,
                  color: 'text.primary',
                  flexShrink: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center'
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
                  sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' } }}
                >
                  {feature.title}
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: 'text.secondary', 
                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                    lineHeight: 1.6
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
  );
};

export default Lms;