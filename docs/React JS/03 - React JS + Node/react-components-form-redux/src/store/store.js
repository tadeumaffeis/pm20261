import { configureStore } from '@reduxjs/toolkit';
import cursoReducer from './cursoSlice';

export const store = configureStore({
  reducer: {
    curso: cursoReducer,
  },
});
