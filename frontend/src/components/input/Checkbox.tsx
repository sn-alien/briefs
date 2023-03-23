import React from "react";

import {
  FormControlLabel,
  Checkbox as MuiCheckbox,
  Typography,
} from "@mui/material";
import _ from "lodash";
import { Controller, useFormContext } from "react-hook-form";

import { InputContainer, InputErrorMessage } from "./Style";

interface Props {
  name: string;
  labelName: string;
  defaultValue?: boolean | undefined;
  errorSpacer?: boolean;
  readOnly?: boolean;
  defaultChecked?: boolean;
}

const Checkbox = ({
  name,
  labelName,
  defaultValue,
  errorSpacer,
  readOnly,
}: Props): JSX.Element => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <InputContainer>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <FormControlLabel
            style={{ maxWidth: "680px" }}
            control={
              <MuiCheckbox
                inputRef={field.ref}
                checked={!!field.value}
                disabled={readOnly}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  field.onChange(e.target.checked)
                }
              />
            }
            label={labelName}
          />
        )}
      />

      {errorSpacer && (
        <InputErrorMessage>
          <Typography variant="caption">
            {_.get(errors, `${name}.message`)}
          </Typography>
        </InputErrorMessage>
      )}
    </InputContainer>
  );
};

export default Checkbox;
