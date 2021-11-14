import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { Box, makeStyles, useTheme } from "@material-ui/core";
import Paragraph from "@components/Paragraph";
import Card from "@components/Booklist/Card";
import Heading2 from "@components/Heading2";
import axios from "axios";
import MyProfile from "./MyProfile";
import MyFriends from "./MyFriends";
import PendingRequests from "./PendingRequests";
import BooksReading from "./BooksReading";

const useStyles = makeStyles((theme) => ({
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
  subtitle: {
    textTransform: "capitalize",
    fontSize: "30px",
    // fontWeight: "500",
    fontFamily: "Squada One, cursive",
  },
  menu: {
    height: "420px",
  },
  btn: {
    textDecoration: "none",
    textTransform: "uppercase",
    color: "#fa252d",
    padding: "15px 20px",
    border: `1px solid #fa252d`,
    borderRadius: "500px",
    transition: "all .2s ease-in",

    "&:hover": {
      color: "#fff",
      background: "#f23a40",
    },
  },
}));

const Index = ({ self, user, friendData, token }) => {
  const classes = useStyles();
  const router = useRouter();
  const theme = useTheme();
  const MenuList = ["Profile", "Books", "Friends"];
  const [option, setOption] = useState("Profile");
  const [requestSent, setRequestSent] = useState(friendData.request_sent);

  const handleRequest = () => {
    axios
      .post(
        `https://sociolib-api.herokuapp.com/friends/${user.id}/`,
        {},
        { headers: { Authorization: `Token ${token}` } },
      )
      .then((res) => {
        console.log(res);
        setRequestSent(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const handleCancel = () => {
    axios
      .patch(
        `https://sociolib-api.herokuapp.com/friends/${user.id}/`,
        {},
        { headers: { Authorization: `Token ${token}` } },
      )
      .then((res) => {
        console.log(res);
        setRequestSent(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="mt-20 md:h-full md:grid md:grid-cols-6">
      <section className="md:col-span-1 border-r-3 border-r-gray">
        <div className="flex flex-wrap justify-center">
          <div className="p-5">
            <img
              src={`https://sociolib-api.herokuapp.com${user.profile_image}`}
              alt="..."
              className="shadow-lg rounded-full max-w-full h-40 align-middle border-none"
            />
          </div>
        </div>
        <div className="flex justify-center items-center pb-2">
          <Heading2 className={classes.subtitle}>
            {user.first_name} {user.last_name}
          </Heading2>
        </div>
        <div className="flex justify-center items-center pb-6">
          <Paragraph>@{router.query.username}</Paragraph>
        </div>
        <hr />
        <div className={`text-gray-700 mt-4 w-60 py-6 pl-10 ${classes.menu}`}>
          {MenuList.map((sub) => {
            return (
              <div
                className={`cursor-pointer flex justify-center rounded-xl p-4 text-md ${option === sub && "text-blue-700 bg-green-500 bg-opacity-10"
                  }`}
                onClick={() => setOption(sub)}
                role="presentation"
                key={sub}>
                {self ? "My" : `${user.first_name}'s`} {sub}
              </div>
            );
          })}
          {self && (
            <div
              className={`cursor-pointer flex justify-center rounded-xl p-4 text-md ${option === "Pending Requests" && "text-blue-700 bg-green-500 bg-opacity-10"
                }`}
              onClick={() => setOption("Pending Requests")}
              role="presentation"
              key="Pending Requests">
              Pending Requests
            </div>
          )}
          {!self && !friendData.is_friend && !requestSent && (
            <div
              className="cursor-pointer flex justify-center items-center py-10"
              onClick={handleRequest}>
              <div className={`${classes.btn} w-2/3 `}>Add Friend</div>
            </div>
          )}
          {requestSent && (
            <div
              className="cursor-pointer flex justify-center items-center py-10"
              onClick={handleCancel}>
              <div className={`${classes.btn} `}>Cancel Request</div>
            </div>
          )}
          {friendData.is_friend && (
            <div
              className="cursor-pointer flex justify-center items-center py-10"
              onClick={handleCancel}>
              <div className={`${classes.btn} `}>CHAT</div>
            </div>
          )}
        </div>
        <h1 className="font-serif mb-0 pb-0 mt-8 text-center text-2xl text-gray-500">
          Follow {self ? "Me" : `${user.first_name}`}
        </h1>
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
      </section>
      <main className="main bg-gray-100 md:col-span-5 p-20">
        {option === "Books" && (
          <Box mt={2}>
            <div className="container my-12 mx-auto px-4 md:px-12">
              <ul className="flex flex-wrap -mx-1 lg:-mx-4">
                {user.books.map((a) => (
                  <li key={a.id} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                    <Card {...a} />
                  </li>
                ))}
              </ul>
            </div>
          </Box>
        )}
        {option === "Friends" && <MyFriends token={token} username={user.username} />}
        {option === "Profile" && <MyProfile user={user} />}

        {self && option === "Pending Requests" && <PendingRequests token={token} />}
      </main>
    </div>
  );
};

export default Index;
