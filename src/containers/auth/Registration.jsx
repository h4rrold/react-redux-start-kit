import React from "react";

import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import { RegistrationForm } from "components/forms";
import LinkMaterial from "@material-ui/core/Link";
import { Link } from "react-router-dom";

const useContainerStyles = makeStyles((theme) => ({
  paperRegisterRoot: {
    width: "100%",
    maxWidth: 500,
    padding: `${theme.spacing(3)}px ${theme.spacing(4)}px`,
    marginTop: theme.spacing(5),
    [theme.breakpoints.up("sm")]: {
      padding: `${theme.spacing(6)}px ${theme.spacing(8)}px`,
    },
  },
}));

const Registration = () => {
  const classes = useContainerStyles();
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography align="center" gutterBottom variant="h4" component="h1">
        Регистрация в системе
      </Typography>
      <Paper className={classes.paperRegisterRoot}>
        <RegistrationForm />
        <Box mt={3} display="flex" alignItems="center" justifyContent="center">
          <Typography>Уже есть аккаунт?</Typography>
          <Link to="/login" style={{ marginLeft: 5 }} component={LinkMaterial}>
            Авторизоваться
          </Link>
        </Box>
      </Paper>
    </Box>
  );
};

export default Registration;
