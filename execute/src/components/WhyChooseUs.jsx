import {
  Container,
  Typography,
  Box,
  LinearProgress,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import CircleIcon from "@mui/icons-material/Circle";
import whyChoose from "../assets/whyChoose";

function WhyChooseUs() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <Container
        maxWidth={false} // disable default container sizing
        sx={{
          py: 5,
          px: 2,
          backgroundColor: "#D3D3D3",
          borderRadius: "30px",
          maxWidth: "800px", // or "md" if you prefer theme breakpoints
          mx: "auto", // center it horizontally
          boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Typography
          sx={{ textAlign: "center", fontWeight: "bold" }}
          font
          variant="h4"
          gutterBottom
        >
          Kenapa Harus Kami?
        </Typography>
        <Typography textAlign={"center"} variant="body1">
          Kami nggak cuma bikin konten, kami merancang pengalaman, membangun
          cerita, dan menciptakan brand yang ngena banget di hati audiens.
          Dengan team yang berpengalaman lebih dari 5 tahun di dunia content
          creation, copywriting yang bikin pesan kamu ngena, video production &
          editing yang memukau, desain grafis kreatif untuk visual yang
          standout, acting dan voice over untuk konten yang hidup, content
          planning terstruktur yang mendongkrak interaksi. Kami sudah bantu
          banyak bisnis untuk naik level, tampil standout, dan bahkan viral.
          Kamu juga sangat bisa mengandalkan kami karena kerja bareng kami tuh
          satu visi sama kamu! Brand-nya dari kamu, sentuhan magic-nya dari
          kami. Yuk, bikin sesuatu yang nggak terlupakan bareng-bareng!
        </Typography>
      </Container>
    </motion.div>
  );
}

export default WhyChooseUs;
