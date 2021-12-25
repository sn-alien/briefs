import { TextField } from '@mui/material';
import { Typography } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { Label, Optional } from './Styles';

interface Props {
  name: string;
  labelName: string;
  placeholder?: string;
  defaultValue?: string;
  optional?: boolean;
  autoComplete?: string;
}

const MuiTextField = ({
  name,
  labelName,
  placeholder,
  defaultValue,
  autoComplete,
  optional,
}: Props): JSX.Element => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Label htmlFor={name}>
        <span>{labelName}</span>
        {optional && <Optional>optional</Optional>}
      </Label>

      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <TextField
            onChange={field.onChange}
            value={field.value}
            id={name}
            autoComplete={autoComplete}
          />
        )}
      />
    </>
  );
};

export default MuiTextField;
