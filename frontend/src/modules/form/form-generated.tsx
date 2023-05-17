import { ContentWrap } from "@components/containers/ContentWrap";
import { useFormGenerator } from "@hooks/useFormGenerator/useFormGenerator";
import { ElementTypes, FormSchemaProps } from "@hooks/useFormGenerator/types";

const FormGenerated = () => {
  const generatedForm = useFormGenerator(formSchema);
  return <ContentWrap>{generatedForm}</ContentWrap>;
};

export { FormGenerated };

const formSchema: FormSchemaProps = {
  name: "First Generated Form",
  formId: "generated-form-1",
  elements: [
    { type: "Input", name: "fullName", labelName: "Full name" },
    {
      type: "Input",
      name: "occupation",
      labelName: "Occupation",
      optional: true,
    },
    {
      type: "Input",
      name: "email",
      labelName: "Email",
      placeholder: "example@site.com",
    },
    {
      type: "Radio",
      name: "paymentMethod",
      labelName: "Payment Method",
      radioButtons: [
        { labelName: "Paypal", value: "paypal", defaultChecked: true },
        {
          labelName: "MasterCard",
          value: "MasterCard",
          defaultChecked: false,
        },
      ],
    },
    {
      type: "Checkbox",
      name: "marketing",
      labelName: "I agree to receiving marketing emails",
    },
  ],
};
