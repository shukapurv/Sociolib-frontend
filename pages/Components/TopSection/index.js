import { Box, Grid, makeStyles, useTheme } from "@material-ui/core";
import React from "react";
import Typewriter from "typewriter-effect";
import Heading from "@components/Heading";
import Heading2 from "@components/Heading2";
import HeroSection from "@components/HeroSection";
import Paragraph from "@components/Paragraph";

const HomeLanding = "/assets/images/landing-page.jpg";
const useStyles = makeStyles((theme) => ({
  heading: {
    fontWeight: 400,
    fontSize: "55px",

    [theme.breakpoints.down(600)]: {
      fontSize: "40px",
      "& h3": {
        fontSize: "40px",
      },
    },
  },
  para: {
    fontWeight: 300,
    maxWidth: "90%",
    width: "auto",
    fontSize: "17px",
    color: "#3d3d3d",
    letterSpacing: "0.25px",
    lineHeight: "1.4",
  },
  subtext: {
    color: "#000",
    fontSize: "30px",
    borderRadius: "10px",
    fontFamily: "Squada One, cursive",
  },
  play: {
    display: "inline-block",
    marginLeft: "-2px",
  },
  storeBtn: { display: "inline-block", width: "150px", marginRight: "10px" },
  herosection__img: {
    height: "450px",
    width: "450px",
    borderRadius: "50%",
    objectFit: "contain",
    transform: "translateY(0px) scale(1.3)",

    [theme.breakpoints.down(960)]: {
      width: "250px",
      height: "300px",
      marginTop: "10px",
    },
  },
  subtitle: {
    textTransform: "capitalize",
    fontSize: "30px",
    // fontWeight: "500",
    fontFamily: "Squada One, cursive",
  },
}));

const TopSection = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <HeroSection green>
      <Grid item sm={6} xs={12} data-aos="fade-right" data-aos-duration={800}>
        <Box mb={1}>
          <Heading2 className={classes.subtitle}>
            Improve mental wellness <br />
            by Online Social Library
          </Heading2>
        </Box>

        <Box>
          <div className="text-changer">
            <Heading color={theme.palette.primary.main} className={classes.heading}>
              <Typewriter
                options={{
                  strings: [
                    "A huge Library Database",
                    "From Fiction to Thriller",
                    "Reviews from various critics",
                    "Community Support",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </Heading>
          </div>
        </Box>
        <div>
          <Box mt={2} className={classes.para}>
            <Paragraph className={classes.para}>
              Improve your reading as well as social communication skills at the comfort of your
              home with just your laptop or mobile phone.
            </Paragraph>
          </Box>
        </div>
      </Grid>
      <Grid
        item
        container
        sm={6}
        xs={6}
        alignItems="center"
        justifyContent="center"
        data-aos="fade-left"
        data-aos-duration={800}
      >
        <img src={HomeLanding} alt="Landing page image" className={classes.herosection__img} />
      </Grid>
    </HeroSection>
  );
};

export default TopSection;
