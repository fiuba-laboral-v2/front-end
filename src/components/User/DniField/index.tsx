import React, { FunctionComponent } from "react";
import { TextInput } from "$components/TextInput";
import { FormikValidator } from "$models/FormikValidator";
import { validateDni } from "validations-fiuba-laboral-v2";

export const DniField: FunctionComponent<IDniFieldProps> = ({ label }) => (
  <TextInput
    name="user.dni"
    label={label}
    validate={FormikValidator({ validator: validateDni, mandatory: true })}
  />
);

export interface IDniFieldProps {
  label: string;
}
