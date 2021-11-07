import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  customContainer: {
    height: "auto",
    padding: "50px 0px",
    maxWidth: "1100px",
    margin: "0px auto",
    display: "flex",
    overflow: "hidden",
    alignItems: "center",
    [theme.breakpoints.down(1280)]: {
      width: "85%",
    },
    [theme.breakpoints.down(600)]: {
      width: "90%",
    },
  },
  randomBg: {
    position: "absolute",
    content: "''",
    height: "100%",
    width: "450px",
    top: "0",
    bottom: "0",
    left: "0",
    background: theme.palette.custom.main,
    zIndex: -100,

    [theme.breakpoints.down(960)]: {
      display: "none",
    },
  },
}));

const CustContainer = ({ children, className }) => {
  const classes = useStyles();

  return (
    <div className={`${classes.root} ${className || ""}`}>
      <div className={classes.customContainer}>{children}</div>
      {/* <span className={classes.randomBg}></span> */}
    </div>
  );
};

export default CustContainer;
