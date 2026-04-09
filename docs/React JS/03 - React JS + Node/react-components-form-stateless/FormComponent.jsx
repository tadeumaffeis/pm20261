import React, { useState } from 'react';

export default function CursoForm() {
  const [formData, setFormData] = useState({
    curso: '',
    sigla: '',
    periodo: '',
    ciclo: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Dados do formulário:', formData);
    alert(`Curso cadastrado com sucesso!\n\n${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="curso">Curso:</label><br />
        <input
          type="text"
          id="curso"
          name="curso"
          value={formData.curso}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="sigla">Sigla:</label><br />
        <input
          type="text"
          id="sigla"
          name="sigla"
          value={formData.sigla}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="periodo">Período:</label><br />
        <select
          id="periodo"
          name="periodo"
          value={formData.periodo}
          onChange={handleChange}
          required
        >
          <option value="">Selecione</option>
          <option value="M">M - Matutino</option>
          <option value="V">V - Vespertino</option>
          <option value="N">N - Noturno</option>
        </select>
      </div>

      <div>
        <label htmlFor="ciclo">Ciclo:</label><br />
        <select
          id="ciclo"
          name="ciclo"
          value={formData.ciclo}
          onChange={handleChange}
          required
        >
          <option value="">Selecione</option>
          <option value="S">S - Semestral</option>
          <option value="A">A - Anual</option>
        </select>
      </div>

      <br />
      <button type="submit">Salvar</button>
    </form>
  );
}