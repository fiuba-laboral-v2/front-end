import React, { FunctionComponent } from "react";
import { DniField, IDniFieldProps } from "../DniField";
import { PasswordField, IPasswordFieldProps } from "../PasswordField";

export const ApplicantCredentialsFields: FunctionComponent<IApplicantCredentialsFieldsProps> = (
  {
    dni,
    password
  }
) => (
  <>
    <DniField label={dni.label}/>
    <PasswordField label={password.label} validate={password.validate}/>
  </>
);

interface IApplicantCredentialsFieldsProps {
  dni: IDniFieldProps;
  password: IPasswordFieldProps;
}
