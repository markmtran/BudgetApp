import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 370,
    maxWidth: 650
  },
  header: {
    fontWeight: 'bold'
  },
  space: {
    marginTop: 20
  }
});

const Totals = (props) => {
  const classes = useStyles();

  return (
    <Grid container item xs={12} className={classes.space}>
      <Grid item md={4} />
      <Grid container item md={4} xs={12} justify='center'>
        <TableContainer className={classes.table} component={Paper}>
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
      <Grid item md={4}/>
    </Grid>
  );
}

export default Totals;