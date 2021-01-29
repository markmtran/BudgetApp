import React from 'react';
import NavBar from './NavBar';
import Calculator from './Calculator';

const HomePage = () => {
  return (
    <div>
      <NavBar title={'Budget Calculator'} />
      <Calculator />
    </div>
  );
}

export default HomePage;