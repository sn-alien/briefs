import { InputProps } from "./types";
import { InputWrap, RequiredText, LabelWrap, Label } from "./sharedComponents";
const Input = ({
  name,
  labelName,
  optional,
  placeholder,
  type = "text",
}: InputProps) => {
  return (
    <InputWrap>
      <LabelWrap>
        <Label htmlFor={name}>{labelName}</Label>
        {optional && <RequiredText />}
      </LabelWrap>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="block w-full rounded-md border-2 border-slate-300  px-3 py-2 focus:border-pink-400 focus:outline-none"
      />
    </InputWrap>
  );
};

export { Input };
