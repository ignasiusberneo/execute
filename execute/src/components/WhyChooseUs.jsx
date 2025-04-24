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
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <Container sx={{ py: 5 }}>
        <Typography variant="h4" gutterBottom>
          Mengapa Memilih Kami
        </Typography>
        {whyChoose.map((item, index) => (
          <Box key={index} sx={{ mb: 3 }}>
            <Box sx={{ display: "flex", alignItems: "flex-start" }}>
              <CircleIcon sx={{ fontSize: 10, mt: "6px", mr: 1 }} />
              <Typography fontWeight="bold">{item.title}</Typography>
            </Box>
            <Typography sx={{ ml: 3 }}>{item.description}</Typography>
          </Box>
        ))}
      </Container>
    </motion.div>
  );
}

export default WhyChooseUs;
