import React, { useMemo, useState } from "react";

function showFunction() {
  console.log("Ye function calculation sirf jab zarurat hogi tab chalega.");

  let sum = 0;

  for (let i = 0; i < 1000000; i++) {
    sum += 1;
  }

  return sum;
}

const UseMemoExample = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  const calculation = useMemo(() => {
    return showFunction();
  }, []);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <h2>Calculation: {calculation}</h2>
    </div>
  );
};

export default UseMemoExample;