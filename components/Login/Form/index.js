import { Box, Grid, makeStyles, useTheme } from "@material-ui/core";
import React, { useState } from "react";
import AlertMsg from "@components/AlertMsg";
import Heading from "@components/Heading";
import Heading2 from "@components/Heading2";
import Paragraph from "@components/Paragraph";
import RandomShapes from "@components/RandomShapes";
import CustContainer from "@components/UI/CustContainer";

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
  const [login, setLogin] = useState(true);
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (phone === "" || phone.length < 10) {
      setAlert(true);
      setTimeout(() => setAlert(false), 1500);
    } else {
      // send msg
      console.log({ newRegisteredApi: phone });
      setMsgAlert(true);
      setTimeout(() => setMsgAlert(false), 1500);
      setPhone("");
      setName("");
      setEmail("");
    }
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
        {login ? (
          <Grid
            item
            sm={6}
            xs={12}
            container
            justifyContent="center"
            alignItems="center"
            // textAlign="center"
          >
            <form
              className={classes.form}
              // onSubmit={onSubmitHandler}
              action=""
              method="post">
              <Box mb={3} data-aos="fade-right" data-aos-duration={600}>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="enter your username"
                  className={classes.input}
                  onChange={(e) => setUsername(e.target.value)}
                  value={name}
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
                <button className={classes.submitBtn} type="submit">
                  submit
                </button>
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
                    onClick={() => setLogin(false)}>
                    SignUp Now
                  </div>
                </div>
              </Box>
            </form>
          </Grid>
        ) : (
          <Grid
            item
            sm={6}
            xs={12}
            container
            justifyContent="center"
            alignItems="center"
            // textAlign="center"
          >
            <form
              className={classes.form}
              // onSubmit={onSubmitHandler}
              action=""
              method="post">
              <Box mb={3} data-aos="fade-right" data-aos-duration={600}>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="enter your username"
                  className={classes.input}
                  onChange={(e) => setUsername(e.target.value)}
                  value={name}
                  required
                />
              </Box>
              <Box mb={3} data-aos="fade-right" data-aos-duration={600}>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="enter your email"
                  className={classes.input}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
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
                <button className={classes.submitBtn} type="submit">
                  submit
                </button>
              </Box>
              <Box
                textAlign="center"
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration={600}>
                <div className="flex items-center p-4 justify-center">
                  <Paragraph>Already have an Account??</Paragraph>
                  <div className="text-blue-500 pl-2 cursor-pointer" onClick={() => setLogin(true)}>
                    SignIn
                  </div>
                </div>
              </Box>
            </form>
          </Grid>
        )}
      </Grid>
    </CustContainer>
  );
};

export default Form;
