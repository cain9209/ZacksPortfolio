import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header'

function App() {

  return (
    <Router>
      <Routes>
            <Route path="/" element={<Header />} />
      </Routes>
    </Router>
  );
}

export default App;
