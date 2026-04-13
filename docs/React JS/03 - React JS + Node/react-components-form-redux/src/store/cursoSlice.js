import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    curso: '',
    sigla: '',
    periodo: '',
    ciclo: '',
  },
  cursos: [],
};

const cursoSlice = createSlice({
  name: 'curso',
  initialState,
  reducers: {
    setCampoFormulario: (state, action) => {
      const { name, value } = action.payload;
      state.formData[name] = value;
    },
    limparFormulario: (state) => {
      state.formData = {
        curso: '',
        sigla: '',
        periodo: '',
        ciclo: '',
      };
    },
    adicionarCurso: (state, action) => {
      state.cursos.push(action.payload);
    },
  },
});

export const { setCampoFormulario, limparFormulario, adicionarCurso } =
  cursoSlice.actions;

export default cursoSlice.reducer;