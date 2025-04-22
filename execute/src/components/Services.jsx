import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import CircleIcon from "@mui/icons-material/Circle";

function Services() {
  const services = [
    {
      title: "BASIC PACKAGE",
      description: "1 Konten Video Reels/Tiktok",
      detail: [
        "Fresh and Creative Concept",
        "Durasi konten max 1 menit",
        "Max 1 talent inframe dalam 1 konten",
        "Professional Final editing",
        "Max Revisi Minor 1x",
      ],
    },
    {
      title: "STANDARD PACKAGE",
      description: "11 Konten Video Reels/Tiktok + 1 Konten Video (BONUS)",
      detail: [
        "Fresh and Creative Concept",
        "Durasi konten max 1 menit",
        "Max 2 talent inframe dalam 1 konten",
        "Professional Final editing",
        "Max Revisi Minor 3x",
        "Free 1 konten Design Feeds Instagram",
      ],
    },
    {
      title: "PREMIUM PACKAGE",
      description: "22 Konten Video Reels/Tiktok + 4 Konten Video (BONUS)",
      detail: [
        "Fresh and Creative Concept",
        "Durasi konten max 1 menit",
        "Max 3 talent inframe dalam 1 konten",
        "Professional Final editing",
        "Max Revisi Minor 3x",
        "Free 3 konten Design Feeds Instagram",
      ],
    },
    {
      title: "AESTHETIC PACKAGE",
      description: "DESIGN-VIDEO-DESIGN 10 VIDEO + 20 DESIGN",
      detail: [
        "Posting Terima Beres!!!",
        "Fresh and Creative Concept",
        "Durasi konten max 1 menit",
        "Max 2 talent inframe dalam 1 konten video",
        "Professional Final editing",
        "Max Revisi minor 1x",
        "Free 2 Design Feeds Instagram",
        "Free 1 Konten Video IG Reels/TikTok",
      ],
    },
    {
      title: "CONSISTEN PACKAGE",
      description: "VIDEO-DESIGN-VIDEO 20 VIDEO + 10 DESIGN",
      detail: [
        "Posting Terima Beres!!!",
        "Fresh and Creative Concept",
        "Durasi konten max 1:30 menit",
        "Max 3 talent inframe dalam 1 konten video",
        "Professional Final editing",
        "Max Revisi minor 3x",
        "Free 2 Design Feeds Instagram",
        "Free 3 Konten Video IG Reels/TikTok",
        "Free Visit 1x Area Jabodetabek",
        "Free Footage Visit (menjadi Hak Milik)",
      ],
    },
  ];

  return (
    <Container sx={{ py: 5 }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        gap={1}
      >
        <Typography variant="h4" gutterBottom>
          Our Services
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {services.map((service, index) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 4 }}
              key={index}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                style={{width: "100%"}}
              >
                <Card
                  sx={{
                    height: "100%",
                    width: '100%',
                    boxShadow: 3,
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      flexGrow: 1,
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <Typography variant="h6">{service.title}</Typography>
                    <Typography sx={{ fontWeight: "bold" }}>
                      {service.description}
                    </Typography>
                    {service.detail.map((detail, idx) => (
                      <Typography>
                        <CircleIcon sx={{ fontSize: 10, mr: 1 }} />
                        {detail}
                      </Typography>
                    ))}
                    <Box sx={{ flexGrow: 1 }} />
                    <Button variant="contained" sx={{ mt: 2 }}>
                      Chat
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Services;
