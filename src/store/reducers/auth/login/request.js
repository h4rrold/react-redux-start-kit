import { produce } from "immer";
import { USER_LOGIN_REQUEST } from "store/actionsTypes/auth/userLogin";
import defaultState from "../defaultState";

/* eslint-disable default-case, no-param-reassign, consistent-return, implicit-arrow-linebreak */
export const authUserRequestReducer = (state = defaultState, action) => {
  return produce(state, (draft) => {
    const { type } = action;
    switch (type) {
      case USER_LOGIN_REQUEST: {
        draft.login.isLoading = true;
        draft.login.error = null;
        break;
      }
    }
  });
};
