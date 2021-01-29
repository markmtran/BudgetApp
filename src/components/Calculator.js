import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import ItemBar from './ItemBar';
import Transactions from './Transactions';
import Totals from './Totals';

const Calculator = () => {
  const [ transactions, setTransactions ] = useState([]);
  const [ totalIncome, setTotalIncome ] = useState(0);
  const [ totalExpense, setTotalExpense ] = useState(0);
  const netIncome = totalIncome - totalExpense;
  console.log(transactions);
  return (
    <Grid container item justify='center' alignItems='center' xs={12}>
      <ItemBar 
        transactions={transactions} 
        setTransactions={setTransactions} 
        totalIncome={totalIncome}
        setTotalIncome={setTotalIncome}
        totalExpense={totalExpense}
        setTotalExpense={setTotalExpense}
      />
      <Transactions 
        transactions={transactions} 
        setTransactions={setTransactions}
        totalIncome={totalIncome}
        setTotalIncome={setTotalIncome}
        totalExpense={totalExpense}
        setTotalExpense={setTotalExpense}
      />
      <Totals totalIncome={totalIncome} totalExpense={totalExpense} netIncome={netIncome} />
    </Grid>
  );
}

export default Calculator;