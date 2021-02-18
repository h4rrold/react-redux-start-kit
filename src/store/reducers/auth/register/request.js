import { produce } from "immer";
import { USER_REGISTER_REQUEST } from "store/actionsTypes/auth/userRegister";
import defaultState from "../defaultState";

/* eslint-disable default-case, no-param-reassign, consistent-return, implicit-arrow-linebreak */
export const registerUserRequestReducer = (state = defaultState, action) => {
  return produce(state, (draft) => {
    const { type } = action;
    switch (type) {
      case USER_REGISTER_REQUEST: {
        draft.register.isLoading = true;
        draft.register.error = null;
        break;
      }
    }
  });
};
