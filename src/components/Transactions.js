import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles({
  table: {
    minWidth: 370,
    maxWidth: 650
  },
  header: {
    fontWeight: 'bold'
  },
  space: {
    marginTop: 10,
    marginBottom: 20
  }
});

const Transactions = (props) => {
  const classes = useStyles();
  
  const handleDelete = (i) => {
    const newTransactions = [...props.transactions];
    const deletedItemArray = newTransactions.splice(i, 1);
    const deletedItem = deletedItemArray[0];
    props.setTransactions(newTransactions);
    if (deletedItem.type === 'Income') {
      props.setTotalIncome(props.totalIncome - parseFloat(deletedItem.amount));
    } else if (deletedItem.type === 'Expense') {
      props.setTotalExpense(props.totalExpense - parseFloat(deletedItem.amount));
    }
  };

  return (
    <Grid container item xs={12} className={classes.space}>
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
                  <TableCell align='right' padding='none'>
                    <IconButton onClick={() => handleDelete(i)}>
                      <ClearIcon color='secondary'/>
                    </IconButton>
                  </TableCell>
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