import { TextField } from '@mui/material';
import { Typography } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

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
      <label htmlFor={name}>
        {labelName}
        {optional && <span>optional</span>}
      </label>

      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <TextField
            key={name}
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
