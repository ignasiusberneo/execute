import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";

function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
    >
      <Box textAlign="center" py={8} sx={{background: "linear-gradient(135deg, #000000, #2a2a2a)"}}>
        <img src={logo2} alt="Logo" style={{ width: 250 }} />
        <Typography variant="h6" mt={5} color="white">
          Inovasi Visual untuk Era Digital
        </Typography>
      </Box>
    </motion.div>
  );
}

export default Hero;
