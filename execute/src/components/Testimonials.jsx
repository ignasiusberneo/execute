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

function Testimonials() {
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        Testimonials
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
          900: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
      >
        {testimonialList.map((item, index) => (
          <SwiperSlide key={index}>
            <Card sx={{ boxShadow: 3, height: "100%" }}>
              <CardContent>
                <Typography>"{item.comment}"</Typography>
                <Typography variant="subtitle2" mt={2}>
                  - {item.name}
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
    // <motion.div
    //   initial={{ opacity: 0, y: 50 }}
    //   whileInView={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 0.7 }}
    //   viewport={{ once: true, amount: 0.3 }}
    // >
    //   <Container sx={{ py: 5 }}>
    //     <Typography variant="h4" gutterBottom>
    //       Testimonials
    //     </Typography>
    //     <Box sx={{display: "flex", flexDirection: "column", gap: 3}}>
    //       {testimonialList.map((item, index) => (
    //         <Card sx={{boxShadow: 3}} key={index}>
    //           <CardContent>
    //             <Typography>"{item.comment}"</Typography>
    //             <Typography variant="subtitle2" mt={2}>
    //               - {item.name}
    //             </Typography>
    //           </CardContent>
    //         </Card>
    //       ))}
    //     </Box>
    //   </Container>
    // </motion.div>
  );
}

export default Testimonials;
