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
