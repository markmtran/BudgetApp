import React from 'react';
import { Button } from '@material-ui/core';
import firebase from 'firebase/app';

var db = firebase.firestore();

const History = () => {
  const handleAdd = () => {
    db.collection("users").add({
      first: "Ada",
      last: "Lovelace",
      born: 1815
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
  }
  return (
    <Button onClick={handleAdd}></Button>
  );
}

export default History;