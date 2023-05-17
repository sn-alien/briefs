import { InputProps } from "./types";
import {
  InputWrap,
  RequiredText,
  LabelWrap,
  Label,
  ErrorMessageWrap,
} from "./sharedComponents";
import { useForm } from "react-hook-form";
import { useFormContext } from "react-hook-form";
import { get } from "lodash";

const Input = ({
  name,
  labelName,
  optional,
  placeholder,
  type = "text",
  validation,
}: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <InputWrap>
      <LabelWrap>
        <Label htmlFor={name}>{labelName}</Label>
        {optional && <RequiredText />}
      </LabelWrap>

      <input
        id={name}
        type={type}
        placeholder={placeholder}
        className="block w-full rounded-md border-2 border-slate-300  px-3 py-2 focus:border-pink-400 focus:outline-none"
        {...register(name, validation)}
      />

      <ErrorMessageWrap>{get(errors, `${name}.message`)}</ErrorMessageWrap>
    </InputWrap>
  );
};

export { Input };
