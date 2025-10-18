import React, { useState } from 'react';
import './Navbar.scss';
import AdelphosLogo from '../img/Adelphoslogo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__content">
        <div className="navbar__logo">
          <img src={AdelphosLogo} alt="Adelphos Logo" />
        </div>

        <div className={`navbar__links ${menuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={handleLinkClick}>Home</a>
          <a href="#about" onClick={handleLinkClick}>Sobre Mim</a>
          <a href="#projects" onClick={handleLinkClick}>Projetos</a>
          <a href="#certificates" onClick={handleLinkClick}>Certificados</a>
          <a href="#contact" onClick={handleLinkClick}>Contato</a>
        </div>

        <div className="navbar__toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;