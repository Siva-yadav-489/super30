import { useEffect, useState } from "react";
import Button from "./Button";
import React from "react";

const UseEffExample = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    console.log("component mounted.......");

    return console.log("component unmounted......");
  });
  return (
    <div>
      <button
        className=" border rounded-xl m-4 p-2"
        onClick={() => setShow(!show)}
      >
        show menu
      </button>
      {show && (
        <div className="flex">
          <Button text={"Home"} />
          <Button text={"About"} />
          <Button text={"Login"} />
          <Button text={"Signup"} />
        </div>
      )}
    </div>
  );
};

export default UseEffExample;
