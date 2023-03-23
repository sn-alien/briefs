import React, { useCallback, useEffect, useState } from "react";

import { Checkbox, Input, Radio, Select } from "@components/input";

const InputComponents = { Checkbox, Input, Radio, Select };

type uiSchemaTypes = {
  elements: [
    {
      type: "Checkbox" | "Input" | "Radio" | "Select";
      name: string;
      labelName: string;
      autoComplete: boolean;
      optional: boolean;
      defaultValue: string | boolean;
    }
  ];
};

function useFormBuilder() {
  const [uiSchema, setUiSchema] = useState<uiSchemaTypes>({
    elements: [
      {
        type: "Input",
        name: "abc",
        labelName: "abc",
        autoComplete: false,
        optional: false,
        defaultValue: "abc",
      },
    ],
  });
  // const RenderedInput = InputComponents[uiSchema.elements[0].type];
  // const RenderedInputs = InputComponents["Input"];
  const RenderedInputs = uiSchema.elements.map(() => {
    InputComponents["Input"];
  });

  // return <RenderedInput name="abc" labelName="ass"></RenderedInput>;
  return InputComponents["Input"];
}
export { useFormBuilder };
