import { ADD } from "./basicMath.constants";

export const addValue = (value: any) => ({
  type: ADD,
  payload: { value }
});
