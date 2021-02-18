import { produce } from "immer";
import { USER_LOGIN_FAILURE } from "store/actionsTypes/auth/userLogin";
import defaultState from "../defaultState";

/* eslint-disable default-case, no-param-reassign, consistent-return, implicit-arrow-linebreak */
export const authUserFailureReducer = (state = defaultState, action) => {
  return produce(state, (draft) => {
    const { type, payload } = action;
    switch (type) {
      case USER_LOGIN_FAILURE: {
        draft.login.isLoading = false;
        draft.user = null;
        draft.login.error = payload;
        break;
      }
    }
  });
};
