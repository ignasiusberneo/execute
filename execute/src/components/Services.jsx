import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import CircleIcon from "@mui/icons-material/Circle";
import serviceList from "../assets/serviceList";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Services() {
  const cardWidth = "350px";
  const cardHeightShort = "400px";
  const cardHeightLong = "500px";

  const firstThreeServices = serviceList.slice(0, 3);
  const lastTwoServices = serviceList.slice(3);

  const renderCard = (service, index, isShort = true) => {
    const height = isShort ? cardHeightShort : cardHeightLong;
    const frameColor = isShort ? "#FDD121" : "#FE3500";
    const cardBg = isShort ? "#FE3500" : "#FDD121";

    return (
      <Box
        key={index}
        sx={{
          flex: {
            xs: "1 1 calc(50% - 16px)",
            sm: "1 1 calc(50% - 16px)",
            md: "1 1 calc(33.333% - 24px)",
          },
          maxWidth: {
            xs: "calc(50% - 16px)",
            sm: "calc(50% - 16px)",
            md: "calc(33.333% - 24px)",
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
          style={{ width: cardWidth, height }}
        >
          <Box
            sx={{
              position: "relative",
              width: cardWidth,
              height,
              overflow: "visible",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Card
              sx={{
                backgroundColor: cardBg,
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
                  color: isShort ? "#FFFFFF" : "#000000",
                }}
              >
                <Typography
                  sx={{
                    mb: 2,
                    backgroundColor: "#FFFFFF",
                    color: "#404040",
                    padding: "4px 8px",
                    borderRadius: "4px",
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
                bgcolor: frameColor,
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
                bgcolor: frameColor,
                zIndex: 3,
              }}
            />
          </Box>
        </motion.div>
      </Box>
    );
  };

  return (
    <Container sx={{ py: 5 }}>
      <Box display="flex" flexDirection="column" alignItems="center" textAlign="center" gap={1}>
        <Typography fontWeight="bold" variant="h4" gutterBottom>
          Produk
        </Typography>

        {/* First 3 cards (short) */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 2,
            mb: 4,
          }}
        >
          {firstThreeServices.map((service, index) => renderCard(service, index, true))}
        </Box>

        {/* Last 2 cards (long) */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 2,
          }}
        >
          {lastTwoServices.map((service, index) => renderCard(service, index + 3, false))}
        </Box>
      </Box>
    </Container>
  );
}

export default Services;
