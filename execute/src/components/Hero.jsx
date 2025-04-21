import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
    >
      <Box textAlign="center" py={8}>
        <img src="/logo.png" alt="Logo" style={{ width: 120 }} />
        <Typography variant="h3" mt={2}>
          Execute
        </Typography>
        <Typography variant="h6" mt={1} color="text.secondary">
          Saya suka makan babi
        </Typography>
      </Box>
    </motion.div>
  );
}

export default Hero;
