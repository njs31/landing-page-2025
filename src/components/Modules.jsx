import React, { useRef, useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Container,
  Paper, 
  Chip,
  useTheme,
  useMediaQuery
} from '@mui/material';
import CubeIcon from '@mui/icons-material/ViewInAr';
import SettingsIcon from '@mui/icons-material/Settings';

// IconBox Component
const IconBox = ({ color, children }) => (
  <Box 
    sx={{ 
      width: 40, 
      height: 40, 
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

const ERPFeaturesGrid = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const getCardWidth = () => (isMobile ? 280 : isTablet ? 320 : 340);

  const featureData = [
    { title: 'SMS Integration', iconColor: '#E3F2FD', textColor: '#64B5F6', description: 'Send instant Alerts, Enhance Communication and Personal Reminders. SMS Integration for important notifications like exam schedules, meetings, updates.' },
    { title: 'Courses and Batches', iconColor: '#FCE4EC', textColor: '#EC407A', description: 'Get robust student batch capacity in fields of CBSE and ICSE and 200,000+ batches effectively.' },
    { title: 'HR and payroll', iconColor: '#F1F8E9', textColor: '#AED581', description: 'Take care of employee payments, leaves, records, reimbursements, and focus on your business growth.' },
    { title: 'ID generator', iconColor: '#FFF3E0', textColor: '#FFB74D', description: 'Digital admission process, Easy form submission, Seamless admission tracking.' },
    { title: 'Secure login', iconColor: '#F3E5F5', textColor: '#BA68C8', description: 'The moment you enter Onesaz, you can be sure that you will be anything but the initial application users.' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const cardWidth = getCardWidth() + 24; // Card width + gap
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(newIndex);
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (container) container.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile, isTablet]);

  useEffect(() => {
    const handleWheel = (event) => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft += event.deltaY;
      }
    };

    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <Box sx={{borderBottom:'0.5px solid pink', bgcolor: '#1a2a42', color: 'white', minHeight: '100vh', py: 6, px: 2 }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 5, textAlign: 'left' }}>
          <Typography variant="h4" fontWeight="500">
            Modules for Streamlined Operations
          </Typography>
          <Typography variant="subtitle1" sx={{ opacity: 0.7, mb: 3 }}>
            Streamline operations, enhance collaboration, and redefine resource allocation
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2 }}>
            <Chip icon={<CubeIcon style={{ color: '#4FC3F7' }} />} label="SMS Integration" sx={{ bgcolor: 'rgba(25, 118, 210, 0.1)', color: 'white', border: '1px solid rgba(79, 195, 247, 0.3)', px: 1 }} />
            <Chip icon={<SettingsIcon style={{ color: '#AED581' }} />} label="Courses and Batches" sx={{ bgcolor: 'rgba(56, 142, 60, 0.1)', color: 'white', border: '1px solid rgba(174, 213, 129, 0.3)', px: 1 }} />
          </Box>
        </Box>

        <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden', mb: 4 }}>
          <Box
            ref={scrollContainerRef}
            sx={{
              display: 'flex',
              overflowX: 'auto',
              overflowY: 'hidden',
              gap: 3,
              pb: 2,
              '&::-webkit-scrollbar': { display: 'none' },
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              tabIndex: 0
            }}
          >
            {featureData.map((feature, index) => (
              <Paper 
                key={index}
                elevation={0}
                sx={{ 
                  p: 3, 
                  height: 250, 
                  width: getCardWidth(), 
                  bgcolor: 'white',
                  borderRadius: 2,
                  color: 'text.primary',
                  flexShrink: 0 
                }}
              >
                <IconBox color={feature.iconColor}>
                  <Typography variant="body2" sx={{ color: feature.textColor, fontWeight: 'bold' }}>
                    {feature.title.charAt(0).toUpperCase()}
                  </Typography>
                </IconBox>
                <Typography variant="h6" fontWeight="500" gutterBottom color="text.primary">
                  {feature.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                  {feature.description}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 2 }}>
          {featureData.map((_, index) => (
            <Box 
              key={index}
              sx={{ 
                width: 8, 
                height: 8, 
                borderRadius: '50%', 
                bgcolor: activeIndex === index ? '#4FC3F7' : 'rgba(255,255,255,0.3)',
                cursor: 'pointer'
              }}
              onClick={() => {
                if (scrollContainerRef.current) {
                  const cardWidth = getCardWidth() + 24;
                  scrollContainerRef.current.scrollLeft = index * cardWidth;
                }
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ERPFeaturesGrid;