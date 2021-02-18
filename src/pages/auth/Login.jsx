import React from "react";
import { withCenterLayout } from "hoc";
import { LoginContainer } from "containers";
import { useDocumentTitle } from "hooks";

const LoginPage = () => {
  useDocumentTitle("Авторизация");

  return <LoginContainer />;
};

export default withCenterLayout(LoginPage);
