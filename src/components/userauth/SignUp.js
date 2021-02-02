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

const SignUp = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const handleSignUp = () => {
    const email = document.getElementById('email-field');
    const password = document.getElementById('password-field');
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      history.push('/login');
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert(errorCode + ": " + errorMessage);
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
            name='email'
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
            name='password'
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
            onClick={handleSignUp}
          >{props.btnName}</Button>
        </Grid>
        <Grid item xs={3} md={5} />
      </Grid>
    </Grid>
  );
}

export default SignUp;