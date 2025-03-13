import React from "react";
import { TextField, Button, Grid, Typography, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const LetsTalk = () => {
  return (
    <Grid
      container
      spacing={6}
      sx={{
        px: { xs: 2, md: 12 },
        py: 10,
        bgcolor: "rgba(224, 247, 250, 0.4)",
        textAlign: "center",
        width: 'auto', // Ensure width is only as much as needed
      }}
    >
      <Grid item xs={12} sx={{ textAlign: 'left' }}>
        <Typography
          variant="h2" // Increased font size
          fontWeight="500"
          sx={{ 
            color: "#0288d1", 
            fontSize: { xs: "2.5rem", md: "3rem" }, // Increased font size
            mb: 2
          }}
        >
          Let's Talk
        </Typography>
        <Typography
          variant="body1"
          sx={{ 
            color: "#555", 
            fontSize: { xs: "1.2rem", md: "1.4rem" }, // Increased font size
            mb: 4
          }}
        >
          If you have any questions about the product or are confused about which plan to select, contact us.
        </Typography>
      </Grid>

      <Grid item xs={12} md={6}>
        <Box 
          sx={{ 
            p: { xs: 3, md: 5 }, 
            borderRadius: 4, 
            bgcolor: "rgba(255, 255, 255, 0.8)",
            boxShadow: "0 8px 32px rgba(2, 136, 209, 0.08)",
            transition: "all 0.3s ease",
            "&:hover": {
              boxShadow: "0 12px 48px rgba(2, 136, 209, 0.12)",
              transform: "translateY(-4px)"
            }
          }}
        >
          <Typography
            variant="h4"
            fontWeight="500"
            sx={{ 
              color: "#0288d1", 
              fontSize: { xs: "1.8rem", md: "2.5rem" },
              mb: 1
            }}
          >
            Contact Us
          </Typography>
          <Box 
            sx={{ 
              width: "40px", 
              height: "3px", 
              bgcolor: "#0288d1", 
              mx: "auto", 
              mb: 4,
              opacity: 0.7 
            }} 
          />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField 
                label="First Name" 
                variant="outlined" 
                fullWidth 
                sx={{ 
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                    bgcolor: "rgba(225, 245, 254, 0.3)",
                    "& fieldset": {
                      borderColor: "rgba(0, 0, 0, 0.08)"
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(2, 136, 209, 0.4)"
                    }
                  }
                }} 
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
                label="Last Name" 
                variant="outlined" 
                fullWidth 
                sx={{ 
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                    bgcolor: "rgba(225, 245, 254, 0.3)",
                    "& fieldset": {
                      borderColor: "rgba(0, 0, 0, 0.08)"
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(2, 136, 209, 0.4)"
                    }
                  }
                }} 
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                label="Email Address" 
                variant="outlined" 
                fullWidth 
                sx={{ 
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                    bgcolor: "rgba(225, 245, 254, 0.3)",
                    "& fieldset": {
                      borderColor: "rgba(0, 0, 0, 0.08)"
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(2, 136, 209, 0.4)"
                    }
                  }
                }} 
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                label="Your Message" 
                variant="outlined" 
                fullWidth 
                multiline 
                rows={4} 
                sx={{ 
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                    bgcolor: "rgba(225, 245, 254, 0.3)",
                    "& fieldset": {
                      borderColor: "rgba(0, 0, 0, 0.08)"
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(2, 136, 209, 0.4)"
                    }
                  }
                }} 
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                fullWidth
                sx={{ 
                  bgcolor: "#0288d1", 
                  fontSize: "1.1rem", 
                  fontWeight: "500", 
                  py: 1.5, 
                  borderRadius: 2,
                  textTransform: "none",
                  boxShadow: "0 4px 12px rgba(2, 136, 209, 0.2)",
                  transition: "all 0.3s ease",
                  "&:hover": { 
                    bgcolor: "#0277bd",
                    boxShadow: "0 6px 16px rgba(2, 136, 209, 0.3)",
                    transform: "translateY(-2px)"
                  } 
                }}
                endIcon={<SendIcon />}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      
      <Grid item xs={12} md={6}>
        <Box 
          sx={{ 
            p: { xs: 3, md: 5 }, 
            borderRadius: 4, 
            bgcolor: "rgba(255, 255, 255, 0.8)",
            boxShadow: "0 8px 32px rgba(2, 136, 209, 0.08)",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            transition: "all 0.3s ease",
            "&:hover": {
              boxShadow: "0 12px 48px rgba(2, 136, 209, 0.12)",
              transform: "translateY(-4px)"
            }
          }}
        >
          <Typography
            variant="h5"
            display="flex"
            alignItems="center"
            fontWeight="500"
            sx={{ 
              color: "#0288d1", 
              fontSize: { xs: "1.5rem", md: "2rem" } 
            }}
          >
            <LocationOnIcon sx={{ color: "#0288d1", mr: 1, fontSize: "2rem", opacity: 0.9 }} /> 
            Find us at the office
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary" 
            sx={{ 
              mt: 2, 
              fontSize: "1.1rem",
              opacity: 0.8,
              lineHeight: 1.6
            }}
          >
            Suvarna Habitat, Jai Hind Gandhi Rd, Cyber Hills Colony, VIP Hills, Jaihind Enclave, Madhapur, Hyderabad, Telangana 500081
          </Typography>
          <Box 
            sx={{ 
              mt: 3, 
              flexGrow: 1,
              overflow: "hidden",
              borderRadius: 3,
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
              position: "relative",
              minHeight: { xs: "300px", md: "400px" } // Ensure minimum height for mobile
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2194367806997!2d78.38758109999999!3d17.4492082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91a08ff289b3%3A0x3b4acbf779faf70e!2sONESAZ!5e0!3m2!1sen!2sin!4v1740983764265!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ 
                border: 0, 
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                minHeight: "300px" // Ensure minimum height for mobile
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LetsTalk;