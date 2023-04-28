import { Input, Checkbox } from "@components/input";
import { ContentWrap } from "@components/containers/ContentWrap";
import { Button } from "@components/buttons/Button";

const FormComponentsPage = () => {
  return (
    <ContentWrap>
      <p className="text-xl font-semibold">Inputs</p>
      <Input labelName="Full name" name="fullName" />
      <Input labelName="Occupation" name="occupation" optional />
      <Input labelName="Email" name="email" type="email" />

      <p className="text-xl font-semibold">Checkboxes</p>
      <Checkbox name="tos" labelName="terms of service" />
      <Checkbox
        name="marketing"
        labelName="I agree to receving marketing emails"
      />
      <Checkbox name="diabled-negative" labelName="diabled-negative" disabled />
      <Checkbox
        name="diabled-positive"
        labelName="diabled-positive"
        checked
        disabled
      />
      <p className="text-xl font-semibold">Buttons</p>
      <Button>Next</Button>
    </ContentWrap>
  );
};

export { FormComponentsPage };
