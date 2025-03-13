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
  height: '100vh',
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

const Circle = styled('div')(({ theme, size, top, left, color }) => ({
  position: 'absolute',
  width: size,
  height: size,
  borderRadius: '50%',
  backgroundColor: color,
  top: top,
  left: left,
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

          {/* Increased Frequency of Circles */}
          <Circle size="8px" top="5%" left="10%" color="#25c9d0" />
          <Circle size="10px" top="15%" left="20%" color="#25c9d0" />
          <Circle size="6px" top="25%" left="5%" color="#25c9d0" />
          <Circle size="12px" top="35%" left="30%" color="#25c9d0" />
          <Circle size="8px" top="45%" left="15%" color="#25c9d0" />
          <Circle size="14px" top="55%" left="40%" color="#25c9d0" />
          <Circle size="10px" top="65%" left="25%" color="#25c9d0" />
          <Circle size="7px" top="75%" left="50%" color="#25c9d0" />
          <Circle size="9px" top="85%" left="35%" color="#25c9d0" />
          <Circle size="5px" top="95%" left="60%" color="#25c9d0" />

          <Circle size="11px" top="10%" left="70%" color="#25c9d0" />
          <Circle size="9px" top="20%" left="80%" color="#25c9d0" />
          <Circle size="13px" top="30%" left="90%" color="#25c9d0" />
          <Circle size="7px" top="40%" left="65%" color="#25c9d0" />
          <Circle size="15px" top="50%" left="75%" color="#25c9d0" />
          <Circle size="6px" top="60%" left="85%" color="#25c9d0" />
          <Circle size="12px" top="70%" left="95%" color="#25c9d0" />
          <Circle size="8px" top="80%" left="70%" color="#25c9d0" />
          <Circle size="14px" top="90%" left="80%" color="#25c9d0" />
        </Paper>
      </Box>
    </StyledContainer>
  );
};

export default DashboardSolutions;