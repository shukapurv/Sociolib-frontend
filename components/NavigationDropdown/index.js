import { Box, makeStyles } from "@material-ui/core";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";

const useStyles = makeStyles((theme) => ({
  dropdown: {
    cursor: "pointer",
    position: "relative",
    width: "auto",
    "& span": {
      display: "flex",
      height: "100%",
      alignItems: "center",
    },
    "&:hover": {
      "& ul": {
        display: "block",
      },
    },

    [theme.breakpoints.down(960)]: {
      width: "100%",
      "& ul": { display: "none" },
      "&:hover": {
        "& ul": { display: "block", height: "100%" },
      },
    },
  },
  label: {
    // padding: "10px",
    display: "block",
    textDecoration: "none",
    color: "#3d3d3d",
    letterSpacing: "1px",
    // fontFamily: "squada one,cursive",
    fontSize: "15px",
    fontWeight: "400",
    padding: "10px 25px",
    textTransform: "uppercase",
    "&:hover > svg,& ul:hover ~ svg": {
      transform: "rotate(180deg)",
    },
    [theme.breakpoints.down(960)]: {
      padding: "10px 15px",
      borderBottom: "1px solid #eee",
    },
  },
  list: {
    listStyle: "none",
    background: "#fff",
    display: "none",
    position: "absolute",
    width: "190px",
    boxShadow: "4px 4px 20px rgba(0,0,0,.2)",
    top: "100%",
    left: "-50px",
    borderRadius: "5px",
    "&:hover ~ span > svg": {
      transform: "rotate(180deg)",
    },

    "& li": {
      margin: "0px",
      // padding: "10px",
      transition: "all .3s ease",
      "&:hover": {
        background: "#eee",
      },
      "&:not(:last-child)": {
        borderBottom: "1px solid #eee",
      },
    },
    "& a": {
      color: "#3d3d3d",
      textDecoration: "none",
      fontSize: "16px",
      display: "block",
      textTransform: "capitalize",
      "&:hover": {
        transform: "translateX(10px)",
      },
    },
    [theme.breakpoints.down(960)]: {
      position: "absolute",
      display: "inline-block",
      // height: "auto",
      zIndex: "500",
      width: "auto",
      boxShadow: "none",
      // background: "#fff",
      left: "22%",
      top: "15px",
      "& li": {
        borderBottom: "1px solid #eee",
        background: "#fff",
        boxShadow: "4px 4px 20px rgba(0,0,0,.2)",
        "& a": {
          "&:hover": {
            transform: "none",
          },
        },
      },
    },
  },
}));

const NavigationDropdown = (props) => {
  const classes = useStyles();
  return (
    <Box className={`${classes.dropdown} dropdown`}>
      <ul className={classes.list}>{props.children}</ul>
      <span className={classes.label}>
        {props.label}
        <ArrowDropDownRoundedIcon style={{ transition: "all .3s ease" }} />
      </span>
    </Box>
  );
};
export default NavigationDropdown;
