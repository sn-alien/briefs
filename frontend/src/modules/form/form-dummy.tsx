import { Input, Checkbox, Toggle, Radio } from "@components/input";
import { ContentWrap } from "@components/containers/ContentWrap";
import { Button } from "@components/buttons/Button";
import { Fieldset } from "@components/Fieldset";
import { Select } from "@components/input/Select";
import { useForm } from "react-hook-form";
import { Form } from "@components/Form";

type Inputs = {
  fullName: string;
  occupation: string;
  email: string;
  paymentMethod: string;
  tos: boolean;
  marketing: boolean;
};

const FormDummy = () => {
  const methods = useForm<Inputs>({
    defaultValues: {
      fullName: "Nazar Klymenko",
      occupation: "Business owner",
      email: "",
      paymentMethod: "Paypal",
      marketing: false,
      tos: false,
    },
  });

  const { handleSubmit } = methods;

  const formSubmit = handleSubmit((data) => {
    console.log("asda");
    console.log(data);
  });

  return (
    <ContentWrap>
      <Form id="form-dummy" methods={methods} onSubmit={formSubmit}>
        <p className="text-xl font-semibold">Inputs</p>
        <Input
          labelName="Full name"
          name="fullName"
          validation={{ required: "required" }}
        />
        <Input labelName="Occupation" name="occupation" optional />
        <Input
          labelName="Email"
          placeholder="example@site.com"
          name="email"
          type="email"
        />
        <Radio
          name="paymentMethod"
          labelName="Payment Method"
          radioButtons={radioButtons}
        />

        <Fieldset>
          <Checkbox name="tos" labelName="terms of service" />
          <Checkbox
            name="marketing"
            labelName="I agree to receving marketing emails"
          />
        </Fieldset>
        <Button form="form-dummy">Next</Button>
      </Form>
    </ContentWrap>
  );
};

export { FormDummy };

const radioButtons = [
  {
    labelName: "Paypal",
    value: "paypal",
    defaultChecked: true,
  },
  {
    labelName: "MasterCard",
    value: "MasterCard",
    defaultChecked: false,
  },
];
