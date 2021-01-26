import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import Income from './Income';
import Expense from './Expense';



const Calculator = () => {
  const [ incomeList, setIncomeList ] = useState([]);
  const [ totalIncome, setTotalIncome ] = useState(0);
  const [ totalExpense, setTotalExpense ] = useState(0);
  const remaining = totalIncome - totalExpense;

  return (
    <Grid container item justify='center' alignItems='center' xs={12} spacing={6}>
      <Income totalIncome={totalIncome} setTotalIncome={setTotalIncome}/>
      <Expense />

      <Grid container item xs={12}>
        <Grid container item xs={5} justify='flex-end' alignItems='center'>
          <Typography>Total Income:</Typography>
        </Grid>
        <Grid item xs={1}/>
        <Grid container item xs={6}>
          <Typography>${totalIncome}</Typography>
        </Grid> 
      </Grid>

      <Grid container item xs={12}>
        <Grid container item xs={5} justify='flex-end' alignItems='center'>
          <Typography>Total Expenses:</Typography>
        </Grid>
        <Grid item xs={1}/>
        <Grid container item xs={6}>
          <Typography>${totalExpense}</Typography>
        </Grid> 
      </Grid>

      <Grid container item xs={12}>
        <Grid container item xs={5} justify='flex-end' alignItems='center'>
          <Typography>Amount Remaining:</Typography>
        </Grid>
        <Grid item xs={1}/>
        <Grid container item xs={6}>
          <Typography>${remaining}</Typography>
        </Grid> 
      </Grid>
    </Grid>
  );
}

export default Calculator;