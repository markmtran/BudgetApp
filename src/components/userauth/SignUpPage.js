import React from 'react';
import NavBar from '../NavBar';
import SignUp from './SignUp';

const SignUpPage = () => {
  return (
    <div>
      <NavBar title={'Sign-Up'} signOut={'none'} />
      <SignUp btnName={'Sign-Up'} />
    </div>
  );
}

export default SignUpPage;