import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import Resume from './pages/Resume';
import Dock from './components/Dock';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Dock />
    </Router>
  );
}

export default App;
