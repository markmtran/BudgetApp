import React, { useState } from 'react';
import { Button, FormControl, FormControlLabel, Grid, InputAdornment, Radio, RadioGroup, TextField } from '@material-ui/core';

const ItemBar = (props) => {
  const [ name, setName ] = useState("");
  const [ type, setType ] = useState("");
  const [ amount, setAmount ] = useState(0);

  const handleName = (e) => {
    setName(e.target.value);
  }
  const handleAmount = (e) => {
    setAmount(e.target.value);
  }
  const handleType= (e) => {
    setType(e.target.value);
  }
  const handleAdd = () => {
    props.addTransaction([...props.transactions, { name: name, type: type, amount: amount}]);
    type === 'Income' ? props.setTotalIncome(props.totalIncome + parseInt(amount)) : props.setTotalExpense(props.totalExpense + parseInt(amount));
  }
  return (
    <Grid container item xs={12}>
      <Grid container item xs={5} justify='flex-end' alignItems='center'>
        <TextField 
          required
          placeholder='Item Name' 
          variant='outlined' 
          type='text'
          size='small'
          onChange={handleName}
        />
      </Grid>
      <Grid container item xs={2} justify='center'>
        <TextField 
          required
          variant='outlined'
          size='small'
          id='input-field'
          type='number'
          InputProps={{
            startAdornment: <InputAdornment position='start'>$</InputAdornment>,
            inputProps: {min: 0}
          }} 
          onChange={handleAmount}
        />
      </Grid> 
      <Grid container item xs={5}>
        <FormControl required>
          <RadioGroup row onChange={handleType}>
            <FormControlLabel 
              value='Income'
              label='Income'
              control={<Radio/>}
            />
            <FormControlLabel 
              value='Expense'
              label='Expense'
              control={<Radio/>}
            />
          </RadioGroup>
        </FormControl>
        <Button onClick={handleAdd} variant='contained' color='primary'>Add</Button>
      </Grid>
    </Grid>
  );
};

export default ItemBar;