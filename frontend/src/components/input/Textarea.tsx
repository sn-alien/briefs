import React from "react";

import { OutlinedInput, Typography } from "@mui/material";
import { OutlinedInputProps } from "@mui/material/OutlinedInput";
import _ from "lodash";
import { useTranslation } from "next-i18next";
import { Controller, useFormContext } from "react-hook-form";

import { InputContainer, InputErrorMessage, Label, Optional } from "./Style";
import { TextAreaProps } from "./types";

const Textarea = ({
  name,
  labelName,
  placeholder,
  optional,
  defaultValue,
  ...other
}: TextAreaProps): JSX.Element => {
  const { t } = useTranslation();
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <InputContainer>
      <Label htmlFor={name}>
        {labelName}
        {optional && <Optional>{t("Form.optional")}</Optional>}
      </Label>

      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <OutlinedInput
            onChange={field.onChange}
            value={field.value}
            multiline
            inputRef={field.ref}
            maxRows={8}
            fullWidth
            placeholder={placeholder}
            error={!!_.get(errors, name)}
            id={name}
            {...other}
          />
        )}
      />

      <InputErrorMessage>
        <Typography variant="caption">
          {/* {t(_.get(errors, `${name}.message`))} */}
          {!!_.get(errors, `${name}.message`)}
        </Typography>
      </InputErrorMessage>
    </InputContainer>
  );
};

export default Textarea;
