import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LoginIcon from "@mui/icons-material/Login";
import Marquee from "react-fast-marquee";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = ["ERP", "LMS", "Fee Plan"];

  return (
    <>
    
      <Box sx={{ borderBotton:'1 px solid black',background: "linear-gradient(to bottom, #00416A, #E4E5E6)", padding: "50px 20px", textAlign: "center" }}>
        <Typography variant="h4" sx={{ color: "white", fontWeight: "bold" }}>
          Revolutionize Education Management with our <span style={{ color: "#00C4B4" }}>Onesaz</span> ERP Solutions
        </Typography>
        <Typography sx={{ color: "white", marginTop: "10px" }}>
          Transform the way educational institutions operate with our cutting-edge ERP solutions tailored for the ed-tech industry.
        </Typography>
        <Button variant="contained" sx={{ marginTop: "20px", backgroundColor: "#00C4B4" }}>
          Try it NOW
        </Button>

        
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
          <video
            width="800"
            height="450"
            src="/src/assets/video.mp4"
            title="Custom video player"
            autoPlay
            loop
            muted
            style={{ width: "100%", maxWidth: "800px", height: "auto", aspectRatio: "16/9" }}
          ></video>
        </Box>
      </Box>

    
      <Marquee sx={{background:'grey'}}>
        <Box
          component="img"
          src="/src/assets/clients/c1.png"
          alt="Logo 1"
          sx={{ width: "100px", marginRight: { xs: "100px", sm: "100px", md: "200px", lg: "400px" } }}
        />
        <Box
          component="img"
          src="/src/assets/clients/c2.png"
          alt="Logo 2"
          sx={{ width: "100px", marginRight: { xs: "100px", sm: "100px", md: "200px", lg: "400px"  } }}
        />
        <Box
          component="img"
          src="/src/assets/clients/c3.png"
          alt="Logo 3"
          sx={{ width: "100px", marginRight: { xs: "100px", sm: "100px", md: "200px", lg: "400px"  } }}
        />
        <Box
          component="img"
          src="/src/assets/clients/c4.png"
          alt="Logo 4"
          sx={{ width: "100px", marginRight: { xs: "100px", sm: "100px", md: "200px", lg: "400px" } }}
        />
      </Marquee>
    </>
  );
};

export default Navbar;