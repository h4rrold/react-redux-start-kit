import { produce } from "immer";
import { USER_LOGIN_SUCCESS } from "store/actionsTypes/auth/userLogin";
import defaultState from "../defaultState";

/* eslint-disable default-case, no-param-reassign, consistent-return, implicit-arrow-linebreak */
export const authUserSuccessReducer = (state = defaultState, action) => {
  return produce(state, (draft) => {
    const { type, payload } = action;
    switch (type) {
      case USER_LOGIN_SUCCESS: {
        draft.login.isLoading = false;
        draft.user = payload;
        draft.login.error = null;
        break;
      }
      default:
        return draft;
    }
  });
};
