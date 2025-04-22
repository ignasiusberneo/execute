import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
    >
      <Box textAlign="center" py={8}>
        <img src={logo} alt="Logo" style={{ width: 250 }} />
        <Typography variant="h3" mt={2}>
          EXECUTE
        </Typography>
        <Typography variant="h6" mt={1} color="text.secondary">
          Inovasi Visual untuk Era Digital
        </Typography>
      </Box>
    </motion.div>
  );
}

export default Hero;
