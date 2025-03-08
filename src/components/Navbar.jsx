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

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = ["ERP", "LMS", "Fee Plan"];

  const handleLoginClick = () => {
    window.location.href = "https://onesaz.com/sign-in";
  };

  return (
    <AppBar position="static" sx={{ background: "#fff", borderBottom: '0.5px solid black', boxShadow: "none", padding: "10px 20px" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src="../src/assets/onesquare.png" alt="Logo" style={{ width: "40px", height: "40px" }} />
          <Typography variant="h5" sx={{ color: "#333", fontWeight: "bold" }}>
            ONESAZ
          </Typography>
        </Box>

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: "20px", alignItems: "center" }}>
          {navLinks.map((text) => (
            <Typography key={text} sx={{ color: "#333", cursor: "pointer" }}>
              {text}
            </Typography>
          ))}
          <Button startIcon={<LoginIcon />} sx={{ color: "#333", textTransform: "none" }} onClick={handleLoginClick}>
            Log In
          </Button>
          <Button variant="contained" sx={{ backgroundColor: "#00C4B4", borderRadius: "20px", textTransform: "none" }}>
            Try for Free
          </Button>
        </Box>

        <IconButton edge="end" onClick={handleDrawerToggle} sx={{ display: { xs: "block", md: "none" } }}>
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
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
            <ListItem button onClick={handleLoginClick}>
              <LoginIcon sx={{ marginRight: "10px" }} />
              <ListItemText primary="Log In" />
            </ListItem>
            <ListItem button sx={{ textAlign: "center" }}>
              <Button variant="contained" sx={{ width: "100%", backgroundColor: "#00C4B4", borderRadius: "20px" }}>
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