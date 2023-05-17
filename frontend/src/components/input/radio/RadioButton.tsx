import {
  ControlInputWrap,
  RequiredText,
  LabelWrap,
  Label,
} from "../sharedComponents";
import { RadioButtonProps } from "../types";
import { useFormContext } from "react-hook-form";

const RadioButton = ({
  defaultChecked,
  disabled,
  defaultValue,
  name,
  labelName,
  value,
}: RadioButtonProps) => {
  const { register } = useFormContext();

  return (
    <ControlInputWrap>
      <input
        id={name + value}
        className="peer sr-only"
        disabled={disabled}
        defaultChecked={defaultChecked}
        value={value}
        type="radio"
        {...register(name)}
      />
      <Label
        className="flex cursor-pointer items-center text-sm font-medium text-gray-900 before:mr-2 before:inline-block before:h-6 before:w-6 before:rounded-full before:border-2 before:border-slate-300    before:bg-slate-50 peer-checked:before:border-[6px] peer-checked:before:border-pink-400 peer-checked:before:text-sm peer-checked:before:outline-none peer-focus:before:outline peer-focus:before:outline-2 peer-focus:before:outline-offset-2 peer-focus:before:outline-pink-400 peer-disabled:cursor-default peer-disabled:before:bg-slate-200 "
        htmlFor={name + value}
      >
        {labelName}
      </Label>
    </ControlInputWrap>
  );
};

export { RadioButton };
