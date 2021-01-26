import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import NewCalc from './components/NewCalc';

const App = () => {
  return (
    <React.Fragment>
      <NewCalc />
    </React.Fragment>
  );
}

export default App;