import React from 'react';
import { Box, Card, CardContent, Typography, Avatar, Rating, Grid } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(135deg, rgba(173, 216, 230, 0.4), rgba(144, 238, 144, 0.2))', // Increased light blueness
  borderRadius: theme.spacing(2),
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
  padding: theme.spacing(2),
  textAlign: 'left',
  height: '100%', 
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(6),
  height: theme.spacing(6),
  marginBottom: theme.spacing(1),
}));

const TestimonialCard = ({ name, review, rating }) => {
  return (
    <StyledCard>
      <CardContent>
        <Box display="flex" flexDirection="column" alignItems="flex-start" mb={2}>
          <StyledAvatar>
            <Typography variant="h6" color="primary">
              {name.charAt(0)}
            </Typography>
          </StyledAvatar>
          <Typography variant="subtitle1" fontWeight="bold">
            {name}
          </Typography>
        </Box>
        <Typography variant="body2" color="textSecondary" paragraph>
          {review}
        </Typography>
        <Rating name="read-only" value={rating} readOnly />
      </CardContent>
    </StyledCard>
  );
};

const testimonials = [
  {
    name: 'Rajiv Bhupathi',
    review:
      'Its user-friendly interface and robust features empower institutions to efficiently manage student data, enhancing productivity and organization.',
    rating: 5,
  },
  {
    name: 'CH.Sri Charan',
    review:
      "I appreciate the app's robust security measures, ensuring fair and reliable exam assessment. Features like randomized questions and proctoring options uphold academic integrity.",
    rating: 5,
  },
  {
    name: 'Kommalapati Harsha',
    review:
      'With this app, students can take exams from anywhere. Its flexibility allows for studying on the go, making it ideal for busy schedules and remote learning environments.',
    rating: 5,
  },
  {
    name: 'Suwarna Minmulwar',
    review:
      'An Excellent app for Exams. Helps us to compare our performance with other people. It also helps us to compare our performance with the previous one. shows the time spent analysis on each question.',
    rating: 5,
  },
  {
    name: 'Rakesh Naidu Gandi',
    review:
      'Many more features that makes student life better and also helps teachers to get in depth analysis about student performance in exams and assignments which can help student to perform better.',
    rating: 5,
  },
  {
    name: 'Swathi',
    review:
      'Its user-friendly interface and robust features empower institutions to efficiently manage student data, enhancing productivity and organization.An Excellent app for Exams',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <Box sx={{ mt: 4, py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        What our customers were saying
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" paragraph>
        Vital KPI's, Real-time updates, Customisable dashlets
      </Typography>
      <Grid container spacing={3}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <TestimonialCard
              name={testimonial.name}
              review={testimonial.review}
              rating={testimonial.rating}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TestimonialsSection;