import Headers from "@components/Headers";
import { Box, makeStyles } from "@material-ui/core";
import { Helmet } from "react-helmet";
import Footer from "@components/Footer";
import Users from "@components/Users";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Sociolib | Users</title>
        <meta name="description" content=" " />
        <meta name="keywords" content="  " />
      </Helmet>
      <Headers />
      <Box mt={3}>
        <Users />
      </Box>
      <Footer />
    </>
  );
}
