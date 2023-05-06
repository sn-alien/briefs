import React from "react";

interface DefaultInputProps {
  name: string;
  labelName: string;
  optional?: boolean;
  autoComplete?: string;
}
export interface InputProps extends DefaultInputProps {
  startIcon?: React.ReactElement;
  type?: "text" | "email";
  placeholder?: string;
  defaultValue?: string | undefined;
}
export interface CheckboxProps extends DefaultInputProps {
  checked?: boolean;
  disabled?: boolean;
  defaultValue?: boolean;
}
export interface RadioProps extends DefaultInputProps {
  checked?: boolean;
  disabled?: boolean;
  defaultValue?: boolean;
  value: string;
}

export interface ToggleProps extends DefaultInputProps {
  checked?: boolean;
  disabled?: boolean;
  defaultValue?: boolean;
}
