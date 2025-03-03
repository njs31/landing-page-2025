import React from "react";
import { TextField, Button, Paper, Grid, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const LetsTalk = () => {
  return (
    <Grid container spacing={4} sx={{ px: { xs: 2, md: 8 }, py: 6, bgcolor: "#f4f4f4" }}>
      
      <Grid item xs={12} md={6}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h5" fontWeight="bold" textAlign="center">
            Contact Us
          </Typography>
          <hr style={{ width: "60px", border: "2px solid #4CAF50", margin: "10px auto 20px" }} />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField label="First Name" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Last Name" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Email Address" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Your Message" variant="outlined" fullWidth multiline rows={4} />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                fullWidth
                sx={{ bgcolor: "#4CAF50", "&:hover": { bgcolor: "#45A049" } }}
                endIcon={<SendIcon />}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h6" display="flex" alignItems="center" fontWeight="bold">
            <LocationOnIcon sx={{ color: "#4CAF50", mr: 1 }} /> Find us at the office
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
          Suvarna Habitat, Jai Hind Gandhi Rd, Cyber Hills Colony, VIP Hills, Jaihind Enclave, Madhapur, Hyderabad, Telangana 500081
          </Typography>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2194367806997!2d78.38758109999999!3d17.4492082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91a08ff289b3%3A0x3b4acbf779faf70e!2sONESAZ!5e0!3m2!1sen!2sin!4v1740983764265!5m2!1sen!2sin"
            width="100%"
            height="250"
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
