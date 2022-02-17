import React, { useState } from "react";

export const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      This is a react application built from scratch
      <br /> <br />
      You have clicked below button {count} times: <br />
      <button onClick={() => setCount(count + 1)}>Click!</button>
    </div>
  );
};
