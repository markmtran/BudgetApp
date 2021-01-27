import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import HistoryPage from './components/HistoryPage';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/history' component={HistoryPage} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;