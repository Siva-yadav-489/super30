import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import User from "./User";
import ProtectedRoute from "./ProtectedRoute";

const ReactRouter = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div className="my-5">
      <BrowserRouter>
        <nav className="bg-gray-200 py-2">
          <Link to={"/"} className="mx-2">
            Home
          </Link>
          <Link to={"/login"} className="mx-2">
            Login
          </Link>
          <Link to={"/about"} className="mx-2">
            About
          </Link>
          <Link to={"/contact"} className="mx-2">
            Contact
          </Link>
          <Link to={"/dashboard"} className="mx-2">
            Dashboard
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<h1 className="my-5">home page</h1>} />
          <Route
            path="/login"
            element={
              <Login
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
              />
            }
          />
          <Route path="/about" element={<h1 className="my-5">about page</h1>} />
          <Route
            path="/contact"
            element={<h1 className="my-5">contact page</h1>}
          />
          <Route path="/user/:id" element={<User />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Dashboard
                  isAuthenticated={isAuthenticated}
                  setIsAuthenticated={setIsAuthenticated}
                />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default ReactRouter;
