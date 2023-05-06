import {
  ControlInputWrap,
  RequiredText,
  LabelWrap,
  Label,
} from "./sharedComponents";
import { ToggleProps } from "./types";

const Toggle = ({
  checked,
  disabled,
  defaultValue,
  name,
  labelName,
}: ToggleProps) => {
  return (
    <ControlInputWrap>
      <Label htmlFor={name} className="group mx-0 cursor-pointer">
        <input
          id={name}
          className="group peer sr-only"
          disabled={disabled}
          checked={checked || defaultValue}
          type="checkbox"
        />
        <div className="relative h-6 w-11 rounded-xl bg-slate-200 transition-colors before:absolute before:left-1 before:top-1 before:h-4  before:w-4 before:rounded-lg before:bg-white peer-checked:bg-pink-400 peer-checked:before:left-auto  peer-checked:before:right-1 peer-checked:before:top-1 peer-disabled:before:bg-slate-100"></div>
        <span className="ml-2 peer-disabled:text-slate-400">{labelName}</span>
      </Label>
    </ControlInputWrap>
  );
};

export { Toggle };

// className="flex cursor-pointer items-center  before:mr-2 before:inline-block before:h-6 before:w-6 before:rounded-md before:border-2 before:border-slate-300 before:bg-slate-50 peer-checked:before:border-pink-400 peer-checked:before:bg-pink-400 peer-checked:before:text-center peer-checked:before:text-sm peer-checked:before:font-extrabold peer-checked:before:text-white peer-checked:before:outline-none peer-checked:before:content-['\2713'] peer-focus:before:outline peer-focus:before:outline-2 peer-focus:before:outline-offset-2 peer-focus:before:outline-pink-400 peer-disabled:cursor-default peer-disabled:before:border-slate-300 peer-disabled:before:bg-slate-200 peer-disabled:before:text-slate-400"
