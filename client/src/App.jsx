import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Service";
import Blog from "./pages/Blog";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
