import React from "react";

import { FormProvider } from "react-hook-form";

interface Props {
  id: string;
  onSubmit?: any;
  methods: any;
  children: JSX.Element | JSX.Element[];
}
const Form = ({ id, children, methods, ...props }: Props): JSX.Element => {
  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col justify-start"
        id={id}
        noValidate
        {...props}
      >
        {children}
      </form>
    </FormProvider>
  );
};

export { Form };
