import React, { useState } from 'react';
import { Grid, InputAdornment, TextField } from '@material-ui/core';
import AddBtn from './AddBtn';
import DeleteBtn from './DeleteBtn';

const Expense = () => {
  const [ expenseName, setExpenseName ] = useState("");
  const [ expenseValue, setExpenseValue ] = useState(0);

  const handleExpenseName = (e) => {
    setExpenseName(e.target.value);
  };
  const handleExpenseValue = (e) => {
    setExpenseValue(e.target.value);
  };

  return (
    <Grid container item xs={12}>
      <Grid container item xs={5} justify='flex-end' alignItems='center'>
        <TextField 
          placeholder='Expense Item' 
          variant='outlined' 
          onChange={handleExpenseName} 
          type='text'
          size='small'
        />
      </Grid>
      <Grid container item xs={2} justify='center'>
        <TextField 
          variant="outlined" 
          InputProps={{
            startAdornment: <InputAdornment position='start'>$</InputAdornment>,
            inputProps: {min: 0}
          }} 
          type='number'
          size='small'
          
          onChange={handleExpenseValue}
        />
      </Grid> 
      <Grid container item xs={5}>
        <AddBtn />
        <DeleteBtn />
      </Grid>
    </Grid>
  );
};

export default Expense;