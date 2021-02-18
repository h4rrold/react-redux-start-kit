import {
  loginUserRequest,
  loginUserSuccess,
  loginUserFailure,
} from "store/actionsCreators/auth/userLogin";
import {
  registerUserRequest,
  registerUserSuccess,
  registerUserFailure,
} from "store/actionsCreators/auth/userRegister";
import { loginRequest, registerRequest } from "services/api";
import { errorHandler } from "services/errorHandler/Handler";
import { push } from "connected-react-router";

function loginUserRequestThunk({ email, password }) {
  return async (dispatch) => {
    dispatch(loginUserRequest());
    try {
      const response = await loginRequest({ email, password });
      if (response.status === 200) {
        const { data } = response;
        dispatch(loginUserSuccess(data));
        dispatch(push("/"));
      }
    } catch (error) {
      const {
        data: { message },
      } = error;
      const handledMessage = errorHandler.getMessage("auth", message);
      dispatch(loginUserFailure(handledMessage));
    }
  };
}

function registerUserRequestThunk({ email, password }) {
  return async (dispatch) => {
    debugger;
    dispatch(registerUserRequest());
    try {
      const response = await registerRequest({ email, password });
      if (response.status === 200) {
        const { data } = response;
        dispatch(registerUserSuccess(data));
        dispatch(push("/"));
      }
    } catch (error) {
      const {
        data: { message },
      } = error;
      const handledMessage = errorHandler.getMessage("auth", message);
      dispatch(registerUserFailure(handledMessage));
    }
  };
}

export { loginUserRequestThunk, registerUserRequestThunk };
