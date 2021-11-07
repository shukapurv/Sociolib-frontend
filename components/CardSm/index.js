import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  cardSm: {
    maxWidth: "300px",
    maxHeight: "350px",
    padding: "20px",
    height: "320px",
    margin: "10px",
    // maxHeight: "auto",
    borderRadius: "25px",
    overflow: "hidden",
    transition: "all .3s ease",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "0 10px 20px rgba(0,0,0,.15)",
      [theme.breakpoints.down(960)]: {
        // boxShadow: "none",
      },
    },
    [theme.breakpoints.down(960)]: {
      height: "320px",
      boxShadow: "0 10px 20px rgba(0,0,0,.15)",
    },
  },
  shadow: { boxShadow: "0 10px 20px rgba(0,0,0,.15)" },
}));

const CardSm = ({ children, shadow }) => {
  const classes = useStyles();

  return (
    <div className={shadow ? `${classes.cardSm} ${classes.shadow}` : `${classes.cardSm}`}>
      {children}
    </div>
  );
};

export default CardSm;
