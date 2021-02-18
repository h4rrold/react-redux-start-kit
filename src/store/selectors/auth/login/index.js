import { createSelector } from "reselect";

const getAuthState = (state) => state.auth;

export const getUserDataSelector = createSelector(
  getAuthState,
  (auth) => auth.user
);

export const getUserErrorSelector = createSelector(
  getAuthState,
  (auth) => auth.login.error
);

export const getAuthIsLoadingSelector = createSelector(
  getAuthState,
  (auth) => auth.login.isLoading
);

export const getUserTokenSelector = createSelector(
  getAuthState,
  (auth) => auth.user?.token ?? ""
);
