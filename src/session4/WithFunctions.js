import { useState } from "react";

const WithFunction = ({ diff }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2
        className="h2"
        style={{
          backgroundColor: count < 0 ? "red" : "green",
          borderRadius: 12
        }}
      >
        {count}
      </h2>
      <div className="btnContainer">
        <button
          className="btn inc"
          onClick={() => setCount((prev) => prev + diff)}
        >
          +
        </button>
        <button
          className="btn dec"
          onClick={() => setCount((prev) => prev - diff)}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default WithFunction;
