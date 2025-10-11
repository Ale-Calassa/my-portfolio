import React from 'react';
import './Contact.scss';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const redes = [
  {
    nome: "GitHub",
    url: "https://github.com/Ale-Calassa",
    icon: <FaGithub />,
  },
  {
    nome: "LinkedIn",
    url: "https://www.linkedin.com/in/alesson-de-santana-cala%C3%A7a-0a6b601b5/",
    icon: <FaLinkedin />,
  },
  {
    nome: "Instagram",
    url: "https://instagram.com/alesson.dev",
    icon: <FaInstagram />,
  }
];

const Contact = () => {
  return (
    <div className="contato-container">
      <h2>Contato</h2>
      
      <p>Caso queira conhecer mais sobre mim, meus hobbies, projetos e experiências 
        como desenvolvedor, fique à vontade para me acompanhar nas redes sociais. 
        Lá compartilho ideias, aprendizados e um pouco da minha jornada no mundo da tecnologia!</p>

      <div className="redes-links">
        {redes.map((rede, index) => (
          <a key={index} href={rede.url} target="_blank" rel="noopener noreferrer" className="rede-item">
            <span className="icon">{rede.icon}</span>
            <span className="nome">{rede.nome}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
