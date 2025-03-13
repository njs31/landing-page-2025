import React, { useRef } from 'react';
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

const LMSFeaturesGrid = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const scrollContainerRef = useRef(null);

  const getCardWidth = () => (isMobile ? 320 : isTablet ? 360 : 380);
  const getCardsGap = () => (isMobile ? 8 : 16);

  const featureData = [
    { title: 'Sms integration', iconColor: '#E3F2FD', textColor: '#64B5F6', description: 'Send Instant Alerts, Enhance Communication and Reduce Workload. SMS integration for important updates like exam schedules, meetings, updates.', icon: <VideocamOutlinedIcon fontSize="large" style={{ color: '#64b5f6' }} /> },
    { title: 'Courses and Batches', iconColor: '#FCE4EC', textColor: '#EC407A', description: 'Our robust database had capacity to handle 100+ branches and 100,000+ batches effortlessly.', icon: <AnalyticsOutlinedIcon fontSize="large" style={{ color: '#ec407a' }} /> },
    { title: 'Hr and payroll', iconColor: '#F1F8E9', textColor: '#AED581', description: 'Digital admission process, Easy form submission, Seamless admission tracking', icon: <TouchAppOutlinedIcon fontSize="large" style={{ color: '#aed581' }} /> },
    { title: 'Id generator', iconColor: '#FFF3E0', textColor: '#FFB74D', description: 'Digital admission process, Easy form submission, Seamless admission tracking.', icon: <AssignmentOutlinedIcon fontSize="large" style={{ color: '#ffb74d' }} /> },
    { title: 'Secure login', iconColor: '#F3E5F5', textColor: '#BA68C8', description: 'Digital admission process, Easy form submission, Seamless admission tracking.', icon: <QuizOutlinedIcon fontSize="large" style={{ color: '#ba68c8' }} /> },
  ];

  return (
    <Box 
      sx={{ 
        borderTop: '1px solid pink', 
        borderBottom: '1px solid pink', 
        bgcolor: '#1a2a42', 
        color: 'white', 
        minHeight: '100vh', 
        py: 6, 
        px: { xs: 2, md: 3 },
        position: 'relative'
      }}
    >  
      <Container maxWidth="lg" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ mb: 5, textAlign: 'left' }}>
          <Typography variant="h3" fontWeight="500" sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }}>
          Modules for <Box component="span" sx={{ color: '#4FC3F7' }}>Streamlined</Box> Operations
          </Typography>
          <Typography variant="subtitle1" sx={{ opacity: 0.7, mb: 3, fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' } }}>
          streamline operations, enhance collaboration, and optimize resource allocation.
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
              Improve Management Efficiency
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
              Enhance Student's Learning
            </Button>
          </Box>
        </Box>

        <Box 
          sx={{ 
            flex: 1,
            position: 'relative', 
            width: '100%', 
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box
            ref={scrollContainerRef}
            sx={{
              display: 'flex',
              overflowX: 'auto',
              overflowY: 'hidden',
              gap: getCardsGap(),
              pb: 2,
              width: '100%',
              '&::-webkit-scrollbar': {
                height: '8px',
              },
              '&::-webkit-scrollbar-track': {
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '4px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#4FC3F7',
                borderRadius: '4px',
                '&:hover': {
                  background: '#29B6F6',
                }
              },
              scrollbarWidth: 'thin',
              scrollbarColor: '#4FC3F7 rgba(255, 255, 255, 0.1)'
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

export default LMSFeaturesGrid;