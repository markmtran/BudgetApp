import React from 'react';
import NavBar from './NavBar';
import SignIn from './SignIn';

const SignInPage = () => {
  return (
    <div>
      <NavBar title={'Sign-In'} />
      <SignIn />
    </div>
  );
}

export default SignInPage;