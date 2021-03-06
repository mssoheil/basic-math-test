import * as React from "react";
import "./App.css";
// screen
import BasicMath from "./screens/BasicMath";
import { initialState } from "./store/basicMath/basicMath.reducer";

function reducer(state: any, action: any) {
  return { ...state, ...action };
}

export interface Action {
  type: string;
  payload?: any;
}

export const StateContext = React.createContext(initialState);
export const DispatchContext = React.createContext((() => {}) as React.Dispatch<
  Action
>);

const App: React.FC = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BasicMath />
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export const useGlobalState = () => React.useContext(StateContext);
export const useGlobalDispatch = () => React.useContext(DispatchContext);
export default App;
