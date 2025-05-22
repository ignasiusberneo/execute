import { Container, Typography, Card, CardContent, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import testimonialList from "../assets/testimonialList";
import backgroundKataMereka from "../assets/backgroundKataMereka.png";
import kataMereka from "../assets/kataMereka.svg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        display: "inline-block", // Let height follow content
        textAlign: "center",
        py: 13, // ← Adds vertical padding around logo (adjust as needed)
      }}
    >
      {/* Background image behind everything */}
      <Box
        component="img"
        src={backgroundKataMereka}
        alt="Background"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "fill", // or "contain" to avoid distortion
          zIndex: -1,
        }}
      />

      {/* Foreground logo */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.5 }}
      >
        <img
          src={kataMereka}
          alt="Logo"
          style={{ width: 350, maxWidth: "100%" }}
        />
      </motion.div>
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
                  backgroundColor: "#EE3202",
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
    </Box>
    // <Container sx={{ py: 5, textAlign: "center" }}>
    //   <Typography fontWeight={"bold"} variant="h4" gutterBottom>
    //     Testimoni Pelanggan
    //   </Typography>
    //   <Swiper
    //     modules={[Autoplay]}
    //     spaceBetween={30}
    //     slidesPerView={1}
    //     loop={true}
    //     autoplay={{
    //       delay: 3000,
    //       disableOnInteraction: false,
    //       reverseDirection: true,
    //     }}
    //     breakpoints={{
    //       600: { slidesPerView: 1 },
    //       900: { slidesPerView: 2 },
    //       1200: { slidesPerView: 3 },
    //     }}
    //     style={{ paddingBottom: "10px" }}
    //   >
    //     {testimonialList.map((item, index) => (
    //       <SwiperSlide key={index}>
    //         <Box
    //           sx={{
    //             height: "100%",
    //             display: "flex",
    //             alignItems: "stretch",
    //           }}
    //         >
    //           <Card
    //             sx={{
    //               boxShadow: 3,
    //               width: "100%",
    //               height: "100%", // force full height within slide
    //               minHeight: 220, // consistent base height (adjust as needed)
    //               display: "flex",
    //               flexDirection: "column",
    //               justifyContent: "space-between",
    //               backgroundColor: "#8D0000",
    //             }}
    //           >
    //             <CardContent sx={{ flexGrow: 1 }}>
    //               <Typography color="white" sx={{ mb: 2 }}>
    //                 "{item.comment}"
    //               </Typography>
    //               <Typography color="white" variant="subtitle2">
    //                 - {item.name}
    //               </Typography>
    //             </CardContent>
    //           </Card>
    //         </Box>
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>
    // </Container>
  );
}

export default Testimonials;
