import React from 'react';
import NavBar from '../NavBar';
import History from './History';

const HistoryPage = () => {
  return (
    <div>
      <NavBar title={'Budget History'} />
      <History />
    </div>
  );
}

export default HistoryPage;