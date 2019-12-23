import * as React from "react";

import { useSelector, useDispatch } from "react-redux";
import { changeFirstOperand } from "../../store/basicMath/basicMath.actions";

const BasicMath: React.FC = () => {
  const basicMathState = useSelector(({ basicMath }: any) => basicMath);
  const dispatch = useDispatch();
  console.log("mool1", basicMathState);

  function clicked() {
    dispatch(changeFirstOperand({ firstOperand: 10 }));
  }
  return (
    <div>
      <span>{basicMathState.firstOperand}</span>
      <br />
      <button onClick={clicked}>click</button>
    </div>
  );
};

export default BasicMath;
