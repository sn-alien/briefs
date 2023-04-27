import { Input, Checkbox } from "@components/input";
import { ContentWrap } from "@components/containers/ContentWrap";

const FormComponentsPage = () => {
  return (
    <ContentWrap>
      <Input labelName="Full name" name="fullName" />
      <Input labelName="Occupation" name="occupation" optional />
      <Checkbox></Checkbox>
    </ContentWrap>
  );
};

export { FormComponentsPage };
