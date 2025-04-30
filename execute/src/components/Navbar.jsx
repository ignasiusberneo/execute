import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import logo from "../assets/logo.png"; // Replace with your logo path

function Navbar({onNavClick}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#D3D3D3", boxShadow: "none" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left section: Execute + Social Icon */}
        <Box display="flex" alignItems="center" gap={1}>
          <Typography variant="h6" component="div" color="black">
            Execute
          </Typography>

          {/* Social Media Dropdown */}
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            <IconButton sx={{ color: "black" }} onClick={handleMenuClick}>
              <InsertLinkIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              sx={{ mt: 2 }}
            >
              <MenuItem
                component="a"
                href="https://www.instagram.com/executeofficial.id"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleMenuClose}
              >
                Instagram
              </MenuItem>
              <MenuItem
                component="a"
                href="https://www.tiktok.com/@executeofficial.id"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleMenuClose}
              >
                TikTok
              </MenuItem>
            </Menu>
          </Box>
        </Box>

        {/* Right section: Navigation buttons (desktop) */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          <Button onClick={onNavClick.tentangKami} sx={{ color: "black" }}>Tentang Kami</Button>
          <Button onClick={onNavClick.produk} sx={{ color: "black" }}>Produk</Button>
          <Button onClick={onNavClick.hasilKarya} sx={{ color: "black" }}>Hasil Karya</Button>
          <Button onClick={onNavClick.kenapaHarusKami} sx={{ color: "black" }}>Kenapa Harus Kami</Button>
          <Button onClick={onNavClick.kontak} sx={{ color: "black" }}>Kontak</Button>
        </Box>

        {/* Hamburger menu icon (mobile only) */}
        <IconButton
          sx={{ display: { xs: "block", md: "none" }, color: "black" }}
          edge="end"
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
