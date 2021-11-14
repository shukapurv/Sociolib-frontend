import React, { useState, useEffect } from "react";
import Headers from "@components/Headers";
import { Box, makeStyles } from "@material-ui/core";
import { Helmet } from "react-helmet";
import Footer from "@components/Footer";
import { useRouter } from "next/router";
import ProfileComp from "@components/profile/index";
import Cookie from "js-cookie";
import axios from "axios";

const Profile = () => {
  const { query } = useRouter();
  const [token, setToken] = useState(Cookie.get("Token") || null);
  const router = useRouter();
  const [activeUser, setActiveUser] = useState("");
  const [user, setUser] = useState("");
  const [self, setSelf] = useState(false);
  const [friendData, setFriendData] = useState(false);

  useEffect(() => {
    if (token) {
      axios
        .post(
          `https://sociolib-api.herokuapp.com/auth/profile/`,
          { username: router.query.username },
          { headers: { Authorization: `Token ${token}` } },
        )
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          console.log(router.query.username);
          console.error(err);
        });

      axios
        .get(`https://sociolib-api.herokuapp.com/auth/profile/`, {
          headers: { Authorization: `Token ${token}` },
        })
        .then((res) => {
          setActiveUser(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
      if (user && activeUser && user.username === activeUser.username) setSelf(true);
      else {
        axios
          .get(
            `https://sociolib-api.herokuapp.com/friends/${user.id}/`,
            { headers: { Authorization: `Token ${token}` } },
          )
          .then((res) => {
            console.log(res)
            setFriendData(res.data)
          })
          .catch((err) => {
            console.error(err);
          });
      }
    }
  }, [token]);
  useEffect(() => {
    if (user && activeUser && user.username === activeUser.username) setSelf(true);
  }, [user, activeUser]);
  return (
    <>
      <Helmet>
        <title>{`Profile | ${query.username}`}</title>
        <meta name="description" content=" " />
        <meta name="keywords" content="  " />
      </Helmet>
      <div className="h-screen relative">
        <Headers />
        <ProfileComp self={self} user={user} friendData={friendData} token={token} />
      </div>
      <Footer />
    </>
  );
};

export default Profile;
