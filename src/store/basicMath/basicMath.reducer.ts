import handlers from "./basicMath.business";
import { Action } from "./basicMath.actions";

export interface State {
	firstOperand?: number;
	operator?: number;
	secondOperand?: number;
	calculatedNumber?: number;
	operatorList?: string[];
}

export const initialState = { firstOperand: 0, secondOperand: 0, calculatedNumber: 0, operator: 0, operatorList: ["+", "-", "*", "/"] };

function basicMath(state: State = initialState, action: Action) {
	try {
		return handlers[action.type](state, action.payload);
	} catch (err) {
		return state;
	}
}

export default basicMath;
