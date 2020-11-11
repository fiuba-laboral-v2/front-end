import React, { FunctionComponent } from "react";
import { TextField } from "$components/Fields";
import { validatePassword } from "validations-fiuba-laboral-v2";
import { ITextFieldProps } from "../TextField";

export const PasswordField: FunctionComponent<IPasswordFieldProps> = ({
  name,
  label,
  validate,
  autoComplete,
  ...props
}) => (
  <TextField
    {...props}
    singleLine
    name={name}
    label={label}
    type="password"
    autoComplete={autoComplete}
    {...(validate && { mandatory: true, validator: validatePassword })}
  />
);

export interface IPasswordFieldProps extends ITextFieldProps {
  validate: boolean;
}
