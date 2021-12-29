import * as React from "react";

import { Select as MuiSelect } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { Controller, useFormContext } from "react-hook-form";

import { Label, Optional } from "./Styles";

interface Props {
  name: string;
  defaultValue?: string;
  labelName: string;
  optional?: boolean;
  options: { value: string; label: string }[];
}

const Select = ({
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
          <MuiSelect
            id="demo-simple-select"
            value={field.value}
            onChange={field.onChange}
          >
            {options.map((option, index) => {
              return (
                <MenuItem key={index} value={option.value}>
                  {option.label}
                </MenuItem>
              );
            })}
          </MuiSelect>
        )}
      />
    </>
  );
};
export default Select;
