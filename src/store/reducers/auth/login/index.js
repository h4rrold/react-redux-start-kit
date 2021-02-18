import {
  loginUserRequest,
  loginUserSuccess,
  loginUserFailure,
} from "store/actionsCreators/auth/userLogin";
import { authUserSuccessReducer } from "./success";
import { authUserRequestReducer } from "./request";
import { authUserFailureReducer } from "./failed";

export default [
  [loginUserRequest, authUserRequestReducer],
  [loginUserSuccess, authUserSuccessReducer],
  [loginUserFailure, authUserFailureReducer],
];
