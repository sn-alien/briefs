interface DefaultInputProps {
  name: string;
  labelName: string;
  optional?: boolean;
  autoComplete?: string;
}
export interface InputProps extends DefaultInputProps {
  type?: "text" | "email";
  placeholder?: string;
  defaultValue?: string | undefined;
}
export interface CheckboxProps extends DefaultInputProps {
  checked?: boolean;
  disabled?: boolean;
  defaultValue?: boolean;
}
