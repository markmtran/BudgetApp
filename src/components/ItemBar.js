import React, { useState } from 'react';
import { Button, FormControl, FormControlLabel, Grid, InputAdornment, Radio, RadioGroup, TextField } from '@material-ui/core';

const ItemBar = () => {
  return (
    <Grid container item xs={12}>
      <Grid container item xs={5} justify='flex-end' alignItems='center'>
        <TextField 
          placeholder='Item Name' 
          variant='outlined' 
          type='text'
          size='small'
        />
      </Grid>
      <Grid container item xs={2} justify='center'>
        <TextField 
          variant='outlined'
          size='small'
          id='input-field'
          type='number'
          InputProps={{
            startAdornment: <InputAdornment position='start'>$</InputAdornment>,
            inputProps: {min: 0}
          }} 
        />
      </Grid> 
      <Grid container item xs={5}>
        <FormControl>
          <RadioGroup row>
            <FormControlLabel 
              value='income'
              label='Income'
              control={<Radio/>}
            />
            <FormControlLabel 
              value='expense'
              label='Expense'
              control={<Radio/>}
            />
          </RadioGroup>
        </FormControl>
        <Button variant='contained' color='primary'>Add</Button>
      </Grid>
    </Grid>
  );
};

export default ItemBar;