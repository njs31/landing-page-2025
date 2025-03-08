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
    { title: 'Institute management', iconColor: '#E3F2FD', textColor: '#64B5F6', description: 'Automate enrollment, attendance, fees, exams, analysis. Optimize institute performance and resource use', icon: <VideocamOutlinedIcon fontSize="large" style={{ color: '#64b5f6' }} /> },
    { title: 'Data management', iconColor: '#FCE4EC', textColor: '#EC407A', description: 'Easily record, backup, export data in CSV or XML format. Customize fields, manage student details, and save records for in-depth analysis', icon: <AnalyticsOutlinedIcon fontSize="large" style={{ color: '#ec407a' }} /> },
    { title: 'Finance management', iconColor: '#F1F8E9', textColor: '#AED581', description: 'Simplifies fees collection, Automate Transactions and Provide In-depth Financial Reports', icon: <TouchAppOutlinedIcon fontSize="large" style={{ color: '#aed581' }} /> },
    { title: 'Admission management', iconColor: '#FFF3E0', textColor: '#FFB74D', description: 'Digital admission process, Easy form submission, Seamless admission tracking', icon: <AssignmentOutlinedIcon fontSize="large" style={{ color: '#ffb74d' }} /> },
    { title: 'Transport management', iconColor: '#F3E5F5', textColor: '#BA68C8', description: 'Enhance student safety, Tracking vehicle status and Collect transportation fees', icon: <QuizOutlinedIcon fontSize="large" style={{ color: '#ba68c8' }} /> },
    { title: 'Inventory management', iconColor: '#F3E5F5', textColor: '#BA68C8', description: 'Manage Inventory, Maintain Supplier details and Generate a paperless invoice', icon: <QuizOutlinedIcon fontSize="large" style={{ color: '#ba68c8' }} /> }
  ];

  // Calculate the maximum scroll value for horizontal scrolling
  const maxScrollWidth = () => {
    if (!scrollContainerRef.current) return 0;
    const container = scrollContainerRef.current;
    return container.scrollWidth - container.clientWidth;
  };

  // Function to check if the last card is fully visible
  const isLastCardVisible = () => {
    if (!scrollContainerRef.current) return false;
    
    const container = scrollContainerRef.current;
    const scrollPosition = container.scrollLeft;
    const containerWidth = container.clientWidth;
    const scrollableWidth = container.scrollWidth;
    
    // Consider the last card visible when we've scrolled to at least 95% of the max scroll
    return scrollPosition + containerWidth >= scrollableWidth * 0.95;
  };

  useEffect(() => {
    const section = sectionRef.current;
    let lastScrollY = window.scrollY;
    let ticking = false;
    let initialSectionTop = 0;
    let sectionHeight = 0;
    let releasePoint = 0;

    // Function to handle horizontal scroll on card container
    const handleHorizontalScroll = () => {
      const isVisible = isLastCardVisible();
      if (isVisible !== lastCardVisible) {
        setLastCardVisible(isVisible);
      }
    };

    // Add scroll event listener to the horizontal container
    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener('scroll', handleHorizontalScroll);
    }

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const sectionRect = section.getBoundingClientRect();
          
          // First time we reach the section
          if (!initialSectionTop && sectionRect.top <= 0) {
            initialSectionTop = currentScrollY + sectionRect.top;
            sectionHeight = sectionRect.height;
            releasePoint = initialSectionTop + sectionHeight;
          }
          
          if (initialSectionTop) {
            // Calculate how far we've scrolled within the section
            const scrollOffset = currentScrollY - initialSectionTop;
            const totalScrollDistance = sectionHeight;
            
            // Determine if we should lock scrolling
            if (scrollOffset >= 0 && !lastCardVisible) {
              // Calculate normalized progress for horizontal scrolling (0 to 1)
              const normalizedProgress = Math.max(0, Math.min(1, scrollOffset / totalScrollDistance));
              
              // Lock the section while horizontal scrolling is happening
              if (!isScrollLocked) {
                setIsScrollLocked(true);
                // Apply fixed position
                section.style.position = 'fixed';
                section.style.top = '0';
                section.style.left = '0';
                section.style.width = '100%';
                section.style.zIndex = '1';
                
                // Add placeholder to prevent layout shift
                const placeholder = document.createElement('div');
                placeholder.id = 'lms-section-placeholder';
                placeholder.style.height = `${sectionHeight}px`;
                section.parentNode.insertBefore(placeholder, section);
              }
              
              // Update horizontal scroll based on vertical scroll progress
              if (scrollContainerRef.current) {
                const targetScrollLeft = normalizedProgress * maxScrollWidth();
                scrollContainerRef.current.scrollLeft = targetScrollLeft;
              }
            } else if (lastCardVisible || scrollOffset > totalScrollDistance) {
              // Last card is visible or we've scrolled past the section, release scroll lock
              if (isScrollLocked) {
                setIsScrollLocked(false);
                
                // Reset the section to its normal flow in the document
                section.style.position = 'relative';
                section.style.top = `${scrollOffset}px`;
                
                // Remove placeholder
                const placeholder = document.getElementById('lms-section-placeholder');
                if (placeholder) {
                  placeholder.remove();
                }
                
                // Adjust window scroll position to maintain visual continuity
                if (!section.dataset.scrollAdjusted) {
                  section.dataset.scrollAdjusted = 'true';
                  // This ensures the visual position stays the same
                  window.scrollTo({
                    top: initialSectionTop + scrollOffset,
                    behavior: 'auto'
                  });
                }
              }
            } else if (scrollOffset < 0) {
              // Exiting at the top
              if (isScrollLocked) {
                setIsScrollLocked(false);
                section.style.position = 'relative';
                section.style.top = '0';
                
                // Remove placeholder
                const placeholder = document.getElementById('lms-section-placeholder');
                if (placeholder) placeholder.remove();
                
                // Reset the scroll adjustment flag
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
    
    // Initial setup
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener('scroll', handleHorizontalScroll);
      }
      // Clean up when component unmounts
      const placeholder = document.getElementById('lms-section-placeholder');
      if (placeholder) placeholder.remove();
    };
  }, [isScrollLocked, lastCardVisible]);

  return (
    <Box 
      ref={sectionRef}
      sx={{ 
        borderBottom: '0.5px solid pink', 
        bgcolor: '#1a2a42', 
        color: 'white', 
        height: '100vh', // Always 100vh while locked
        py: 6, 
        px: { xs: 2, md: 3 },
        overflow: 'hidden', // Prevent content overflow
        transition: 'top 0.3s ease-out',
        position: 'relative'
      }}
    >  
      <Container maxWidth="lg" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ mb: 5, textAlign: 'left' }}>
          <Typography variant="h3" fontWeight="500" sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }}>
          Optimize Operations with <Box component="span" sx={{ color: '#4FC3F7' }}>Onesaz</Box> ERP
          </Typography>
          <Typography variant="subtitle1" sx={{ opacity: 0.7, mb: 3, fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' } }}>
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
                fontSize: { xs: '0.9rem', sm: '1rem' }
              }}
            >
12+ ERP features            </Button>
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
             Fully customizable
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
  );
};

export default LMSFeaturesGrid;