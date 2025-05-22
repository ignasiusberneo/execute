import { Box, Container, Typography, IconButton } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import backgroundFirstCard from "../assets/backgroundFirstCard.png";
import backgroundSecondCard from "../assets/backgroundSecondCard.png";
import firstCard from "../assets/firstCard.svg";
import secondCard from "../assets/secondCard.svg";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Services() {
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
          src={ backgroundFirstCard}
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
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
          <img
            src={firstCard}
            alt="Logo"
            style={{ width: 1000, maxWidth: "100%" }}
          />
        </motion.div>

        {/* Background image behind everything */}
        <Box
          component="img"
          src={ backgroundSecondCard}
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
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
          <img
            src={secondCard}
            alt="Logo"
            style={{ width: 1000, maxWidth: "100%" }}
          />
        </motion.div>
        <a
            href="https://wa.me/6281227137167" // Replace with your phone number
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <IconButton
              color="inherit"
              sx={{
                mt: 1,
                backgroundColor: "#25D366",
                "&:hover": { backgroundColor: "#1DA851" },
                color: "#FFFFFF",
              }}
            >
              <WhatsAppIcon />
            </IconButton>
          </a>
      </Box>
    );
}

export default Services;
