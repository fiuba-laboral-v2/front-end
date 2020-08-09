import React, { FunctionComponent } from "react";
import { EmailField } from "../EmailField";
import { NameField } from "../NameField";
import { IField } from "../interfaces";

export const UserFields: FunctionComponent<IApplicantCredentialsFieldsProps> = (
  {
    email,
    name,
    surname
  }
) => (
  <>
    <EmailField {...email}/>
    <NameField {...name} />
    <NameField {...surname} />
  </>
);

interface IApplicantCredentialsFieldsProps {
  email: IField;
  name: IField;
  surname: IField;
}
