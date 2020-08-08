import React, { FunctionComponent } from "react";
import { PasswordField, IPasswordFieldProps } from "../PasswordField";
import { PasswordConfirmField, IPasswordConfirmFieldProps } from "../PasswordConfirmField";

export const CompanyCredentialsFields: FunctionComponent<IApplicantCredentialsFieldsProps> = (
  {
    password,
    passwordConfirm
  }
) => (
  <>
    <PasswordField label={password.label} validate={password.validate}/>
    <PasswordConfirmField label={passwordConfirm.label}/>
  </>
);

interface IApplicantCredentialsFieldsProps {
  password: IPasswordFieldProps;
  passwordConfirm: IPasswordConfirmFieldProps;
}
