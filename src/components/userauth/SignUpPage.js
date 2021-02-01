import React from 'react';
import NavBar from '../NavBar';
import SignUp from './SignUp';

const SignUpPage = () => {
  return (
    <div>
      <NavBar title={'Sign-Up'} />
      <SignUp />
    </div>
  );
}

export default SignUpPage;