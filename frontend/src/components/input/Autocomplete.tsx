import React from "react";

import {
  Autocomplete as MuiAutocomplete,
  TextField,
  Typography,
} from "@mui/material";
import _ from "lodash";
import { Controller, useFormContext } from "react-hook-form";

import { InputContainer, InputErrorMessage, Label, Optional } from "./Style";
import { AutocompleteProps } from "./types";

const Autocomplete = ({
  name,
  labelName,
  optional,
  defaultValue,
  options,
  width = "l",
}: AutocompleteProps): JSX.Element | null => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  if (!options) return null;
  return (
    <InputContainer width={width}>
      <Label htmlFor={name}>
        {labelName}
        {optional && <Optional>{"Form.optional"}</Optional>}
      </Label>

      <Controller
        key={name}
        name={name}
        control={control}
        render={({ field }) => (
          <MuiAutocomplete
            id={name}
            disablePortal
            options={options}
            defaultValue={defaultValue}
            onChange={(e, data) => field.onChange(data)}
            freeSolo
            autoSelect
            renderInput={(params) => {
              return (
                <TextField
                  {...params}
                  error={!!_.get(errors, name)}
                  inputRef={field.ref}
                />
              );
            }}
          />
        )}
      />

      <InputErrorMessage>
        <Typography variant="caption">
          {!!_.get(errors, `${name}.message`)}
        </Typography>
      </InputErrorMessage>
    </InputContainer>
  );
};

export default Autocomplete;
