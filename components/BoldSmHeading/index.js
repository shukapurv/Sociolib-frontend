import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => {
  return {
    heading: {
      fontWeight: 400,
      fontSize: "27px",
      textTransform: "capitalize",
      color: theme.palette.para.main,

      fontFamily: "Squada One, cursive",
      [theme.breakpoints.down(600)]: {
        fontSize: "23px",
      },
    },
  };
});

const BoldSmHeading = ({ color, className, children }) => {
  const classes = useStyles();
  return (
    <Box color={color || "#000"}>
      <Typography className={`${classes.heading} ${className || ""}`} variant="h5">
        {children}
      </Typography>
    </Box>
  );
};

export default BoldSmHeading;
