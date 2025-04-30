import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import CircleIcon from "@mui/icons-material/Circle";
import serviceList from "../assets/serviceList";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Services() {
  // Define fixed dimensions for the card.
  const cardWidth = "350px";
  const cardHeightShort = "400px"; // Height for the first 3 short cards
  const cardHeightLong = "500px"; // Height for the last 2 longer cards

  // Split the serviceList into two arrays: first 3 and last 2
  const firstThreeServices = serviceList.slice(0, 3);
  const lastTwoServices = serviceList.slice(3);

  return (
    <Container sx={{ py: 5 }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        gap={1}
      >
        <Typography fontWeight={"bold"} variant="h4" gutterBottom>
          Produk
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 3,
          }}
        >
          {/* First 3 cards (short) */}
          {firstThreeServices.map((service, index) => (
            <Box
              key={index}
              sx={{
                flex: "1 1 100%",
                maxWidth: "100%",
                "@media (min-width: 1200px)": {
                  flex: "1 1 calc(33.333% - 24px)", // 3 items per row, accounting for gap
                  maxWidth: "calc(33.333% - 24px)",
                },
                display: "flex",
                justifyContent: "center",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                style={{ width: cardWidth, height: cardHeightShort }}
              >
                {/* Wrapper for Card and its frame with fixed height */}
                <Box
                  sx={{
                    position: "relative",
                    width: cardWidth,
                    height: cardHeightShort,
                    overflow: "visible",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Card
                    sx={{
                      backgroundColor: "#808080", // Gray background for first 3 cards
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      boxShadow: "none",
                      padding: 0,
                      overflow: "visible",
                      width: cardWidth,
                      height: "100%",
                    }}
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        padding: "16px",
                        flexGrow: 1,
                        color: "#FFFFFF",
                      }}
                    >
                      {/* Service Title with White Background */}
                      <Typography
                        sx={{
                          mb: 2,
                          backgroundColor: "#FFFFFF", // White background for title
                          color: "#404040", // Font color matching the card background
                          padding: "4px 8px", // Adding some padding for better readability
                          borderRadius: "4px", // Optional: Round corners for the title
                          boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                        }}
                        variant="h6"
                      >
                        {service.title}
                      </Typography>
                      <Box mb={2}>
                        <Typography sx={{ fontWeight: "bold" }}>
                          {service.description}
                        </Typography>
                        <Typography sx={{ fontWeight: "bold" }}>
                          {service.description2}
                        </Typography>
                      </Box>
                      {service.detail.map((detail, idx) => (
                        <Typography key={idx}>
                          <CircleIcon sx={{ fontSize: 10, mr: 1 }} />
                          {detail}
                        </Typography>
                      ))}
                      <Box sx={{ flexGrow: 1 }} />
                      <a
                        href="https://wa.me/6281227137167" // Replace with your phone number
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        <IconButton
                          color="inherit"
                          sx={{
                            mt: 2,
                            backgroundColor: "#25D366",
                            "&:hover": { backgroundColor: "#1DA851" },
                            color: "#FFFFFF",
                          }}
                        >
                          <WhatsAppIcon />
                        </IconButton>
                      </a>
                    </CardContent>
                  </Card>

                  {/* Frame elements */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: "-10px",
                      width: "10px",
                      height: "70%",
                      bgcolor: "#C0C0C0",
                      zIndex: 3,
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: "-10px",
                      left: "-10px",
                      width: "calc(75% + 10px)",
                      height: "10px",
                      bgcolor: "#C0C0C0",
                      zIndex: 3,
                    }}
                  />
                </Box>
              </motion.div>
            </Box>
          ))}

          {/* Last 2 cards (long) with different background color */}
          {lastTwoServices.map((service, index) => (
            <Box
              key={index}
              sx={{
                flex: "1 1 100%",
                maxWidth: "100%",
                "@media (min-width: 1200px)": {
                  flex: "1 1 calc(33.333% - 24px)", // 3 items per row, accounting for gap
                  maxWidth: "calc(33.333% - 24px)",
                },
                display: "flex",
                justifyContent: "center",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                style={{ width: cardWidth, height: cardHeightLong }}
              >
                {/* Wrapper for Card and its frame with fixed height */}
                <Box
                  sx={{
                    position: "relative",
                    width: cardWidth,
                    height: cardHeightLong,
                    overflow: "visible",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Card
                    sx={{
                      backgroundColor: "#404040", // Blue background for last 2 cards
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      boxShadow: "none",
                      padding: 0,
                      overflow: "visible",
                      width: cardWidth,
                      height: "100%",
                    }}
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        padding: "16px",
                        flexGrow: 1,
                        color: "#FFFFFF",
                      }}
                    >
                      {/* Service Title with White Background */}
                      <Typography
                        sx={{
                          mb: 2,
                          backgroundColor: "#FFFFFF", // White background for title
                          color: "#404040", // Font color matching the card background
                          padding: "4px 8px",
                          borderRadius: "4px",
                          boxShadow: "0px 8px 16px rgba(255, 255, 255, 0.2)",
                        }}
                        variant="h6"
                      >
                        {service.title}
                      </Typography>

                      <Box mb={2}>
                        <Typography sx={{ fontWeight: "bold" }}>
                          {service.description}
                        </Typography>
                        <Typography sx={{ fontWeight: "bold" }}>
                          {service.description2}
                        </Typography>
                      </Box>
                      {service.detail.map((detail, idx) => (
                        <Typography key={idx}>
                          <CircleIcon sx={{ fontSize: 10, mr: 1 }} />
                          {detail}
                        </Typography>
                      ))}
                      <Box sx={{ flexGrow: 1 }} />
                      <a
                        href="https://wa.me/6281227137167" // Replace with your phone number
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        <IconButton
                          color="inherit"
                          sx={{
                            mt: 2,
                            backgroundColor: "#25D366",
                            "&:hover": { backgroundColor: "#1DA851" },
                            color: "#FFFFFF",
                          }}
                        >
                          <WhatsAppIcon />
                        </IconButton>
                      </a>
                    </CardContent>
                  </Card>

                  {/* Frame elements */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: "-10px",
                      width: "10px",
                      height: "70%",
                      bgcolor: "#C0C0C0",
                      zIndex: 3,
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: "-10px",
                      left: "-10px",
                      width: "calc(75% + 10px)",
                      height: "10px",
                      bgcolor: "#C0C0C0",
                      zIndex: 3,
                    }}
                  />
                </Box>
              </motion.div>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}

export default Services;
