import React, { useState } from 'react';
import FormComponent from './components/FormComponent';
import './App.css';
import TableComponent from './components/TableComponent';

export default function App() {

  const [cursos, setCursos] = useState([]); 

  const addCurso = (c) => {
    const novoCurso = {
      curso: c.curso,
      sigla: c.sigla,
      periodo: c.periodo,
      ciclo: c.ciclo,
    };
    setCursos((prev) => [...prev, novoCurso]);
  }

  return (
    <div className="app-container">
      <div className="form-wrapper">
        <FormComponent onChangeCurso={addCurso}/>
        <TableComponent rows={cursos}/>
      </div>
    </div>
  );
}