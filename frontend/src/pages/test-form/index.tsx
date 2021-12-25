import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { MuiTextField } from '@components/inputs/';
import Form from '@components/Form';

type Inputs = {
  fullName: string;
};

export default function TestForm() {
  const methods = useForm<Inputs>({
    defaultValues: { fullName: 'Sofia Mikhaleva' },
  });

  const { handleSubmit, watch } = methods;

  const formSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Form methods={methods} id="test-form" onSubmit={formSubmit}>
      <MuiTextField name="fullName" labelName="Full Name" optional />
      <MuiTextField name="age" labelName="Full Name" optional />

      <button type="submit">Submit</button>
    </Form>
  );
}
