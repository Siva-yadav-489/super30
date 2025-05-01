import React from "react";
import { Navigate } from "react-router-dom";

const Login = ({ isAuthenticated, setIsAuthenticated }) => {
  if (isAuthenticated) {
    return <Navigate to={"/dashboard"} />;
  }
  return (
    <div className="my-5">
      <h1>login page</h1>
      <button
        onClick={() => setIsAuthenticated(true)}
        className="bg-amber-200 rounded-md my-5 px-4 py-1"
      >
        login
      </button>
    </div>
  );
};

export default Login;
