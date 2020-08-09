import React, { FunctionComponent } from "react";
import { DniField } from "../DniField";
import { PasswordField, IPasswordFieldProps } from "../PasswordField";
import { IField } from "../interfaces";

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
