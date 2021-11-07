import { Box, Grid, makeStyles, useTheme } from "@material-ui/core";
import React from "react";
import Heading2 from "../Heading2";
import Paragraph from "../Paragraph";

const Comma1 = "/assets/images/InvertedComma.png";

const useStyles = makeStyles((theme) => ({
  reviews: {
    position: "relative",
    minHeight: "250px",
    minWidth: "250px",
    margin: "0px 5px",
    marginBottom: "10px",
    maxWidth: "600px",
    padding: "20px 25px",
    borderRadius: "50px 50px 0 50px",
    background: theme.palette.custom.main,
  },
  comma1: {
    position: "absolute",
    top: "3px",
    left: "5px",
    width: "100px",
    transform: "rotate(185deg)",
    opacity: ".2",
  },
  comma2: {
    position: "absolute",
    bottom: "3px",
    right: "5px",
    width: "100px",
    opacity: ".2",
  },
  personImg: {
    width: "80px",
    marginRight: "10px",
  },
  badge: {
    background: theme.palette.primary.main,
    height: "auto",
    width: "auto",
    padding: "5px 10px",
    borderRadius: "5px",
    fontColor: "white",
  },
}));

const Reviews = ({ text, img, name }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid container item xs={12} className={classes.reviews} alignItems="center">
        <img src={Comma1} alt="comma1" className={classes.comma1} />
        <img src={Comma1} alt="comma2" className={classes.comma2} />
        <Paragraph
        // color={theme.palette.primary.main}
        >
          {text}
        </Paragraph>
      </Grid>
      <Grid item container xs={12} justifyContent="center" alignItems="center">
        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
          <Box>
            <img src={img} alt="person" className={classes.personImg} />
          </Box>
          <Box>
            <div className={classes.badge}>
              <Heading2 color="white">~ {name}</Heading2>
            </div>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Reviews;
