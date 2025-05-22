import { Box, Container, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import backgroundKenapa from "../assets/backgroundKenapa.png";
import kenapa from "../assets/kenapa.svg";

function WhyChoouseUs() {
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
          mt: 2
        }}
      >
        {/* Background image behind everything */}
        <Box
          component="img"
          src={ backgroundKenapa}
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
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5 }}
        >
          <img
            src={kenapa}
            alt="Logo"
            style={{ width: 800, maxWidth: "100%" }}
          />
        </motion.div>
      </Box>
    );
}

export default WhyChoouseUs;
