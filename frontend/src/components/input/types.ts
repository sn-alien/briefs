import React from "react";

interface DefaultInputProps {
  name: string;
  labelName: string;
  optional?: boolean;
  autoComplete?: string;
  validation?: { required: string; message?: string };
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

export interface RadioButtonProps extends Omit<DefaultInputProps, "name"> {
  defaultChecked?: boolean;
  disabled?: boolean;
  defaultValue?: boolean;
  value: string;
}
export interface RadioProps extends DefaultInputProps {
  radioButtons: RadioButtonProps[];
}

export interface ToggleProps extends DefaultInputProps {
  checked?: boolean;
  disabled?: boolean;
  defaultValue?: boolean;
}
