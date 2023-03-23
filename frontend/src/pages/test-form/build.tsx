import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { useFormBuilder } from "@hooks/useFormBuilder";

import { Form } from "@components/Form";
import { Button } from "@components/buttons";
import { Checkbox, Input, Radio, Select } from "@components/input";

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
      steeringWheel: "",
      tos: false,
    },
    resolver: yupResolver(validationSchema),
  });

  const { handleSubmit, watch } = methods;

  const formSubmit = handleSubmit((data) => {
    console.log(data);
  });
  const Test = useFormBuilder();

  return (
    <>
      <Form methods={methods} id="test-form" onSubmit={formSubmit}>
        <Test name="abc" labelName="test"></Test>
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
const validationSchema: yup.Schema<Inputs> = yup.object().shape({
  fullName: yup.string().required(),
  country: yup.string().required(),
  tos: yup.bool().oneOf([true], "required").required(),
  steeringWheel: yup.string().required(),
});
