import { createTheme } from '@mui/material/styles';
import '@fontsource/montserrat'; // Make sure it's installed

const theme = createTheme({
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
  // You can customize palette, components, spacing, etc. here too
});

export default theme;
