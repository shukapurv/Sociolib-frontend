import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "auto",
    borderRadius: "500px",
    overflow: "hidden",
    textAlign: "center",
    position: "fixed",
    top: "100px",
    margin: "0px auto",
    transition: "all .3s ease",

    "& > * + *": {
      marginTop: theme.spacing(2),
    },
    zIndex: 1000,
    up: {
      transform: "translateY(-100px)",
      opacity: "0",
      visibility: "hidden",
    },
    down: {
      transform: "translateY(0)",
      opacity: "1",
      visibility: "visible",
    },
  },
}));

const AlertMsg = ({ type, msg, alert }) => {
  const classes = useStyles();

  return (
    <div className={alert ? `${classes.down} ${classes.root}` : `${classes.up} ${classes.root}`}>
      <Alert severity={type}>
        <AlertTitle>{msg}</AlertTitle>
      </Alert>
    </div>
  );
};

export default AlertMsg;
