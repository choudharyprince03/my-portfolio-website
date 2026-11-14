import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import PageEngine from './components/PageEngine';
import CustomCursor from './components/CustomCursor';

function Curtain() {
  const { pathname } = useLocation();
  const first = React.useRef(true);
  if (first.current) { first.current = false; return null; }
  return <div key={pathname} className="curtain" aria-hidden="true" />;
}

const page = (el) => <PageEngine>{el}</PageEngine>;

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={page(<ProjectDetails />)} />
      </Routes>
      <Curtain />
      <CustomCursor />
    </Router>
  );
}
