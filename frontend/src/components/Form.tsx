import React from "react";

import { styled } from "@mui/material/styles";
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
      <FormStyled id={id} noValidate {...props}>
        {children}
      </FormStyled>
    </FormProvider>
  );
};

const FormStyled = styled("form")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-width: 300px;
  max-width: 100%;
`;
export { Form };
