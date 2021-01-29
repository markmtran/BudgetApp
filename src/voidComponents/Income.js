import React, { useState } from 'react';
import { Grid, InputAdornment, TextField } from '@material-ui/core';
import AddBtn from './AddBtn';
import DeleteBtn from './DeleteBtn';

const Income = (props) => {
  const [ incomeValue, setIncomeValue ] = useState(0);

  const handleIncomeValue = () => {
    const input = document.getElementById('input-field');
    setIncomeValue(input.value);
    const final = parseFloat(input.value) + parseFloat(props.totalIncome);
    props.setTotalIncome(final);
  };

  const handleAdd = (e) => {

  };
  const handleDelete = (e) => {

  };

  return (
    <Grid container item xs={12}>
      <Grid container item xs={5} justify='flex-end' alignItems='center'>
        <TextField 
          placeholder='Income Item' 
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
          onChange={handleIncomeValue}
        />
      </Grid> 
      <Grid container item xs={5}>
        <AddBtn onClick={handleAdd}/>
        <DeleteBtn onClick={handleDelete} />
      </Grid>
    </Grid>
  );
};

export default Income;