import React, { useRef, useState, useEffect } from 'react';
 import { 
   Box, 
   Typography, 
   Container,
   Paper, 
   Chip,
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
 
 const LMSFeaturesGrid = () => {
   const theme = useTheme();
   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
   const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
   const scrollContainerRef = useRef(null);
   const [activeIndex, setActiveIndex] = useState(0);
 
   const getCardWidth = () => (isMobile ? 320 : isTablet ? 360 : 380);
 
   const featureData = [
     { title: 'Secure Virtual Classes', iconColor: '#E3F2FD', textColor: '#64B5F6', description: 'Our classes empower you to conduct online classes with physical security. You have full control over class access and participants.', icon: <VideocamOutlinedIcon fontSize="large" style={{ color: '#64b5f6' }} /> },
     { title: 'Quick Analysis', iconColor: '#FCE4EC', textColor: '#EC407A', description: 'Get detailed analysis of progress of teachers and students and identify the key areas of improvement.', icon: <AnalyticsOutlinedIcon fontSize="large" style={{ color: '#ec407a' }} /> },
     { title: 'User Friendly', iconColor: '#F1F8E9', textColor: '#AED581', description: 'Our portal is user friendly and students and teachers can use it on multiple devices (Desktops, tablets, smartphones).', icon: <TouchAppOutlinedIcon fontSize="large" style={{ color: '#aed581' }} /> },
     { title: 'Multiple Question Papers', iconColor: '#FFF3E0', textColor: '#FFB74D', description: 'Manage all kinds of different tests & create multiple question papers tailored to your exact needs.', icon: <AssignmentOutlinedIcon fontSize="large" style={{ color: '#ffb74d' }} /> },
     { title: 'Test Creation', iconColor: '#F3E5F5', textColor: '#BA68C8', description: 'Create tests with personalized papers and share them with your students for learning improvement and improvement.', icon: <QuizOutlinedIcon fontSize="large" style={{ color: '#ba68c8' }} /> },
   ];
 
   useEffect(() => {
     const handleScroll = () => {
       if (!scrollContainerRef.current) return;
       const scrollLeft = scrollContainerRef.current.scrollLeft;
       const cardWidth = getCardWidth() + 24; 
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
             Increased results with <Box component="span" sx={{ color: '#4FC3F7' }}>LMS</Box> features
           </Typography>
           <Typography variant="subtitle1" sx={{ opacity: 0.7, mb: 3 }}>
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
                 px: 2
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
                 px: 2
               }}
             >
               Enhance Student's Learning
             </Button>
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
                   height: 300, 
                   width: getCardWidth(), 
                   bgcolor: 'white',
                   borderRadius: 2,
                   color: 'text.primary',
                   flexShrink: 0 
                 }}
               >
                 <IconBox color={feature.iconColor}>
                   {feature.icon}
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
 
         <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 6 }}>
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
 
 export default LMSFeaturesGrid;