import React, { useRef, useState } from "react";

const PrevTracker = () => {
  const [number, setNumber] = useState(1);
  const prevNumber = useRef(1);

  const handleClick = () => {
    prevNumber.current = number;
    setNumber(number + 1);
  };

  return (
    <div className="my-5">
      <p className="py-2 px-4 bg-amber-100 rounded-md w-fit my-2">
        current number: {number}
      </p>
      <p className="py-2 px-4 bg-blue-100 rounded-md w-fit my-2">
        previous number: {prevNumber.current}
      </p>
      <button
        onClick={handleClick}
        className="bg-stone-200 w-fit my-2 rounded-md py-1 px-3"
      >
        update
      </button>
    </div>
  );
};

export default PrevTracker;
