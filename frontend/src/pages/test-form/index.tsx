import { useForm } from "react-hook-form";

import { Form } from "@components/Form";
import { Button } from "@components/buttons";
import {
  Autocomplete,
  Checkbox,
  FileInput,
  Input,
  Radio,
  Select,
  Slider,
} from "@components/input";

type Inputs = {
  fullName: string;
  country: string;
  favouriteMovie: string;
};

export default function TestForm() {
  const methods = useForm<Inputs>({
    defaultValues: {
      fullName: "Sofia Mikhaleva",
      country: "USA",
      favouriteMovie: "",
    },
  });

  const { handleSubmit, watch } = methods;

  const formSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <>
      <Form methods={methods} id="test-form" onSubmit={formSubmit}>
        <Input name="fullName" labelName="Full Name" />
        <Checkbox
          name="tos"
          labelName="i agree to the terms and conditions"
        ></Checkbox>
        <Radio
          labelName="Country"
          name="countryR"
          options={optionsRadio}
        ></Radio>
        <Select name="country" labelName="Country" options={options1} />
        <Autocomplete
          name="favouriteMovie"
          labelName="Favourite Movie"
          options={top100Films}
        />
        <Slider
          name="satisfaction"
          labelName="Satisfaction"
          options={optionsSlider}
        ></Slider>
        <FileInput name="nudes" labelName="Nudes" />
        <Button form="test-form">Submit</Button>
      </Form>
    </>
  );
}
const options1 = [
  { label: "United States of America", value: "USA" },
  { label: "Mexico", value: "MEX" },
];
const optionsRadio = [
  { label: "United States of America", value: "USA" },
  { label: "Mexico", value: "MEX" },
];
const optionsSlider = [
  { label: "bad", value: 1 },
  { label: "great", value: 2 },
];

const top100Films = [
  "The Shawshank Redemption",
  "The Godfather",
  "The Godfather: Part II",
  "The Dark Knight",
  "12 Angry Men",
  "Schindler's List",
  "Pulp Fiction",
];
