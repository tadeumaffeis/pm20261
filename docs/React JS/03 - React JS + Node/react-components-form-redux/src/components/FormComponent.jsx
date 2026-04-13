import React from 'react';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  adicionarCurso,
  limparFormulario,
  setCampoFormulario,
} from '../store/cursoSlice';

export default function FormComponent() {
  const dispatch = useDispatch();

  const formData = useSelector((state) => state.curso.formData);
  const cursos = useSelector((state) => state.curso.cursos);

  const handleChange = (event) => {
    const { name, value } = event.target;

    dispatch(setCampoFormulario({ name, value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const novoCurso = {
      curso: formData.curso,
      sigla: formData.sigla,
      periodo: formData.periodo,
      ciclo: formData.ciclo,
    };

    dispatch(adicionarCurso(novoCurso));

    console.log('Curso adicionado:', novoCurso);

    dispatch(limparFormulario());
  };

  const showCurso = () => {
    console.log('FormData atual:', formData);
    console.log('Vetor de cursos:', cursos);
  };

  return (
    <Paper elevation={3} sx={{ p: 4, width: '100%' }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Cadastro de Curso
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
      >
        <TextField
          label="Curso"
          name="curso"
          value={formData.curso}
          onChange={handleChange}
          fullWidth
          required
        />

        <TextField
          label="Sigla"
          name="sigla"
          value={formData.sigla}
          onChange={handleChange}
          fullWidth
          required
        />

        <FormControl fullWidth required>
          <InputLabel id="periodo-label">Período</InputLabel>
          <Select
            labelId="periodo-label"
            id="periodo"
            name="periodo"
            value={formData.periodo}
            label="Período"
            onChange={handleChange}
          >
            <MenuItem value="">Selecione</MenuItem>
            <MenuItem value="M">M - Matutino</MenuItem>
            <MenuItem value="V">V - Vespertino</MenuItem>
            <MenuItem value="N">N - Noturno</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth required>
          <InputLabel id="ciclo-label">Ciclo</InputLabel>
          <Select
            labelId="ciclo-label"
            id="ciclo"
            name="ciclo"
            value={formData.ciclo}
            label="Ciclo"
            onChange={handleChange}
          >
            <MenuItem value="">Selecione</MenuItem>
            <MenuItem value="S">S - Semestral</MenuItem>
            <MenuItem value="A">A - Anual</MenuItem>
          </Select>
        </FormControl>

        <Button type="submit" variant="contained" size="large">
          Salvar
        </Button>

        <Button type="button" variant="outlined" onClick={showCurso} size="large">
          Show
        </Button>
      </Box>
    </Paper>
  );
}