import * as React from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Label, Optional } from './Styles';
import MenuItem from '@mui/material/MenuItem';
import { Controller, useFormContext } from 'react-hook-form';

interface Props {
  name: string;
  defaultValue?: string;
  labelName: string;
  optional?: boolean;
  options: { value: string; label: string }[];
}

const MuiSelect = ({
  name,
  defaultValue,
  labelName,
  optional,
  options,
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
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={field.value}
            label="Country"
            onChange={field.onChange}
          >
            {options.map((option, index) => {
              return (
                <MenuItem key={index} value={option.value}>
                  {option.label}
                </MenuItem>
              );
            })}
          </Select>
        )}
      ></Controller>
    </>
  );
};
export default MuiSelect;
