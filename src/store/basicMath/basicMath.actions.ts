import { CHANGE_FIRST_OPERAND, CHANGE_SECOND_OPERAND, CHANGE_CALCULATED_NUMBER, CHANGE_OPERATOR } from "./basicMath.constants";
import { State } from "./basicMath.reducer";

export interface Action {
	type: string;
	payload?: State;
}

export const changeFirstOperand = (value: State): Action => ({
	type: CHANGE_FIRST_OPERAND,
	payload: value,
});

export const changeOperator = (value: State): Action => ({
	type: CHANGE_OPERATOR,
	payload: value,
});

export const changeSecondOperand = (value: State): Action => ({
	type: CHANGE_SECOND_OPERAND,
	payload: value,
});

export const changeCalculatedNumber = (): Action => ({
	type: CHANGE_CALCULATED_NUMBER,
});
