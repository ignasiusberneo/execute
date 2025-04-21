import { Container, Typography, Card, CardContent, Box, Grid } from "@mui/material";
import { motion } from "framer-motion";

function Testimonials() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <Container sx={{ py: 5 }}>
        <Typography variant="h4" gutterBottom>
          Testimonials
        </Typography>
        <Box sx={{display: "flex", flexDirection: "column", gap: 3}}>
        <Card sx={{boxShadow: 3}}>
          <CardContent>
            <Typography>"Kerjanya cepat, hasil memuaskan!"</Typography>
            <Typography variant="subtitle2" mt={2}>
              - Nama Client
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{boxShadow: 3}}>
          <CardContent>
            <Typography>"Kerjanya cepat, hasil memuaskan!"</Typography>
            <Typography variant="subtitle2" mt={2}>
              - Nama Client
            </Typography>
          </CardContent>
        </Card>
        </Box>
      </Container>
    </motion.div>
  );
}

export default Testimonials;
