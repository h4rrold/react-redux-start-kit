import {
  logoutUserRequest,
  logoutUserSuccess,
  logoutUserFailure,
} from "store/actionsCreators/auth/userLogout";
import { logoutUserSuccessReducer } from "./success";
import { logoutUserRequestReducer } from "./request";
import { logoutUserFailureReducer } from "./failed";

export default [
  [logoutUserRequest, logoutUserRequestReducer],
  [logoutUserSuccess, logoutUserSuccessReducer],
  [logoutUserFailure, logoutUserFailureReducer],
];
