import { Box, makeStyles } from "@material-ui/core";
import { Helmet } from "react-helmet";
import Footer from "@components/Footer";
import Headers from "@components/Headers";
import ContactUs from "@components/ContactUs";
import Perks from "./Components/Perks";
import ReviewsSection from "./Components/ReviewsSection";
import TopSection from "./Components/TopSection";
import WhySociolib from "./Components/WhySociolib";

export default function Home() {
  return (
    <Box>
      <Helmet>
        <title>Sociolib | The Social Library</title>
        <meta name="description" content=" " />
        <meta name="keywords" content="  " />
      </Helmet>
      <Headers />
      <TopSection />
      <Perks />
      <WhySociolib />
      <ReviewsSection />
      <ContactUs />
      <Footer />
    </Box>
  );
}
