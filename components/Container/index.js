import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {
    maxWidth: "1100px",
    margin: "auto",
    overflow: "visible",
    [theme.breakpoints.down(1260)]: {
      width: "90%",
    },
    [theme.breakpoints.down(600)]: {
      width: "auto",
      padding: "0px 15px",
    },
  },
}));

const Container = (props) => {
  const classes = useStyle();
  return <div className={classes.container}>{props.children}</div>;
};

export default Container;
