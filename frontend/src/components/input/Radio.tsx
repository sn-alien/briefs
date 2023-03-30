import React from "react";

import {
  FormControl,
  FormControlLabel,
  Radio as MuiRadio,
  RadioGroup,
  Typography,
} from "@mui/material";
import _ from "lodash";
import { useTranslation } from "next-i18next";
import { Controller, useFormContext } from "react-hook-form";

import { InputErrorMessage, Label } from "./Style";
import { RadioProps } from "./types";

const Radio = ({
  name,
  defaultValue,
  options,
  labelName,
}: RadioProps): JSX.Element | null => {
  const { t } = useTranslation();

  const {
    control,
    formState: { errors },
  } = useFormContext();

  if (!options) return null;
  return (
    <FormControl component="fieldset">
      <Label htmlFor={name}>{labelName}</Label>

      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field }) => (
          <RadioGroup
            name={name}
            onChange={field.onChange}
            value={field.value}
            id={name}
          >
            {options.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<MuiRadio color="primary" />}
                label={option.label}
                id={option.value}
              />
            ))}
          </RadioGroup>
        )}
      />

      <InputErrorMessage>
        <Typography variant="caption">
          {t(_.get(errors, `${name}.message`))}
        </Typography>
      </InputErrorMessage>
    </FormControl>
  );
};

export default Radio;
