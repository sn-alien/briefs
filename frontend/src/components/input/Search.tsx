import { InputProps } from "./types";
import {
  InputWrap,
  RequiredText,
  LabelWrap,
  Label,
  ErrorMessageWrap,
} from "./sharedComponents";

const Search = ({}) => {
  return (
    <InputWrap>
      <input
        type="text"
        placeholder="Search..."
        className="block w-48  rounded-md border-2 border-slate-300 px-3 py-1 focus:border-pink-400 focus:outline-none"
      />
    </InputWrap>
  );
};

export { Search };
