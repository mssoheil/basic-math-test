import handlers from "./basicMath.business";

function basicMath(state = 0, action: any) {
  try {
    return handlers[action.type](state, action);
  } catch {
    return state;
  }
}

export default basicMath;
