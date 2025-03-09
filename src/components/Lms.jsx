import React, { useRef, useState, useEffect } from 'react';
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
import { Element } from 'react-scroll';

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
  const sectionRef = useRef(null);
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const [lastCardVisible, setLastCardVisible] = useState(false);

  const getCardWidth = () => (isMobile ? 320 : isTablet ? 360 : 380);
  const getCardsGap = () => (isMobile ? 8 : 16);

  const featureData = [
    { title: 'Secure Virtual Classes', iconColor: '#E3F2FD', textColor: '#64B5F6', description: 'Our solutions empower you to conduct online classes with ironclad security. You have full control over class access and participants', icon: <VideocamOutlinedIcon fontSize="large" style={{ color: '#64b5f6' }} /> },
    { title: 'Quick Analysis', iconColor: '#FCE4EC', textColor: '#EC407A', description: 'We provides 14 types of analysis that teachers and students can dive into for insights that spark improvement', icon: <AnalyticsOutlinedIcon fontSize="large" style={{ color: '#ec407a' }} /> },
    { title: 'Multiple Question Papers', iconColor: '#F1F8E9', textColor: '#AED581', description: 'Leverage our library to effortlessly create & customize multiple question papers tailored to your exact needs', icon: <TouchAppOutlinedIcon fontSize="large" style={{ color: '#aed581' }} /> },
    { title: 'User friendly interface', iconColor: '#FFF3E0', textColor: '#FFB74D', description: 'Designed for both students and institutes, our easy-to-navigate interface ensures a seamless and straightforward learning experience.', icon: <AssignmentOutlinedIcon fontSize="large" style={{ color: '#ffb74d' }} /> },
    { title: 'Test Creation', iconColor: '#F3E5F5', textColor: '#BA68C8', description: 'Our test creation tool lets students craft personalized papers aligned with their performance, fostering progress and improvement', icon: <QuizOutlinedIcon fontSize="large" style={{ color: '#ba68c8' }} /> },
    
  ];

  const maxScrollWidth = () => {
    if (!scrollContainerRef.current) return 0;
    const container = scrollContainerRef.current;
    return container.scrollWidth - container.clientWidth;
  };

  const isLastCardVisible = () => {
    if (!scrollContainerRef.current) return false;
    
    const container = scrollContainerRef.current;
    const scrollPosition = container.scrollLeft;
    const containerWidth = container.clientWidth;
    const scrollableWidth = container.scrollWidth;
    
    return scrollPosition + containerWidth >= scrollableWidth * 0.95;
  };

  useEffect(() => {
    const section = sectionRef.current;
    let lastScrollY = window.scrollY;
    let ticking = false;
    let initialSectionTop = 0;
    let sectionHeight = 0;
    let releasePoint = 0;

    const handleHorizontalScroll = () => {
      const isVisible = isLastCardVisible();
      if (isVisible !== lastCardVisible) {
        setLastCardVisible(isVisible);
      }
    };

    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener('scroll', handleHorizontalScroll);
    }

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const sectionRect = section.getBoundingClientRect();
          
          if (!initialSectionTop && sectionRect.top <= 0) {
            initialSectionTop = currentScrollY + sectionRect.top;
            sectionHeight = sectionRect.height;
            releasePoint = initialSectionTop + sectionHeight;
          }
          
          if (initialSectionTop) {
            const scrollOffset = currentScrollY - initialSectionTop;
            const totalScrollDistance = sectionHeight;
            
            if (scrollOffset >= 0 && !lastCardVisible) {
              const normalizedProgress = Math.max(0, Math.min(1, scrollOffset / totalScrollDistance));
              
              if (!isScrollLocked) {
                setIsScrollLocked(true);
                section.style.position = 'fixed';
                section.style.top = '0';
                section.style.left = '0';
                section.style.width = '100%';
                section.style.zIndex = '1';
                
                const placeholder = document.createElement('div');
                placeholder.id = 'lms-section-placeholder';
                placeholder.style.height = `${sectionHeight}px`;
                section.parentNode.insertBefore(placeholder, section);
              }
              
              if (scrollContainerRef.current) {
                const targetScrollLeft = normalizedProgress * maxScrollWidth();
                scrollContainerRef.current.scrollLeft = targetScrollLeft;
              }
            } else if (lastCardVisible || scrollOffset > totalScrollDistance) {
              if (isScrollLocked) {
                setIsScrollLocked(false);
                
                section.style.position = 'relative';
                section.style.top = `${scrollOffset}px`;
                
                const placeholder = document.getElementById('lms-section-placeholder');
                if (placeholder) {
                  placeholder.remove();
                }
                
                if (!section.dataset.scrollAdjusted) {
                  section.dataset.scrollAdjusted = 'true';
                  window.scrollTo({
                    top: initialSectionTop + scrollOffset,
                    behavior: 'auto'
                  });
                }
              }
            } else if (scrollOffset < 0) {
              if (isScrollLocked) {
                setIsScrollLocked(false);
                section.style.position = 'relative';
                section.style.top = '0';
                
                const placeholder = document.getElementById('lms-section-placeholder');
                if (placeholder) placeholder.remove();
                
                delete section.dataset.scrollAdjusted;
              }
            }
          }
          
          lastScrollY = currentScrollY;
          ticking = false;
        });
        
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener('scroll', handleHorizontalScroll);
      }
      const placeholder = document.getElementById('lms-section-placeholder');
      if (placeholder) placeholder.remove();
    };
  }, [isScrollLocked, lastCardVisible]);

  return (
    <Element name="erp">
      <Box 
        ref={sectionRef}
        sx={{ 
          borderBottom: '0.5px solid pink', 
          bgcolor: '#1a2a42', 
          color: 'white', 
          height: '100vh',
          
          py: 6, 
          px: { xs: 2, md: 3 },
          overflow: 'hidden',
          transition: 'top 0.3s ease-out',
          position: 'relative'
        }}
      >  
        <Container maxWidth="lg" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ mb: 5, textAlign: 'left' }}>
            <Typography variant="h3" fontWeight="500" sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }}>
            Increased results <Box component="span" sx={{ color: '#4FC3F7' }}>with</Box>   LMS features
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
                '&::-webkit-scrollbar': { display: 'none' },
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                width: '100%'
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
    </Element>
  );
};

export default LMSFeaturesGrid;