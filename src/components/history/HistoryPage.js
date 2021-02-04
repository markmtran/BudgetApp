import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar';
import History from './History';
import firebase from 'firebase/app';
import 'firebase/auth';
import { useHistory } from 'react-router-dom';

const HistoryPage = () => {
  const history = useHistory();
  const [ username, setUsername] = useState("");
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUsername(user.email);
      } else {
        history.push('/');
      }
    });
  }, [ history ]);

  return (
    <div>
      <NavBar title={username + '\'s Budget History'} />
      <History username={username} />
    </div>
  );
}

export default HistoryPage;