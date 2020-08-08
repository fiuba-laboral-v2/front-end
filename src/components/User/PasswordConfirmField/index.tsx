import React, { FunctionComponent } from "react";
import { TextInput } from "$components/TextInput";

export const PasswordConfirmField: FunctionComponent<IPasswordConfirmFieldProps> = ({ label }) => (
  <TextInput
    name="user.passwordConfirm"
    label={label}
    type="password"
  />
);

export interface IPasswordConfirmFieldProps {
  label: string;
}
