import { Box, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  para: {
    fontWeight: 300,
    fontSize: "18px",
    // color: "#3d3d3d",
    lineHeight: "30px",
    letterSpacing: "0.25px",
    wordBreak: "break-word",
  },
});

const Paragraph = (props) => {
  const classes = useStyle();

  return (
    <Box color={props.color || "#3d3d3d"}>
      <p className={`${classes.para} ${props.className || ""}`}>{props.children}</p>
    </Box>
  );
};

export default Paragraph;
