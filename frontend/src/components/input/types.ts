import { OutlinedInputProps } from "@mui/material/OutlinedInput";

interface DefaultInputProps {
  name: string;
  labelName: string;
  optional?: boolean;
  autoComplete?: string;
}

export interface AutocompleteProps extends DefaultInputProps {
  placeholder?: string;
  type?: string;
  autoFocus?: boolean;
  defaultValue?: string | undefined;
  width?: "s" | "m" | "l";
  options?: string[];
}

export interface InputProps extends DefaultInputProps {
  placeholder?: string;
  type?: string;
  autoFocus?: boolean;
  defaultValue?: string | undefined;
  width?: "s" | "m" | "l";
}
export interface RadioProps extends DefaultInputProps {
  defaultValue?: string | undefined;
  options?: { label: string; value: string }[];
}
export interface CheckboxProps extends DefaultInputProps {
  defaultValue?: boolean | undefined;
  errorSpacer?: boolean;
  readOnly?: boolean;
  defaultChecked?: boolean;
}
export interface PasswordInputProps extends DefaultInputProps {
  autoComplete?: string;
  errorList?: object;
  defaultValue?: string | undefined;
}

export interface TextAreaProps extends DefaultInputProps, OutlinedInputProps {
  name: string;
  placeholder?: string;
  optional?: boolean;
  rows?: number;
  defaultValue?: string | undefined;
}

export interface SelectProps extends DefaultInputProps {
  options: { label: string; value: string }[];
  placeholder?: string;
  defaultValue?: string | undefined;
  width?: "s" | "m" | "l";
}
export interface FileInputProps extends DefaultInputProps {
  placeholder?: string;
  optional?: boolean;
  autoComplete?: string;
  defaultValue?: File | null | undefined;
  width?: "s" | "m" | "l";
}
export interface DateInputProps extends DefaultInputProps {
  defaultValue?: any;
  placeholder: string;
  view?: ["day"] | ["year", "month"] | ["year", "month", "day"] | ["year"];
  format?: "dd/MM/yyyy" | "yyyy";
  disablePast?: boolean;
  disableFuture?: boolean;
  maxDate?: Date;
  minDate?: Date;
  openTo?: "year";
}
