import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Calculator from './components/Calculator';

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Calculator />
    </React.Fragment>
  );
}

export default App;