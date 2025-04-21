import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { SiTiktok, SiInstagram } from 'react-icons/si';

function Footer() {
    return (
        <Box bgcolor="#f5f5f5" py={5} mt={5}>
      <Container>
        <Grid container spacing={4}>
          {/* Sosial Media */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>Follow Us</Typography>
            <IconButton
              href="https://www.instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiInstagram size={24} />
            </IconButton>
            <IconButton
              href="https://www.tiktok.com/@yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiTiktok size={24} />
            </IconButton>
          </Grid>

          {/* Alamat */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>Address</Typography>
            <Typography variant="body2" display="flex" alignItems="center" gap={1}>
              <LocationOnIcon fontSize="small" />
              Jl. Contoh Alamat No. 123, Jakarta
            </Typography>
          </Grid>

          {/* Kontak */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>Contact Us</Typography>
            <Typography variant="body2" display="flex" alignItems="center" gap={1}>
              <PhoneIcon fontSize="small" />
              +62 812-3456-7890
            </Typography>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box textAlign="center" mt={4}>
          <Typography variant="body2" color="text.secondary">
            © 2025 Execute. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
    )
}

export default Footer;