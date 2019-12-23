import handlers from "./basicMath.business";
import { Action } from "./basicMath.actions";

export interface State {
  firstOperand?: number;
  secondOperand?: number;
}

export const initialState = {};

function basicMath(state: State = initialState, action: Action) {
  try {
    return handlers[action.type](state, action.payload);
  } catch (err) {
    return state;
  }
}

export default basicMath;
