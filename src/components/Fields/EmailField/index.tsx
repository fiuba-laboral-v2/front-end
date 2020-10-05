import React, { FunctionComponent } from "react";
import { TextInput, ITextInputProps } from "$components/TextInput";
import { FormikValidator } from "$models/FormikValidator";
import { validateEmail } from "validations-fiuba-laboral-v2";

export const EmailField: FunctionComponent<ITextInputProps> = props => (
  <TextInput
    {...props}
    type="email"
    autoComplete="email"
    validate={FormikValidator({ validator: validateEmail, mandatory: true })}
  />
);
