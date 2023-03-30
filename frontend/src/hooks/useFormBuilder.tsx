import React, { useCallback, useEffect, useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { Form } from "@components/Form";
import { Button } from "@components/buttons";
import { Checkbox, Input, Radio, Select } from "@components/input";
import { CheckboxProps, InputProps, RadioProps } from "@components/input/types";

type uiSchemaTypes = {
  type: "Checkbox" | "Input" | "Radio" | "Select";
  name: string;
  labelName: string;
  autoComplete: boolean;
  optional: boolean;
  defaultValue: string;
  options?: { label: string; value: string }[] | string[];
};
type validationSchema = any;
// type validationSchema = yup.ObjectSchema<any>;

type Props = {
  elements: uiSchemaTypes[];
  validationSchema: validationSchema;
};

function useFormBuilder({ elements, validationSchema }: Props): JSX.Element {
  const [defaultValues, setDefaultValues] = useState({});

  useEffect(() => {
    elements.forEach((e) => {
      setDefaultValues((defaultValues) => ({
        ...defaultValues,
        [e.name]: e.defaultValue,
      }));
    });
  }, []);

  const methods = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const { handleSubmit, watch } = methods;

  const formSubmit = handleSubmit((data) => {
    console.log(data);
  });

  function detectInputType(
    element: uiSchemaTypes,
    key: number
  ): JSX.Element | null {
    switch (element.type) {
      case "Input": {
        return <Input key={key} {...(element as any as InputProps)} />;
      }
      case "Checkbox": {
        return (
          <Checkbox key={key} {...(element as unknown as CheckboxProps)} />
        );
      }
      case "Radio": {
        return <Radio key={key} {...(element as any as RadioProps)} />;
      }
      default: {
        return null;
      }
    }
  }
  return (
    <Form methods={methods} id="test-form" onSubmit={formSubmit}>
      <>
        {elements.map((element, key) => {
          return detectInputType(element, key);
        })}
      </>
      <Button form="test-form">Submit</Button>
    </Form>
  );
}

export { useFormBuilder };
