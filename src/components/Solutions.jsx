import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Paper, 
  Button, 
  useMediaQuery, 
  useTheme
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(6),
  position: 'relative',
  height: '100vh', 
  width: '100vw', 
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  border: '0.5px dashed black', 
  overflow: 'hidden', 
}));

const DashboardHeader = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: '#1F2937',
  textAlign: 'center',
  marginBottom: theme.spacing(2),
  fontSize: theme.breakpoints.down('sm') ? '2.5rem' : '3.5rem',
}));

const DashboardSubheader = styled(Typography)(({ theme }) => ({
  color: '#6B7280',
  textAlign: 'center',
  marginBottom: theme.spacing(4),
  fontWeight: 500,
  fontSize: theme.breakpoints.down('sm') ? '1.5rem' : '1.75rem',
}));

const TabButton = styled(Button)(({ theme, active }) => ({
  borderRadius: '24px',
  padding: '14px 28px',
  margin: theme.spacing(0.5),
  textTransform: 'none',
  backgroundColor: active ? '#25c9d0' : '#e0e0e0',
  color: active ? 'white' : '#333',
  fontSize: theme.breakpoints.down('sm') ? '1.2rem' : '1.4rem',
  fontWeight: 600,
  '&:hover': {
    backgroundColor: active ? '#1cb6bd' : '#d5d5d5',
  },
}));

const DashboardImage = styled('img')(({ theme }) => ({
  width: '100%',
  borderRadius: theme.spacing(1),
  boxShadow: '0 6px 30px rgba(0,0,0,0.15)',
  border: '1px solid #eaeaea',
  maxHeight: '70vh',
  objectFit: 'contain',
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
    attendance: 'https://onesaz-assets.s3.ap-south-1.amazonaws.com/assets/attn.png'
  };

  return (
    <StyledContainer>
      <Box>
        <DashboardHeader variant={isMobile ? "h4" : "h3"}>
          Our Solutions that will Blow Your Mind
        </DashboardHeader>
        
        <DashboardSubheader variant="body1">
          Vital KPIs, Real-time Updates, Customizable Dashlets
        </DashboardSubheader>

        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            flexWrap: 'wrap', 
            mb: 3,
            gap: { xs: 0.5, sm: 1 }
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
          elevation={3} 
          sx={{ 
            p: { xs: 1, sm: 2 },
            bgcolor: 'white', 
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 2
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
