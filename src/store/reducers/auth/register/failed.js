import { produce } from "immer";
import { USER_REGISTER_FAILURE } from "store/actionsTypes/auth/userRegister";
import defaultState from "../defaultState";

/* eslint-disable default-case, no-param-reassign, consistent-return, implicit-arrow-linebreak */
export const registerUserFailureReducer = (state = defaultState, action) => {
  return produce(state, (draft) => {
    const { type, payload } = action;
    switch (type) {
      case USER_REGISTER_FAILURE: {
        draft.register.isLoading = false;
        draft.register.error = payload;
        break;
      }
    }
  });
};
