import { Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <Container sx={{ py: 5 }}>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" pb={3}>HI, KAMI EXECUTE!</Typography>
        <Typography variant="body1">
          Layanan jasa pembuatan video untuk keperluan promosi maupun edukasi di
          Social Media seperti Instagram Reels, TikTok, maupun Youtube Shorts.
          Kami sudah berpengalaman di bidang ini selama kurang lebih 5 tahun dan
          saat ini sudah banyak membantu client-client besar maupun UMKM
        </Typography>
      </Container>
    </motion.div>
  );
}

export default AboutUs;
