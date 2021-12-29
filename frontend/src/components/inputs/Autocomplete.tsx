import { Autocomplete as MuiAutocomplete, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

import { Label, Optional } from "./Styles";

interface Props extends InputProps {
  defaultValue?: string;
  options: { label: string; id: number }[];
}

const Autocomplete = ({
  name,
  labelName,
  defaultValue,
  options,
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
          <MuiAutocomplete
            disablePortal
            id={name}
            options={options}
            value={field.value}
            onChange={(_, data) => field.onChange(data)}
            renderInput={(params) => <TextField {...params} />}
            isOptionEqualToValue={(option, value) => option.id === value.id}
          />
        )}
      />
    </>
  );
};

export default Autocomplete;
