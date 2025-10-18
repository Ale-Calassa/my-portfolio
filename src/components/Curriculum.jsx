import React from 'react';
import './Curriculum.scss';
import curriculum from '../pdf/Curriculum2025.pdf'

const Curriculum = () => {
  return (
    <div className="curriculum-container">
      <header>
        <h1>Alesson S Calaça</h1>
        <p>Computer Science · Full-Stack & Data Analyst</p>
        <p>(81) 99568-0112</p>
        <p>
          <a href="mailto:alesson.calassa@gmail.com">alesson.calassa@gmail.com</a>
        </p>
        <p>
          <a
            href="https://github.com/Ale-Calassa"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{' '}
          ·{' '}
          <a
            href="https://www.linkedin.com/in/alesson-de-santana-cala%C3%A7a-0a6b601b5/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>

        {/* Botão de download do currículo */}
        <div className="curriculum-download">
          <a href={curriculum} download>
            <button>📄 Baixar Currículo em PDF</button>
          </a>
        </div>
      </header>

      <section>
        <h2>Perfil Profissional</h2>
        <p>
          Graduando em Ciência da Computação com experiência acadêmica em programação, redes, banco de dados SQL e ciência de dados com Python, Power BI e Excel. Participei de projetos, bootcamps e práticas que reforçaram minha formação técnica. Também possuo vivência profissional em atendimento ao cliente, com destaque para funções de liderança e comunicação.
        </p>
      </section>

      <section>
        <h2>Experiência Profissional</h2>
        <h3>Primo Capital</h3>
        <p>Operador de Telemarketing · Abril 2023 - Agosto 2024</p>
        <ul>
          <li>Atendimento ativo e receptivo</li>
          <li>Registro de informações em sistema CRM</li>
          <li>Acompanhamento de produtividade com Power BI</li>
        </ul>

        <h3>Raia Drogasil</h3>
        <p>Supervisor de Loja · Abril 2018 - Abril 2022</p>
        <ul>
          <li>Gerenciamento de equipe e estoque</li>
          <li>Treinamentos e acompanhamento de metas</li>
          <li>Resolução de conflitos operacionais</li>
        </ul>
      </section>

      <section>
        <h2>Formação Acadêmica</h2>
        <p><strong>Bacharelado em Ciência da Computação</strong> · Uninassau Graças · Previsão: 2026</p>
        <p>
          Resumo: Formação sólida em fundamentos teóricos e práticos da computação, com foco em estruturas de dados, algoritmos, linguagens de programação, redes de computadores, sistemas distribuídos e ciência de dados. O curso também abrange áreas como inteligência artificial, engenharia de software, arquitetura de sistemas, aprendizado de máquina e computação em larga escala.
        </p>
      </section>

      <section>
        <h2>Certificados</h2>
        <ul>
          <li>Python Fundamentals - DIO</li>
          <li>Análise de Dados com Power BI - DIO</li>
          <li>Decola Tech - C# / .Net - DIO</li>
          <li>Linux Fundamentals - DIO</li>
          <li>Formação Docker - DIO</li>
          <li>Libras Básico II - Centro M. de Formação Serv. - J.G</li>
        </ul>
      </section>

      <section>
        <h2>Idiomas</h2>
        <ul>
          <li>Libras - Intermediário</li>
          <li>Inglês - Avançado</li>
          <li>Espanhol - Avançado</li>
        </ul>
      </section>

      <section>
        <h2>Habilidades</h2>
        <ul>
          <li>Trabalho em equipe</li>
          <li>Liderança</li>
          <li>Backend</li>
          <li>Frontend</li>
          <li>Docker</li>
          <li>Dados</li>
          <li>Cloud</li>
          <li>Infraestrutura</li>
        </ul>
      </section>
    </div>
  );
};

export default Curriculum;
