import React from "react";

const Button = ({ text }) => {
  return (
    <div>
      <button className="bg-sky-300 px-4 py-3 rounded-xl text-white font-semibold mx-4 ">
        {text}
      </button>
    </div>
  );
};

export default Button;
