/* eslint-disable react/prop-types */
import "../styles/globals.css";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../utils/theme/theme";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
