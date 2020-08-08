import React, { FunctionComponent } from "react";
import { TextInput } from "$components/TextInput";
import { FormikValidator } from "../../../models/FormikValidator";
import { validateEmail } from "validations-fiuba-laboral-v2";

export const EmailField: FunctionComponent<IEmailFieldProps> = ({ label }) => (
  <TextInput
    name="user.email"
    label={label}
    type="email"
    validate={FormikValidator({ validator: validateEmail, mandatory: true })}
  />
);

export interface IEmailFieldProps {
  label: string;
}
