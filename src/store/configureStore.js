import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import { routerMiddleware } from "connected-react-router";
import rootReducer from "./reducers";
import history from "../createHistory";

const initialStore = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/*
    const composeEnhancers = compose;
*/

const middlewares = [routerMiddleware(history), thunk];

const store = createStore(
  rootReducer,
  initialStore,
  composeEnhancers(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);

export default store;
