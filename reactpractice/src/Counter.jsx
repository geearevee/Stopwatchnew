import React, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);

  function Increment() {
    setCount((count) => count + 1);
  }

  function Dec() {
    setCount((count) => count - 1);
  }
  return (
    <>
      Counter
      <button onClick={Increment}>+</button>
      {count}
      <button onClick={Dec}>-</button>
    </>
  );
}

export default Counter;
