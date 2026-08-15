import { useState } from "react";

function Variation1Counter() {
  // useState(initialValue) returns an array with two items:
  //   - current state value
  //   - a function to update it
  const [count, setCount] = useState(0);

  // Increment handler
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Decrement handler
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div
      style={{
        border: "1px solid #aaa",
        padding: "1rem",
        margin: "1rem",
        borderRadius: "8px",
      }}
    >
      <h3>1. Basic Counter</h3>
      <p>
        Current count: <strong>{count}</strong>
      </p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default Variation1Counter;
