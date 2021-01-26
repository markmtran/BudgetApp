import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import ItemBar from './ItemBar';
import TotalLabel from './TotalLabel';
import Transactions from './Transactions';


const NewCalc = () => {
  const [ totalIncome, setTotalIncome ] = useState(0);
  const [ totalExpense, setTotalExpense ] = useState(0);
  const netIncome = totalIncome - totalExpense;

  return (
    <Grid container item justify='center' alignItems='center' xs={12} spacing={6}>
      <ItemBar />
      <Transactions />
      <TotalLabel label={'Total Income:'} labelValue={totalIncome} />
      <TotalLabel label={'Total Expenses:'} labelValue={totalExpense} />
      <TotalLabel label={'Net Income:'} labelValue={netIncome} />
    </Grid>
  );
}

export default NewCalc;