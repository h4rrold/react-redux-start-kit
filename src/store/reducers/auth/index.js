import handleActions from "redux-actions/es/handleActions";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import loginHandlers from "./login";
import logoutHanlders from "./logout";
import registerHandlers from "./register";
import defaultState from "./defaultState";

const reducer = handleActions(
  new Map([...loginHandlers, ...registerHandlers, ...logoutHanlders]),
  defaultState
);
const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "user"],
  // blackList: ["auth"]
};

export default persistReducer(persistConfig, reducer);
