import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const TotalLabel = (props) => {
  return(
    <Grid container item xs={12}>
      <Grid container item xs={5} justify='flex-end' alignItems='center'>
        <Typography>{props.label}</Typography>
      </Grid>
      <Grid item xs={1}/>
      <Grid container item xs={6}>
        <Typography>${props.labelValue}</Typography>
      </Grid> 
    </Grid>
  );
}

export default TotalLabel;