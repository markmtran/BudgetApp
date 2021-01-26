import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableFooter, TableRow } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    maxwidth: 650
  }
});

const Transactions = () => {
  const classes = useStyles();
  return (
    <Grid container xs={12}>
      <Grid item xs={4} />
      <Grid item xs={4}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Item Name</TableCell>
                <TableCell align="right">Type</TableCell>
                <TableCell align='right'>Amount ($)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={4} />
    </Grid>
  );
}

export default Transactions;