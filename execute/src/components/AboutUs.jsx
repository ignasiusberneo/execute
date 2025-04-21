import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

function AboutUs() {
    return (
        <motion.div
        initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true, amount: 0.3 }}
  >
        <Container sx={{ py: 5 }}>
    <Typography variant="h4" gutterBottom>About Us</Typography>
    <Typography variant="body1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultrices ultrices, nunc nisl aliquet nisl, nec sagittis sem nisl euismod nisl.
    </Typography>
  </Container>
        </motion.div>
    )
}

export default AboutUs;