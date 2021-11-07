import React from "react";
import { Box, Container, Grid, makeStyles, useTheme } from "@material-ui/core";
import CustContainer from "@components/UI/CustContainer";
import CardSm from "@components/CardSm";
import BoldSmHeading from "@components/BoldSmHeading";
import Heading2 from "@components/Heading2";
import Heading from "@components/Heading";
import Slider from "react-slick";
import RightArrow from "../ReviewsSection/RightArrow";
import LeftArrow from "../ReviewsSection/LeftArrow";

const Prod1 = "/assets/images/reading.jpg";
const Prod2 = "/assets/images/learning.jpg";
const Prod3 = "/assets/images/an.jpg";
const Prod4 = "/assets/images/community.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: "400px",
  },
  fontSm: { fontSize: "22px" },
  image: { height: "200px", marginBottom: "15px" },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down(600)]: {
      flexDirection: "column",
    },
  },
  card: {
    justifyContent: "center",
    cursor: "pointer",
  },
}));

const Perks = () => {
  const classes = useStyles();
  const theme = useTheme();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    cssEase: "linear",
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: "20px",
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <CustContainer>
      <Grid container justifyContent="center">
        <Box mb={4} data-aos="fade-right" data-aos-duration={600}>
          <Heading2
          // color={theme.palette.primary.main}
          >
            Your go to
            <Heading color={theme.palette.primary.main}>All-in-one Social Library</Heading>
          </Heading2>
        </Box>

        <Container className={classes.cardContainer} data-aos="fade-up" data-aos-duration={600}>
          <Slider {...settings}>
            <div className="">
              <CardSm>
                <Grid container className={classes.card}>
                  <Grid item>
                    <img src={Prod1} alt="image1" className={classes.image} />
                  </Grid>
                  <Grid item>
                    <BoldSmHeading className={classes.fontSm}>Reading</BoldSmHeading>
                  </Grid>
                </Grid>
              </CardSm>
            </div>
            <div className="">
              <CardSm>
                <Grid container>
                  <Grid item>
                    <img src={Prod2} alt="image2" className={classes.image} />
                  </Grid>
                  <Grid item>
                    <BoldSmHeading className={classes.fontSm}>Learning</BoldSmHeading>
                  </Grid>
                </Grid>
              </CardSm>
            </div>
            <div className="">
              <CardSm>
                <Grid container className={classes.card}>
                  <Grid item>
                    <img src={Prod3} alt="image3" className={classes.image} />
                  </Grid>
                  <Grid item>
                    <BoldSmHeading className={classes.fontSm}>
                      Academics as well as Novels
                    </BoldSmHeading>
                  </Grid>
                </Grid>
              </CardSm>
            </div>
            <div className="">
              <CardSm>
                <Grid container className={classes.card}>
                  <Grid item>
                    <img src={Prod4} alt="image4" className={classes.image} />
                  </Grid>
                  <Grid item>
                    <BoldSmHeading className={classes.fontSm}>
                      Community for Socialising
                    </BoldSmHeading>
                  </Grid>
                </Grid>
              </CardSm>
            </div>
          </Slider>
        </Container>
      </Grid>
    </CustContainer>
  );
};

export default Perks;
