import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { useFormBuilder } from "@hooks/useFormBuilder";

import { Form } from "@components/Form";
import { Button } from "@components/buttons";
import { Checkbox, Input, Radio, Select } from "@components/input";

type Inputs = {
  fullName: string;
  country: string;
  steeringWheel: string;
  tos: boolean;
};

export default function TestForm() {
  const Test = useFormBuilder({
    elements: [
      {
        type: "Input",
        name: "fullName",
        labelName: "name",
        autoComplete: false,
        optional: false,
        defaultValue: "abc",
      },
      {
        type: "Checkbox",
        name: "tos",
        labelName: "terms of service",
        autoComplete: false,
        optional: false,
        defaultValue: "abc",
      },
      {
        type: "Radio",
        name: "steeringWheel",
        labelName: "Steering wheel",
        autoComplete: false,
        optional: false,
        defaultValue: "abc",
        options: [
          { label: "Left", value: "left" },
          { label: "Right", value: "right" },
        ],
      },
      {
        type: "Select",
        name: "nationality",
        labelName: "Nationality",
        autoComplete: false,
        optional: false,
        defaultValue: "abc",
        options: [
          { label: "Left", value: "left" },
          { label: "Right", value: "right" },
        ],
      },
      {
        type: "Autocomplete",
        name: "movie",
        labelName: "Favourite Movie",
        autoComplete: false,
        optional: false,
        defaultValue: "abc",
        options: [
          { label: "Left", value: "left" },
          { label: "Right", value: "right" },
        ],
      },
    ],
    validationSchema: {},
  });
  return <>{Test}</>;
}
const optionsCountry = [
  { label: "United States of America", value: "USA" },
  { label: "Mexico", value: "MEX" },
];
const optionsSteering = [
  { label: "Left", value: "left" },
  { label: "Right", value: "right" },
];
const validationSchema: yup.Schema = yup.object().shape({
  fullName: yup.string().required(),
  steeringWheel: yup.string().required(),
  tos: yup.bool().oneOf([true], "required").required(),
});
