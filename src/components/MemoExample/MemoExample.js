import React, { useMemo, useState } from "react";
import useCustomMemo from "../../CustomHooks/useCustomMemo";

const MemoExample = () => {
  const [counter, setCounter] = useState(0);

  const [counter2, setCounter2] = useState(0);

  const onIncrement = () => {
    setCounter((prev) => prev + 1);
  };

  //   const expensiveFunction = useMemo(() => {
  //     console.log("expensive function called")
  //     return counter * counter
  //   }, [counter])

  const expensiveFunction = useCustomMemo(() => {
    console.log("expensive function called");
    return counter * counter;
  }, [counter]);

  const onDecrement = () => {
    setCounter2((prev) => prev - 1);
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          margin: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span>Counter 1: {counter}</span>
        <span>Squared: {expensiveFunction}</span>
        <button onClick={onIncrement}>Increment</button>
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          margin: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span>Counter 2: {counter2}</span>
        <button onClick={onDecrement}>Decrement</button>
      </div>
    </div>
  );
};

export default MemoExample;
