import { produce } from "immer";
import { USER_LOGOUT_REQUEST } from "store/actionsTypes/auth/userLogout";
import defaultState from "../defaultState";

/* eslint-disable default-case, no-param-reassign, consistent-return, implicit-arrow-linebreak */
export const logoutUserRequestReducer = (state = defaultState, action) => {
  return produce(state, (draft) => {
    const { type } = action;
    switch (type) {
      case USER_LOGOUT_REQUEST: {
        draft.logout.isLoading = true;
        draft.logout.error = null;
        break;
      }
    }
  });
};
