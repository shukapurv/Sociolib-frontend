import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    heading: {
      fontSize: "40px",
      fontFamily: "Squada One, cursive",
      [theme.breakpoints.down(600)]: {
        fontSize: "20px",
      },
    },
  };
});

const Heading2 = (props) => {
  const classes = useStyles();
  return (
    <Box color={props.color || "#000"}>
      <Typography className={`${classes.heading} ${props.className || ""}`} variant="h4">
        {props.children}
      </Typography>
    </Box>
  );
};

export default Heading2;
