import React from "react";
import Headers from "@components/Headers";
import { Box, makeStyles } from "@material-ui/core";
import { Helmet } from "react-helmet";
import Footer from "@components/Footer";
import { useRouter } from "next/router";
import ProfileComp from "@components/profile/index";

const Profile = () => {
  const { query } = useRouter();
  return (
    <>
      <Helmet>
        <title>{`Profile | ${query.username}`}</title>
        <meta name="description" content=" " />
        <meta name="keywords" content="  " />
      </Helmet>
      <Headers />
      <ProfileComp />
      <Footer />
    </>
  );
};

export default Profile;
