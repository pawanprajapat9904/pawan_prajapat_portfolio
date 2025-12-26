import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import Education from "./pages/Education";
import { WorkExperience } from "./pages/WorkExperience";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <Navbar />
      <div >
        <Routes>
          <Route path="/" element={ <HomePage/> } />
          <Route path="/about" element={<AboutMe/>} />
          <Route path="/education" element={<Education/>} />
          <Route path="/work" element={<WorkExperience/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
