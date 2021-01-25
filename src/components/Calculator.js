import React from 'react';
import { TextField } from '@material-ui/core';

const Calculator = () => {
  return (
    <Grid container>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Standard" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </form>
    </Grid>
  );
}

export default Calculator;