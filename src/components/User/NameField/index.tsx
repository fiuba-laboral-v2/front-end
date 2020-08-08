import React, { FunctionComponent } from "react";
import { TextInput } from "$components/TextInput";
import { FormikValidator } from "$models/FormikValidator";
import { validateName } from "validations-fiuba-laboral-v2";

export const NameField: FunctionComponent<INameFieldProps> = ({ label }) => (
  <TextInput
    name="user.name"
    label={label}
    validate={FormikValidator({ validator: validateName, mandatory: true })}
  />
);

export interface INameFieldProps {
  label: string;
}
