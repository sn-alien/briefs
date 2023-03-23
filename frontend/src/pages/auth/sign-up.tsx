import React from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { Form } from "@components/Form";
import { Button } from "@components/buttons";
import { Input, PasswordInput } from "@components/input";
import { PageBox } from "@components/layout";

type FormTypes = {
  fullName: string;
  email: string;
  password: string;
};

const SignUp: NextPage = () => {
  const methods = useForm<FormTypes>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const { handleSubmit } = methods;

  const formSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <PageBox maxWidth="xs">
      <AuthHeader gutterBottom variant="h1" align="center">
        Sign up
      </AuthHeader>

      <Form methods={methods} id="sign-up-form" onSubmit={formSubmit}>
        <Input name="fullName" labelName="Full name:" />
        <Input name="email" labelName="Email:" />
        <PasswordInput name="password" labelName="Password:" />
      </Form>
      <Button form="sign-up-form" fullWidth>
        Sign Up
      </Button>
    </PageBox>
  );
};

export default SignUp;

const AuthHeader = styled(Typography)`
  font-weight: bold;
  color: ${({ theme }) => theme.palette.primary.main};
`;

const schema = yup.object().shape({
  fullName: yup.string().required("test"),
  email: yup.string().required("test-email"),
  password: yup.string().required("test-email").min(8, "too short"),
});
