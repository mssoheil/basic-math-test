import handlers from "./basicMath.business";
import { Action } from "./basicMath.actions";

export interface State {
  firstOperand?: number;
  operator?: number;
  secondOperand?: number;
  calculatedNumber?: number;
  operatorList?: string[];
  rate?: number;
  score?: number;
  streak?: number;
}

export const initialState = {
  firstOperand: 0,
  secondOperand: 0,
  calculatedNumber: 0,
  operator: 0,
  operatorList: ["+", "-", "*", "/"],
  rate: 0,
  score: 0,
  streak: 0
};

function basicMath(state: State = initialState, action: Action) {
  try {
    return handlers[action.type](state, action.payload);
  } catch (err) {
    return state;
  }
}

export default basicMath;
