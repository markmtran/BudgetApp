import React from 'react';
import NavBar from '../NavBar';
import LogIn from './LogIn';

const LogInPage = () => {
  return (
    <div>
      <NavBar title={'Log-In'} signOut={'none'} />
      <LogIn btnName={'Log-in'} />
    </div>
  );
}

export default LogInPage;