import React, { useState } from 'react';

import NavbarLogin from '../Navbar/NavbarLogin/NavbarLogin';
import Footer from '../Footer/Footer';
import { useLocation } from 'react-router-dom';

import './QuemSomos.css';
import SectionImage from './SectionImage/SectionImage';

const QuemSomos = () => {
  const location = useLocation();
  const isRedirect = location.pathname === '/Quem-Somos';

  const textoCompleto = `
  Bem-vindo à AvaliaEdu, sua parceira dedicada ao avanço educacional em São Lourenço da Mata, Pernambuco. Estamos comprometidos em proporcionar uma experiência de avaliação de desempenho única, criada com paixão e inspiração nas cores vibrantes e ricas da bandeira local.

  Na AvaliaEdu, acreditamos no poder transformador da educação e no papel crucial que gestores e professores desempenham nesse processo. Nossa plataforma foi meticulosamente desenvolvida para capacitar educadores e administradores, oferecendo uma maneira eficiente e inovadora de avaliar o desempenho dos alunos.
  
  - Ao incorporar as cores da bandeira de São Lourenço da Mata, buscamos honrar nossa conexão com a comunidade local e reforçar nosso compromisso com a excelência educacional. A escolha das cores reflete não apenas o orgulho em fazer parte desta região, mas também simboliza nossa dedicação à sabedoria, representada pelo verde, e à inovação, personificada pelo amarelo. 
  
  Nossa logo, inspirada nas mesmas cores, é um símbolo visual de nossa missão: impulsionar a educação por meio da harmonia entre a tradição e a vanguarda. A sabedoria que vem do passado e a inovação que molda o futuro são os pilares fundamentais em que construímos a AvaliaEdu.

  Em cada funcionalidade da nossa plataforma, buscamos não apenas avaliar o desempenho dos alunos, mas também fornecer ferramentas valiosas para gestores e professores aprimorarem continuamente seus métodos de ensino. Nossa abordagem centrada no usuário visa tornar o processo de avaliação mais eficaz, intuitivo e adaptado às necessidades específicas de nossa comunidade educacional.

  Estamos comprometidos em contribuir para a excelência educacional em São Lourenço da Mata, ajudando gestores e professores a moldarem um futuro brilhante para seus alunos. Na AvaliaEdu, acreditamos que a educação é a chave para o progresso, e é com esse espírito que continuaremos a crescer e evoluir, sempre em sintonia com as cores vibrantes e inspiradoras de nossa amada cidade.`;

  const [mostrarTextoCompleto, setMostrarTextoCompleto] = useState(false);

  const handleToggleTexto = () => {
    setMostrarTextoCompleto(!mostrarTextoCompleto);
  };

  return (
    <div className='QuemSomos'>
      {isRedirect && <NavbarLogin />}

      <h1 className='titulo-principal'>Quem somos?</h1>
      <h3>AvaliaEdu - Impulsionando a Sabedoria e Inovação em São Lourenço da Mata, Pernambuco.</h3>
      <div className="section-principal">
        <div className="section-text">
          <p>
            {mostrarTextoCompleto ? textoCompleto : `${textoCompleto.slice(0, 596)}...`}
          </p>
          <button onClick={handleToggleTexto}>
            {mostrarTextoCompleto ? 'Ler menos' : 'Ler mais'}
          </button>
        </div>
        
        <img src="./imagem-quem-somos.jpg" alt="imagem" className='imagem-quem-somos animacao-flutuante'/>
        {/* <SectionImage /> */}
      </div>
      {isRedirect && <Footer />}
    </div>
  );
};

export default QuemSomos;
