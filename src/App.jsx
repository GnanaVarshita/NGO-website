import Navbar from "./components/Navbar";
//import Middle from "./components/Middle";
//import Stories from "./components/Stories";
import GetUpdates from "./components/GetUpdates";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Events from "./components/Events";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <GetUpdates />
        <Footer />
      </Router>
    </>
  );
}

export default App;
