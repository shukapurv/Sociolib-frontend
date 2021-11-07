import { Box, Grid, makeStyles, useTheme } from "@material-ui/core";
import React from "react";
import Heading from "@components/Heading";
import Heading2 from "@components/Heading2";
import Paragraph from "@components/Paragraph";
import CustContainer from "@components/UI/CustContainer";
import Stats from "../Stats";

const Curve = "/assets/images/curve.png";

const useStyles = makeStyles((theme) => ({
  bg: {
    background: "#fff",
  },
  curveImg: {
    height: "180px",
    [theme.breakpoints.down(600)]: {
      display: "none",
      height: "60px",
      width: "400px",
      objectFit: "contain",
      transform: "rotate(90deg)",
    },
  },
  ml: { marginLeft: "5px" },
}));

const WhySociolib = () => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <CustContainer className={classes.bg}>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item container alignItems="center" justifyContent="center">
          <Box data-aos="fade-up" data-aos-duration={600}>
            <Heading2>
              Why
              <Heading color={theme.palette.primary.main}>Sociolib?</Heading>
            </Heading2>
          </Box>

          <Box mt={2} data-aos="fade-up" data-aos-duration={600} data-aos-delay={300}>
            <Grid container justifyContent="center" alignItems="center">
              <Grid item container justifyContent="center" alignItems="center" sm={1} xs={12}>
                <Paragraph>
                  <strong>We Believe</strong>
                </Paragraph>
              </Grid>
              <Grid item container justifyContent="center" alignItems="center" sm={1} xs={12}>
                <img src={Curve} alt="curve" className={classes.curveImg} />
              </Grid>
              <Grid item sm={9} xs={11}>
                <Paragraph style={classes.ml}>
                  a. in helping you to take charge of your reading life.
                  <br />
                  b. you should have free and fun access all kinds of books available to you at
                  clicks distance.
                  <br /> c. We can build a world with less social worry for readers, and help them
                  connect with people they relate to.
                </Paragraph>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid container item justifyContent="center" alignItems="center">
          <Grid container justifyContent="center">
            <Box mt={4} data-aos="fade-up" data-aos-duration={600} data-aos-delay={50}>
              <Heading2>Impact for our community</Heading2>
            </Box>
          </Grid>

          <Stats />
        </Grid>
      </Grid>
    </CustContainer>
  );
};

export default WhySociolib;
