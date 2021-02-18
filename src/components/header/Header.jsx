import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useHeaderStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    display: "flex",
    justifyContent: "center",
  },
}));

function Header({ children }) {
  const classes = useHeaderStyles();
  return <header className={classes.root}>{children}</header>;
}
export default Header;
