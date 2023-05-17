import {
  CheckboxProps,
  InputProps,
  RadioProps,
  RadioButtonProps,
} from "@components/input/types";

export type ElementTypes = {
  type: "Checkbox" | "Input" | "Radio";
  name: string;
  labelName: string;
  autoComplete?: boolean;
  optional?: boolean;
  defaultValue?: string;
  placeholder?: string;
  validation?: { required: string; message?: string };
  radioButtons?: RadioButtonProps[];
};

export type FormSchemaProps = {
  name: string;
  formId: string;
  elements: ElementTypes[];
};
