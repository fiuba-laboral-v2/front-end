import React, { FunctionComponent } from "react";
import { DniField } from "$components/Fields";
import { PasswordField, IPasswordFieldProps } from "$components/Fields/PasswordField";
import { IField } from "$components/Fields/interfaces";

export const ApplicantCredentialsFields: FunctionComponent<IApplicantCredentialsFieldsProps> = (
  {
    dni,
    password
  }
) => (
  <>
    <DniField {...dni}/>
    <PasswordField {...password}/>
  </>
);

interface IApplicantCredentialsFieldsProps {
  dni: IField;
  password: IPasswordFieldProps;
}
