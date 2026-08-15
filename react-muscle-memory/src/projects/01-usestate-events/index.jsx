// Explicit extensions make each local component path unambiguous.
import Variation1Counter from "./Variation1Counter.jsx";
import Variation2StepCounter from "./Variation2StepCounter.jsx";
import Variation3CharCounter from "./Variation3CharCounter.jsx";

function UseStateEvents() {
  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "2rem auto",
        fontFamily: "sans-serif",
      }}
    >
      <h1>Day 1: useState and Events</h1>
      <Variation1Counter />
      <Variation2StepCounter />
      <Variation3CharCounter />
    </div>
  );
}

export default UseStateEvents;
