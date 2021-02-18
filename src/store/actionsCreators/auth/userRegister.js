import { createAction } from "redux-actions";
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
} from "store/actionsTypes/auth/userRegister";

export const registerUserRequest = createAction(
  USER_REGISTER_REQUEST,
  (payload) => payload
);
export const registerUserSuccess = createAction(
  USER_REGISTER_SUCCESS,
  (payload) => payload
);
export const registerUserFailure = createAction(
  USER_REGISTER_FAILURE,
  (payload) => payload
);
