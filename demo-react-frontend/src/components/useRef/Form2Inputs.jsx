import React, { useRef, useState } from "react";

const Form2Inputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const handleClick = () => {
    if (email.length < 10) {
      alert("give valid email");
      emailRef.current.focus();
      emailRef.current.style.cssText =
        "outline-color: red; outline-width: 2px; background-color: #ffefee";
    }
    console.log(
      "nameRef: ",
      nameRef.current.value,
      "\n",
      "emailRef: ",
      emailRef.current.value
    );
    console.log("name: ", name, "\n", "email: ", email);
  };
  return (
    <div className="my-5 flex flex-col ">
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        ref={nameRef}
        onChange={(e) => setName(e.target.value)}
        className="border  w-fit my-2 rounded-md p-2"
      />
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        ref={emailRef}
        onChange={(e) => setEmail(e.target.value)}
        className="border  w-fit my-2 rounded-md p-2"
      />
      <button
        onClick={handleClick}
        className="bg-stone-400 w-fit my-2 rounded-md py-1 px-3"
      >
        Submit
      </button>
    </div>
  );
};

export default Form2Inputs;
