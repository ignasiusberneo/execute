import { Box, Container, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import backgroundTentangKami from "../assets/backgroundTentangKami.png";
import backgroundKlienKami from "../assets/backgroundKlienKami.png";
import klienKami from "../assets/klienKami.svg";

function OurClient() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        display: "inline-block", // Let height follow content
        textAlign: "center",
        py: 5, // ← Adds vertical padding around logo (adjust as needed)
      }}
    >
      {/* Background image behind everything */}
      <Box
        component="img"
        src={backgroundKlienKami}
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
        ref={ref}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.5 }}
      >
        <img
          src={klienKami}
          alt="Logo"
          style={{ width: 700, maxWidth: "100%" }}
        />
      </motion.div>
    </Box>
  );
}

export default OurClient;
