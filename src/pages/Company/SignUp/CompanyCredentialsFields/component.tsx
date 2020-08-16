import React, { FunctionComponent } from "react";
import { IPasswordFieldProps, PasswordField } from "$components/Fields/PasswordField";

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
