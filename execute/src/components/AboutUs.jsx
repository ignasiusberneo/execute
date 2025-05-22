import { Box, Container, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import backgroundTentangKami from "../assets/backgroundTentangKami.png";
import aboutUs from "../assets/aboutUs.svg";

function AboutUs() {
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
        src={backgroundTentangKami}
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
        initial={{ opacity: 0, y: -100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src={aboutUs}
          alt="About Us"
          style={{ width: 750, maxWidth: "100%" }}
        />
      </motion.div>
    </Box>
  );
}

export default AboutUs;
