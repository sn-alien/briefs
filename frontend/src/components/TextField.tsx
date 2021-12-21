import React from 'react';
import TextField from '@mui/material/TextField';

interface Props {
  labelName: string;
}

const BasicTextField = ({ labelName }: Props): JSX.Element => {
  return (
    <div>
      <TextField required id="outlined-required" label={labelName} />
    </div>
  );
};
