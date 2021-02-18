import React from "react";
import { withCenterLayout } from "hoc";
import { RegistrationContainer } from "containers";
import { useDocumentTitle } from "hooks";

const RegistrationPage = () => {
  useDocumentTitle("Регистрация");
  return <RegistrationContainer />;
};

export default withCenterLayout(RegistrationPage);
