import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Certifications from './pages/Certifications';
import Layout from './components/Layout';
import Experience from './pages/Experience';
import Services from './pages/Services';

function App() {
  // const [darkMode, setDarkMode] = useState(false);

  // useEffect(() => {
  //   document.documentElement.classList.toggle("dark", darkMode);
  // }, [darkMode]);

  return (
    // <div className="w-full min-h-screen flex flex-col 
    //                bg-gradient-to-r from-rose-50 to-white 
    //                dark:bg-gradient-to-r dark:from-gray-950 dark:to-gray-950 
    //                text-gray-900 dark:text-white">
      <Routes>
        <Route
          element={<Layout  />}
        >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/services" element={<Services />} />
        </Route>
      </Routes>
    // </div>
  );
}

export default App;
