import { Box, Grid, makeStyles, useTheme } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import AlertMsg from "@components/AlertMsg";
import Heading from "@components/Heading";
import Heading2 from "@components/Heading2";
import Paragraph from "@components/Paragraph";
import RandomShapes from "@components/RandomShapes";
import CustContainer from "@components/UI/CustContainer";
import Cookie from "js-cookie";
import { useRouter } from "next/router";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  form: { width: "100%" },
  bg: { background: theme.palette.custom.main },

  input: {
    position: "relative",
    display: "block",
    border: "2px solid transparent",
    padding: "20px 30px 20px 60px",
    borderRadius: "500px",
    width: "100%",
    outline: "none",
    transition: "all .2s ease",
    fontSize: "18px",
    background: "#eee",

    "&:focus": {
      border: `2px solid ${theme.palette.primary.main}`,
    },
    "&:placeholder-shown": {
      textTransform: "capitalize",
    },
  },

  preInput: {
    position: "absolute",
    zIndex: 1,
    padding: "20px 10px 20px 30px",
    height: "100%",
    background: "transparent",
    borderRadius: "500px 0 0 500px",
    fontSize: "20px",
    color: "#888",
  },

  submitBtn: {
    display: "inline-block",
    padding: "15px 30px",
    border: "none",
    textTransform: "uppercase",
    margin: "0px auto",
    outline: "none",
    cursor: "pointer",
    borderRadius: "500px",
    color: "#fff",
    background: theme.palette.primary.main,
  },
}));

const Form = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  // useEffect(() => {
  //   if (Cookie.get("Token")) {
  //     router.push("/");
  //   }
  // }, []);

  const data = {
    username: username,
    password: password,
  };

  const loginfunc = () => {
    axios
      .post(`http://127.0.0.1:8000/auth/login/`, data)
      .then((response) => {
        router.push("/");
        Cookie.set("Token", response.data.token);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <CustContainer>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item sm={12} xs={12} container justifyContent="center" alignItems="center">
          <Box mb={3} data-aos="fade-right" data-aos-duration={600}>
            <Heading2
            // color={theme.palette.primary.main}
            >
              Books &<Heading color={theme.palette.primary.main}>Knowledge for all</Heading>
            </Heading2>

            <RandomShapes />
          </Box>
        </Grid>

        <Grid item sm={12} xs={12} container justifyContent="center" alignItems="center">
          <Box textAlign="center" mb={4} data-aos="fade-left" data-aos-duration={600}>
            <Paragraph>
              A personal space for you to Socialise while reading with total <br /> independence,
              Right from your PC.
            </Paragraph>
          </Box>
        </Grid>

        <Grid
          item
          sm={6}
          xs={12}
          container
          justifyContent="center"
          alignItems="center"
        // textAlign="center"
        >
          <div
            className={classes.form}
          // onSubmit={onSubmitHandler}
          >
            <Box mb={3} data-aos="fade-right" data-aos-duration={600}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="enter your username"
                className={classes.input}
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                required
              />
            </Box>
            <Box mb={3} data-aos="fade-right" data-aos-duration={600}>
              <input
                type="password"
                name="pswd"
                id="pswd"
                placeholder="enter your password"
                className={classes.input}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </Box>
            <Box
              textAlign="center"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration={600}>
              <div className={classes.submitBtn} onClick={() => {
                loginfunc();
              }}>
                submit
              </div>
            </Box>
            <Box
              textAlign="center"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration={600}>
              <div className="flex items-center p-4 justify-center">
                <Paragraph>Don't have an Account??</Paragraph>
                <div
                  className="text-blue-500 pl-2 cursor-pointer"
                  onClick={() => router.push("/register")}>
                  SignUp Now
                </div>
              </div>
            </Box>
          </div>
        </Grid>
      </Grid>
    </CustContainer>
  );
};

export default Form;
