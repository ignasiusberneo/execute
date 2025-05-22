import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import executeNewLogo from "../assets/executeNewLogo.JPG";
import executeLogo from "../assets/executeLogo.PNG";
import heroBackground2 from "../assets/heroBackground2.jpg";

function Hero() {
  return (
    <Box
      textAlign="center"
      py={8}
      // bgcolor={"#FC8F00"}
      sx={{
        // backgroundImage: "url(/heroBackground2.jpg)", // Replace with your image path
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
        background: "linear-gradient(135deg, 	#FFFFFF, #FF9539 )", // <-- Gradient
        width: "100%",
        py: 10, // Adds top & bottom padding
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
        <img src={executeLogo} alt="Logo" style={{ width: 250 }} />
        {/* <Typography variant="h6" mt={5} color="white">
          Turning Vision Into Action
        </Typography> */}
      </motion.div>
    </Box>
  );
}

export default Hero;
