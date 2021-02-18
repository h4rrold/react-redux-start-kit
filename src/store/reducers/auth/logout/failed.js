import { produce } from "immer";
import { USER_LOGOUT_FAILURE } from "store/actionsTypes/auth/userLogout";
import defaultState from "../defaultState";

/* eslint-disable default-case, no-param-reassign, consistent-return, implicit-arrow-linebreak */
export const logoutUserFailureReducer = (state = defaultState, action) => {
  return produce(state, (draft) => {
    const { type, payload } = action;
    switch (type) {
      case USER_LOGOUT_FAILURE: {
        draft.logout.isLoading = false;
        draft.user = null;
        draft.logout.error = payload;
        break;
      }
    }
  });
};
