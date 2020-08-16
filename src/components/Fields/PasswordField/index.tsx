import React, { FunctionComponent } from "react";
import { TextInput } from "$components/TextInput";
import { FormikValidator } from "$models/FormikValidator";
import { FieldAttributes } from "formik/dist/Field";
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

export interface IPasswordFieldProps extends FieldAttributes<any> {
  validate: boolean;
}
