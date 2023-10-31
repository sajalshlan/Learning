import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Create from "./components/Create";
import BlogDetails from "./components/BlogDetails";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="content">
          <Routes>
            {/* Route 1 for home page */}
            <Route path="/" element={<Home />} />

            {/* Route 2 for Create a new blog page */}
            <Route path="/create" element={<Create />} />

            {/* Route 3 for blog details - when we click on a blog and it opens up with its full details */}
            <Route path="/blogs/:id" element={<BlogDetails />} />

            {/* Route 4 for not found pages */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
