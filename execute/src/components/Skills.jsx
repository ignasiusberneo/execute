import { Container, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import CircleIcon from "@mui/icons-material/Circle";
import skillList from "../assets/skillList";

function Skills() {
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
      <Container
        disableGutters
        sx={{
          py: { xs: 3, sm: 5 },
          px: { xs: 2, sm: 4 },
          backgroundColor: "#D3D3D3",
          borderRadius: "30px",
          maxWidth: { xs: "100%", sm: "90%", md: "800px" },
          mx: "auto",
          boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Typography
          fontWeight="bold"
          textAlign="center"
          variant="h4"
          gutterBottom
        >
          Skill Kreatif
        </Typography>

        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          gap={4}
          mt={2}
          sx={{
            flexWrap: "nowrap",
            overflowX: "auto", // ensures layout doesn't break on small screens
          }}
        >
          {/* Left Column */}
          <Box flex="1" display="flex" flexDirection="column" gap={1}>
            {leftSkills.map((item, index) => (
              <Typography
                key={index}
                fontSize={{ xs: "0.9rem", sm: "1rem" }}
              >
                <CircleIcon sx={{ fontSize: 10, mr: 1 }} />
                {item}
              </Typography>
            ))}
          </Box>

          {/* Right Column */}
          <Box flex="1" display="flex" flexDirection="column" gap={1}>
            {rightSkills.map((item, index) => (
              <Typography
                key={index}
                fontSize={{ xs: "0.9rem", sm: "1rem" }}
              >
                <CircleIcon sx={{ fontSize: 10, mr: 1 }} />
                {item}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </motion.div>
  );
}

export default Skills;
