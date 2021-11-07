import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  btn: {
    padding: "12px",
    width: "100%",
    color: "#fff",
    background: theme.palette.primary.main,
    outline: "none",
    borderRadius: "6px",
    border: 0,
    textTransform: "uppercase",
    letterSpacing: "0.2rem",
    fontWeight: "700",
    cursor: "pointer",
  },
}));
const FormButton = (props) => {
  const classes = useStyle();
  return (
    <button className={classes.btn} type="submit">
      {props.children}
    </button>
  );
};

export default FormButton;
