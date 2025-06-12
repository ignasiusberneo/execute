import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import heroIcon from "../assets/heroIcon.png";

function Hero() {
  return (
    <Box
      textAlign="center"
      // bgcolor={"#FC8F00"}
      sx={{
        // backgroundImage: "url(/heroBackground2.jpg)", // Replace with your image path
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
        background: "#FE3500", // <-- Gradient
        width: "100%",
        // py: 10, // Adds top & bottom padding
        px: 2,
        color: "white",
        // textAlign: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Box display="flex" mx={5} gap={5} alignItems="center">
          <Box
            display="flex"
            flexDirection="column"
            mb={4}
            justifyContent={"center"}
          >
            <Typography
              sx={{ fontWeight: "bold", fontSize: "2.5rem" }}
              textAlign={"left"}
              color="white"
            >
              Jasa Pembuatan Video Kreatif
            </Typography>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "2.5rem" }}
              textAlign={"left"}
              color="white"
            >
              untuk TikTok & Instagram
            </Typography>
            <Typography
              sx={{ fontSize: "1rem" }}
              textAlign={"left"}
              color="white"
            >
              Hasil Maksimal, Effort Minimal!
            </Typography>
            <Button
             onClick={() => window.open("https://wa.me/6281227137167", "_blank")}
              sx={{
                alignSelf: "flex-start", // aligns the button to the left inside the column
                width: "fit-content", // prevents it from stretching
                mt: 2,
                backgroundColor: "#25D366",
                color: "white",
                fontWeight: "bold",
              }}
              variant="contained"
            >
              Konsultasi
            </Button>
          </Box>
          <Box
                    component="img"
                    src={heroIcon}
                    alt="Logo"
                    sx={{
                      width: 550,
                      display: { xs: "none", md: "block" },
                    }}
                  />
        </Box>
      </motion.div>
    </Box>
  );
}

export default Hero;
