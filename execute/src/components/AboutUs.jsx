import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <Container sx={{ py: 5, textAlign: "center" }}>
        <Typography fontWeight={"bold"} variant="h4" gutterBottom>
          Tentang Kami
        </Typography>
        <Typography variant="body1" pb={3}>
          Hi, kami Execute!
        </Typography>
        <Typography variant="body1">
          Layanan jasa pembuatan video untuk keperluan promosi maupun edukasi di
          Social Media seperti Instagram Reels dan TikTok.
          Kami juga menyediakan layanan jasa kelola Social Media mulai dari Ide
          Konten sampai dengan posting terima beres! Yang pasti bakalan bikin
          tampilan Social Media-mu lebih Aesthetic dan Menarik. kami sudah
          berpengalaman di bidang ini selama kurang lebih 5 tahun dan telah
          membantu berbagai brand dari perusahaan besar hingga UMKM dalam
          membuat konten yang relevan, dan mudah diingat.
        </Typography>
      </Container>
    </motion.div>
  );
}

export default AboutUs;
