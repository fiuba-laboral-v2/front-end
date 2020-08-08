import React, { FunctionComponent } from "react";
import { EmailField, IEmailFieldProps } from "../EmailField";
import { NameField, INameFieldProps } from "../NameField";
import { SurnameField, ISurnameFieldProps } from "../SurnameField";

export const UserFields: FunctionComponent<IApplicantCredentialsFieldsProps> = (
  {
    email,
    name,
    surname
  }
) => (
  <>
    <EmailField label={email.label}/>
    <NameField label={name.label} />
    <SurnameField label={surname.label} />
  </>
);

interface IApplicantCredentialsFieldsProps {
  email: IEmailFieldProps;
  name: INameFieldProps;
  surname: ISurnameFieldProps;
}
