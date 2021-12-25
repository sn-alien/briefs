import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { MuiTextField, MuiSelect } from '@components/inputs/';
import Form from '@components/Form';

type Inputs = {
  fullName: string;
  country: string;
  age: string;
};

export default function TestForm() {
  const methods = useForm<Inputs>({
    defaultValues: { fullName: 'Sofia Mikhaleva', country: 'USA', age: '12' },
  });

  const { handleSubmit, watch } = methods;

  const formSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <>
      <Form methods={methods} id="test-form" onSubmit={formSubmit}>
        <MuiTextField name="fullName" labelName="Full Name" />
        <button form="test-form" type="submit">
          Submit
        </button>
        <MuiSelect name="country" labelName="Country" options={options1} />
        <MuiSelect name="age" labelName="Age" options={options2} />
      </Form>
    </>
  );
}
const options1 = [
  { value: 'USA', label: 'United States of Americanes' },
  { value: 'MEX', label: 'Mexico' },
];
const options2 = [
  { value: '12', label: '12 years old' },
  { value: '14', label: '14 years old' },
  { value: '16', label: '16 years old' },
  { value: '18', label: '18 years old' },
];
