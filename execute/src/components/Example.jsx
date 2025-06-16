import React from "react";
import { Container, Typography, Box, IconButton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

// Import slide images
import example1 from "../assets/example1.png";
import example2 from "../assets/example2.png";
import example3 from "../assets/example3.png";
import example4 from "../assets/example4.png";
import example5 from "../assets/example5.png";
import example6 from "../assets/example6.png";
import example7 from "../assets/example7.png";

// Import icons
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Example() {
  const slides = [
    example1,
    example2,
    example3,
    example4,
    example5,
    example6,
    example7,
  ];

  return (
    <Container sx={{ py: 5, textAlign: "center" }}>
      <Typography fontWeight="bold" variant="h4" gutterBottom mb={5}>
        Hasil Karya
      </Typography>

      <Box sx={{ position: "relative", height: "500px" }}>
        {/* Background box on bottom half with extra wide padding.
            Note: Only the bottom value is adjusted
            to extend the background downward so that it covers the IconButton. */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "-5%", // extend box to the left
            right: "-5%", // extend box to the right
            bottom: "-60px", // extend the background a bit lower so it covers the IconButton
            backgroundColor: "#FDD121",
            borderRadius: 4,
            px: 10,
            pb: 6,
            zIndex: 1,
          }}
        />

        {/* Carousel content */}
        <Box sx={{ position: "relative", zIndex: 2 }}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              600: { slidesPerView: 2 },
              900: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
          >
            {slides.map((img, index) => (
              <SwiperSlide
                key={index}
                style={{
                  overflow: "visible",
                  position: "relative",
                }}
              >
                <Box sx={{ position: "relative", overflow: "visible" }}>
                  <img
                    src={img}
                    style={{
                      height: "450px",
                      width: "100%",
                      objectFit: "contain",
                      borderRadius: "20px",
                    }}
                    alt={`Example ${index + 1}`}
                  />

                  {/* Always render the arrow icon for each slide */}
                  <ArrowForwardIosRoundedIcon
                    sx={{
                      position: "absolute",
                      // Place the icon so its center falls roughly 15px beyond the slide’s right edge.
                      left: "calc(100% + 3px)",
                      top: "50%",
                      transform: "translateY(-50%)",
                      zIndex: 10,
                      fontSize: "24px",
                      color: "black",
                    }}
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
          <Typography fontWeight={"bold"} mt={2} variant="body1">
            Mau liat hasil karya kami lainnya?
          </Typography>
          <a
            href="https://wa.me/6281227137167" // Replace with your phone number
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <IconButton
              color="inherit"
              sx={{
                mt: 1,
                backgroundColor: "#25D366",
                "&:hover": { backgroundColor: "#1DA851" },
                color: "#FFFFFF",
              }}
            >
              <WhatsAppIcon />
            </IconButton>
          </a>
        </Box>
      </Box>
    </Container>
  );
}

export default Example;
