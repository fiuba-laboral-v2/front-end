import React, { FunctionComponent } from "react";
import { TextInput } from "$components/TextInput";
import { FormikValidator } from "$models/FormikValidator";
import { IField } from "../interfaces";
import { validateEmail } from "validations-fiuba-laboral-v2";

export const EmailField: FunctionComponent<IField> = ({ name, label }) => (
  <TextInput
    name={name}
    label={label}
    type="email"
    validate={FormikValidator({ validator: validateEmail, mandatory: true })}
  />
);
