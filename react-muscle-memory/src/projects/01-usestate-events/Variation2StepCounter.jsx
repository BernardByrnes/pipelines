import { useState } from "react";

function Variation2StepCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1); // new state for the step

  const handleIncrement = () => {
    setCount(count + step);
  };

  const handleDecrement = () => {
    setCount(count - step);
  };

  // When the input changes, update step state
  const handleStepChange = (event) => {
    // event.target.value is always a string, even if input type="number"
    const newStep = Number(event.target.value);
    setStep(newStep);
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
      <h3>2. Counter with Step</h3>
      <p>Count: {count}</p>
      <div>
        <label>
          Step:
          <input
            type="number"
            value={step}
            onChange={handleStepChange}
            style={{ marginLeft: "0.5rem", width: "60px" }}
          />
        </label>
      </div>
      <button onClick={handleIncrement}>+{step}</button>
      <button onClick={handleDecrement}>-{step}</button>
    </div>
  );
}

export default Variation2StepCounter;
