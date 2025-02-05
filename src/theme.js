import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',  // Keeps the overall dark mode UI
    primary: {
      main: '#d4af37', // Gold accents
    },
    secondary: {
      main: '#b0b0b0', // Lighter gray for contrast
    },
    background: {
      default: '#0d0d0d', // Dark background for the whole site
      paper: '#1b1b1b', // Cards & sections
    },
    text: {
      primary: '#ffffff', // Ensures text is white
      secondary: '#b0b0b0', // Subtext contrast
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: '3rem',
      color: '#ffffff',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      color: '#ffffff',
    },
    body1: {
      fontWeight: 400,
      fontSize: '1rem',
      color: '#b0b0b0',
    },
  },
});

export default theme;