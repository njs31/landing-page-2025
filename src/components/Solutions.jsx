import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Paper,
  Button,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(4),
  position: 'relative',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  overflow: 'hidden',
}));

const DashboardHeader = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: '#1F2937',
  textAlign: 'center',
  marginBottom: theme.spacing(1.5),
  fontSize: '2.5rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.8rem',
  },
}));

const DashboardSubheader = styled(Typography)(({ theme }) => ({
  color: '#6B7280',
  textAlign: 'center',
  marginBottom: theme.spacing(3),
  fontWeight: 500,
  fontSize: '1.25rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));

const TabButton = styled(Button)(({ theme, active }) => ({
  borderRadius: '20px',
  padding: '10px 20px',
  margin: theme.spacing(0.5),
  textTransform: 'none',
  backgroundColor: active ? '#25c9d0' : '#e0e0e0',
  color: active ? 'white' : '#333',
  fontSize: '1rem',
  fontWeight: 500,
  '&:hover': {
    backgroundColor: active ? '#1cb6bd' : '#d5d5d5',
  },
}));

const DashboardImage = styled('img')(({ theme }) => ({
  width: '100%',
  borderRadius: theme.spacing(1),
  border: 'none',
  maxHeight: '60vh',
  objectFit: 'contain',
}));

// Geometric shapes
const Circle = styled('div')(({ size, top, left, color, opacity }) => ({
  position: 'absolute',
  width: size,
  height: size,
  borderRadius: '50%',
  backgroundColor: color,
  top: top,
  left: left,
  opacity: opacity,
  zIndex: -1,
}));

const Square = styled('div')(({ size, top, left, color, opacity, rotation }) => ({
  position: 'absolute',
  width: size,
  height: size,
  backgroundColor: color,
  top: top,
  left: left,
  opacity: opacity,
  transform: `rotate(${rotation}deg)`,
  zIndex: -1,
}));

const Triangle = styled('div')(({ size, top, left, color, opacity, rotation }) => ({
  position: 'absolute',
  width: 0,
  height: 0,
  borderLeft: `${size/2}px solid transparent`,
  borderRight: `${size/2}px solid transparent`,
  borderBottom: `${size}px solid ${color}`,
  top: top,
  left: left,
  opacity: opacity,
  transform: `rotate(${rotation}deg)`,
  zIndex: -1,
}));

const Diamond = styled('div')(({ size, top, left, color, opacity }) => ({
  position: 'absolute',
  width: size,
  height: size,
  backgroundColor: color,
  top: top,
  left: left,
  opacity: opacity,
  transform: 'rotate(45deg)',
  zIndex: -1,
}));

const DashboardSolutions = () => {
  const [activeTab, setActiveTab] = useState('branch');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const dashboardImages = {
    branch: 'https://onesaz-assets.s3.ap-south-1.amazonaws.com/assets/chart.png',
    finance: 'https://onesaz-assets.s3.ap-south-1.amazonaws.com/assets/fin.png',
    user: 'https://onesaz-assets.s3.ap-south-1.amazonaws.com/assets/user.png',
    attendance: 'https://onesaz-assets.s3.ap-south-1.amazonaws.com/assets/attn.png',
  };

  return (
    <StyledContainer>
      {/* Background geometric shapes */}
      <Circle size="150px" top="5%" left="5%" color="#25c9d0" opacity={0.1} />
      <Circle size="80px" top="70%" left="15%" color="#FF9800" opacity={0.15} />
      <Circle size="120px" top="40%" left="85%" color="#9C27B0" opacity={0.08} />
      
      <Square size="100px" top="15%" left="80%" color="#4CAF50" opacity={0.12} rotation={15} />
      <Square size="70px" top="60%" left="75%" color="#FF5722" opacity={0.1} rotation={30} />
      
      <Triangle size="120px" top="25%" left="30%" color="#3F51B5" opacity={0.08} rotation={180} />
      <Triangle size="90px" top="65%" left="40%" color="#E91E63" opacity={0.1} rotation={45} />
      
      <Diamond size="100px" top="10%" left="60%" color="#FFEB3B" opacity={0.1} />
      <Diamond size="80px" top="80%" left="5%" color="#00BCD4" opacity={0.12} />

      <Box>
        <DashboardHeader variant={isMobile ? 'h5' : 'h4'}>
          Our Solutions that will Blow Your Mind
        </DashboardHeader>
        <DashboardSubheader variant="body2">
          Vital KPIs, Real-time Updates, Customizable Dashlets
        </DashboardSubheader>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            mb: 2,
            gap: { xs: 0.5, sm: 1 },
          }}
        >
          {['branch', 'finance', 'user', 'attendance'].map((tab) => (
            <TabButton
              key={tab}
              active={activeTab === tab}
              onClick={() => handleTabChange(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </TabButton>
          ))}
        </Box>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 1, sm: 2 },
            bgcolor: 'transparent',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 0,
          }}
        >
          <Box sx={{ position: 'relative' }}>
            <DashboardImage
              src={dashboardImages[activeTab]}
              alt={`${activeTab} dashboard`}
            />
          </Box>
        </Paper>
      </Box>
    </StyledContainer>
  );
};

export default DashboardSolutions;