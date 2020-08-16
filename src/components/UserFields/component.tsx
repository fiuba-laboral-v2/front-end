import React, { FunctionComponent } from "react";
import { EmailField } from "$components/Fields/EmailField";
import { NameField } from "$components/Fields/NameField";
import { IField } from "$components/Fields/interfaces";

export const UserFields: FunctionComponent<IUserFieldsProps> = (
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

interface IUserFieldsProps {
  email: IField;
  name: IField;
  surname: IField;
}
