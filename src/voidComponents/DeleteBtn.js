import React from 'react';
import { IconButton } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';

const DeleteBtn = () => {
  return (
    <IconButton>
      <ClearIcon color='secondary'/>
    </IconButton>
  );
}

export default DeleteBtn;