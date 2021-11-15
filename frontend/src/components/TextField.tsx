import React from 'react';
import TextField from '@mui/material/TextField';

export default function BasicTextField() {
  return (
    <div>
      <TextField required id="outlined-required" label="Name" />
      <TextField id="outlined-basic" label="Surname" />
    </div>
  );
}
