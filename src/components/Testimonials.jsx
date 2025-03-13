import React from 'react';
import { Box, Card, CardContent, Typography, Avatar, Grid, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(135deg, rgba(173, 216, 230, 0.4), rgba(144, 238, 144, 0.2))',
  borderRadius: theme.spacing(2),
  boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.08)',
  padding: theme.spacing(2),
  textAlign: 'left',
  height: '100%', 
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0px 12px 28px rgba(0, 0, 0, 0.12)',
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(7),
  height: theme.spacing(7),
  marginBottom: theme.spacing(1),
  background: 'linear-gradient(135deg, #3a8dff, #86b7fe)',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
}));

const QuoteIcon = styled('div')(({ theme }) => ({
  fontSize: '2rem',
  opacity: 0.15,
  position: 'absolute',
  right: theme.spacing(2),
  top: theme.spacing(2),
  fontFamily: 'Georgia, serif',
}));

const TestimonialCard = ({ name, review }) => {
  return (
    <StyledCard>
      <CardContent sx={{ position: 'relative' }}>
        <QuoteIcon>"</QuoteIcon>
        <Box display="flex" flexDirection="column" alignItems="flex-start" mb={2}>
          <StyledAvatar>
            <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
              {name.charAt(0)}
            </Typography>
          </StyledAvatar>
          <Typography 
            variant="subtitle1" 
            sx={{ 
              fontWeight: '600',
              fontSize: '1.1rem',
              fontFamily: '"Poppins", sans-serif',
              mt: 1
            }}
          >
            {name}
          </Typography>
        </Box>
        <Typography 
          variant="body1" 
          sx={{ 
            fontFamily: '"Poppins", sans-serif',
            fontStyle: 'italic',
            lineHeight: 1.6,
            fontSize: '0.95rem',
            color: 'rgba(0, 0, 0, 0.7)'
          }}
        >
          {review}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

const testimonials = [
  {
    name: 'Rajiv Bhupathi',
    review:
      'Its user-friendly interface and robust features empower institutions to efficiently manage student data, enhancing productivity and organization.',
  },
  {
    name: 'CH.Sri Charan',
    review:
      "I appreciate the app's robust security measures, ensuring fair and reliable exam assessment. Features like randomized questions and proctoring options uphold academic integrity.",
  },
  {
    name: 'Kommalapati Harsha',
    review:
      'With this app, students can take exams from anywhere. Its flexibility allows for studying on the go, making it ideal for busy schedules and remote learning environments.',
  },
  {
    name: 'Suwarna Minmulwar',
    review:
      'An Excellent app for Exams. Helps us to compare our performance with other people. It also helps us to compare our performance with the previous one. Shows the time spent analysis on each question.',
  },
  {
    name: 'Rakesh Naidu Gandi',
    review:
      'Many more features that makes student life better and also helps teachers to get in depth analysis about student performance in exams and assignments which can help student to perform better.',
  },
  {
    name: 'Swathi',
    review:
      'Its user-friendly interface and robust features empower institutions to efficiently manage student data, enhancing productivity and organization. An Excellent app for Exams!',
  },
];

const TestimonialsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ mt: 4, py: 4, px: { xs: 2, md: 4 }, mb: 4, height: isMobile ? 'auto' : 'auto' }}>
      <Typography 
        variant="h4" 
        align="center" 
        gutterBottom 
        sx={{ 
          fontWeight: 700, 
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
          fontFamily: '"Poppins", sans-serif',
          background: 'linear-gradient(to right, #4a6cf7, #24bddf)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          mb: 3
        }}
      >
        What our customers are saying
      </Typography>
      <Typography 
        variant="subtitle1" 
        align="center" 
        paragraph 
        sx={{ 
          fontFamily: '"Poppins", sans-serif',
          fontSize: '1.1rem',
          mb: 5,
          maxWidth: '800px',
          mx: 'auto',
          color: 'rgba(0, 0, 0, 0.6)'
        }}
      >
        Vital KPI's, Real-time updates, Customisable dashlets
      </Typography>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <TestimonialCard
              name={testimonial.name}
              review={testimonial.review}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TestimonialsSection;