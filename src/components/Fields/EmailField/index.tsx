import React, { FunctionComponent } from "react";
import { TextInput, ITextInputProps } from "$components/TextInput";
import { FormikValidator } from "$models/FormikValidator";
import { validateEmail } from "validations-fiuba-laboral-v2";

export const EmailField: FunctionComponent<ITextInputProps> = (
  {
    name,
    label,
    autoComplete
  }
) => (
  <TextInput
    name={name}
    label={label}
    type="email"
    autoComplete={autoComplete}
    validate={FormikValidator({ validator: validateEmail, mandatory: true })}
  />
);
