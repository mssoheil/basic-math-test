import { CHANGE_FIRST_OPERAND } from "./basicMath.constants";
import { State } from "./basicMath.reducer";

interface Handlers {
  [key: string]: any;
}
const handlers: Handlers = {
  [CHANGE_FIRST_OPERAND]: (state: State, { firstOperand }: State) => ({
    firstOperand
  })
};

export default handlers;
