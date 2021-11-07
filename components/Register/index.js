import { Box } from "@material-ui/core";
import React from "react";
import Footer from "../Footer";
import Header from "../Headers";
import Waitlist from "./Form";

const Register = () => {
  return (
    <>
      <Header />
      <Box mt={7}>
        <Waitlist />
      </Box>
      <Footer />
    </>
  );
};

export default Register;
