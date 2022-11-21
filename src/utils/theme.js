import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#EB7C68",
      main: "#1F1D2C",
      contrastText: "#DEDFE4",
    },
    secondary: {
      light: "#FFB1A3",
      main: "#262837",
      dark: "#553C3B",
      contrastText: "#666875",
    },
    error: {
      main: "#FF4343",
    },
    warning: {
      main: "#FF9315",
    },
    info: {
      main: "#1E76DD",
    },
    success: {
      main: "#09B4A9",
    },
  },
  typography: {
    fontFamily: `"Lato", sans-serif`,
    h1: {
      fontSize: "80px",
      fontWeight: 500,
    },
    h2: {
      fontSize: "56px",
      fontWeight: 500,
    },
    h3: {
      fontSize: "44px",
      fontWeight: 500,
    },
    h4: {
      fontSize: "30px",
      fontWeight: 700,
    },
    h5: {
      fontSize: "32px",
      fontWeight: 500,
    },
    h6: {
      fontSize: "26px",
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "20px",
      fontWeight: 700,
    },
    body1: {
      fontSize: "16px",
      fontWeight: 500,
    },
    body2: {
      fontSize: "14px",
      fontWeight: 500,
    },
  },
});
