import React from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";

import Form from "@components/Form";
import Button from "@components/buttons/Button";
import { Autocomplete, Select, TextField } from "@components/inputs/";

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
        <TextField name="fullName" labelName="Full Name" />
        <Select name="country" labelName="Country" options={options1} />
        <Autocomplete
          name="favouriteMovie"
          labelName="Favourite Movie"
          options={top100Films}
        />
        <Button form="test-form">Submit</Button>
      </Form>
    </>
  );
}
const options1 = [
  { value: "USA", label: "United States of Americanes" },
  { value: "MEX", label: "Mexico" },
];

const top100Films = [
  { label: "The Shawshank Redemption", id: 1 },
  { label: "The Godfather", id: 2 },
  { label: "The Godfather: Part II", id: 3 },
  { label: "The Dark Knight", id: 4 },
  { label: "12 Angry Men", id: 5 },
  { label: "Schindler's List", id: 6 },
  { label: "Pulp Fiction", id: 7 },
];
