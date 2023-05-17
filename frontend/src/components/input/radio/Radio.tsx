import { RadioButton } from "./RadioButton";
import { RadioProps } from "../types";
import { Fieldset } from "@components/Fieldset";

const Radio = ({ name, labelName, radioButtons }: RadioProps) => {
  return (
    <Fieldset>
      <p className="text-md font-semibold">{labelName}</p>
      {radioButtons.map((radio, idx) => (
        <RadioButton
          name={name}
          labelName={radio.labelName}
          value={radio.value}
          key={idx}
          defaultChecked={radio.defaultChecked}
        />
      ))}
    </Fieldset>
  );
};

export { Radio };
