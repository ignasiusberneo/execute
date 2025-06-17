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
import executeLogoOnly from "../assets/executeLogoOnly.png";
import InsertLinkIcon from "@mui/icons-material/InsertLink";

function Navbar({ onNavClick }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);

  // Social link dropdown
  const handleSocialClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleSocialClose = () => {
    setAnchorEl(null);
  };

  // Mobile nav menu
  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  const handleNavClick = (callback) => {
    callback();
    handleMobileMenuClose();
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "white", boxShadow: "none", px: 4, top: 0, zIndex: 1100 }}>

      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left: Logo + Social */}
        <Box display="flex" alignItems="center" gap={1}>
          <img src={executeLogoOnly} alt="Logo" style={{ width: 30 }} />
          <Typography variant="h6" component="div" color="black">
            Execute
          </Typography>
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            <IconButton sx={{ color: "black" }} onClick={handleSocialClick}>
              <InsertLinkIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleSocialClose}
              sx={{ mt: 2 }}
            >
              <MenuItem
                component="a"
                href="https://www.instagram.com/executeofficial.id"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleSocialClose}
                sx={{
                  color: "black",
                  "&:hover": {
                    backgroundColor: "#DC2525", // or any color you want
                    color: "white",
                  },
                }}
              >
                Instagram
              </MenuItem>
              <MenuItem
                component="a"
                href="https://www.tiktok.com/@executeofficial.id"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleSocialClose}
                sx={{
                  color: "black",
                  "&:hover": {
                    backgroundColor: "#DC2525", // or any color you want
                    color: "white",
                  },
                }}
              >
                TikTok
              </MenuItem>
            </Menu>
          </Box>
        </Box>

        {/* Desktop Nav */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          <Button
            onClick={onNavClick.tentangKami}
            sx={{
              color: "black",
              "&:hover": {
                backgroundColor: "#DC2525", // or any color you want,
                color: "white",
              },
            }}
          >
            Tentang Kami
          </Button>
          <Button
            onClick={onNavClick.produk}
            sx={{
              color: "black",
              "&:hover": {
                backgroundColor: "#DC2525", // or any color you want,
                color: "white",
              },
            }}
          >
            Produk
          </Button>
          <Button
            onClick={onNavClick.hasilKarya}
            sx={{
              color: "black",
              "&:hover": {
                backgroundColor: "#DC2525", // or any color you want,
                color: "white",
              },
            }}
          >
            Hasil Karya
          </Button>
          <Button
            onClick={onNavClick.klienKami}
            sx={{
              color: "black",
              "&:hover": {
                backgroundColor: "#DC2525", // or any color you want,
                color: "white",
              },
            }}
          >
            Klien Kami
          </Button>
          <Button
            onClick={onNavClick.kontak}
            sx={{
              color: "black",
              "&:hover": {
                backgroundColor: "#DC2525", // or any color you want,
                color: "white",
              },
            }}
          >
            Kontak
          </Button>
        </Box>

        {/* Mobile Hamburger Icon */}
        <IconButton
          sx={{ display: { xs: "block", md: "none" }, color: "black" }}
          onClick={handleMobileMenuOpen}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Nav Menu */}
        <Menu
          anchorEl={mobileMenuAnchor}
          open={Boolean(mobileMenuAnchor)}
          onClose={handleMobileMenuClose}
          sx={{ mt: 2 }}
        >
          <MenuItem onClick={() => handleNavClick(onNavClick.tentangKami)}>
            Tentang Kami
          </MenuItem>
          <MenuItem onClick={() => handleNavClick(onNavClick.produk)}>
            Produk
          </MenuItem>
          <MenuItem onClick={() => handleNavClick(onNavClick.hasilKarya)}>
            Hasil Karya
          </MenuItem>
          <MenuItem onClick={() => handleNavClick(onNavClick.kenapaHarusKami)}>
            Klien Kami
          </MenuItem>
          <MenuItem onClick={() => handleNavClick(onNavClick.kontak)}>
            Kontak
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
