import React from "react";

import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import LinkMaterial from "@material-ui/core/Link";
import { LoginForm } from "components/forms";
import { Link } from "react-router-dom";

const useContainerStyles = makeStyles((theme) => ({
  paperLoginRoot: {
    width: "100%",
    maxWidth: 500,
    padding: `${theme.spacing(3)}px ${theme.spacing(4)}px ${theme.spacing(
      2
    )}px`,
    marginTop: theme.spacing(5),
    [theme.breakpoints.up("sm")]: {
      padding: `${theme.spacing(6)}px ${theme.spacing(8)}px ${theme.spacing(
        4
      )}px`,
    },
  },
  paperRecoverRoot: {
    width: "100%",
    maxWidth: 500,
    marginTop: theme.spacing(4),
    padding: theme.spacing(3),
    "& button": {
      marginLeft: 12,
    },
  },
}));

const Login = () => {
  const classes = useContainerStyles();
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography align="center" gutterBottom variant="h4" component="h1">
        Войдите в ваш аккаунт
      </Typography>
      <Paper className={classes.paperLoginRoot}>
        <LoginForm />
        <Box
          mt={3}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
        >
          <Typography>Еще нет аккаунта?</Typography>
          <Link
            to="/registration"
            style={{ marginLeft: 5 }}
            component={LinkMaterial}
          >
            Зарегистрироваться
          </Link>
        </Box>
      </Paper>
      <Paper className={classes.paperRecoverRoot}>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Typography align="center">Забыли свой пароль?</Typography>
          <Link
            to="/reset-password"
            style={{ marginLeft: 5 }}
            component={LinkMaterial}
          >
            Сбросить
          </Link>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
