import { Box, Container, Grid, makeStyles, useTheme } from "@material-ui/core";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CustContainer from "@components/UI/CustContainer";
import Heading from "@components/Heading";
import Heading2 from "@components/Heading2";
import Reviews from "@components/Reviews";
import RightArrow from "./RightArrow";
import LeftArrow from "./LeftArrow";

const Person1 = "/assets/images/Sari.jpeg";
const Person2 = "/assets/images/shubh.jpeg";
const Person3 = "/assets/images/vivek.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: "400px",
  },
  bg: { background: theme.palette.custom.light },

  image: { width: "100%", marginBottom: "20px" },
}));

const ReviewsSection = () => {
  const classes = useStyles();
  const theme = useTheme();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 3000,
    centerPadding: "20px",
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
  };

  return (
    <Box className={classes.bg}>
      <CustContainer>
        <Grid container justifyContent="center">
          <Box mb={5} data-aos="fade-right" data-aos-duration={600}>
            <Heading2
            // color={theme.palette.primary.main}
            >
              Know what our
              <Heading color={theme.palette.primary.main}>beloved users say</Heading>
            </Heading2>
          </Box>

          <Container data-aos="fade-up" data-aos-duration={600}>
            <Slider {...settings}>
              <Reviews text="Really a great site" img={Person1} name="Saritesh" />
              <Reviews
                text="Great place to get all books you want to read together with friends feature. Awesome!!"
                img={Person2}
                name="Shubhankar"
              />
              <Reviews
                text="Contributors are really hard-working. The site is awesome"
                img={Person3}
                name="Vivek"
              />
            </Slider>
          </Container>
        </Grid>
      </CustContainer>
    </Box>
  );
};

export default ReviewsSection;
