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
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

import { Form, Formik, Field } from "formik";
import { TextField } from "formik-material-ui";

import { registerUserRequestThunk } from "store/thunks";
import {
  getRegisterIsLoadingSelector,
  getRegisterErrorSelector,
} from "store/selectors/auth/register";

import isEmpty from "lodash/isEmpty";

const useFormStyles = makeStyles((theme) => ({
  gridContainer: {
    "& > .MuiGrid-item ": {
      marginBottom: theme.spacing(2),
    },
  },
}));

const RegistrationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(8, "Too short").required("Required"),
  passwordCheck: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

const RegistrationForm = ({
  registerUserRequestThunk,
  isLoading,
  errorMessageBE,
}) => {
  const classes = useFormStyles();

  return (
    <Formik
      validationSchema={RegistrationSchema}
      onSubmit={({ email, password }, actions) => {
        registerUserRequestThunk({ email, password });
        debugger;
        actions.setSubmitting(false);
      }}
      initialValues={{ name: "", email: "", password: "", passwordCheck: "" }}
    >
      {({ errors: formikErrors }) => (
        <Form>
          <Grid container direction="column" className={classes.gridContainer}>
            <Grid item xs={12}>
              <Field
                fullWidth
                variant="outlined"
                component={TextField}
                disabled={isLoading}
                label="Ваше имя"
                name="name"
                type="text"
                InputProps={{
                  margin: "dense",
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                fullWidth
                label="Email"
                component={TextField}
                variant="outlined"
                type="text"
                name="email"
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
            <Grid item xs={12}>
              <Field
                fullWidth
                variant="outlined"
                component={TextField}
                label="Подтверждение пароля"
                name="passwordCheck"
                type="password"
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  margin: "dense",
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
              disabled={!isEmpty(formikErrors) || isLoading}
              color="primary"
              variant="contained"
            >
              Подтвердить
            </Button>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

const mapStateToProps = (state) => ({
  isLoading: getRegisterIsLoadingSelector(state),
  errorMessageBE: getRegisterErrorSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  registerUserRequestThunk: ({ email, password }) =>
    dispatch(registerUserRequestThunk({ email, password })),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
