import React from 'react';
import './Contact.scss';

const redes = [
  {
    nome: "GitHub",
    url: "https://github.com/Ale-Calassa",
  },
  {
    nome: "LinkedIn",
    url: "https://www.linkedin.com/in/alesson-de-santana-cala%C3%A7a-0a6b601b5/",
  },
  {
    nome: "Instagram",
    url: "https://instagram.com/alesson.dev",
  }
];

const Contact = () => {
  return (
    <div className="contato-container">
      <h2>Contato</h2>
      <p>Quer trocar uma ideia, colaborar ou conhecer mais sobre meu trabalho? Me encontra por aqui:</p>
      <div className="redes-links">
        {redes.map((rede, index) => (
          <a key={index} href={rede.url} target="_blank" rel="noopener noreferrer">
            {rede.nome}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
