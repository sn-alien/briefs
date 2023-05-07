import { Radio } from "./Radio";
import { RadioProps } from "../types";
import { Fieldset } from "@components/Fieldset";

interface RadioGroupProps {
  radioSchema: { groupData: GroupData; radioButtons: RadioButton[] };
}
interface GroupData {
  mainLabel: string;
  mainName: string;
}

interface RadioButton {
  labelName: string;
  value: string;
  defaultChecked: boolean;
  name: string;
}
const RadioGroup = ({ radioSchema }: RadioGroupProps) => {
  return (
    <Fieldset>
      <p className="text-md font-semibold">{radioSchema.groupData.mainLabel}</p>
      {radioSchema.radioButtons.map((radio, idx) => (
        <Radio
          name={radioSchema.groupData.mainName}
          labelName={radio.labelName}
          value={radio.value}
          key={idx}
          defaultChecked={radio.defaultChecked}
        ></Radio>
      ))}
    </Fieldset>
  );
};

export { RadioGroup };
