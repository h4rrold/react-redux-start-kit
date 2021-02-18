import { produce } from "immer";
import { USER_REGISTER_SUCCESS } from "store/actionsTypes/auth/userRegister";
import defaultState from "../defaultState";

/* eslint-disable default-case, no-param-reassign, consistent-return, implicit-arrow-linebreak */
export const registerUserSuccessReducer = (state = defaultState, action) => {
  return produce(state, (draft) => {
    const { type, payload } = action;
    switch (type) {
      case USER_REGISTER_SUCCESS: {
        const user = action.payload;
        draft.register.isLoading = false;
        draft.auth.user = user;
        draft.register.error = null;
        draft.token = payload?.api_token;
        break;
      }
      default:
        return draft;
    }
  });
};
