import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  Navigate,
} from "react-router-dom";

function App() {
  const isAuthenticated = false;
  return (
    <div className="m-10 p-5">
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
            contact
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<h1>home page</h1>} />
          <Route path="/login" element={<h1>login page</h1>} />
          <Route path="/about" element={<h1>about page</h1>} />
          <Route path="/contact" element={<h1>contact page</h1>} />
          <Route path="/user/:id" element={<User />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function User() {
  const { id } = useParams();
  return <h1>userId: {id}</h1>;
}

function Dashboard() {
  return <h1>Dashboard</h1>;
}

function ProtectedRoute({ children, isAuthenticated }) {
  return isAuthenticated ? children : <Navigate to={"/login"} />;
}

export default App;
