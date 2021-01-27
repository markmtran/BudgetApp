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

const Totals = (props) => {
  const classes = useStyles();

  return (
    <Grid container item xs={12}>
      <Grid item xs={4} />
      <Grid item xs={4}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell className={classes.header}>Total Income</TableCell>
                <TableCell align='right'>${props.totalIncome}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.header}>Total Expense</TableCell>
                <TableCell align='right'>${props.totalExpense}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.header}>Net Income</TableCell>
                <TableCell align='right'>${props.netIncome}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={4}/>
    </Grid>
  );
}

export default Totals;