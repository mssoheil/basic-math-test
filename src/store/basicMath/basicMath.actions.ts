import {
  CHANGE_FIRST_OPERAND,
  CHANGE_SECOND_OPERAND,
  CHANGE_CALCULATED_NUMBER,
  CHANGE_OPERATOR,
  CHANGE_RATE,
  CHANGE_SCORE,
  CHANGE_STREAK
} from "./basicMath.constants";
import { State } from "./basicMath.reducer";

export interface Action {
  type: string;
  payload?: State;
}

export const changeFirstOperand = (value: State): Action => ({
  type: CHANGE_FIRST_OPERAND,
  payload: value
});

export const changeOperator = (value: State): Action => ({
  type: CHANGE_OPERATOR,
  payload: value
});

export const changeSecondOperand = (value: State): Action => ({
  type: CHANGE_SECOND_OPERAND,
  payload: value
});

export const changeCalculatedNumber = (): Action => ({
  type: CHANGE_CALCULATED_NUMBER
});

export const changeRate = (value: State): Action => ({
  type: CHANGE_RATE,
  payload: value
});

export const changeScore = (value: State): Action => ({
  type: CHANGE_SCORE,
  payload: value
});

export const changeStreak = (value: State): Action => ({
  type: CHANGE_STREAK,
  payload: value
});
