import React from 'react';
import './App.css';
import LogInPage from './components/userauth/LogInPage';
import SignUpPage from './components/userauth/SignUpPage';
import CalcPage from './components/calculator/CalcPage';
import HistoryPage from './components/history/HistoryPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './auth';
import PrivateRoute from './PrivateRoute';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/login' component={LogInPage} />
          <Route exact path='/signup' component={SignUpPage} />
          <PrivateRoute exact path='/' component={CalcPage} />
          <Route path='/history' component={HistoryPage} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;