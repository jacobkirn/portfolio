import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './Home';
import Portfolio from './Portfolio';

function App() {
  return (
    <Router>
      <NavBar />
        {/* Update from <Switch> to <Routes> */}
        <Routes>
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  );
}

export default App;
