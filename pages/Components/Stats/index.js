import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import BoldSmHeading from "@components/BoldSmHeading";
import CardSm from "@components/CardSm";
import Heading2 from "@components/Heading2";

const Stats1 = "/assets/images/stat1.jpg";
const Stats2 = "/assets/images/stat2.jpg";

const useStyles = makeStyles((theme) => ({
  image1: { width: "60%" },
  image2: { width: "95%" },
  fontSm: { fontSize: "25px" },
}));

const Stats = () => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center" alignItems="center">
      <CardSm>
        <Grid container justifyContent="center">
          <Grid item container justifyContent="center">
            <img
              data-aos="zoom-in"
              data-aos-duration={600}
              src={Stats1}
              alt="stats1"
              className={classes.image1}
            />
          </Grid>
          <Box mt={-1} data-aos="fade-up" data-aos-duration={600}>
            <Grid item container justifyContent="center">
              <Heading2>Extremely</Heading2>
              <BoldSmHeading className={classes.fontSm}>
                Reduced direct social contact in COVID-era
              </BoldSmHeading>
            </Grid>
          </Box>
        </Grid>
      </CardSm>
      <CardSm>
        <Grid container justifyContent="center">
          <Grid item container justifyContent="center">
            <img
              data-aos="zoom-in"
              data-aos-duration={600}
              src={Stats2}
              alt="stats2"
              className={classes.image2}
            />
          </Grid>
          <Box mt={-1} data-aos="fade-up" data-aos-duration={600}>
            <Grid item container justifyContent="center">
              <Heading2>75%</Heading2>
              <BoldSmHeading className={classes.fontSm}>
                More opportunities to develop academically
              </BoldSmHeading>
            </Grid>
          </Box>
        </Grid>
      </CardSm>
    </Grid>
  );
};

export default Stats;
