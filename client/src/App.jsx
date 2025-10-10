import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Service";
import Blog from "./pages/Blog";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AdminPanel from "./pages/admin/AdminPanel";
import Dashboard from "./components/Dashboard";
import AddBlog from "./components/AddBlog";
import { useState } from "react";
import Cookies from "js-cookie";
import ContactUs from "./pages/ContactUs";

function App() {
  const [token, setToken] = useState(Cookies.get("jwt") || "");

  return (
    <div>
      <Routes>
        {/* login/register always available */}
        <Route
          path="/login"
          element={
            token === "" ? (
              <Login setToken={setToken} />
            ) : (
              <Navigate to="/admin" replace />
            )
          }
        />
        <Route path="/register" element={<Register />} />

        {/* public pages */}
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contactus" element={<ContactUs />} />

        {/* protected admin pages */}
        {token === "" ? (
          <Route path="/admin/*" element={<Navigate to="/login" replace />} />
        ) : (
          <Route path="/admin" element={<AdminPanel token={token} />}>
            <Route index element={<Dashboard />} />
            <Route path="addblog" element={<AddBlog token={token} />} />
          </Route>
        )}
      </Routes>

    </div>
  );
}

export default App;
