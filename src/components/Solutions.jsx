import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Paper, 
  Button, 
  useMediaQuery, 
  Tab, 
  Tabs,
  useTheme
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(6),
  position: 'relative',
}));

const DashboardHeader = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  color: '#34425a',
  textAlign: 'center',
  marginBottom: theme.spacing(1),
}));

const DashboardSubheader = styled(Typography)(({ theme }) => ({
  color: '#6b7c93',
  textAlign: 'center',
  marginBottom: theme.spacing(3),
}));

const TabButton = styled(Button)(({ theme, active }) => ({
  borderRadius: '24px',
  padding: '8px 16px',
  margin: theme.spacing(0.5),
  textTransform: 'none',
  backgroundColor: active ? '#25c9d0' : '#e0e0e0',
  color: active ? 'white' : '#555',
  '&:hover': {
    backgroundColor: active ? '#1cb6bd' : '#d5d5d5',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.75rem',
    padding: '6px 12px',
  },
}));

const DashboardImage = styled('img')(({ theme }) => ({
  width: '100%',
  borderRadius: theme.spacing(1),
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  border: '1px solid #eaeaea',
}));

const Dot = styled(Box)(({ theme, size = 10, color = '#25c9d0' }) => ({
  width: size,
  height: size,
  borderRadius: '50%',
  backgroundColor: color,
  position: 'absolute',
  zIndex: -1,
}));

const Circle = styled(Box)(({ theme, size = 40, color = '#25c9d0' }) => ({
  width: size,
  height: size,
  borderRadius: '50%',
  border: `2px solid ${color}`,
  position: 'absolute',
  zIndex: -1,
}));

const DashboardSolutions = () => {
  const [activeTab, setActiveTab] = useState('branch');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const dashboardImages = {
    branch: '/src/assets/state/chart.png',
    finance: '/src/assets/state/fin.png',
    user: '/src/assets/state/user.png',
    attendance: '/src/assets/state/attn.png'
  };

  return (
    <StyledContainer maxWidth="lg">
     
      <Dot sx={{ top: '15%', left: '10%', size: 8, color: '#25c9d0' }} />
      <Dot sx={{ top: '25%', left: '15%', size: 12, color: '#25c9d0' }} />
      <Dot sx={{ top: '10%', right: '12%', size: 8, color: '#25c9d0' }} />
      <Dot sx={{ bottom: '20%', right: '15%', size: 10, color: '#ffd740' }} />
      <Circle sx={{ top: '5%', right: '5%', size: 30, color: '#25c9d0' }} />
      <Circle sx={{ bottom: '10%', left: '5%', size: 50, color: '#25c9d0' }} />

      <Box>
        <DashboardHeader variant={isMobile ? "h4" : "h3"}>
          Our Solutions that will blow your mind
        </DashboardHeader>
        
        <DashboardSubheader variant="body1">
          Vital KPI's, Real-time updates, Customisable dashlets
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
          <TabButton 
            active={activeTab === 'branch'} 
            onClick={() => handleTabChange('branch')}
          >
            Branch analysis
          </TabButton>
          
          <TabButton 
            active={activeTab === 'finance'} 
            onClick={() => handleTabChange('finance')}
          >
            Finance
          </TabButton>
          
          <TabButton 
            active={activeTab === 'user'} 
            onClick={() => handleTabChange('user')}
          >
            User management
          </TabButton>
          
          <TabButton 
            active={activeTab === 'attendance'} 
            onClick={() => handleTabChange('attendance')}
          >
            Attendance
          </TabButton>
        </Box>

        <Paper 
          elevation={0} 
          sx={{ 
            p: { xs: 1, sm: 2 },
            bgcolor: 'transparent', 
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
            
            <Box 
              sx={{ 
                position: 'absolute', 
                bottom: 0, 
                right: 0,
                display: isMobile ? 'none' : 'block'
              }}
            >
              <svg width="80" height="80" viewBox="0 0 80 80">
                <path d="M60,40 Q65,20 80,10 Q60,25 55,40 Z" fill="#FFD740" />
                <path d="M50,50 Q55,30 70,20 Q50,35 45,50 Z" fill="#25C9D0" />
              </svg>
            </Box>
          </Box>
        </Paper>
      </Box>
    </StyledContainer>
  );
};

export default DashboardSolutions;