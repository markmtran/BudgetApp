import React, { useState } from 'react';
import { Button, FormControl, FormControlLabel, Grid, InputAdornment, Radio, RadioGroup, TextField } from '@material-ui/core';

const ItemBar = (props) => {
  const [ name, setName ] = useState("");
  const [ type, setType ] = useState("");
  const [ amount, setAmount ] = useState(0);
  const [ color, setColor ] = useState('white');
  const [ isNameFilled, setIsNameFilled ] = useState(false);
  const [ isAmountFilled, setIsAmountFilled ] = useState(false);
  const [ isTypeChecked, setIsTypeChecked ] = useState(false);

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

  const checkName = (e) => {
    if (e.target.value.length > 0) {
      setName(e.target.value);
      setIsNameFilled(true);
    }
  }

  const checkAmount = (e) => {
    if (e.target.value.length > 0) {
      setAmount(e.target.value);
      setIsAmountFilled(true);
    }
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
            onChange={(e) => {checkName(e)}}
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
            onChange={(e) => {checkAmount(e)}}
          />
        </Grid> 
        <Grid item md={4} />
      </Grid>
      <Grid container item xs={12}>
        <Grid item md={4} />
        <Grid container item xs={12} md={4} justify='center'>
          <FormControl required>
            <RadioGroup row onChange={(e) => {handleTypeAndColor(e); setIsTypeChecked(true)}}>
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
          <Button disabled={!(isNameFilled && isAmountFilled && isTypeChecked)} onClick={handleAdd} variant='contained' color='primary'>Add</Button>
        </Grid>
        <Grid item md={4} />
      </Grid>
    </Grid>
  );
};

export default ItemBar;