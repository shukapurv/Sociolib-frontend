import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  rand1: {
    position: "absolute",
    top: "0px",
    left: "-80px",
    height: "150px",
    width: "150px",
    borderRadius: "10px",
    background: theme.palette.custom.main,
    transform: "rotate(27deg)",
    zIndex: "-1",
    [theme.breakpoints.down(600)]: {
      height: "100px",
      width: "100px",
      left: "-50px",
    },
  },
  rand1green: {
    position: "absolute",
    top: "0px",
    left: "-80px",
    height: "150px",
    width: "150px",
    borderRadius: "10px",
    background: theme.palette.custom.main2,
    transform: "rotate(27deg)",
    zIndex: "-1",
    [theme.breakpoints.down(600)]: {
      height: "100px",
      width: "100px",
      left: "-50px",
    },
  },
  rand2: {
    position: "absolute",
    top: "100%",
    left: "60%",
    height: "150px",
    width: "150px",
    borderRadius: "10px",
    background: theme.palette.custom.light,
    transform: "rotate(-20deg)",
    zIndex: "-1",
    [theme.breakpoints.down(600)]: {
      height: "100px",
      width: "100px",
      top: "70%",
    },
  },
  rand2green: {
    position: "absolute",
    top: "100%",
    left: "60%",
    height: "150px",
    width: "150px",
    borderRadius: "10px",
    background: theme.palette.custom.light2,
    transform: "rotate(-20deg)",
    zIndex: "-1",
    [theme.breakpoints.down(600)]: {
      height: "100px",
      width: "100px",
      top: "70%",
    },
  },
  none: {
    display: "none",
  },
}));

const RandomShapes = ({ one, green }) => {
  const classes = useStyles();
  return (
    <>
      <div className={green ? classes.rand1green : classes.rand1} />
      <div className={one ? `${classes.none}` : green ? `${classes.rand2green}` : classes.rand2} />
    </>
  );
};

export default RandomShapes;
