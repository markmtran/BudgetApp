import React, { useState } from 'react';
import { Button, FormControl, FormControlLabel, Grid, InputAdornment, Radio, RadioGroup, TextField } from '@material-ui/core';

const ItemBar = (props) => {
  const [ name, setName ] = useState("");
  const [ type, setType ] = useState("");
  const [ amount, setAmount ] = useState(0);
  const [ color, setColor ] = useState('white');

  const handleTypeAndColor = (e) => {
    setType(e.target.value);
    if (e.target.value === 'Income') {
      setColor('#BDE7BD');
    } else if (e.target.value === 'Expense') {
      setColor('#FFB6B3');
    }
  }

  const handleAdd = () => {
    props.setTransactions([...props.transactions, { name: name, type: type, amount: amount, color: color}]);
    type === 'Income' ? props.setTotalIncome(props.totalIncome + parseInt(amount)) : props.setTotalExpense(props.totalExpense + parseInt(amount));
  }

  return (
    <Grid container item xs={12} spacing={2}>
      <Grid container item xs={12}>
        <Grid item md={4} />
        <Grid container item xs={12} md={2} justify='center' alignItems='center'>
          <TextField 
            required
            placeholder='Item Name' 
            variant='outlined' 
            type='text'
            size='small'
            onChange={(e) => {setName(e.target.value)}}
          />
        </Grid>
        <Grid container item xs={12} md={2} justify='center'>
          <TextField 
            required
            placeholder='Amount'
            variant='outlined'
            size='small'
            id='input-field'
            type='number'
            InputProps={{
              startAdornment: <InputAdornment position='start'>$</InputAdornment>,
            }} 
            inputProps={{min: 0, style: { textAlign: 'right'}}}
            onChange={(e) => {setAmount(e.target.value)}}
          />
        </Grid> 
        <Grid item md={4} />
      </Grid>
      <Grid container item xs={12}>
        <Grid item md={4} />
        <Grid container item xs={12} md={4} justify='center'>
          <FormControl required>
            <RadioGroup row onChange={handleTypeAndColor}>
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
        <Grid item md={4} />
      </Grid>
    </Grid>
  );
};

export default ItemBar;