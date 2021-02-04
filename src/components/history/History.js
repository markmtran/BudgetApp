import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import firebase from 'firebase/app';
import 'firebase/firestore';

var db = firebase.firestore();

const useStyles = makeStyles({
  table: {
    minWidth: 370,
    maxWidth: 700,
  },
  header: {
    fontWeight: 'bold'
  },
  space: {
    marginTop: 100,
  }
});

const History = (props) => {
  const classes = useStyles();
  const username = props.username;

  const [ submissions, setSubmissions ] = useState([]);

  useEffect(() => {
    console.log(username);
    db.collection(username).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const docObj = doc.data()
        const newDocObj = {
          date: doc.id, 
          income: docObj.totalIncome, 
          expense: docObj.totalExpense,
          net: docObj.netIncome
        };
        setSubmissions([...submissions, newDocObj]);
      });
    });
  }, [username, submissions]);

  // console.log(username);
  // db.collection(username).get().then((querySnapshot) => {
  //   querySnapshot.forEach((doc) => {
  //     const docObj = doc.data()
  //     const newDocObj = {
  //       date: doc.id, 
  //       income: docObj.totalIncome, 
  //       expense: docObj.totalExpense,
  //       net: docObj.netIncome
  //     };
  //     setSubmissions([...submissions, newDocObj]);
  //   });
  // });

  return (
    <Grid container item xs={12} className={classes.space}>
      <Grid item md={3} />
      <Grid container item md={6} xs={12} justify='center'>
        <TableContainer className={classes.table} component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.header}>Submission Date</TableCell>
                <TableCell className={classes.header} align='center'>Total Income ($)</TableCell>
                <TableCell className={classes.header} align='center'>Total Expense ($)</TableCell>
                <TableCell className={classes.header} align='right'>Net Income ($)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(submissions).map((submission) => (
                <TableRow>
                  <TableCell>{submission.name}</TableCell>
                  <TableCell align='center'>{submission.income}</TableCell>
                  <TableCell align='center'>{submission.expense}</TableCell>
                  <TableCell align='right'>{submission.net}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item md={3} />
    </Grid>
  );
}

export default History;