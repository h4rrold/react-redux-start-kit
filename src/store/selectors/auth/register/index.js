import { createSelector } from "reselect";

const getRegisterState = (state) => state.auth.register;

export const getRegisterIsLoadingSelector = createSelector(
  getRegisterState,
  (state) => state.isLoading
);

export const getRegisterErrorSelector = createSelector(
  getRegisterState,
  (state) => state.error
);
