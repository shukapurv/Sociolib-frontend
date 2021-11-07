import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
  // grid: { height: "100%" },
  wrapper: {
    height: "100vh",
    minHeight: "600px",
    padding: "120px 0px 0px 0px",
    maxWidth: "1100px",
    margin: "0px auto",
    display: "flex",
    alignItems: "center",

    [theme.breakpoints.down(1100)]: {
      height: "auto",
      width: "90%",
      paddingTop: "40px",
      paddingBottom: "40px",
    },
    [theme.breakpoints.down(600)]: {
      width: "90%",
      paddingBottom: "50px",
    },
  },
}));

const WrapperFullVh = ({ children }) => {
  const classes = useStyle();
  return (
    <Box
      justify="center"
      // flexWrap="wrap"
      className={classes.wrapper}>
      <Grid
        container
        spacing={0}
        justifyContent="center"
        className={classes.grid}
        alignItems="center">
        {children}
      </Grid>
    </Box>
  );
};

export default WrapperFullVh;
