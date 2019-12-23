import { CHANGE_FIRST_OPERAND } from "./basicMath.constants";
import { State } from "./basicMath.reducer";

export interface Action {
  type: string;
  payload?: State;
}

export const changeFirstOperand = (value: State): Action => ({
  type: CHANGE_FIRST_OPERAND,
  payload: value
});

export const changeLastOperand = (value: State): Action => ({
  type: CHANGE_FIRST_OPERAND,
  payload: value
});
