import React from "react";

const Dashboard = ({ isAuthenticated, setIsAuthenticated }) => {
  if (!isAuthenticated) {
    <Navigate to={"/login"} />;
  }
  return (
    <div>
      <h1 className="my-5">Dashboard</h1>
      <button
        onClick={() => setIsAuthenticated(false)}
        className="bg-red-400 rounded-md my-5 px-4 py-1"
      >
        log out
      </button>
    </div>
  );
};

export default Dashboard;
