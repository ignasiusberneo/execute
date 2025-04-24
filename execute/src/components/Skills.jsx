import {
  Container,
  Typography,
  Box,
  LinearProgress,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import CircleIcon from "@mui/icons-material/Circle";
import skillList from "../assets/skillList";

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
          Skill Kreatif
        </Typography>
        <Grid
          container
          spacing={2}
          my={2}
          display="grid"
          gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr" }}
        >
          {skillList.map((item, index) => (
            <Grid item xs={12} key={index}>
              <Box>
                <Typography>
                  <CircleIcon sx={{ fontSize: 10, mr: 1 }} />
                  {item}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </motion.div>
  );
}

export default Skills;
