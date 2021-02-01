import React from 'react';
import './App.css';
import SignInPage from './components/SignInPage';
import CalcPage from './components/CalcPage';
import HistoryPage from './components/HistoryPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={SignInPage} />
          <Route exact path='/calculator' component={CalcPage} />
          <Route path='/history' component={HistoryPage} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;