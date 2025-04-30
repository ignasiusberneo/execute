import { Container, Typography, Box, Grid } from "@mui/material";
import { motion } from "framer-motion";
import CircleIcon from "@mui/icons-material/Circle";
import skillList from "../assets/skillList";

function Skills() {
  // Split the skills into two columns
  const half = Math.ceil(skillList.length / 2);
  const leftSkills = skillList.slice(0, half);
  const rightSkills = skillList.slice(half);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <Container maxWidth={false} // disable default container sizing
  sx={{
    py: 5,
    px: 2,
    backgroundColor: "#D3D3D3",
    borderRadius: "30px",
    maxWidth: "800px", // or "md" if you prefer theme breakpoints
    mx: "auto", // center it horizontally
    boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)"
  }}>
        <Typography fontWeight={"bold"} textAlign="center" variant="h4" gutterBottom>
          Skill Kreatif
        </Typography>
        <Grid
          container
          justifyContent="center"
          spacing={0}
          my={2}
          columnGap={20} // Adds space between left and right columns
        >
          {/* Left Column */}
          <Grid item xs={12} sm={5} sx={{}}>
            <Box display="flex" flexDirection="column" gap={1}>
              {leftSkills.map((item, index) => (
                <Typography key={index}>
                  <CircleIcon sx={{ fontSize: 10, mr: 1 }} />
                  {item}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} sm={5}>
            <Box display="flex" flexDirection="column" gap={1}>
              {rightSkills.map((item, index) => (
                <Typography key={index}>
                  <CircleIcon sx={{ fontSize: 10, mr: 1 }} />
                  {item}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
}

export default Skills;
