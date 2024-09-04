import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';

import Home from "./pages/Home";

function App() {

  return (
    <Router>
      <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<ContactMe />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
