import { Box, Grid, makeStyles, useTheme } from "@material-ui/core";
import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import BoldSmHeading from "../BoldSmHeading";
import Paragraph from "../Paragraph";
import CustContainer from "../UI/CustContainer";

const Logo = "/assets/images/logo.jpg";

const useStyles = makeStyles((theme) => ({
  bg: {
    // background: `linear-gradient(45deg,${theme.palette.secondary.main},${theme.palette.primary.main})
    background: theme.palette.custom.main,
  },
  bg2: {
    // background: `linear-gradient(45deg,${theme.palette.secondary.main},${theme.palette.primary.main})
    background: theme.palette.custom.light2,
  },
  logo: {
    // filter: "brightness(10000%)",
    width: "150px",
    borderRadius: "50%",
  },
  social: {
    color: theme.palette.para.dark,
    transition: "all .3s ease",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  para: {
    fontSize: "16px",
  },
  copyrightText: {
    fontSize: "15px",
  },
  link: {
    color: theme.palette.common.black,
    textDecoration: "none",
    fontWeight: 300,
    fontSize: "18px",
    color: "#3d3d3d",
    lineHeight: "30px",
    letterSpacing: "0.25px",
    wordBreak: "break-word",
  },
}));

const Footer = ({ green }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Box className={green ? classes.bg2 : classes.bg}>
      <CustContainer>
        <Grid container alignItems="flex-start" justifyContent="space-between" spacing={2}>
          <Grid item sm={12}>
            <Box>
              <img src={Logo} alt="logo" className={classes.logo} />
            </Box>
          </Grid>
          <Grid item sm={5} xs={12}>
            <Box mb={3}>
              <BoldSmHeading>About us</BoldSmHeading>
            </Box>
            <Paragraph color={theme.palette.para.main} className={classes.para}>
              lorem ipsum dolor sit amet, consectetur adipiscing elit lorem. Lorem ipsum dolor sit
              amet, consect.
            </Paragraph>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Box mb={3}>
              <BoldSmHeading>contact</BoldSmHeading>
            </Box>
            <Paragraph color={theme.palette.para.mian} className={classes.para}>
              Yash Raj (20075098)
              <br /> Apoorve Shukla (20075014)
            </Paragraph>
          </Grid>
          <Grid item sm={3} xs={12}>
            <Box mb={1}>
              <BoldSmHeading>Follow us</BoldSmHeading>
              <Box mt={3} display="flex">
                <Box mr={1}>
                  <a
                    href="https://www.facebook.com"
                    rel="noreferrer"
                    target="_blank"
                    className={classes.social}>
                    <FacebookIcon />
                  </a>
                </Box>
                <Box mr={1}>
                  <a
                    href="https://twitter.com"
                    rel="noreferrer"
                    target="_blank"
                    className={classes.social}>
                    <TwitterIcon />
                  </a>
                </Box>
                <Box mr={1}>
                  <a
                    href="https://www.linkedin.com"
                    rel="noreferrer"
                    target="_blank"
                    className={classes.social}>
                    <LinkedInIcon />
                  </a>
                </Box>
                <Box mr={1}>
                  <a
                    href="https://www.youtube.com"
                    rel="noreferrer"
                    target="_blank"
                    className={classes.social}>
                    <YouTubeIcon />
                  </a>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid container justifyContent="center">
            <Box mt={4}>
              <Paragraph className={classes.copyrightText}>
                ©2021 Sociolib Foundation. All Rights Reserved
              </Paragraph>
            </Box>
          </Grid>
        </Grid>
      </CustContainer>
    </Box>
  );
};

export default Footer;
