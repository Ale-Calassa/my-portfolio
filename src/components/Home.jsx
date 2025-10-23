import React from 'react';
import './Home.scss';
import geminipic from '../img/geminipic.png';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-left">
        <img src={geminipic} alt="Alesson" className="profile-image" />
      </div>
      <div className="home-right">
        <h1 className="name">Alesson S. Calaça</h1>
        <p className="tecname">👨🏽‍💻 Python Developer & Data Analyst 📊</p>
        <div>
        <p className="typing">Bem-vindo ao meu portifólio</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
