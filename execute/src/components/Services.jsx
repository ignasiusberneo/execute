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
import serviceList from "../assets/serviceList";

function Services() {

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
          Penawaran
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {serviceList.map((service, index) => (
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
                    <Typography sx={{mb: 2}} variant="h6">{service.title}</Typography>
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
