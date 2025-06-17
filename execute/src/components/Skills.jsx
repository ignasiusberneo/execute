import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import CircleIcon from "@mui/icons-material/Circle";
import skillList from "../assets/skillList";
import element2 from "../assets/element2.png";

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
      <Box
        display="flex"
        justifyContent="center" // <-- centers everything horizontally
        alignItems="center"
        gap={8}
        px={2}
        py={5}
      >
        <Box
          component="img"
          src={element2}
          alt="Logo"
          sx={{
            width: 400,
            display: { xs: "none", md: "block" },
          }}
        />

        <Box
          sx={{
            py: { xs: 3, sm: 5 },
            px: { xs: 2, sm: 4 },
            backgroundColor: "#FBA518",
            borderRadius: "30px",
            maxWidth: "800px",
            boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
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
            flexDirection={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            gap={4}
            mt={2}
            width="100%"
            sx={{
              flexWrap: "wrap", // wrap on small screens
            }}
          >
            {/* Left Column */}
            <Box flex="1" display="flex" flexDirection="column" gap={1}>
              {leftSkills.map((item, index) => (
                <Typography
                  key={index}
                  fontSize={{ xs: "0.9rem", sm: "1rem" }}
                  sx={{ whiteSpace: "nowrap" }}
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
                  sx={{ whiteSpace: "nowrap" }}
                >
                  <CircleIcon sx={{ fontSize: 10, mr: 1 }} />
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
}

export default Skills;
