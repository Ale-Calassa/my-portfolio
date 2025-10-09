import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#home">Home</a>
      <a href="#about">Sobre Mim</a>
      <a href="#projects">Projetos</a>
      <a href="#certificates">Certificados</a>
      <a href="#contact">Contato</a>
    </nav>
  );
};

export default Navbar;
