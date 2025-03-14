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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LoginIcon from "@mui/icons-material/Login";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = ["ERP", "LMS", "MODULES"];

  const handleLoginClick = () => {
    window.location.href = "https://onesaz.com/sign-in";
  };

  const handleTryForFreeClick = () => {
    window.open(
      "https://wa.me/+919912340396?text=Hello!%20I%27m%20interested%20in%20your%20services.%20Can%20we%20get%20on%20a%20call%3F",
      "_blank"
    );
  };

  const handleNavLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: "#fff",
        borderBottom: "0.5px solid black",
        boxShadow: "none",
        padding: { xs: "10px 10px", md: "10px 20px" },
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src="https://onesaz-assets.s3.ap-south-1.amazonaws.com/assets/onesquare.png"
            alt="Logo"
            style={{ width: "40px", height: "40px" }}
          />
          <Typography
            variant="h5"
            sx={{
              color: "#333",
              fontWeight: { xs: "700", md: "800" },
              fontSize: { xs: "1.2rem", md: "1.8rem" },
              fontFamily: "Poppins, sans-serif",
            }}
          >
            ONESAZ
          </Typography>
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: "20px",
            alignItems: "center",
          }}
        >
          {navLinks.map((text) => (
            <ScrollLink
              key={text}
              to={text.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-70}
              style={{
                color: "#333",
                cursor: "pointer",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "700",
                fontSize: "1.1rem",
              }}
            >
              <Typography sx={{ fontSize: "inherit" }}>{text}</Typography>
            </ScrollLink>
          ))}

          <Button
            startIcon={<LoginIcon />}
            sx={{
              color: "#333",
              textTransform: "none",
              fontWeight: "700",
              fontSize: "1.1rem",
              fontFamily: "Poppins, sans-serif",
            }}
            onClick={handleLoginClick}
          >
            Log In
          </Button>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#00C4B4",
              borderRadius: "20px",
              textTransform: "none",
              fontWeight: "700",
              fontSize: "1.1rem",
              fontFamily: "Poppins, sans-serif",
            }}
            onClick={handleTryForFreeClick}
          >
            Try for Free
          </Button>
        </Box>

        <IconButton
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <Box sx={{ width: "250px", padding: "20px" }}>
          <IconButton onClick={handleDrawerToggle} sx={{ marginBottom: "20px" }}>
            <CloseIcon />
          </IconButton>
          <List>
            {navLinks.map((text) => (
              <ScrollLink
                key={text}
                to={text.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-70}
                style={{
                  color: "#333",
                  cursor: "pointer",
                  display: "block",
                  width: "100%",
                }}
                onClick={handleNavLinkClick}
              >
                <ListItem button>
                  <ListItemText
                    primary={text}
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "700",
                      fontSize: "1.1rem",
                    }}
                  />
                </ListItem>
              </ScrollLink>
            ))}

            <ListItem button onClick={handleLoginClick}>
              <LoginIcon sx={{ marginRight: "10px" }} />
              <ListItemText
                primary="Log In"
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "700",
                  fontSize: "1.1rem",
                }}
              />
            </ListItem>

            <ListItem
              button
              sx={{ textAlign: "center" }}
              onClick={handleTryForFreeClick}
            >
              <Button
                variant="contained"
                sx={{
                  width: "100%",
                  backgroundColor: "#00C4B4",
                  borderRadius: "20px",
                  fontWeight: "700",
                  fontSize: "1.1rem",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Try for Free
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;