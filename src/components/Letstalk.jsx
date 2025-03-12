import React from "react";
import { TextField, Button, Paper, Grid, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const LetsTalk = () => {
  return (
    <Grid 
      container 
      spacing={4} 
      sx={{ 
        px: { xs: 2, md: 10 }, 
        py: 8, 
        bgcolor: "#e0f7fa", 
        textAlign: "center" 
      }}
    >
      <Grid item xs={12} md={6}>
        <Paper elevation={4} sx={{ p: { xs: 3, md: 5 }, borderRadius: 3, bgcolor: "#ffffff" }}>
          <Typography 
            variant="h4" 
            fontWeight="bold" 
            sx={{ color: "#0288d1", fontSize: { xs: "1.8rem", md: "2.5rem" } }}
          >
            Contact Us
          </Typography>
          <hr style={{ width: "80px", border: "3px solid #0288d1", margin: "10px auto 20px" }} />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField label="First Name" variant="outlined" fullWidth sx={{ bgcolor: "#e1f5fe" }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Last Name" variant="outlined" fullWidth sx={{ bgcolor: "#e1f5fe" }} />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Email Address" variant="outlined" fullWidth sx={{ bgcolor: "#e1f5fe" }} />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Your Message" variant="outlined" fullWidth multiline rows={4} sx={{ bgcolor: "#e1f5fe" }} />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                fullWidth
                sx={{ bgcolor: "#0288d1", fontSize: "1.2rem", fontWeight: "bold", py: 1.5, "&:hover": { bgcolor: "#0277bd" } }}
                endIcon={<SendIcon />}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper elevation={4} sx={{ p: { xs: 3, md: 5 }, borderRadius: 3, bgcolor: "#ffffff" }}>
          <Typography 
            variant="h5" 
            display="flex" 
            alignItems="center" 
            fontWeight="bold" 
            sx={{ color: "#0288d1", fontSize: { xs: "1.5rem", md: "2rem" } }}
          >
            <LocationOnIcon sx={{ color: "#0288d1", mr: 1, fontSize: "2rem" }} /> Find us at the office
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2, fontSize: "1.1rem" }}>
            Suvarna Habitat, Jai Hind Gandhi Rd, Cyber Hills Colony, VIP Hills, Jaihind Enclave, Madhapur, Hyderabad, Telangana 500081
          </Typography>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2194367806997!2d78.38758109999999!3d17.4492082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91a08ff289b3%3A0x3b4acbf779faf70e!2sONESAZ!5e0!3m2!1sen!2sin!4v1740983764265!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0, marginTop: "20px", borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LetsTalk;
