import React, { FunctionComponent } from "react";
import { TextInput } from "$components/TextInput";
import { FormikValidator } from "$models/FormikValidator";
import { validateName } from "validations-fiuba-laboral-v2";

export const SurnameField: FunctionComponent<ISurnameFieldProps> = ({ label }) => (
  <TextInput
    name="user.surname"
    label={label}
    validate={FormikValidator({ validator: validateName, mandatory: true })}
  />
);

export interface ISurnameFieldProps {
  label: string;
}
