import { Input, Checkbox, Radio } from "@components/input";
import { ContentWrap } from "@components/containers/ContentWrap";
import { Button } from "@components/buttons/Button";
import { Fieldset } from "@components/Fieldset";
const FormComponentsPage = () => {
  return (
    <ContentWrap>
      <p className="text-xl font-semibold">Inputs</p>
      <Input labelName="Full name" name="fullName" />
      <Input labelName="Occupation" name="occupation" optional />
      <Input labelName="Email" name="email" type="email" />
      <p className="text-xl font-semibold">Checkboxes</p>
      <p className="text-md font-medium text-gray-900">Vertical</p>
      <Fieldset>
        <Checkbox name="tos" labelName="terms of service" />
        <Checkbox
          name="marketing"
          labelName="I agree to receving marketing emails"
        />
        <Checkbox
          name="diabled-negative"
          labelName="diabled-negative"
          disabled
        />
        <Checkbox
          name="diabled-positive"
          labelName="diabled-positive"
          checked
          disabled
        />
      </Fieldset>
      <p className="text-md font-medium text-gray-900">Horizontal</p>
      <Fieldset orientation="horizontal">
        <Checkbox name="tos-h" labelName="terms of service" />
        <Checkbox
          name="marketing-h"
          labelName="I agree to receving marketing emails"
        />
        <Checkbox
          name="diabled-negative-h"
          labelName="diabled-negative"
          disabled
        />
        <Checkbox
          name="diabled-positive-h"
          labelName="diabled-positive"
          checked
          disabled
        />
      </Fieldset>
      <p className="text-xl font-semibold">Radio Buttons</p>
      <p className="text-md font-medium text-gray-900">Vertical</p>
      <Fieldset>
        <Radio labelName="Group" name="group" value="a"></Radio>
        <Radio labelName="Group" name="group" value="b"></Radio>
        <Radio labelName="Group" name="group" value="c"></Radio>
        <Radio labelName="Group" name="group" value="c" disabled></Radio>
      </Fieldset>
      <p className="text-md font-medium text-gray-900">Horizontal</p>
      <Fieldset orientation="horizontal">
        <Radio labelName="a" name="group-h" value="a"></Radio>
        <Radio labelName="b" name="group-h" value="b"></Radio>
        <Radio labelName="cccccccccccc" name="group-h" value="c"></Radio>
        <Radio labelName="dd" name="group-h" value="c" disabled></Radio>
      </Fieldset>
      <p className="text-xl font-semibold">Buttons</p>
      <Button>Next</Button>
    </ContentWrap>
  );
};

export { FormComponentsPage };
