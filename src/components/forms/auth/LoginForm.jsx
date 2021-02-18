import React from "react";
import { connect } from "react-redux";
import * as Yup from "yup";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import makeStyles from "@material-ui/core/styles/makeStyles";
import LockIcon from "@material-ui/icons/Lock";
import EmailIcon from "@material-ui/icons/Email";

import { Form, Formik, Field } from "formik";
import { TextField } from "formik-material-ui";

import { loginUserRequestThunk } from "store/thunks";
import {
  getUserTokenSelector,
  getAuthIsLoadingSelector,
  getUserErrorSelector,
} from "store/selectors/auth/login";
import isEmpty from "lodash/isEmpty";

const useFormStyles = makeStyles((theme) => ({
  gridContainer: {
    "& > .MuiGrid-item ": {
      marginBottom: theme.spacing(2),
    },
  },
}));

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(8, "Too short").required("Required"),
});

const LoginForm = ({ loginUserRequestThunk, isLoading, errorMessageBE }) => {
  const classes = useFormStyles();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={({ email, password }, actions) => {
        loginUserRequestThunk({ email, password });
        actions.setSubmitting(false);
      }}
    >
      {({ errors: formikErrors }) => (
        <Form>
          <Grid container direction="column" className={classes.gridContainer}>
            <Grid item xs={12}>
              <Field
                fullWidth
                label="Email"
                component={TextField}
                variant="outlined"
                type="text"
                name="email"
                disabled={isLoading}
                InputProps={{
                  margin: "dense",
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                fullWidth
                variant="outlined"
                disabled={isLoading}
                component={TextField}
                label="Пароль"
                name="password"
                type="password"
                InputProps={{
                  margin: "dense",
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            {errorMessageBE && (
              <Box mb={2} textAlign="center">
                <Typography color="error">{errorMessageBE}</Typography>
              </Box>
            )}
            <Button
              type="submit"
              color="primary"
              variant="contained"
              disabled={!isEmpty(formikErrors) || isLoading}
            >
              Войти
            </Button>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

const mapStateProps = (state) => ({
  isLoading: getAuthIsLoadingSelector(state),
  errorMessageBE: getUserErrorSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  loginUserRequestThunk: ({ email, password }) =>
    dispatch(loginUserRequestThunk({ email, password })),
});

export default connect(mapStateProps, mapDispatchToProps)(LoginForm);
