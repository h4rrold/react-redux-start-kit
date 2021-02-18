import { combineReducers } from "redux";
import auth from "store/reducers/auth";
import { connectRouter } from "connected-react-router";
import history from "../../createHistory";

const rootReducer = combineReducers({
  router: connectRouter(history),
  auth,
});

export default rootReducer;
