import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import firebase from 'firebase/app';
import 'firebase/firestore';

var db = firebase.firestore();

const useStyles = makeStyles({
  space: {
    marginTop: 20,
    marginBottom: 100
  }
});

const SubmitBtn = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    db.collection(props.username).add({
      totalIncome: props.totalIncome,
      totalExpense: props.totalExpense,
      netIncome: props.netIncome
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    setOpen(true);
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return(
    <Grid container item xs={12} className={classes.space}>
      <Grid item xs={3} md={5} />
      <Grid container item xs={6} md={2} justify='center' alignItems='center'>
        <Button 
          fullWidth 
          variant='contained' 
          color='primary'
          onClick={handleSubmit}
        >Submit to History</Button>

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" variant='filled'>
            Submission successful!
          </Alert>
        </Snackbar>
      </Grid>
      <Grid item xs={3} md={5} />
    </Grid>
  );
};

export default SubmitBtn;