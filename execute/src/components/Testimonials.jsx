import { Container, Typography, Card, CardContent, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import testimonialList from "../assets/testimonialList";

function Testimonials() {
  return (
    <Container sx={{ py: 10, textAlign: "center" }}>
      <Typography fontWeight={"bold"} variant="h4" gutterBottom mb={5}>
        Testimoni Pelanggan
      </Typography>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        breakpoints={{
          600: { slidesPerView: 1 },
          900: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
        style={{ paddingBottom: "10px" }}
      >
        {testimonialList.map((item, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "stretch",
              }}
            >
              <Card
                sx={{
                  boxShadow: 3,
                  width: "100%",
                  height: "100%", // force full height within slide
                  minHeight: 220, // consistent base height (adjust as needed)
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  backgroundColor: "#FE3500",
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography color="white" sx={{ mb: 2 }}>
                    "{item.comment}"
                  </Typography>
                  <Typography color="white" variant="subtitle2">
                    - {item.name}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default Testimonials;
