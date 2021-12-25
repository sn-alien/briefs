import React from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";

import Form from "@components/Form";
import Button from "@components/buttons/Button";
import { Select, TextField } from "@components/inputs/";

type Inputs = {
  fullName: string;
  country: string;
  age: string;
};

export default function TestForm() {
  const methods = useForm<Inputs>({
    defaultValues: { fullName: "Sofia Mikhaleva", country: "USA", age: "12" },
  });

  const { handleSubmit, watch } = methods;

  const formSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <>
      <Form methods={methods} id="test-form" onSubmit={formSubmit}>
        <TextField name="fullName" labelName="Full Name" />
        <Select name="country" labelName="Country" options={options1} />
        <Select name="age" labelName="Age" options={options2} />
      </Form>
      <button form="test-form" type="submit">
        Submit
      </button>
      <Button />
    </>
  );
}
const options1 = [
  { value: "USA", label: "United States of Americanes" },
  { value: "MEX", label: "Mexico" },
];
const options2 = [
  { value: "12", label: "12 years old" },
  { value: "14", label: "14 years old" },
  { value: "16", label: "16 years old" },
  { value: "18", label: "18 years old" },
];
