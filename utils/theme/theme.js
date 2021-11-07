import { createTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      light: "rgb(236 239 255)",
      main: "#16ab39",
      main2: "#519D2D",
      light2: "#64C339",
    },
    secondary: {
      main: "#3EE5FF",
      light: "#e66b6b26",
    },
    custom: {
      main: "#eff2fe",
      light: "#ddeefe",
      main2: "#edfff7",
      light2: "rgba(81, 157, 45, 0.15)",
    },
    para: {
      main: "#3d3d3d",
      light: "#ddd",
      dark: "#555",
    },
    grey: {
      800: "#3d3d3d",
    },
  },
  typography: {
    h3: {
      fontFamily: "Squada One, cursive",
      fontSize: "4.5rem",
    },
  },
});

export default theme;
