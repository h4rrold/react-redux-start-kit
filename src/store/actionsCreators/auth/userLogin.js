import { createAction } from "redux-actions";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAILURE,
  USER_LOGIN_SUCCESS,
} from "store/actionsTypes/auth/userLogin";

export const loginUserRequest = createAction(
  USER_LOGIN_REQUEST,
  (payload) => payload
);
export const loginUserSuccess = createAction(
  USER_LOGIN_SUCCESS,
  (payload) => payload
);
export const loginUserFailure = createAction(
  USER_LOGIN_FAILURE,
  (payload) => payload
);
