import React, { useState } from 'react';
import { Grid, InputAdornment, TextField } from '@material-ui/core';
import AddBtn from './AddBtn';
import DeleteBtn from './DeleteBtn';

const Income = (props) => {
  const [ incomeName, setIncomeName ] = useState("Income Item");
  const [ incomeValue, setIncomeValue ] = useState(0);

  const handleIncomeName = (e) => {
    setIncomeName(e.target.value);
  };
  const handleIncomeValue = (e) => {
    props.setTotalIncome(props.totalIncome + parseInt(e.target.value));
  };

  const handleAdd = (e) => {

  }

  return (
    <Grid container item xs={12}>
      <Grid container item xs={5} justify='flex-end' alignItems='center'>
        <TextField 
          placeholder='Income Item' 
          variant='outlined' 
          onChange={handleIncomeName} 
          type='text'
          size='small'
          defaultValue={incomeName}
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
          onChange={handleIncomeValue}
          defaultValue={incomeValue}
        />
      </Grid> 
      <Grid container item xs={5}>
        <AddBtn onClick={handleAdd}/>
        <DeleteBtn />
      </Grid>
    </Grid>
  );
};

export default Income;