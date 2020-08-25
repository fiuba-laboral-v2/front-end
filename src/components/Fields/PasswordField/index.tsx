import React, { FunctionComponent } from "react";
import { TextInput, ITextInputProps } from "$components/TextInput";
import { FormikValidator } from "$models/FormikValidator";
import { validatePassword } from "validations-fiuba-laboral-v2";

export const PasswordField: FunctionComponent<IPasswordFieldProps> = (
  {
    name,
    label,
    validate,
    autoComplete
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
      autoComplete={autoComplete}
      validate={FormikValidator(validatorOptions)}
    />
  );
};

export interface IPasswordFieldProps extends ITextInputProps {
  validate: boolean;
}
