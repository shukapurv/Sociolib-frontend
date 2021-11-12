import { Box, makeStyles, Grid } from "@material-ui/core";
import React from "react";
import WrapperFullVh from "../UI/WrapperFullVh";

const useStyles = makeStyles((theme) => ({
  herosection: {
    minHeight: "600px",
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    background: `linear-gradient(45deg, ${theme.palette.custom.main},${theme.palette.custom.light})`,
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down(960)]: {
      height: "auto",
      marginTop: "60px",
    },
  },

  herosectiongreen: {
    minHeight: "600px",
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    background: `linear-gradient(45deg, ${theme.palette.custom.main2},${theme.palette.custom.light2})`,
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down(960)]: {
      height: "auto",
    },
  },

  herosectionContents: {
    marginTop: "-50px",

    [theme.breakpoints.down(960)]: {
      // display: "flex",
      // flexDirection: "column-reverse",
    },
    [theme.breakpoints.down(600)]: {
      flexDirection: "column-reverse",
      // marginTop: "-70px",
      // margin
    },
  },
}));

const HeroSection = ({ children, green }) => {
  const classes = useStyles();
  return (
    <Box className={green ? `${classes.herosectiongreen}` : `${classes.herosection}`}>
      <WrapperFullVh>
        <Grid
          container
          spacing={0}
          className={classes.herosectionContents}
          alignItems="center"
          justifyContent="center"
        >
          {children}
        </Grid>
      </WrapperFullVh>
    </Box>
  );
};

export default HeroSection;
