import React, { FunctionComponent } from "react";
import { TextInput } from "$components/TextInput";
import { FormikValidator } from "$models/FormikValidator";
import { validatePassword } from "validations-fiuba-laboral-v2";

export const PasswordField: FunctionComponent<IPasswordFieldProps> = ({ label, validate }) => {
  const validatorOptions = {
    validator: validate ? validatePassword : undefined,
    mandatory: true
  };

  return (
    <TextInput
      name="user.password"
      label={label}
      type="password"
      validate={FormikValidator(validatorOptions)}
    />
  );
};

export interface IPasswordFieldProps {
  label: string;
  validate: boolean;
}
