import React, { FunctionComponent } from "react";
import { TextInput } from "$components/TextInput";
import { FormikValidator } from "$models/FormikValidator";
import { IField } from "../interfaces";
import { validatePassword } from "validations-fiuba-laboral-v2";

export const PasswordField: FunctionComponent<IPasswordFieldProps> = (
  {
    name,
    label,
    validate
  }
) => {
  const validatorOptions = {
    validator: validate ? validatePassword : undefined,
    mandatory: true
  };

  return (
    <TextInput
      name={name}
      label={label}
      type="password"
      validate={FormikValidator(validatorOptions)}
    />
  );
};

export interface IPasswordFieldProps extends IField {
  validate: boolean;
}
