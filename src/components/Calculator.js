import React from 'react';
import { Button, Grid, InputAdornment, TextField, Typography } from '@material-ui/core';

const Calculator = () => {
  return (
    <Grid container item justify='center' alignItems='center' xs={12} spacing={10}>
      <Grid container item xs={12} style={{marginTop: 100}}>
        <Grid container item xs={5} justify='flex-end' alignItems='center'>
          <Typography>Monthly Earnings:</Typography>
        </Grid>
        <Grid item xs={1}/>
        <Grid container item xs={6}>
          <TextField 
            variant="outlined" 
            InputProps={{
              startAdornment: <InputAdornment position='start'>$</InputAdornment>,
              inputProps: {min: 0}
            }} 
            type='number'
            size='small'
            defaultValue={0}
          />
        </Grid> 
      </Grid>

      <Grid container item xs={12}>
        <Grid container item xs={5} justify='flex-end' alignItems='center'>
          <Typography>Expected Bill Expenses:</Typography>
        </Grid>
        <Grid item xs={1}/>
        <Grid container item xs={6}>
          <TextField 
            variant="outlined" 
            InputProps={{
              startAdornment: <InputAdornment position='start'>$</InputAdornment>,
              inputProps: {min: 0}
            }} 
            type='number'
            size='small'
            defaultValue={0}
          />
        </Grid> 
      </Grid>
      
      <Grid container item xs={12}>
        <Grid container item xs={5} justify='flex-end' alignItems='center'>
          <Typography>Expected Grocery Expenses:</Typography>
        </Grid>
        <Grid item xs={1}/>
        <Grid container item xs={6}>
          <TextField 
            variant="outlined" 
            InputProps={{
              startAdornment: <InputAdornment position='start'>$</InputAdornment>,
              inputProps: {min: 0}
            }} 
            type='number'
            size='small'
            defaultValue={0}
          />
        </Grid> 
      </Grid>

      <Grid container item xs={12}>
        <Grid container item xs={5} justify='flex-end' alignItems='center'>
          <Typography>Amount to Save:</Typography>
        </Grid>
        <Grid item xs={1}/>
        <Grid container item xs={6}>
          <TextField 
            variant="outlined" 
            InputProps={{
              startAdornment: <InputAdornment position='start'>$</InputAdornment>,
              inputProps: {min: 0}
            }} 
            type='number'
            size='small'
            defaultValue={0}
          />
        </Grid> 
      </Grid>

      <Grid container item xs={12}>
        <Grid item xs={6}/>
        <Grid container item xs={6}>
          <Button variant='contained' color='primary'>Submit</Button>
        </Grid>
      </Grid>

      <Grid container item xs={12}>
        <Grid container item xs={5} justify='flex-end' alignItems='center'>
          <Typography>Amount Available:</Typography>
        </Grid>
        <Grid item xs={1}/>
        <Grid container item xs={6}>
          <Typography>$0</Typography>
        </Grid> 
      </Grid>
    </Grid>
  );
}

export default Calculator;