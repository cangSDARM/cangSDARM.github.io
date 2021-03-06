import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles((theme) => ({
  labelRoot: {
    width: "100%",
    position: "relative",
    paddingLeft: 4,
  },
}));

const Label = ({ children }) => {
  const classes = useStyles();

  return (
    <Typography
      role="menuitem"
      component="div"
      className={clsx(classes.labelRoot)}
    >
      {children}
    </Typography>
  );
};

Label.propTypes = {};

export default Label;
