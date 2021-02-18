import LoginPage from "pages/auth/Login";
import RegistrationPage from "pages/auth/Registration";

const routes = [
  {
    name: "login",
    path: "/login",
    component: LoginPage,
    isProtected: false,
    exact: true,
  },
  {
    name: "registration",
    path: "/registration",
    component: RegistrationPage,
    isProtected: false,
    exact: true,
  },
];
export default routes;
