import buildApiUrl from "./helpers/buildApiUrl";

const API_ROOT_URL = "backend-api.com";
const API_BASE = "/api";
const API_PROTOCOL = "https";

const apiUrl = buildApiUrl(API_PROTOCOL, API_ROOT_URL, API_BASE);

export default [
  {
    name: "GetUser",
    route: `${apiUrl}/user`,
  },
  {
    name: "PostUserLogin",
    route: `${apiUrl}/login`,
  },
  {
    name: "PostUserRegister",
    route: `${apiUrl}/register`,
  },
];
