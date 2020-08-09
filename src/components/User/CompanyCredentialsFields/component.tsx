import React, { FunctionComponent } from "react";
import { PasswordField, IPasswordFieldProps } from "../PasswordField";

export const CompanyCredentialsFields: FunctionComponent<IApplicantCredentialsFieldsProps> = (
  {
    password,
    passwordConfirm
  }
) => (
  <>
    <PasswordField {...password} />
    <PasswordField {...passwordConfirm} />
  </>
);

interface IApplicantCredentialsFieldsProps {
  password: IPasswordFieldProps;
  passwordConfirm: IPasswordFieldProps;
}
