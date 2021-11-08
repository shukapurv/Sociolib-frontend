import Headers from "@components/Headers";
import { Box, makeStyles } from "@material-ui/core";
import { Helmet } from "react-helmet";
import Footer from "@components/Footer";
import Books from "@components/Booklist/index";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Sociolib | Books</title>
        <meta name="description" content=" " />
        <meta name="keywords" content="  " />
      </Helmet>
      <Headers />
      <Box mt={3}>
        <Books />
      </Box>
      <Footer />
    </>
  );
}
