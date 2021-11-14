import { Box, Grid, makeStyles } from "@material-ui/core";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import React, { useEffect, useRef, useState } from "react";
import NavigationDropdown from "@components/NavigationDropdown";
import { NavigationLink } from "@components/UI/Buttons";
import Link from "next/link";
import Head from "next/head";
import Container from "@components/Container";
import Cookie from "js-cookie";
import axios from "axios";
import { useRouter } from "next/router";
const credit = "/assets/images/credit.png";

const Logo = "/assets/images/logo.jpg";

const useStyles = makeStyles((theme) => ({
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: "100",
    padding: "12px 0px",
    width: "100vw",
    transition: "all 0.3s ease",
    [theme.breakpoints.down(960)]: {
      background: "#fff",
    },
  },
  navColored: {
    background: "#fff",
    boxShadow: "0px 4px 10px rgba(0,0,0,.1)",
  },
  navTransparent: {
    background: "rgba(255,255,255,.7)",
    filter: "blur(30%)",
    [theme.breakpoints.down(960)]: {
      background: "#fff",
    },
  },
  logo: {
    "& img": {
      width: "150px",
      display: "block",
      margin: "auto",
      [theme.breakpoints.down(960)]: {
        width: "120px",
      },
    },
    fontSize: "1.4rem",
    fontFamily: "Merienda",
    cursor: "pointer",
  },
  hamMenu: {
    display: "none",
    [theme.breakpoints.down(960)]: {
      display: "block",
    },
  },
  nav: {
    display: "flex",
    listStyle: "none",
    justifyContent: "space-between",
    alignItems: "center",
    "& li": {
      position: "relative",
      width: "auto",

      "& a": {
        display: "block",
        transition: "all 0.3s ease",
        fontSize: "15px",
        fontWeight: "400",
        textTransform: "uppercase",

        color: theme.palette.para.main,
        "&:hover": {
          color: theme.palette.para.main,
          "& div": {
            height: "auto",
            padding: "20px 0px",
          },
        },
        padding: "10px 25px",
        [theme.breakpoints.down(960)]: { padding: "10px 15px" },
      },
    },
    [theme.breakpoints.down(960)]: {
      position: "absolute",
      background: "#f7f7f7",
      width: "100vw",
      left: `0`,
      justifyContent: "start",
      alignItems: "start",
      flexDirection: "column",
      borderLeft: "15px solid #fff",
      borderRight: "15px solid #fff",
      top: "100%",
      height: "0px",

      "& li": {
        width: "100%",
        margin: "0px",
        "&:not(:last-child)": {
          borderBottom: "1px solid #eee",
        },
        "&:last-child": {},

        "& a": {
          padding: "10px 0px",
        },
      },
      overflow: "hidden",
      transitionDuration: "0.3s",
    },
    [theme.breakpoints.down(600)]: {
      left: "1px",
      width: "calc(100% - 30px)",
    },
  },
  show: {
    height: "100vh",
    overflow: "auto",
  },
  toggler: {
    display: "none",
    [theme.breakpoints.down(960)]: {
      display: "block",
      width: "40px",
      flexDirection: "column",
      height: "30px",
      justifyContent: " space-between",
      cursor: "pointer",
    },
  },

  simpleMenu: {
    position: "absolute",
    top: "5rem",
  },

  btn: {
    [theme.breakpoints.down(960)]: {
      display: "none",
    },
    cursor: "pointer",
    textDecoration: "none",
    textTransform: "uppercase",
    color: theme.palette.primary.main,
    padding: "15px 20px",
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: "500px",
    transition: "all .2s ease-in",

    "&:hover": {
      color: "#fff",
      background: theme.palette.primary.main,
    },
  },
  profile: {
    [theme.breakpoints.down(960)]: {
      display: "none",
    },
  },
  user: {
    display: "none",
    [theme.breakpoints.down(960)]: {
      display: "block",
    },
  },
  personImg: {
    width: "25px",
    marginLeft: "10px",
  },
}));

const Headers = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState("");
  const [token, setToken] = useState(Cookie.get("Token") || null);
  const headerRef = useRef(null);
  const classes = useStyles();
  const router = useRouter();

  const scrollHandler = () => {
    window.scrollY > 0 ? setScrolled(true) : setScrolled(false);
  };

  useEffect(() => {
    window.scrollY > 0 ? setScrolled(true) : setScrolled(false);
    window.addEventListener("scroll", scrollHandler);
  }, []);
  useEffect(() => {
    if (token) {
      axios
        .get(`https://sociolib-api.herokuapp.com/auth/profile/`, {
          headers: { Authorization: `Token ${token}` },
        })
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [token]);
  const handleLogout = () => {
    Cookie.remove("Token");
    setToken(null);
    router.push("/");
  };
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Merienda"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Box
        ref={headerRef}
        className={
          scrolled
            ? `${classes.header} ${classes.navColored}`
            : `${classes.header} ${classes.navTransparent}`
        }>
        <Container>
          <Grid container spacing={2} justifyContent="flex-start" alignItems="center">
            <Grid item xs={2}>
              <Box className={classes.logo}>
                <Link href="/" onClick={() => setOpen(false)}>
                  <div className="flex items-center">
                    <img style={{ width: "40px", borderRadius: "50%" }} src={Logo} alt="logo" />
                    <div>SOCIOLIB</div>
                  </div>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={6} container alignItems="center" justifyContent="flex-start">
              <ul className={`${classes.nav}  ${open ? classes.show : ""}`}>
                <li onClick={() => setOpen(false)}>
                  <NavigationLink name="home" to="/" />
                </li>
                <NavigationDropdown label="Library">
                  <li>
                    <Link href="/books" onClick={() => setOpen(false)}>
                      All Books
                    </Link>
                  </li>
                  <li>
                    <Link href="/" onClick={() => setOpen(false)}>
                      Top Rated
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/" onClick={() => setOpen(false)}>
                      Community
                    </Link>
                  </li> */}
                </NavigationDropdown>
                <li onClick={() => setOpen(false)}>
                  <NavigationLink name="Community" to="/users" />
                </li>
                <li className={`${classes.user}`}>
                  <Link href="/" onClick={() => setOpen(false)}>
                    View Profile
                  </Link>
                </li>
                <li className={`${classes.user}`}>
                  <Link href="/" onClick={() => setOpen(false)}>
                    LOG OUT
                  </Link>
                </li>
              </ul>
            </Grid>
            <Grid item xs={4} container alignItems="center" justifyContent="flex-end">
              {token ? (
                <ul className={`${classes.nav}  ${open ? classes.show : ""}`}>
                  <li className={classes.btn} onClick={handleLogout}>Log Out</li>
                  <li><img src={credit} alt="credit" className={classes.personImg} /></li>
                  <li className="text-gray-500 pl-1">{user.credit}</li>
                  <li>
                    <Link href={`/profile/${user.username}`}>
                      <div className={`rounded pl-2 cursor-pointer ${classes.profile}`}>
                        <img
                          className="object-cover relative rounded-full border
        border-gray-100 shadow-sm
   h-12 w-12"
                          src={`https://sociolib-api.herokuapp.com${user.profile_image}`}
                        />
                      </div>
                    </Link>
                  </li>
                </ul>
              ) : (
                <Link href="/login">
                  <div className="cursor-pointer">
                    <div className={classes.btn}>Sign In</div>
                  </div>
                </Link>
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>
      <style>
        {`
                .login-button {
                    background-color: white;
                    color: black;
                    border: 2px solid white;
                    padding: 4px 25px;
                    font-weight: 500;
                    border-radius: 4px;
                    cursor: pointer;
                  }
                  
                  .login-button:hover {
                    background-color: transparent;
                    color: white;
                    transition: all 0.3s ease;
                  }
                  
                  .login-form {
                    padding: 25px 10px;
                  }
                  
                  .login-form h2 {
                    color: #e54b4b;
                  }
                  
                  
                  .login-modal {
                    padding: 32px;
                  }
                  
                  .fixed {
                    animation-name: headerAnimate;
                    animation-duration: 0.3s;
                    position: fixed !important;
                    animation-name: headerAnimate;
                    animation-duration: 1s;
                    background: #fff;
                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15) !important;
                  }
                  
                  @keyframes headerAnimate {
                    from {
                      opacity: 0;
                    }
                    to {
                      opacity: 1;
                    }
                  }
                  
                `}
      </style>
    </>
  );
};

export default Headers;
