interface DefaultInputProps {
  name: string;
  labelName: string;
  optional?: boolean;
  autoComplete?: string;
}
export interface InputProps extends DefaultInputProps {
  placeholder?: string;
  defaultValue?: string | undefined;
}
