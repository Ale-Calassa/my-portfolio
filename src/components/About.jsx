import React from "react";
import './About.scss';
import myself from '../img/myself.png';

import { Link } from 'react-router-dom';


const About = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <img src={myself} alt="Alesson-img" className="about-img" />
        <h3 className="about-nome">Alesson S Calaça</h3>
      </div>
      <div className="about-right">
        <h2>Sobre Mim</h2>
        <p>
          Olá, Sou Alesson, Estudante de Ciência da Computação 💻 |
          Foco em Tecnologia, Dados e Inovação.
        </p>
        <p>
          Sou movido pela curiosidade e pelo desejo de evoluir.
          Apaixonado por tecnologia e aprendizado contínuo,
          tenho experiência acadêmica em programação, redes,
          análise de dados e metodologias ágeis — adquirida em
          projetos universitários, bootcamps e práticas aplicadas.
        </p>
        <p>
          Com vivência profissional em atendimento ao cliente,
          desenvolvi habilidades essenciais como comunicação,
          empatia e adaptabilidade. Busco oportunidades na área de tecnologia
          para aplicar meu conhecimento, crescer tecnicamente e colaborar com
          equipes diversas em projetos que gerem impacto real.
        </p>
        <p className="about-welcome">
          Este portfólio é um espaço para compartilhar meus projetos,
          certificações e ideias. <br /> Seja bem-vindo! 😉
        </p>
        <Link to="/curriculum" className="btn-curriculo">Meu Currículo </Link>

      </div>
    </div>
  );
};
export default About;