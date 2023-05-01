import {
  ControlInputWrap,
  RequiredText,
  LabelWrap,
  Label,
} from "./sharedComponents";
import { RadioProps } from "./types";

const Radio = ({
  checked,
  disabled,
  defaultValue,
  name,
  labelName,
  value,
}: RadioProps) => {
  return (
    <ControlInputWrap>
      <input
        id={name + value}
        className="peer h-0 w-0 appearance-none opacity-0 "
        disabled={disabled}
        // checked={checked || defaultValue}
        value={value}
        type="radio"
        name={name}
      />
      <Label
        className=" flex cursor-pointer items-center text-sm font-medium text-gray-900 before:mr-2 before:inline-block before:h-6 before:w-6 before:rounded-full before:border-2 before:border-slate-300 before:bg-slate-50    peer-checked:before:border-4 peer-checked:before:border-pink-400 peer-checked:before:text-sm peer-checked:before:outline-none peer-focus:before:outline peer-focus:before:outline-2 peer-focus:before:outline-offset-2 peer-focus:before:outline-pink-400 peer-disabled:cursor-default peer-disabled:before:border-slate-300 peer-disabled:before:bg-slate-200 peer-disabled:before:text-slate-400"
        htmlFor={name + value}
      >
        {labelName}
      </Label>
    </ControlInputWrap>
  );
};

export { Radio };
