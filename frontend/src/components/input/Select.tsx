import { InputProps } from "./types";
import { InputWrap, RequiredText, LabelWrap, Label } from "./sharedComponents";
const Select = ({
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

      <select
        id={name}
        name={name}
        placeholder={placeholder}
        className="block w-full rounded-md border-2 border-slate-300  px-3 py-2 focus:border-pink-400 focus:outline-none"
      >
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </InputWrap>
  );
};

export { Select };
