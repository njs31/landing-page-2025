import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/system';
import '@fontsource/roboto'; // Default font
import '@fontsource/poppins'; // Additional font
import '@fontsource/montserrat'; // Additional font

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, Roboto, Montserrat, Arial, sans-serif',
    h4: {
      fontSize: '3rem', // Increased font size
      fontWeight: 700,
      '@media (max-width:600px)': {
        fontSize: '2.5rem', // Increased font size for mobile
      },
    },
    subtitle1: {
      fontSize: '1.5rem', // Increased font size
      fontWeight: 500,
      '@media (max-width:600px)': {
        fontSize: '1.25rem', // Increased font size for mobile
      },
    },
    body1: {
      fontSize: '1.25rem', // Increased font size
      '@media (max-width:600px)': {
        fontSize: '1.125rem', // Increased font size for mobile
      },
    },
    body2: {
      fontSize: '1.125rem', // Increased font size
      '@media (max-width:600px)': {
        fontSize: '1rem', // Increased font size for mobile
      },
    },
  },
});

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: '#2D3748',
  color: 'white',
  marginBottom: '1rem',
  '& .MuiAccordionSummary-content': {
    color: 'white',
  },
  '& .MuiAccordionDetails-root': {
    backgroundColor: '#c2fff8',
    color: 'black',
  },
}));

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqData = [
    {
      question: 'Why do educational institutes need an LMS?',
      answer:
        'An LMS helps educational institutes streamline course management, deliver online learning materials, track student progress, and facilitate communication between students and instructors.',
    },
    {
      question: 'What are the key features of an LMS?',
      answer:
        'Key features of an LMS include course management, content authoring, assessment and grading tools, communication tools (such as discussion forums and messaging), analytics and reporting, and integration capabilities with other systems.',
    },
    {
      question: 'What is an ERP system in the context of educational institutes?',
      answer:
        'An ERP system in the context of educational institutes is a software solution that integrates various administrative and operational functions such as finance, human resources, student admissions, and academic management into a single system.',
    },
    {
      question: 'What are the common modules or components of an ERP system for educational institutes?',
      answer:
        'Common modules or components of an ERP system for educational institutes include finance and accounting, human resources, student information management, admissions, academic management, academic planning and scheduling, and facilities management.',
    },
    {
      question: 'How can educational institutes ensure a successful implementation of an LMS or ERP system?',
      answer:
        'Successful implementation requires thorough planning, stakeholder involvement, effective change management, comprehensive training for users, ongoing support, and regular evaluation and optimization of the system to align with the institute\'s goals and objectives.',
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: '#1E293B', color: 'white', padding: '3rem 0' }}>
        <Container sx={{ borderBottom: '0.5px solid white', maxWidth: 'lg' }}>
          <Typography variant="h4" align="center" gutterBottom>
            Frequently Asked Questions
          </Typography>
          <Typography variant="body2" align="center" gutterBottom>
            Here are a few questions we get regularly from the users
          </Typography>

          {faqData.map((item, index) => (
            <StyledAccordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                aria-controls={`panel${index}a-content`}
                id={`panel${index}a-header`}
              >
                <Typography variant="subtitle1">{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">{item.answer}</Typography>
              </AccordionDetails>
            </StyledAccordion>
          ))}
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default FAQ;