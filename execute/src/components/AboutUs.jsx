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
          Kami adalah tim kreatif yang berfokus pada layanan pembuatan video
          maupun desain visual untuk kebutuhan social mediamu seperti Instagram
          dan TikTok. dengan menggabungkan ide segar, storytelling yang kuat,
          serta teknik editing profesional, kami membantu brand dan bisnismu
          tampil lebih menarik di platform digital.
        </Typography>
        <Typography variant="body1">
          Mulai dari konsep, pengambilan gambar, hingga proses editing akhir,
          tim kami siap mendampingi setiap langkah untuk menghasilkan konten
          yang engaging, dan relevan. Kami percaya bahwa video yang tepat dapat
          memperkuat identitas brand dan menjangkau audiens lebih luas.
        </Typography>
        <Typography variant="body1">
          Kami sudah berpengalaman di bidang ini selama kurang lebih 5 tahun dan
          telah membantu berbagai brand dari perusahaan besar hingga UMKM dalam
          membuat konten.
        </Typography>
      </Container>
    </motion.div>
  );
}

export default AboutUs;
