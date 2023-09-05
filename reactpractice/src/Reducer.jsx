import React from "react";
import { useReducer } from "react";
const Reducer = () => {
  const initialcount = 0;
  function reducer(count, action) {
    console.log(count, action);
    if (action == "increment") {
      return count + 1;
    } else if (action == "decrement") {
      return count - 1;
    }
    return count;
  }

  const [count, dispatch] = useReducer(reducer, initialcount);

  return (
    <div>
      <button onClick={() => dispatch("increment")}>Add</button>
      <h1>{count}</h1>
      <button onClick={() => dispatch("decrement")}>Subtract</button>
    </div>
  );
};

export default Reducer;
