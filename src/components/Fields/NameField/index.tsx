import React, { FunctionComponent } from "react";
import { TextInput, ITextInputProps } from "$components/TextInput";
import { FormikValidator } from "$models/FormikValidator";
import { validateName } from "validations-fiuba-laboral-v2";

export const NameField: FunctionComponent<ITextInputProps> = props => (
  <TextInput
    {...props}
    validate={FormikValidator({ validator: validateName, mandatory: true })}
  />
);
