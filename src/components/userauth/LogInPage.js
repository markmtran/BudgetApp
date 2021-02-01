import React from 'react';
import NavBar from '../NavBar';
import LogIn from './LogIn';

const LogInPage = () => {
  return (
    <div>
      <NavBar title={'Log-In'} />
      <LogIn />
    </div>
  );
}

export default LogInPage;