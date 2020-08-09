import React, { FunctionComponent } from "react";
import { EmailField } from "../Fields/EmailField";
import { NameField } from "../Fields/NameField";
import { IField } from "../Fields/interfaces";

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
