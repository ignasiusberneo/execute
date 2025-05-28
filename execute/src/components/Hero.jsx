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
    //   <Box
    //   sx={{
    //     width: "100%",
    //     minHeight: "100vh",
    //     m: 0, // Remove any margin
    //     p: 0, // Remove any padding
    //     backgroundImage: `url(${logoBackground})`,
    //     backgroundRepeat: "no-repeat",
    //     backgroundPosition: "center",
    //     // Option 1: Fill width and auto-adjust height (may leave vertical gaps)
    //     backgroundSize: "100% auto",
    //     // Option 2 (if a slight distortion is acceptable): "100% 100%"
    //     // backgroundSize: "100% 100%",
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //   }}
    // >
    //   <motion.div
    //     initial={{ opacity: 0, scale: 0.95 }}
    //     animate={{ opacity: 1, scale: 1 }}
    //     transition={{ duration: 1.5 }}
    //   >
    //     <img
    //       src={logo}
    //       alt="Logo"
    //       style={{ width: 500, maxWidth: "100%" }}
    //     />
    //   </motion.div>
    // </Box>  
  );
}

export default Hero;
