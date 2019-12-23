import * as React from "react";

import { useSelector, useDispatch } from "react-redux";
import { changeFirstOperand, changeSecondOperand, changeCalculatedNumber, changeOperator } from "../../store/basicMath/basicMath.actions";

const BasicMath: React.FC = () => {
	const basicMathState = useSelector(({ basicMath }: any) => basicMath);
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(changeOperator({ operator: Math.floor(Math.random() * 4) }));
		dispatch(changeFirstOperand({ firstOperand: Math.floor(Math.random() * 10) }));
		dispatch(changeSecondOperand({ secondOperand: Math.floor(Math.random() * 10) }));
		dispatch(changeCalculatedNumber());
	}, [dispatch]);

	return (
		<div>
			<span>{basicMathState.firstOperand}</span> <span>{basicMathState.operatorList[basicMathState.operator]}</span>{" "}
			<span>{basicMathState.secondOperand}</span> = <span>{basicMathState.calculatedNumber}</span>
			<br />
		</div>
	);
};

export default BasicMath;
