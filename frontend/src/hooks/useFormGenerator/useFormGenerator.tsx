import React, { useCallback, useEffect, useState } from "react";

import { useForm } from "react-hook-form";

import { Form } from "@components/Form";
import { Button } from "@components/buttons/Button";
import { Checkbox, Input, Radio } from "@components/input";
import {
  CheckboxProps,
  InputProps,
  RadioProps,
  RadioButtonProps,
} from "@components/input/types";
import { ElementTypes, FormSchemaProps } from "./types";

function useFormGenerator(formSchema: FormSchemaProps): JSX.Element {
  const [defaultValues, setDefaultValues] = useState({});
  const { elements } = formSchema;
  useEffect(() => {
    elements.forEach((e) => {
      setDefaultValues((defaultValues) => ({
        ...defaultValues,
        [e.name]: e.defaultValue,
      }));
    });
  }, [elements]);

  const methods = useForm({
    defaultValues: defaultValues,
  });

  const { handleSubmit, watch } = methods;

  const formSubmit = handleSubmit((data) => {
    console.log(data);
  });

  function detectInputType(
    element: ElementTypes,
    key: number
  ): JSX.Element | null {
    switch (element.type) {
      case "Input": {
        return <Input key={key} {...(element as unknown as InputProps)} />;
      }
      case "Checkbox": {
        return (
          <Checkbox key={key} {...(element as unknown as CheckboxProps)} />
        );
      }
      case "Radio": {
        return <Radio key={key} {...(element as unknown as RadioProps)} />;
      }

      default: {
        return null;
      }
    }
  }
  return (
    <Form methods={methods} id={formSchema.formId} onSubmit={formSubmit}>
      <p className="text-xl font-semibold">{formSchema.name}</p>
      <>
        {elements.map((element, key) => {
          return detectInputType(element, key);
        })}
      </>
      <Button form={formSchema.formId}>Submit</Button>
    </Form>
  );
}

export { useFormGenerator };
