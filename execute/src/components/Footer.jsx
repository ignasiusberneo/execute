import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { SiTiktok, SiInstagram } from "react-icons/si";
import backgroundFooter from "../assets/backgroundFooter.png";

function Footer() {
  return (
    <Box
        sx={{
          position: "relative",
          width: "100%",
          display: "inline-block", // Let height follow content
          textAlign: "center",
          py: 5, // ← Adds vertical padding around logo (adjust as needed)
          mt: 2
        }}
      >
        <Box
                  component="img"
                  src={ backgroundFooter}
                  alt="Background"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "fill", // or "contain" to avoid distortion
                    zIndex: -1,
                  }}
                />
        <Grid
          container
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={4}
          mx={3}
        >
          <Grid item xs={12} md="auto">
            <Box textAlign="center">
              <Typography color="#820101" variant="h6" gutterBottom>
                Follow Us
              </Typography>
              <IconButton
                href="https://www.instagram.com/executeofficial.id"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiInstagram color="#820101" size={24} />
              </IconButton>
              <IconButton
                href="https://www.tiktok.com/@executeofficial.id"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiTiktok color="#820101" size={24} />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} md="auto">
            <Box textAlign="center">
              <Typography color="#820101" variant="h6" gutterBottom>
                Address
              </Typography>
              <Typography
                variant="body2"
                display="flex"
                justifyContent="center"
                alignItems="center"
                color="#820101"
                gap={1}
              >
                <LocationOnIcon fontSize="small" />
                Pondok Pucung Indah I Blok C2 No. 115, Kota Tangerang Selatan
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md="auto">
            <Box textAlign="center">
              <Typography color="#820101" variant="h6" gutterBottom>
                Contact Us
              </Typography>
              <Typography color="#820101"
                variant="body2"
                display="flex"
                justifyContent={{ xs: "center", md: "flex-end" }}
                alignItems="center"
                gap={1}
              >
                <PhoneIcon fontSize="small" />
                +62 812-2713-7167
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box textAlign="center" mt={4}>
          <Typography variant="body2" color="#820101">
            © 2025 Execute. All rights reserved.
          </Typography>
        </Box>
    </Box>
  );
}

export default Footer;
