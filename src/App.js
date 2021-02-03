import React from 'react';
import './App.css';
import LogInPage from './components/userauth/LogInPage';
import SignUpPage from './components/userauth/SignUpPage';
import CalcPage from './components/calculator/CalcPage';
import HistoryPage from './components/history/HistoryPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={SignUpPage} />
        <Route exact path='/login' component={LogInPage} />
        <Route exact path='/home' component={CalcPage} />
        <Route path='/history' component={HistoryPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;