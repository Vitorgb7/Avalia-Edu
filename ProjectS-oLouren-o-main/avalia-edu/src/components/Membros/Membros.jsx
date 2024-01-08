import React from 'react';

import Footer from '../Footer/Footer';
import NavbarLogin from '../Navbar/NavbarLogin/NavbarLogin'
import { Outlet, useLocation } from 'react-router-dom';
import './Membros.css';


const Membros = () => {
  const location = useLocation()

  const Pessoa = ({ nome, cargo, descricao, foto, link }) => (

    <div className='Pessoa'>
      <a href={link} target="_blank" rel="noopener noreferrer"> 
      
      <div className="text-membros">
      <h2>{nome}</h2>
      <img src={foto} alt="desenvolvedores" className='foto-desenvolvedores'/>
      </div>
        <div className="text-membros-description">
          <p><strong>{cargo}</strong></p>
          <p>{descricao}</p>
        </div>
        </a>
    </div>
  );

  const isRedirect = location.pathname === '/Membros';


  return (
    <div className='Membros'>     
      {isRedirect && <NavbarLogin />} 
       
      <div className='TextoInicial'>
        <h1>Desenvolvedores</h1>
        <h3>AvaliaEdu - Impulsionando a Sabedoria e Inovação em São Lourenço da Mata, Pernambuco.</h3>
        <p><strong>As Mentes Criativas por Trás do AvaliaEdu:</strong></p>
      </div>
      <div className='Equipe'>
        <Pessoa
          nome="João Alberto"
          cargo="Desenvolvedor Front-end"
          descricao="João é apaixonado por criar interfaces incríveis e experiências de usuário intuitivas."
          foto= './joao-foto.jpg'
          link='https://github.com/joaoalberto61'
        />
        <Pessoa
          nome="Vitor Gabriel"
          cargo="Desenvolvedor Front-end"
          descricao="Vitor é apaixonado por tecnologia e pela criação de interfaces intuitivas."
          foto= './vitor-foto.jpg'
          link='https://github.com/Vitorgb7'
        />
        <Pessoa
          nome="Thaif Ramom"
          cargo="Designer UX/UI"
          descricao="Thaif combina sua habilidade artística com uma abordagem centrada no usuário para criar designs visualmente atraentes e funcionais."
          foto='./thaif-foto.jpg'
          link='https://github.com/Thaif27'
        />
        <Pessoa
          nome="Janaina Lima"
          cargo="Analista de Dados"
          descricao="Jane possui expertise em analisar dados complexos e extrair insights valiosos para a tomada de decisões."
        />
        <Pessoa
          nome="Eduarda Gomes"
          cargo="Engenheira de Software"
          descricao="Eduarda é uma engenheira de software dedicada, focada em desenvolver soluções inovadoras e eficientes."
        />
        <Pessoa
          nome="Saulo Ambrosio"
          cargo="Analista de QA"
          descricao="Saulo é responsável por garantir a qualidade do software, realizando testes rigorosos para identificar e corrigir possíveis problemas."
        />
      </div>
      <Outlet />     
      <div className="footer-membros">
        {isRedirect && <Footer />}
      </div>
    </div>
  );
}

export default Membros;
