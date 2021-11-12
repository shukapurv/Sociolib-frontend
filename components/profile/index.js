import React from "react";
import { useRouter } from "next/router";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { Box, makeStyles } from "@material-ui/core";
import BooksOwned from "./BooksOwned";
import BooksReading from "./BooksReading";

const useStyles = makeStyles((theme) => ({
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

const Index = () => {
  const classes = useStyles();
  const router = useRouter();
  return (
    <div className="border-t border-gray-600 inline-block mt-20 parent md:h-screen md:grid md:grid-cols-6">
      <section className="sidebar md:col-span-1 border-r-3 border-r-gray">
        <div className="flex flex-wrap justify-center">
          <div className="p-5">
            <img
              src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png"
              alt="..."
              className="shadow-lg rounded-full max-w-full h-auto align-middle border-none"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          <h1 className="font-serif text-2xl bg-clip-text ">@{router.query.username}</h1>
        </div>
        <div className="flex flex-wrap justify-center">
          <p className="text-base text-gray-400 font-normal">Graphic Designer</p>
        </div>
        <h1 className="font-serif mb-0 pb-0 mt-8 text-center text-2xl text-gray-500">About me</h1>
        <div className="flex flex-wrap justify-center p-6 bg-white rounded shadow border">
          <p className="text-base leading-relaxed text-gray-500 font-normal text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <h1 className="font-serif mb-0 pb-0 mt-8 text-center text-2xl text-gray-500">Follow me</h1>
        <hr />
        <div className="flex flex-wrap justify-center">
          <Box mb={1}>
            <Box mt={1} display="flex">
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
        </div>
        <hr />

        <h1 className="font-serif mb-0 pb-0 mt-8 text-center text-2xl text-gray-500">Interests</h1>

        <div className="flex flex-wrap justify-center p-6 bg-white rounded shadow border ">
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200 uppercase last:mr-0 mr-1">
            Romance
          </span>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200 uppercase last:mr-0 mr-1">
            Adventure
          </span>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200 uppercase last:mr-0 mr-1">
            Spiritual
          </span>
        </div>
      </section>
      <main className="main bg-gray-100 md:col-span-5">
        <div className="flex flex-wrap justify-center p-6">
          <h1 className="font-serif mb-0 pb-0  text-center text-2xl text-gray-500">
            Books Reading
          </h1>
        </div>
        <BooksReading />
      </main>
    </div>
  );
};

export default Index;
