import handlers from "./basicMath.business";
import { Action } from "./basicMath.actions";

export interface State {
  firstOperand?: number;
}

export const initialState = {
  firstOperand: 0
};

function basicMath(state: State = initialState, action: Action) {
  try {
    return handlers[action.type](state, action.payload);
  } catch (err) {
    return state;
  }
}

export default basicMath;
