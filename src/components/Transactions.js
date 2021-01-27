import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import DeleteBtn from './DeleteBtn';

const useStyles = makeStyles({
  table: {
    minWidth: 370,
    maxWidth: 650
  },
  header: {
    fontWeight: 'bold'
  }
});

const Transactions = (props) => {
  const classes = useStyles();
  
  const handleDelete = (i) => {
    props.transactions.splice(i, 1);
    props.setTransactions(props.transactions);
  };

  return (
    <Grid container item xs={12}>
      <Grid item md={4} />
      <Grid container item md={4} xs={12} justify='center'>
        <TableContainer className={classes.table} component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.header}>Item Name</TableCell>
                <TableCell className={classes.header} align='center'>Type</TableCell>
                <TableCell className={classes.header} align='center'>Amount ($)</TableCell>
                <TableCell className={classes.header} align='right'>Remove</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(props.transactions).map((transaction, i) => (
                <TableRow style={{backgroundColor: transaction.color}} key={i}>
                  <TableCell>{transaction.name}</TableCell>
                  <TableCell align='center'>{transaction.type}</TableCell>
                  <TableCell align='center'>{transaction.amount}</TableCell>
                  <TableCell align='right' padding='none'><DeleteBtn onClick={() => handleDelete(i)}/></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item md={4} />
    </Grid>
  );
}

export default Transactions;