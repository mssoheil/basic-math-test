import { createStore } from "redux";
// reducers
import reducers from "./index.reducer";

const appStore = createStore(reducers, {});

export default appStore;
