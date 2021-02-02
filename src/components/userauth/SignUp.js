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

const SignUp = (props) => {
  const classes = useStyles();

  const [ email, setEmail ] = useState("");
  const [ password, setPassword] = useState("");
  const [ isEmailFilled, setIsEmailFilled ] = useState(false);
  const [ isPasswordFilled, setIsPasswordFilled ] = useState(false);

  const checkEmail = (e) => {
    if (e.target.value.length > 0) {
      setEmail(e.target.value);
      setIsEmailFilled(true);
    } else {
      setIsEmailFilled(false);
    }
  }

  const checkPassword = (e) => {
    if (e.target.value.length > 0) {
      setPassword(e.target.value);
      setIsPasswordFilled(true);
    } else {
      setIsPasswordFilled(false);
    }
  }

  const handleSignUp = () => {
    window.alert('hi');
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
            onChange={(e) => {checkEmail(e)}}
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
            onChange={(e) => {checkPassword(e)}}
          />
        </Grid>
        <Grid item xs={3} md={5} />
      </Grid>

      <Grid container item xs={12} >
        <Grid item xs={3} md={5} />
        <Grid container item xs={6} md={2} justify='center' alignItems='center'>
          <Button 
            fullWidth 
            disabled={!(isEmailFilled && isPasswordFilled)}
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