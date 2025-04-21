import { Container, Typography, Box, LinearProgress } from "@mui/material";
import { motion } from "framer-motion";

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <Container sx={{ py: 5 }}>
        <Typography variant="h4" gutterBottom>
          Our Creative Skills
        </Typography>
        <Box my={2}>
          <Typography>Lorem Ipsum</Typography>
          <LinearProgress variant="determinate" value={90} />
        </Box>
        <Box my={2}>
          <Typography>Lorem Ipsum</Typography>
          <LinearProgress variant="determinate" value={80} />
        </Box>
      </Container>
    </motion.div>
  );
}

export default Skills;
