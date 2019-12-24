import * as React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  changeFirstOperand,
  changeSecondOperand,
  changeCalculatedNumber,
  changeOperator,
  changeScore,
  changeStreak,
  changeRate
} from "../../store/basicMath/basicMath.actions";

const BasicMath: React.FC = () => {
  const basicMathState = useSelector(({ basicMath }: any) => basicMath);
  const dispatch = useDispatch();
  const inputRef = React.useRef<HTMLInputElement>(null);

  function createTest() {
    dispatch(changeOperator({ operator: Math.floor(Math.random() * 4) }));
    dispatch(
      changeFirstOperand({ firstOperand: Math.floor(Math.random() * 10) })
    );
    dispatch(
      changeSecondOperand({ secondOperand: Math.floor(Math.random() * 10) })
    );
    dispatch(changeCalculatedNumber());
  }
  React.useEffect(() => {
    createTest();
    inputRef.current && inputRef.current.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function compareAnswers(event: Partial<KeyboardEvent>) {
    if (event.key === "Enter") {
      if (inputRef.current) {
        let currentStreak = basicMathState.streak;
        let currentRate = basicMathState.rate;
        if (
          Number(inputRef.current.value) === basicMathState.calculatedNumber
        ) {
          currentStreak++;
          dispatch(changeStreak({ streak: currentStreak }));
          if (currentStreak > 0) {
            currentRate = 10 / currentStreak;
            dispatch(changeRate({ rate: currentRate }));
          }
          dispatch(changeScore({ score: basicMathState.score + currentRate }));
        } else {
          dispatch(changeStreak({ streak: 0 }));
          dispatch(changeRate({ rate: 0 }));
        }
        inputRef.current.value = "";
        createTest();
      }
    }
  }

  return (
    <div>
      <span>{basicMathState.firstOperand}</span>{" "}
      <span>{basicMathState.operatorList[basicMathState.operator]}</span>{" "}
      <span>{basicMathState.secondOperand}</span>
      <br />
      <input ref={inputRef} type="text" onKeyPress={compareAnswers} />
      <br />
      streak: <span>{basicMathState.streak}</span>
      <br />
      rate: <span>{basicMathState.rate}</span>
      <br />
      score: <span>{basicMathState.score}</span>
    </div>
  );
};

export default BasicMath;
