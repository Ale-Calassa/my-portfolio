import React from 'react';
import './Projects.scss';
import ColetadeDadosVendas from '../img/ColetadeDadosVendas.png'
import imgIdeia from '../img/imgIdeia.jpg'


const projects = [
  {
    titulo: "Sistema de Coleta de Dados - Vendas",
    descricao: "Registro de Vendas – Aplicação Didática (React + Flask + MySQL) Projeto fullstack desenvolvido com foco em aprendizado prático. A aplicação permite o registro de vendas fictícias por meio de um formulário React, que envia os dados para uma API Flask. As informações são armazenadas em um banco MySQL e simulam um cenário real de coleta e análise de consumo.",
    link: "https://ale-calassa.github.io/Formulario-Coleta-de-Dados-Vendas/",
    imagem: ColetadeDadosVendas
    
  },
  {
    titulo: "Projeto Amigo Secreto",
    descricao: "Aplicação web interativa desenvolvida para facilitar a organização de sorteios de amigo secreto. O sistema permite o cadastro de participantes, exibição dinâmica da lista e realização de sorteios aleatórios com apenas um clique. A interface foi projetada para ser intuitiva, responsiva e acessível em diferentes dispositivos.",
    link: "https://ale-calassa.github.io/amigo-secreto/",
    imagem: imgIdeia
  },
  {
    titulo: "Calculadora",
    descricao: "Uma calculadora simples e funcional desenvolvida com React no frontend e FastAPI no backend. Permite realizar operações básicas de matemática — soma, subtração, multiplicação e divisão — com exibição do resultado e armazenamento em cache dos últimos 5 cálculos realizados.",
    link: "https://github.com/Ale-Calassa",
    imagem: imgIdeia
  },
    {
    titulo: "Mario Jump",
    descricao: "...",
    link: "https://github.com/alesson/api-certificados",
    imagem: imgIdeia
  },
    {
    titulo: "Cluster - Docker Swarm - Vagrant",
    descricao: "Este projeto tem como objetivo criar um Cluster Docker Swarm local utilizando máquinas virtuais provisionadas com Vagrant, automatizando a configuração de ambiente para desenvolvedores e evitando implementações manuais.",
    link: "https://github.com/Ale-Calassa/dio-proj-cluster-vagrant-docker",
    imagem: imgIdeia
  },
    {
    titulo: "API...",
    descricao: "...",
    link: "https://github.com/Ale-Calassa",
    imagem: imgIdeia
  }
];

const Projects = () => {
  return (
    <div className="projetos-container">
      <h2>Projetos</h2>
      <div className="projetos-grid">
        {projects.map((projeto, index) => (
          <div key={index} className="projeto-card">
          <img src={projeto.imagem} alt={projeto.nome} className="projeto-img" />
            <div>
            <h3>{projeto.titulo}</h3>
            <p>{projeto.descricao}</p>
            <a href={projeto.link} target="_blank" rel="noopener noreferrer">
              Ver Projeto
            </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;