import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { MuiTextField } from '@components/inputs/';

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="test" {...register('example')} />

      <input {...register('exampleRequired', { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
      <MuiTextField></MuiTextField>
    </form>
  );
}
