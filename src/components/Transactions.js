import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 330,
    maxWidth: 650
  },
  header: {
    fontWeight: 'bold'
  }
});

const Transactions = (props) => {
  const classes = useStyles();

  return (
    <Grid container item xs={12}>
      <Grid item xs={4} />
      <Grid item xs={4}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.header}>Item Name</TableCell>
                <TableCell className={classes.header} align='center'>Type</TableCell>
                <TableCell className={classes.header} align='right'>Amount ($)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(props.transactions).map((transaction) => (
                <TableRow>
                  <TableCell>{transaction.name}</TableCell>
                  <TableCell align='center'>{transaction.type}</TableCell>
                  <TableCell align='right'>{transaction.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={4} />
    </Grid>
  );
}

export default Transactions;