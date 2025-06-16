import { Box, Container, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";

import element5 from "../assets/element5.png";
import logoTelkom from "../assets/logoTelkom.png";
import logoAsyifa from "../assets/logoAsyifa.png";
import logoSuprajaya from "../assets/logoSuprajaya.png";
import logoAurora from "../assets/logoAurora.jpg";
import logoIyunland from "../assets/logoIyunland.png";
import logoWomenCreative from "../assets/logoWomenCreative.png";
import logoWhitaker from "../assets/logoWhitaker.png";
import logoNutrivo from "../assets/logoNutrivo.png";
import logoElvicto from "../assets/logoElvicto.png";
import logoNutrifarm from "../assets/logoNutrifarm.png";
import logoSusufirnezku from "../assets/logoSusufirnezku.png";

function OurClient() {
  const logos = [
    logoTelkom,
    logoAsyifa,
    logoSuprajaya,
    logoAurora,
    logoIyunland,
    logoWomenCreative,
    logoWhitaker,
    logoNutrivo,
    logoElvicto,
    logoNutrifarm,
    logoSusufirnezku,
  ];

  return (
    <Container sx={{ textAlign: "center", py: 6 }}>
      <Typography fontWeight="bold" variant="h4" gutterBottom mb={5}>
        Klien Kami
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {logos.map((img, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={index}
            display="flex"
            justifyContent="center"
          >
            <Box
              component="img"
              src={img}
              alt={`Logo ${index + 1}`}
              sx={{
                width: 150,
                height: 150,
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default OurClient;
