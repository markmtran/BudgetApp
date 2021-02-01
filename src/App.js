import React from 'react';
import './App.css';
import LogInPage from './components/LogInPage';
import SignUpPage from './components/SignUpPage';
import CalcPage from './components/CalcPage';
import HistoryPage from './components/HistoryPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path='/login' component={LogInPage} />
          <Route exact path='/signup' component={SignUpPage} />
          <Route exact path='/' component={CalcPage} />
          <Route path='/history' component={HistoryPage} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;