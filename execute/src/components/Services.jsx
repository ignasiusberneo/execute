import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";

function Services() {
  const services = [
    {
      title: "Design Thinking",
      description: "Solusi desain yang kreatif dan inovatif",
    },
    { title: "Development", description: "Website cepat dan responsif" },
    {
      title: "Brand Strategy",
      description: "Strategi untuk membangun identitas brand",
    },
  ];

  return (
    <Container sx={{ py: 5 }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        gap={1}
      >
        <Typography variant="h4" gutterBottom>
          Our Services
        </Typography>
        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid size={{xs:12, sm:6, md:4}} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card sx={{ height: "100%", boxShadow: 3 }}>
                  <CardContent>
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      textAlign="center"
                      gap={1}
                    >
                      <Typography variant="h6">{service.title}</Typography>
                      <Typography>
                        Lorem ipsum dolor sit amet Lorem ipsum
                      </Typography>
                      <Typography>Lorem ipsum dolor sit amet</Typography>
                      <Typography>Lorem ipsum dolor sit amet</Typography>
                      <Button variant="contained" sx={{ mt: 2 }}>
                        Lorem
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Services;
