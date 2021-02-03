import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, Button } from '@material-ui/core';
import firebase from '../../firebase';
import 'firebase/auth';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  space: {
    marginTop: 250
  },
  spacing: {
    marginTop: 20,
    marginBottom: 20
  }
});

const LogIn = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const handleLogin = () => {
    const email = document.getElementById('email-field');
    const password = document.getElementById('password-field');
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      history.push('/home');
    })
    .catch((error) => {
      var errorMessage = error.message;
      window.alert(errorMessage);
    });
  }

  return(
    <Grid container item justify='center' alignItems='center' xs={12} className={classes.space}>
      <Grid container item xs={12}>
        <Grid item xs={3} md={5} />
        <Grid container item xs={6} md={2} justify='center' alignItems='center'>
          <TextField
            required
            fullWidth
            placeholder='Email' 
            variant='outlined' 
            type='email'
            size='small'
            id='email-field'
          />
        </Grid>
        <Grid item xs={3} md={5} />
      </Grid>

      <Grid container item xs={12} className={classes.spacing}>
        <Grid item xs={3} md={5} />
        <Grid container item xs={6} md={2} justify='center' alignItems='center'>
          <TextField
            required
            fullWidth
            placeholder='Password' 
            variant='outlined' 
            type='password'
            size='small'
            id='password-field'
          />
        </Grid>
        <Grid item xs={3} md={5} />
      </Grid>

      <Grid container item xs={12} >
        <Grid item xs={3} md={5} />
        <Grid container item xs={6} md={2} justify='center' alignItems='center'>
          <Button 
            fullWidth 
            variant='contained' 
            color='primary'
            onClick={handleLogin}
          >{props.btnName}</Button>
        </Grid>
        <Grid item xs={3} md={5} />
      </Grid>
    </Grid>
  );
}

export default LogIn;