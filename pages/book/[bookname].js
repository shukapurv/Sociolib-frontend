import React from "react";
import Headers from "@components/Headers";
import { Box, makeStyles } from "@material-ui/core";
import { Helmet } from "react-helmet";
import Footer from "@components/Footer";
import { useRouter } from "next/router";
import BookView from "@components/Bookview/index";

const Profile = () => {
  const router = useRouter();
  return (
    <>
      <Helmet>
        <title>{`Book | ${router.query.bookname}`}</title>
        <meta name="description" content=" " />
        <meta name="keywords" content="  " />
      </Helmet>
      <Headers />
      <BookView />
      <Footer />
    </>
  );
};

export default Profile;
