import "./Counter.scss";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="box">
      <p>The count is {count}</p>
      <button className="add" onClick={() => setCount(count + 1)}>
        Add
      </button>
      <button className="sub" onClick={() => setCount(count - 1)}>
        Sum
      </button>
      <button className="reset" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
