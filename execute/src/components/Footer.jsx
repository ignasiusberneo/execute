import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { SiTiktok, SiInstagram } from "react-icons/si";

function Footer() {
  return (
    <Box bgcolor="#FE3500" py={5} mt={5}>
      <Container>
        <Grid
          container
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={4}
        >
          {/* Left - Social Media */}
          <Grid item xs={12} md="auto">
            <Box textAlign="center">
              <Typography color="white" variant="h6" gutterBottom>
                Follow Us
              </Typography>
              <IconButton
                href="https://www.instagram.com/executeofficial.id"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiInstagram color="white" size={24} />
              </IconButton>
              <IconButton
                href="https://www.tiktok.com/@executeofficial.id"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiTiktok color="white" size={24} />
              </IconButton>
            </Box>
          </Grid>

          {/* Center - Address */}
          <Grid item xs={12} md="auto">
            <Box textAlign="center">
              <Typography color="white" variant="h6" gutterBottom>
                Address
              </Typography>
              <Typography
                variant="body2"
                display="flex"
                justifyContent="center"
                alignItems="center"
                color="white"
                gap={1}
              >
                <LocationOnIcon fontSize="small" />
                Pondok Pucung Indah I Blok C2 No. 115, Kota Tangerang Selatan
              </Typography>
            </Box>
          </Grid>

          {/* Right - Contact */}
          <Grid item xs={12} md="auto">
            <Box textAlign="center">
              <Typography color="white" variant="h6" gutterBottom>
                Contact Us
              </Typography>
              <Typography color="white"
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
          <Typography variant="body2" color="white">
            © 2025 Execute. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
