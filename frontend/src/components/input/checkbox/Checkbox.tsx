import {
  ControlInputWrap,
  RequiredText,
  LabelWrap,
  Label,
} from "../sharedComponents";
import { CheckboxProps } from "../types";
import { useFormContext } from "react-hook-form";

const Checkbox = ({
  checked,
  disabled,
  defaultValue,
  name,
  labelName,
}: CheckboxProps) => {
  const { register } = useFormContext();

  return (
    <ControlInputWrap>
      <input
        id={name}
        className="peer sr-only "
        disabled={disabled}
        checked={checked || defaultValue}
        type="checkbox"
        {...register(name)}
      />
      <Label
        className="flex cursor-pointer items-center before:mr-2 before:inline-block before:h-6 before:w-6 before:rounded-md before:border-2 before:border-slate-300 before:bg-slate-50 peer-checked:before:border-pink-400 peer-checked:before:bg-pink-400 peer-checked:before:text-center peer-checked:before:text-sm peer-checked:before:font-extrabold peer-checked:before:text-white peer-checked:before:outline-none peer-checked:before:content-['\2713'] peer-focus:before:outline peer-focus:before:outline-2 peer-focus:before:outline-offset-2 peer-focus:before:outline-pink-400 peer-disabled:cursor-default peer-disabled:before:border-slate-300 peer-disabled:before:bg-slate-200 peer-disabled:before:text-slate-400"
        htmlFor={name}
      >
        {labelName}
      </Label>
    </ControlInputWrap>
  );
};

export { Checkbox };
