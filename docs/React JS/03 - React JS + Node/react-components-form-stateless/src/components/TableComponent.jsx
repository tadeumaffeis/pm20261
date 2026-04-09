import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

export default function TableComponent({ rows }) {
  const getPeriodoLabel = (periodo) => {
    switch (periodo) {
      case 'M':
        return 'Matutino';
      case 'V':
        return 'Vespertino';
      case 'N':
        return 'Noturno';
      default:
        return periodo;
    }
  };

  const getCicloLabel = (ciclo) => {
    switch (ciclo) {
      case 'S':
        return 'Semestral';
      case 'A':
        return 'Anual';
      default:
        return ciclo;
    }
  };

  return (
    <TableContainer component={Paper} elevation={3} sx={{ mt: 4 }}>
      <Typography variant="h5" component="h1" sx={{ p: 2 }}>
        Cursos Cadastrados
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>Curso</strong></TableCell>
            <TableCell><strong>Sigla</strong></TableCell>
            <TableCell><strong>Período</strong></TableCell>
            <TableCell><strong>Ciclo</strong></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.length > 0 ? (
            rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.curso}</TableCell>
                <TableCell>{row.sigla}</TableCell>
                <TableCell>{getPeriodoLabel(row.periodo)}</TableCell>
                <TableCell>{getCicloLabel(row.ciclo)}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} align="center">
                Nenhum curso cadastrado.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}