import { useEffect, useState } from "react";
import React from "react";

const UseEffExample = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    console.log("component mounted.......");

    return console.log("component unmounted......");
  });
  return (
    <div className="mb-10">
      <button
        className=" border rounded-md my-4 p-2"
        onClick={() => setShow(!show)}
      >
        show menu
      </button>
      {show && (
        <div className="flex">
          <button className="bg-sky-300 px-4 py-1 rounded-md text-white me-4 ">
            Home
          </button>
          <button className="bg-sky-300 px-4 py-1 rounded-md text-white me-4 ">
            About
          </button>
          <button className="bg-sky-300 px-4 py-1 rounded-md text-white me-4 ">
            Login
          </button>
          <button className="bg-sky-300 px-4 py-1 rounded-md text-white me-4 ">
            Signup
          </button>
        </div>
      )}
    </div>
  );
};

export default UseEffExample;
