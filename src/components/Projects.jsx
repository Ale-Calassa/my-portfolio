import React, { useState } from 'react';
import './Projects.scss';
import { motion } from 'framer-motion';
import ColetadeDadosVendas from '../img/ColetadeDadosVendas.png';
import amigosecreto from '../img/amigosecreto.png';
import calculadora from '../img/calculadora.jpeg';
import mariojump from '../img/mariojump.png';
import vagrant from '../img/vagrant.png';
import imgIdeia from '../img/imgIdeia.jpg';

const allProjects = [
  {
    titulo: "Sistema de Coleta de Dados – Vendas",
    descricao: "Aplicação fullstack com React, Flask e MySQL para registrar e analisar vendas fictícias.",
    link: "https://ale-calassa.github.io/Formulario-Coleta-de-Dados-Vendas/",
    imagem: ColetadeDadosVendas
  },
  {
    titulo: "Projeto Amigo Secreto",
    descricao: "Sistema web para organizar sorteios de amigo secreto com cadastro e sorteio automático.",
    link: "https://ale-calassa.github.io/amigo-secreto/",
    imagem: amigosecreto
  },
  {
    titulo: "Calculadora",
    descricao: "Calculadora com React e FastAPI que realiza operações básicas e armazena os últimos cálculos.",
    link: "https://ale-calassa.github.io/calculator-frontend/",
    imagem: calculadora
  },
  {
    titulo: "Cluster - Docker Swarm - Vagrant",
    descricao: "Ambiente automatizado com Vagrant para criar clusters locais usando Docker Swarm.",
    link: "https://github.com/Ale-Calassa/dio-proj-cluster-vagrant-docker",
    imagem: vagrant
  },
  {
    titulo: "Mario Jump",
    descricao: "Projeto em desenvolvimento com temática inspirada em jogos, focado em interatividade.",
    link: "https://github.com/Ale-Calassa",
    imagem: mariojump
  },
  {
    titulo: "Jupyter Notebook - Ambiente de Desenvolvimento Python",
    descricao: "Projeto estruturado para a prática intensiva de programação em Python, utilizando notebooks interativos como plataforma principal. O objetivo é consolidar fundamentos da linguagem, aplicar conceitos de ciência de dados, automação e algoritmos, além de desenvolver projetos autorais que envolvem análise de dados, visualização, manipulação de estruturas e integração com bibliotecas.",
    link: "https://github.com/Ale-Calassa/python-exercises",
    imagem: imgIdeia
  }
];

const Projects = () => {
  const [expandido, setExpandido] = useState(null);

  return (
    <div className="projetos-container">
      <h2>Projetos</h2>

      <div className="projetos-grid">
        {allProjects.map((projeto, index) => (
          <motion.div
            key={index}
            className="projeto-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            onClick={() => setExpandido(expandido === index ? null : index)}
          >
            <img src={projeto.imagem} alt={projeto.titulo} className="projeto-img" />
            <h3>{projeto.titulo}</h3>
            {expandido === index && (
              <>
                <p>{projeto.descricao}</p>
                <a href={projeto.link} target="_blank" rel="noopener noreferrer">
                  Ver Projeto
                </a>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
