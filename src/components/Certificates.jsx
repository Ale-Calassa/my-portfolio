import React from "react";
import './Certificates.scss';
import DecolaTech from '../img/DecolaTech.jpg'
import PythonFundamentals from '../img/PythonFundamentals.jpg'
import SistemasRelacionaisDB from '../img/SistemasRelacionaisDB.jpg'
import LibrasBasicoII from '../img/LibrasBasicoII.jpeg'
import FormDocker from '../img/FormDocker.jpg'

const certificates = [
  {
    nome: "Decola Tech 2024",
    instituicao: "DIO - Digital Innovation One",
    data: "Janeiro 2024",
    descricao: "Aprendizado da linguagem C# e .Net",
    imagem: DecolaTech
  },
  {
    nome: "Formação Python Fundamentals",
    instituicao: "DIO - Digital Innovation One",
    data: "Julho 2025",
    descricao: "Aprendizado da Linguagem Python desde o básico até orientação a objeto",
    imagem: PythonFundamentals
  },
  {
    nome: "Sistemas Relacionais DataBase",
    instituicao: "DIO - Digital Innovation One",
    data: "Setembro 2025",
    descricao: "Modulo em MySQL sobre sistemas relacionais",
    imagem: SistemasRelacionaisDB
  },
  {
    nome: "Libras Básico II",
    instituicao: "Centro Municipal de Formação dos Servidores do Jaboatão dos Guararapes",
    data: "Novembro 2024",
    descricao: "Curso de Lingua bresileira de sinais básico 2, vocabulario mais especifico e formação de sentenças.",
    imagem: LibrasBasicoII
  },
  {
    nome: "Formação Docker",
    instituicao: "DIO - Digital Innovation One",
    data: "Outubro 2025",
    descricao: "Formação voltada ao aprendizado de Docker e containerização",
    imagem: FormDocker
  }
];

const Certificates = () => {
  return (
    <div className="certificates-container">
      <h2>Certificados</h2>
      <div className="certificates-list">
        {certificates.map((cert, index) => (
          <div key={index} className="cert-card">
            <img src={cert.imagem} alt={cert.nome} className="cert-img" />
            
            <div className="cert-info">
              <h3>{cert.nome}</h3>
              <p className="inst_p">
                <strong>
                  {cert.instituicao}
                </strong> <br /> {cert.data}
              </p>
              <p className="desc_p">{cert.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;