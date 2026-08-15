import { useState } from "react";

const MAX_CHARS = 50;

function Variation3CharCounter() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const charCount = text.length;
  const isOverLimit = charCount > MAX_CHARS;

  return (
    <div
      style={{
        border: "1px solid #aaa",
        padding: "1rem",
        margin: "1rem",
        borderRadius: "8px",
      }}
    >
      <h3>3. Character Counter</h3>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
        rows={4}
        style={{ width: "100%", padding: "0.5rem" }}
      />
      <p>
        Characters: {charCount} / {MAX_CHARS}
        {isOverLimit && (
          <span
            style={{ color: "red", marginLeft: "1rem" }}
          >
            You exceeded the limit!
          </span>
        )}
      </p>
    </div>
  );
}

export default Variation3CharCounter;
