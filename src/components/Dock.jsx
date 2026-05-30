import React, { useState, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Github, Mail, Home, ArrowUp, FileText } from 'lucide-react';

const DockItem = ({ icon, label, onClick, children }) => {
  const [isBouncing, setIsBouncing] = useState(false);

  const handleClick = useCallback((e) => {
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 400);
    if (onClick) onClick(e);
  }, [onClick]);

  return (
    <button
      className={`dock-item ${isBouncing ? 'bouncing' : ''}`}
      onClick={handleClick}
      aria-label={label}
    >
      <span className="dock-tooltip">{label}</span>
      {children || icon}
    </button>
  );
};

const Dock = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const goHome = useCallback(() => {
    if (location.pathname === '/') {
      // Already on home — just scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  }, [navigate, location.pathname]);

  return (
    <nav className="dock-container" aria-label="Quick actions dock">
      {/* Home */}
      <DockItem label="Home" onClick={goHome}>
        <Home size={20} strokeWidth={1.7} />
      </DockItem>

      {/* Resume */}
      <DockItem label="Resume" onClick={() => navigate('/resume')}>
        <FileText size={20} strokeWidth={1.7} />
      </DockItem>

      <div className="dock-divider" aria-hidden="true" />

      {/* GitHub */}
      <DockItem
        label="GitHub"
        onClick={() => window.open('https://github.com/choudharyprince03', '_blank', 'noopener,noreferrer')}
      >
        <Github size={20} strokeWidth={1.7} />
      </DockItem>

      {/* Mail */}
      <DockItem
        label="Email"
        onClick={() => window.location.href = 'mailto:prince.1978choudhary@gmail.com'}
      >
        <Mail size={20} strokeWidth={1.7} />
      </DockItem>

      <div className="dock-divider" aria-hidden="true" />

      {/* Scroll to Top */}
      <DockItem label="Scroll to Top" onClick={scrollToTop}>
        <ArrowUp size={20} strokeWidth={1.7} />
      </DockItem>
    </nav>
  );
};

export default Dock;
