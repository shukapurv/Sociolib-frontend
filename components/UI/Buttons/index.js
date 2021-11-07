import { makeStyles } from "@material-ui/core";
import Link from "next/link";

const SHADOW = "#6c5d5d24";

const useStyles = makeStyles((theme) => ({
  baseStyle: (props) => ({
    transition: "all 0.3s ease",
    cursor: "pointer",
    outline: "none",
  }),
  big: {
    padding: "20px 60px",
    fontWeight: "700",
    boxShadow: `0px 2px 6px ${SHADOW}`,
    borderRadius: "4px",
    minWidth: "200px",
    textTransform: "uppercase",
  },
  small: {
    padding: "8px 16px",
    fontWeight: "700",
    borderRadius: "6px",
    minWidth: "100px",
  },
  round: {
    borderRadius: "50px",
  },
  textButton: (props) => ({
    backgroundColor: "transparent",
    border: "none",
    color: "#050f19",
    "&:hover": {
      color: props.variant && theme.palette[props.variant].main,
    },
  }),
  solidButton: (props) => ({
    backgroundColor: props.variant && theme.palette[props.variant].main,
    color: "white",
    border: `2px solid ${props.variant && theme.palette[props.variant].main}`,
    "&:hover": {
      backgroundColor: props.variant && theme.palette[props.variant].dark,
    },
  }),
  green: {
    backgroundColor: theme.palette.primary.light2,
    border: `2px solid ${theme.palette.primary.light2}`,
    "&:hover": {
      backgroundColor: theme.palette.primary.main2,
    },
  },
  linkActive: {
    color: `${theme.palette.primary.main}!important`,
  },
  link: {
    textTransform: "Capitalize",
    padding: "10px",
    fontSize: "16px",
    display: "block",
    textDecoration: "none",
    color: "#3d3d3d",
    fontWeight: 400,
    letterSpacing: "1px",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));

export const BaseButton = (props) => {
  const classes = useStyles();
  return (
    <button
      onClick={props.onClick}
      style={props.style}
      type={props.type}
      onFocus={props.onFocus}
      className={`${classes.baseStyle} ${props.className}`}>
      {props.children}
    </button>
  );
};

export const TextButton = (props) => {
  const classes = useStyles({
    variant: props.variant,
  });
  const classs = [classes.textButton];
  if (props.round) {
    classs.push(classes.round);
  }
  if (props.big) {
    classs.push(classes.big);
  } else {
    classs.push(classes.small);
  }
  return (
    <BaseButton onClick={props.onClick} className={classs.join(" ")}>
      {props.children}
    </BaseButton>
  );
};

export const SolidButton = (props) => {
  const classes = useStyles({
    variant: props.variant,
  });
  const classs = [classes.solidButton];
  if (props.round) {
    classs.push(classes.round);
  }
  if (props.green) {
    classs.push(classes.green);
  }
  if (props.big) {
    classs.push(classes.big);
  } else {
    classs.push(classes.small);
  }
  return (
    <BaseButton
      onClick={props.onClick}
      style={props.style}
      type={props.type}
      className={classs.join(" ")}>
      {props.children}
    </BaseButton>
  );
};

export const NavigationLink = (props) => {
  const classes = useStyles();
  return (
    <Link
      href={props.to}
      className={classes.link}
      activeClassName={classes.linkActive}
      // isActive={active ? true : false}
      exact>
      {props.name}
    </Link>
  );
};

export const FormButton = (props) => {
  return (
    <button type="submit" className="register-button">
      {props.name}
    </button>
  );
};

export const BigSolidButton = (props) => {
  const classes = useStyles({
    backgroundColor: props.backgroundColor,
    color: props.color,
    hvColor: props.hvColor,
    hvBgColor: props.hvBgColor,
  });
  return (
    <button onClick={props.onClick} className={classes.bigSolidButton} style={props.style}>
      {props.children}
    </button>
  );
};

export const CompeteNowButton = (props) => {
  return <span className="compete-now-button">{props.name}</span>;
};
