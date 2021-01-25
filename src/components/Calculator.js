import React from 'react';
import { Grid, InputAdornment, TextField, Typography } from '@material-ui/core';

const Calculator = () => {
  return (
    <Grid container justify='center' alignItems='center'>
      <Grid container justify='center' alignItems='center' style={{width: '100%'}}>
        <Grid container item style={{width: '100%'}}>
          <Typography>How much did you make this month? </Typography>
          <TextField 
            variant="outlined" 
            InputProps={{
              startAdornment: <InputAdornment position='start'>$</InputAdornment>,
              inputProps: {min: 0}
            }} 
            type='number'
            size='small'
          />
        </Grid>

        <Grid container item style={{width: '100%'}}>
          <Typography>Expected Bill Expenses: </Typography>
          <TextField 
            variant="outlined" 
            InputProps={{
              startAdornment: <InputAdornment position='start'>$</InputAdornment>,
              inputProps: {min: 0}
            }} 
            type='number'
            size='small'
          />
        </Grid>

        <Grid container item style={{width: '100%'}}>
          <Typography>Expected Grocery Expenses: </Typography>
          <TextField 
            variant="outlined" 
            InputProps={{
              startAdornment: <InputAdornment position='start'>$</InputAdornment>,
              inputProps: {min: 0}
            }} 
            type='number'
            size='small'
          />      
        </Grid>

        <Grid container item style={{width: '100%'}}>
          <Typography>How much will you put in savings? </Typography>
          <TextField 
            variant="outlined" 
            InputProps={{
              startAdornment: <InputAdornment position='start'>$</InputAdornment>,
              inputProps: {min: 0}
            }} 
            type='number'
            size='small'
          />      
        </Grid>

        <Grid container item style={{width: '100%'}}>
          <Typography>Amount Left: </Typography>
          <TextField 
            variant="outlined" 
            InputProps={{
              startAdornment: <InputAdornment position='start'>$</InputAdornment>,
              inputProps: {min: 0}
            }} 
            type='number'
            size='small'
          />      
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Calculator;