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
  const cardHeightShort = "400px";
  const cardHeightLong = "500px";

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
        <Typography fontWeight="bold" variant="h4" gutterBottom mb={5}>
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
          {[...firstThreeServices, ...lastTwoServices].map((service, index) => {
            const isLong = index >= 3;
            const cardHeight = isLong ? cardHeightLong : cardHeightShort;
            const borderColor = isLong ? "#FE3500" : "#FDD121";
            const bgColor = isLong ? "#FDD121" : "#FE3500";
            const textColor = isLong ? "#000000" : "#FFFFFF";

            return (
              <Box
                key={index}
                sx={{
                  width: "100%", // Full width on all screens
                  "@media (min-width: 900px)": {
                    width: "calc(33.333% - 24px)", // 3 columns on md+
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
                  style={{ width: "100%" }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      maxWidth: "100%",
                      height: cardHeight,
                      px: { xs: 0, sm: 0 },
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Card
                        sx={{
                          backgroundColor: bgColor,
                          display: "flex",
                          flexDirection: "column",
                          boxShadow: "none",
                          height: "100%",
                          width: "100%",
                        }}
                      >
                        <CardContent
                          sx={{
                            flexGrow: 1,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                            px: 2,
                            py: 3,
                            color: textColor,
                          }}
                        >
                          <Typography
                            variant="h6"
                            sx={{
                              mb: 2,
                              backgroundColor: "#fff",
                              color: "#404040",
                              px: 1,
                              py: 0.5,
                              borderRadius: 1,
                              boxShadow: "0px 8px 16px rgba(0,0,0,0.2)",
                            }}
                          >
                            {service.title}
                          </Typography>
                          <Box mb={2}>
                            <Typography fontWeight="bold">
                              {service.description}
                            </Typography>
                            <Typography fontWeight="bold">
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
                            href="https://wa.me/6281227137167"
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

                      {/* Decorative frame */}
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: "-10px",
                          width: "10px",
                          height: "70%",
                          bgcolor: borderColor,
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
                          bgcolor: borderColor,
                          zIndex: 3,
                        }}
                      />
                    </Box>
                  </Box>
                </motion.div>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
}

export default Services;
