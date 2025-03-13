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
  border: 'none', // Remove border
  maxHeight: '60vh',
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
        <DashboardHeader variant={isMobile ? "h5" : "h4"}>
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
          elevation={0} // Remove shadow
          sx={{ 
            p: { xs: 1, sm: 2 },
            bgcolor: 'transparent', // Make background transparent
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 0 // Remove border radius
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