import React from 'react';
import FormComponent from './components/FormComponent';
import TableComponent from './components/TableComponent';
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <div className="form-wrapper">
        <FormComponent />
        <TableComponent />
      </div>
    </div>
  );
}