import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import testimonialList from "../assets/testimonialList";
import example1 from "../assets/example1.png";
import example2 from "../assets/example2.png";
import example3 from "../assets/example3.png";
import example4 from "../assets/example4.png";
import example5 from "../assets/example5.png";
import example6 from "../assets/example6.png";
import example7 from "../assets/example7.png";

function Example() {
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        Contoh Video
      </Typography>
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
          600: { slidesPerView: 1 },
          900: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
      >
        <SwiperSlide>
          <img src={example1} style={{ height: "450px", width: "100%", objectFit: "contain" }} alt="Logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={example2} style={{ height: "450px", width: "100%", objectFit: "contain" }} alt="Logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={example3} style={{ height: "450px", width: "100%", objectFit: "contain" }} alt="Logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={example4} style={{ height: "450px", width: "100%", objectFit: "contain" }} alt="Logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={example5} style={{ height: "450px", width: "100%", objectFit: "contain" }} alt="Logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={example6} style={{ height: "450px", width: "100%", objectFit: "contain" }} alt="Logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={example7}  style={{ height: "450px", width: "100%", objectFit: "contain" }} alt="Logo" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}

export default Example;
