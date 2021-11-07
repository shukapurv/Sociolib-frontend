import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    heading: {
      fontWeight: 400,
      lineHeight: "1.1",
      textTransform: "capitalize",
      [theme.breakpoints.down(600)]: {
        fontSize: "50px",
      },
    },
  };
});

const Heading = (props) => {
  const classes = useStyles();
  return (
    <Box color={props.color || "#000"}>
      <Typography className={`${classes.heading} ${props.className || ""}`} variant="h3">
        {props.children}
      </Typography>
    </Box>
  );
};

export default Heading;
