import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  return (
    <div>
      <h1 className="my-5">userId: {id}</h1>
    </div>
  );
};

export default User;
