import React, { useState } from 'react';
import SectionText from '../SectionText/SectionText';

import './Login.css'


const Login = () => {
  const [cpf, setCpf] = useState('');
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    const { value } = e.target;
    // Removendo pontos e traços do CPF utilizando regex(expressões regulares)
    const cleanedValue = value.replace(/[^\d]/g, '');
    setCpf(cleanedValue);

    // aqui ele limpa se tiver com erro no input
    setError(false)
  };

  const validateCPF = (cpf) => {
    // utilizando regex também aqui para verificar se tem 11 digitos escritos no input
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
      return false;
    }

    let sum = 0;
    let remainder;

    for (let i = 1; i <= 9; i++) {
      sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    remainder = (sum * 10) % 11;

    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }

    if (remainder !== parseInt(cpf.substring(9, 10))) {
      return false;
    }

    sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    remainder = (sum * 10) % 11;

    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }

    if (remainder !== parseInt(cpf.substring(10, 11))) {
      return false;
    }

    return true;
  };


  // verifica se o CPF é válido usando a função validateCPF e exibe um alerta se não for válido.
  const handleLogin = () => {
    // verificando se o CPF é válido
    if (!validateCPF(cpf)) {
      // deixar a caixa do input com a borda vermelha para uma alusão de erro
      const inputCpf = document.getElementById('input-cpf')
      inputCpf.style.border = '3px solid red';
      
      const paragrafo2 = document.getElementById('paragrafo2')
      paragrafo2.style.display = 'flex'
      paragrafo2.style.color = 'red'
      paragrafo2.style.fontSize = '14px'
      
      setError(true)
      return;
      
    }else{
      setError(false)
       // deixar a caixa do input com a borda verde para uma alusão de acerto
      const inputCpf = document.getElementById('input-cpf')
      inputCpf.style.border = '3px solid green';

      const paragrafo3 = document.getElementById('paragrafo3')
      paragrafo3.style.display = 'flex'
      paragrafo3.style.color = 'green'
      paragrafo3.style.fontSize = '14px'

      alert('Login bem-sucedido!'); // Simples alerta para representar o login bem-sucedido
      window.location.href = '/home/home.html'; //redirecionamento para home, que esta na pasta public
    }
  };


  return (
    <div className='login'>
      <div className="section-text">
        <SectionText />
      </div>  
      <div className="section-input">
        <h1>AvaliaEdu</h1>
        <label>
          CPF:
          <input
            type="text"
            value={cpf}
            onChange={handleInputChange}
            placeholder='Digite seu cpf'
            id='input-cpf'
            style={{ border: error ? '3px solid red' : '3px solid black' }}
          />
        </label>

        {/* condicional(&&) simples aqui do jsx, só ta verificando se o input está vazio */}
        {cpf === '' && (
          <p id='paragrafo1'><strong>*Apenas números</strong></p>
        )}

        <p id='paragrafo2' style={{ display: error ? 'flex' : 'none', color: 'red', fontSize: '14px' }}><strong>*CPF inválido.</strong></p>
        
        <p id='paragrafo3'><strong>*Login feito com sucesso</strong></p>
        <br />
        <button 
        onClick={handleLogin} id='btn-login'>Entrar</button>
      </div>
    </div>
  );
};

export default Login;