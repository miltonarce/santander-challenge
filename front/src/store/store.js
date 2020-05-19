// eslint-disable-next-line object-curly-newline
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import meetupsReducer from "./reducers/meetupsReducer";
import authReducer from "./reducers/authReducer";

export default createStore(
  combineReducers({
    meetups: meetupsReducer,
    authData: authReducer
  }),
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)(
    applyMiddleware(thunk)
  )
);
