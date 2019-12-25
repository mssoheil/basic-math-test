import {
  CHANGE_FIRST_OPERAND,
  CHANGE_SECOND_OPERAND,
  CHANGE_CALCULATED_NUMBER,
  CHANGE_OPERATOR,
  CHANGE_SCORE,
  CHANGE_STREAK,
  CHANGE_RATE
} from "./basicMath.constants";
import { State } from "./basicMath.reducer";

interface Handlers {
  [key: string]: any;
}
const handlers: Handlers = {
  [CHANGE_FIRST_OPERAND]: (state: State, { firstOperand }: State) => ({
    ...state,
    firstOperand
  }),
  [CHANGE_OPERATOR]: (state: State, { operator }: State) => ({
    ...state,
    operator
  }),
  [CHANGE_SECOND_OPERAND]: (state: State, { secondOperand }: State) => ({
    ...state,
    secondOperand
  }),
  [CHANGE_CALCULATED_NUMBER]: (state: State) => {
    try {
      let result = 0;
      if (
        typeof state.firstOperand === "number" &&
        typeof state.secondOperand === "number"
      ) {
        switch (state.operator) {
          case 0:
            result = state.firstOperand + state.secondOperand;
            break;
          case 1:
            result = state.firstOperand - state.secondOperand;
            break;
          case 2:
            result = state.firstOperand * state.secondOperand;
            break;
          case 3:
            result = Math.floor(state.firstOperand / state.secondOperand);
            break;
        }
      }
      return {
        ...state,
        calculatedNumber: result
      };
    } catch (error) {
      return { state };
    }
  },
  [CHANGE_RATE]: (state: State, { rate }: State) => ({
    ...state,
    rate
  }),
  [CHANGE_SCORE]: (state: State, { score }: State) => ({
    ...state,
    score
  }),
  [CHANGE_STREAK]: (state: State, { streak }: State) => ({
    ...state,
    streak
  })
};

export default handlers;
