import React, { useRef, useState } from "react";

const RenderCount = () => {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  renderCount.current = renderCount.current + 1;

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="my-5">
      <p className="py-2 px-4 bg-amber-100 rounded-md w-fit my-2">
        count: {count}
      </p>
      <p className="py-2 px-4 bg-blue-100 rounded-md w-fit my-2">
        render count: {renderCount.current}
      </p>
      <button
        onClick={handleClick}
        className="border w-fit my-2 rounded-md py-1 px-3"
      >
        Increment
      </button>
    </div>
  );
};

export default RenderCount;
