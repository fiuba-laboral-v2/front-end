import React, { FunctionComponent } from "react";
import { TextInput, ITextInputProps } from "$components/TextInput";
import { FormikValidator } from "../../../models/FormikValidator";
import { validateURL } from "validations-fiuba-laboral-v2";

export const UrlField: FunctionComponent<ITextInputProps> = props => (
  <TextInput
    {...props}
    validate={FormikValidator({ validator: validateURL, mandatory: true })}
  />
);
