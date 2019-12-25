import { createStore, compose, applyMiddleware } from "redux";
// reducers
import reducers from "./index.reducer";
import middlewares from "./index.middleware";
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const appStore = createStore(
  reducers,
  {},
  composeEnhancer(applyMiddleware(...middlewares))
);

export default appStore;
