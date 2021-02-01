import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles({
  space: {
    marginTop: 250
  },
  spacing: {
    marginTop: 20,
    marginBottom: 20
  }
});

var actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: 'https://www.mark-t-budget.firebaseapp.com',
  // This must be true.
  handleCodeInApp: true,
  iOS: {
    bundleId: 'com.example.ios'
  },
  android: {
    packageName: 'com.example.android',
    installApp: true,
    minimumVersion: '12'
  },
  dynamicLinkDomain: 'example.page.link'
};

const SignUp = () => {
  const classes = useStyles();

  // firebase.auth().onAuthStateChanged(function(user) {
  //   if (user) {
  //     // User is signed in.
  //   } else {
  //     // No user is signed in.
  //   }
  // });

  const handleLogin = () => {
    const userEmail = document.getElementById('email-field').value;
    const userPass = document.getElementById('password-field').value;
    
    window.alert('working');

    // firebase.auth().createUserWithEmailAndPassword(userEmail, userPass)
    // .then((userCredential) => {
    //   // Signed in 
    //   var user = userCredential.user;
    //   // ...
    // })
    // .catch((error) => {
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // ..
    // });
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
          >Submit</Button>
        </Grid>
        <Grid item xs={3} md={5} />
      </Grid>
    </Grid>
  );
}

export default SignUp;