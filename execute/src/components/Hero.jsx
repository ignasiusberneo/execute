import { Box } from "@mui/material";
import { motion } from "framer-motion";
import websiteLogo from "../assets/logo-website.png";
import backgroundLogo from "../assets/background-logo.png";
import logoBackground from "../assets/logoBackground.svg";
import logo from "../assets/logo.svg";

function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        display: "inline-block", // Let height follow content
        textAlign: "center",
        py: 15, // ← Adds vertical padding around logo (adjust as needed)
      }}
    >
      {/* Background image behind everything */}
      <Box
        component="img"
        src={ backgroundLogo}
        alt="Background"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "fill", // or "contain" to avoid distortion
          zIndex: -1,
        }}
      />

      {/* Foreground logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ width: 500, maxWidth: "100%" }}
        />
      </motion.div>
    </Box>
  );
}

export default Hero;
