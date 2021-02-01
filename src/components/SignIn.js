import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles({
  space: {
    marginTop: 250
  },
  btnSpace: {
    marginTop: 20
  }
})

const SignIn = () => {
  const classes = useStyles();
  return(
    <Grid container item justify='center' alignItems='center' xs={12} className={classes.space}>
      <Grid container item xs={12}>
        <Grid item md={5} />
        <Grid container item xs={12} md={2} justify='center' alignItems='center'>
          <TextField
            required
            fullWidth
            placeholder='Email' 
            variant='outlined' 
            type='email'
            size='small'
          />
        </Grid>
        <Grid item md={5} />
      </Grid>

      <Grid container item xs={12} className={classes.btnSpace}>
        <Grid item md={5} />
        <Grid container item xs={12} md={2} justify='center' alignItems='center'>
          <Button fullWidth variant='contained' color='primary'>Submit</Button>
        </Grid>
        <Grid item md={5} />
      </Grid>
    </Grid>
  );
}

export default SignIn;