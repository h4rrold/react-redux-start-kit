import { produce } from "immer";
import { USER_LOGOUT_SUCCESS } from "store/actionsTypes/auth/userLogout";
import defaultState from "../defaultState";

/* eslint-disable default-case, no-param-reassign, consistent-return, implicit-arrow-linebreak */
export const logoutUserSuccessReducer = (state = defaultState, action) => {
  return produce(state, (draft) => {
    const { type, payload } = action;
    switch (type) {
      case USER_LOGOUT_SUCCESS: {
        draft.logout.isLoading = false;
        draft.user = payload;
        draft.logout.error = null;
        break;
      }
      default:
        return draft;
    }
  });
};
