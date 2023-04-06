import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { Form } from "@components/Form";
import { Button } from "@components/buttons";
import {
  Checkbox,
  Input,
  PasswordInput,
  Radio,
  Select,
} from "@components/input";

type Inputs = {
  fullName: string;
  country: string;
  steeringWheel: string;
  tos: boolean;
};

export default function TestForm() {
  const methods = useForm<Inputs>({
    defaultValues: {
      fullName: "Nazar Klymenko",
      country: "USA",
      steeringWheel: "left",
      tos: false,
    },
    resolver: yupResolver(validationSchema),
  });

  const { handleSubmit, watch } = methods;

  const formSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <>
      <Form methods={methods} id="test-form" onSubmit={formSubmit}>
        <Input name="fullName" labelName="Full Name" />
        <Select name="country" labelName="Country" options={optionsCountry} />
        <Radio
          labelName="Steering wheel side"
          name="steeringWheel"
          options={optionsSteering}
        />
        <Checkbox
          name="tos"
          labelName="i agree to the terms and conditions"
          errorSpacer
        />
        <PasswordInput name="password" labelName="password" />
        <Button form="test-form">Submit</Button>
      </Form>
    </>
  );
}
const optionsCountry = [
  { label: "United States of America", value: "USA" },
  { label: "Mexico", value: "MEX" },
];
const optionsSteering = [
  { label: "Left", value: "left" },
  { label: "Right", value: "right" },
];
const validationSchema: yup.ObjectSchema<Inputs> = yup.object().shape({
  fullName: yup.string().required(),
  country: yup.string().required(),
  steeringWheel: yup.string().required(),
  tos: yup.bool().oneOf([true], "required").required(),
});
