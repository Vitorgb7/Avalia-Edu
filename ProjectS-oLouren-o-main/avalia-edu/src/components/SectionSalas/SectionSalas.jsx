import { useState } from 'react';
import './SectionSalas.css';


const SectionSalas = () => {
  const [showStudents, setShowStudents] = useState(null);
  const [studentGrades, setStudentGrades] = useState({});
  const [resultDisplayed, setResultDisplayed] = useState(false);

  // aqui é a simulação da API
  const salasData = [
    { id: 1, name: '1A', students: ['Ana', 'Bernardo', 'Carlos', 'Daniela', 'Eduardo', 'Fernanda', 'Gabriel', 'Helena', 'Isabela'] },
    { id: 2, name: '2B', students: ['João', 'Laura', 'Mateus', 'Natália', 'Otávio', 'Patrícia', 'Quiteria', 'Rafael', 'Sofia', 'Thiago'] },
    { id: 3, name: '3C', students: ['Vitor Gabriel Silva de Lima', 'Wanessa', 'Xavier', 'Yasmin', 'Zélio', 'Amanda', 'Bruno', 'Clara', 'Davi', 'Evelyn'] }
  ];

  // só atualiza o valor do showStudents 
  const handleSessionClick = (salaId) => setShowStudents(salaId);

  //                          nome    nota   indice 
  const handleGradeChange = (student, grade, index) => {
    setStudentGrades((prevGrades) => ({
      // com spread(...) ele faz uma copia do array original
      ...prevGrades,
      [student]: { ...prevGrades[student], [index]: grade, sala: salasData.find(sala => sala.id === showStudents)?.name },
    }));
  };

  const calculateAverage = (grades) => {
    // aqui ele transforma as notas em um array de números
    const gradeValues = Object.values(grades).map(Number);
  
    // aqui ele filtra apenas os valores numéricos entre 0 e 10
    const validGrades = gradeValues.filter((value) => !isNaN(value) && value >= 0 && value <= 10);
  
    if (validGrades.length > 0) {
      const average = validGrades.reduce((sum, value) => sum + value, 0) / validGrades.length;
  
      return average.toFixed(2);
    }
  
    return 'Número inválido';
  };


  // funções para a parte do resultado
  const displayResult = (e) => {
    e.preventDefault();
    setResultDisplayed(true);
  };

  const clearResults = (student) => {
    setStudentGrades((prevGrades) => {
      const newGrades = {...prevGrades}
      delete newGrades[student]
      return newGrades
    });
  };

  return (
    <div className='SectionSalas'>

      {salasData.map((sala) => (
        <div key={sala.id} onClick={() => handleSessionClick(sala.id)} id='Div-sala'>
          <section>
            {sala.name}
            {showStudents === sala.id && (
              <ul>
                {sala.students.map((student) => (
                  <li key={student}>
                    <h4>{student}</h4>
                    {[1, 2, 3, 4].map((index) => (
                      <input
                        key={index}
                        type="text"
                        placeholder={`Nota ${index}`}
                        onChange={(e) => handleGradeChange(student,e.target.value, index)}
                      />
                    ))}
                  </li>
                ))}
              </ul>
          )}
          </section>
        </div>
      ))}

      <div className='Resultados'>
        <h2>Resultados</h2>
        <button onClick={displayResult}>Exibir Resultado</button>
        {resultDisplayed && (
          <ul>
            {Object.entries(studentGrades).map(([student, data], index) => (
              <li key={index}>{`Média ${student} ${data.sala} : ${calculateAverage(data)}`} 
              <button onClick={() => clearResults(student)} className='limpar'>Limpar</button>
              <hr />
              </li>
              ))}
          </ul>
        )}
      </div>

    </div>
  );
};

export default SectionSalas;