import React, { FunctionComponent } from "react";
import { TextInput, ITextInputProps } from "$components/TextInput";
import { validatePassword } from "validations-fiuba-laboral-v2";

export const PasswordField: FunctionComponent<IPasswordFieldProps> = ({
  name,
  label,
  validate,
  autoComplete,
  ...props
}) => (
  <TextInput
    {...props}
    name={name}
    label={label}
    type="password"
    autoComplete={autoComplete}
    {...(validate && { mandatory: true, validator: validatePassword })}
  />
);

export interface IPasswordFieldProps extends ITextInputProps {
  validate: boolean;
}
