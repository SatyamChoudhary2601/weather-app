import { useState } from "react";

const ConditionalRender = () => {
  const [value, setValue] = useState(0);
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <input type="number" value={value} onChange={handleOnChange} />
      <p style={{ color: value % 2 === 0 ? "green" : "red" }}>
        {value % 2 === 0 ? "Even" : "Odd"}
      </p>
    </div>
  );
};

export default ConditionalRender;
