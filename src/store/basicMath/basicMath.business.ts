import { ADD } from "./basicMath.constants";

interface Handlers {
  [key: string]: any;
}

const handlers: Handlers = {
  [ADD]: (state: any, payload: any) => state + payload.value
};

export default handlers;
