import {
  CheckboxWrap,
  RequiredText,
  LabelWrap,
  Label,
} from "../sharedComponents";
import { CheckboxProps } from "../types";

const Checkbox = ({
  checked,
  disabled,
  defaultValue,
  name,
  labelName,
}: CheckboxProps) => {
  return (
    <CheckboxWrap>
      <input
        id={name}
        className="checkbox-custom disabled"
        disabled={disabled}
        checked={checked || defaultValue}
        type="checkbox"
      />
      <Label className="flex items-center" htmlFor={name}>
        {labelName}
      </Label>
    </CheckboxWrap>
  );
};

export { Checkbox };

// px-3 py-2 bg-white border shadow-sm border-slate-200 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 contrast-more:border-slate-400 contrast-more:placeholder-slate-500
